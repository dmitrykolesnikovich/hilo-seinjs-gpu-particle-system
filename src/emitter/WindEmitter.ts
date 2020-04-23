/**
 * @File   : WindEmitter.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 1/7/2019, 5:23:57 PM
 * @Description:
 */
import * as Sein from 'seinjs';
import Emitter, {IParticleUniforms} from './Emitter';

/**
 * `WindEmitter`的初始化参数类型。
 */
export interface IWindEmitterOptions {
  /**
   * 粒子生成盒范围的左上角顶点。
   */
  planeLeftTop: Sein.Vector3;
  /**
   * 粒子生成盒范围的右下角顶点。
   */
  planeRightBottom: Sein.Vector3;
  /**
   * 风场方向，决定粒子的运动方向。
   */
  direction: Sein.Vector3;
}

/**
 * `WindEmitter`的追加uniforms。
 * 
 * @noInheritDoc
 */
export interface IWindEmitterUniforms extends IParticleUniforms {
  /**
   * 粒子生成盒范围的左上角顶点的uniform。
   */
  u_planeLeftTop: {value: Sein.Vector3};
  /**
   * 粒子生成盒范围的右下角顶点的uniform。
   */
  u_planeRightBottom: {value: Sein.Vector3};
  /**
   * 风场方向，决定粒子的运动方向的uniform。
   */
  u_direction: {value: Sein.Vector3};
}

/**
 * 风场发射器。通过两点确定一个盒的范围，粒子将从这个范围内生成，同时指定一个朝向来确定风场的方向，粒子将向着这个方向运动。
 * 
 * @noInheritDoc
 */
@Sein.SClass({className: 'WindEmitter'})
export default class WindEmitter extends Emitter<IWindEmitterOptions, IWindEmitterUniforms> {
  /**
   * 根据参数，添加uniform并获取具体实现的Shader。
   */
  public getShadersAndModifyUniforms(options: IWindEmitterOptions, uniforms: IWindEmitterUniforms) {
    uniforms.u_planeLeftTop = {value: options.planeLeftTop};
    uniforms.u_planeRightBottom = {value: options.planeRightBottom};
    uniforms.u_direction = {value: options.direction};

    const vs = `
uniform vec3 u_planeLeftTop;
uniform vec3 u_planeRightBottom;
uniform vec3 u_direction;

vec3 getPosition(vec4 noise) {
  return (u_planeRightBottom - u_planeLeftTop) * vec3(noise[1], noise[2], noise[3]) + u_planeLeftTop;
}

vec3 getDirection(vec4 noise, vec3 position) {
  return normalize(u_direction);
}
    `;

    return {vs};
  }
}
