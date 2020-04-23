/**
 * @File   : CircleEmitter.ts
 * @Author : AlchemyZJK (alchemyzjk@foxmail.com)
 * @Link   : 
 * @Date   : 10/8/2019, 11:09:01 AM
 */

import * as Sein from 'seinjs';
import Emitter, {IParticleUniforms} from './Emitter';

/**
 * `CircleEmitter`的初始化参数类型
 */
export interface ICircleEmitterOptions {
  /**
   * 圆形半径
   */
  radius: number;
  /**
   * 圆形发射器弧度大小（角度制）
   * 
   * @default 360
   */
  arc?: number;
  /**
   * 圆形发射器发射模式
   * 
   * ``Random``、``Loop``
   */
  emitMode: string;
  /**
   * 圆形发射器沿发射弧的发射间隔
   * 
   * **取值范围[0.0, 1.0]**
   * 
   * @default 0.0
   */
  arcSpread?: number;
}

/**
 * `CircleEmitter`的追加uniforms
 * 
 * @noInheritDoc
 */
export interface ICircleEmitterUniforms extends IParticleUniforms {
  /**
   * 圆形半径的uniforms
   */
  u_radius: {value: number};
  /**
   * 圆形发射器弧度大小（角度制）的uniforms
   */
  u_arc: {value: number};
  /**
   * 圆形发射器每次发射角度间隔
   */
  u_arcStep: {value: number};
}

/**
 * 圆形发射器。通过半径指定一个圆形的范围，粒子将在这个范围内生成并向圆形径向发射
 * 
 * @noInheritDoc
 */
@Sein.SClass({className: 'CircleEmitter'})
export default class CircleEmitter extends Emitter<ICircleEmitterOptions, ICircleEmitterUniforms> {
  /**
   * 根据参数，添加uniform并获取具体实现的Shader
   */
  public getShadersAndModifyUniforms(options: ICircleEmitterOptions, uniforms: ICircleEmitterUniforms) {
    uniforms.u_radius = {value: options.radius};
    const arc = options.arc || 360;
    uniforms.u_arc = {value: arc};
    const arcSpread = options.arcSpread || 0.0;
    if (arcSpread === 0.0) {
      uniforms.u_arcStep = {value: 1.0};
    } else {
      uniforms.u_arcStep = {value: arc * arcSpread};
    }

    let vs = `
uniform float u_radius;
uniform float u_arc;
uniform float u_arcStep;
    `;

    if (options.emitMode === 'Loop') {
      vs += `
vec3 getPosition(vec4 noise) {
  float theta = mod(a_index * u_arcStep, u_arc);
  theta = radians(theta);
  return vec3(noise[0] * u_radius * cos(theta), noise[0] * u_radius * sin(theta), 0.0);
}
      `;
    } else {
      vs += `
vec3 getPosition(vec4 noise) {
  float theta = u_arc * noise[1];
  theta = radians(theta);
  return vec3(noise[0] * u_radius * cos(theta), noise[0] * u_radius * sin(theta), 0.0);
}
      `;
    }

    vs += `
vec3 getDirection(vec4 noise, vec3 position) {
  return normalize(position);
}
    `
    return {vs};
  }
}

