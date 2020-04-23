/**
 * @File   : SphereEmitter.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 1/7/2019, 5:24:17 PM
 * @Description:
 */
import * as Sein from 'seinjs';
import Emitter, {IParticleUniforms} from './Emitter';

/**
 * `SphereEmitter`的初始化参数类型。
 */
export interface ISphereEmitterOptions {
  /**
   * 球体半径。
   */
  radius: number;
}

/**
 * `SphereEmitter`的追加uniforms。
 * 
 * @noInheritDoc
 */
export interface ISphereEmitterUniforms extends IParticleUniforms {
  /**
   * 球体半径的uniforms。
   */
  u_radius: {value: number};
}

/**
 * 球体发射器。通过半径指定一个球体的范围，粒子将在这个范围内生成并向球体外侧射出。
 * 
 * @noInheritDoc
 */
@Sein.SClass({className: 'SphereEmitter'})
export default class SphereEmitter extends Emitter<ISphereEmitterOptions, ISphereEmitterUniforms> {
  /**
   * 根据参数，添加uniform并获取具体实现的Shader。
   */
  public getShadersAndModifyUniforms(options: ISphereEmitterOptions, uniforms: ISphereEmitterUniforms) {
    uniforms.u_radius = {value: options.radius};

    const vs = `
uniform float u_radius;

vec3 getPosition(vec4 noise) {
  return (vec3(noise[0], noise[1], noise[2]) - vec3(.5)) * 2. * u_radius * noise[3];
}

vec3 getDirection(vec4 noise, vec3 position) {
  return normalize(position);
}
    `;

    return {vs};
  }
}
