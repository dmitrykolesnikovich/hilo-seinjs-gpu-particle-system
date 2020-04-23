/**
 * @File   : EdgeEmitter.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 1/3/2019, 7:19:42 PM
 * @Description:
 */
import * as Sein from 'seinjs';
import Emitter, {IParticleUniforms} from './Emitter';

/**
 * `EdgeEmitter`的初始化参数类型。
 */
export interface IEdgeEmitterOptions {
  /**
   * 盒子边界顶点1。
   */
  point1: Sein.Vector3;
  /**
   * 盒子边界顶点2。
   */
  point2: Sein.Vector3;
}

/**
 * `EdgeEmitter`的追加uniforms。
 * 
 * @noInheritDoc
 */
export interface IEdgeEmitterUniforms extends IParticleUniforms {
  /**
   * 盒子边界顶点1的uniform。
   */
  u_point1: {value: Sein.Vector3};
  /**
   * 盒子边界顶点2的uniform。
   */
  u_point2: {value: Sein.Vector3};
}

/**
 * 边界发射器。通过两个顶点规定一个盒装区域，粒子将从原点向盒装区域内发射。
 * 
 * @noInheritDoc
 */
@Sein.SClass({className: 'EdgeEmitter'})
export default class EdgeEmitter extends Emitter<IEdgeEmitterOptions, IEdgeEmitterUniforms> {
  /**
   * 根据参数，添加uniform并获取具体实现的Shader。
   */
  public getShadersAndModifyUniforms(options: IEdgeEmitterOptions, uniforms: IEdgeEmitterUniforms) {
    uniforms.u_point1 = {value: options.point1};
    uniforms.u_point2 = {value: options.point2};

    const vs = `
uniform vec3 u_point1;
uniform vec3 u_point2;

vec3 getPosition(vec4 noise) {
  return vec3(0., 0., 0.);
}

vec3 getDirection(vec4 noise, vec3 position) {
  return normalize((u_point2 - u_point1) * vec3(noise[0], noise[1], noise[2]) + u_point1);
}
    `;

    return {vs};
  }
}
