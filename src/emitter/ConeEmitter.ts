/**
 * @File   : ConeEmitter.ts
 * @Author : AlchemyZJK (alchemyzjk@foxmail.com)
 * @Link   : 
 * @Date   : 10/14/2019, 2:09:54 PM
 */

import * as Sein from 'seinjs';
import Emitter, {IParticleUniforms} from './Emitter';

/**
 * `ConeEmitter`的初始化参数类型
 */
export interface IConeEmitterOptions {
  /**
   * 圆锥形发射器的开口角度
   */
  angle: number;
  /**
   * 圆锥形发射器弧度大小（角度制）
   * 
   * @default 360
   */
  arc?: number;
  /**
   * 圆锥形发射器的开口半径
   */
  radius: number;
}

/**
 * `ConeEmitter`的追加uniforms
 * 
 * @noInheritDoc
 */
export interface IConeEmitterUniforms extends IParticleUniforms {
  u_angle: {value: number};
  u_arc: {value: number};
  u_radius: {value: number};
}

/**
 * 圆锥形发射器。
 * 
 * @noInheritDoc
 */
@Sein.SClass({className: 'ConeEmitter'})
export default class ConeEmitter extends Emitter<IConeEmitterOptions, IConeEmitterUniforms> {
  /**
   * 根据参数，添加uniform并获取具体实现的Shader
   */
  public getShadersAndModifyUniforms(options: IConeEmitterOptions, uniforms: IConeEmitterUniforms) {
    uniforms.u_angle = {value: options.angle};
    uniforms.u_arc = {value: options.arc || 360};
    uniforms.u_radius = {value: options.radius};

    const vs = `
uniform float u_angle;
uniform float u_arc;
uniform float u_radius;

vec3 getPosition(vec4 noise) {
  float theta = u_arc * noise[1];
  theta = radians(theta);
  return vec3(noise[0] * u_radius * cos(theta), 0.0, noise[0] * u_radius * sin(theta));
}

vec3 getDirection(vec4 noise, vec3 position) {
  vec3 top = vec3(0.0, u_radius / tan(u_angle), 0.0);
  vec3 direction = position - top;
  return normalize(direction);
}
    `;
    return {vs};
  }
}