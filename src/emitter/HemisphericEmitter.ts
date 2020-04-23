/**
 * @File   : HemisphericEmitter.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 1/7/2019, 7:01:09 PM
 * @Description:
 */
import * as Sein from 'seinjs';
import Emitter, {IParticleUniforms} from './Emitter';

/**
 * `HemisphericEmitter`的初始化参数类型。
 */
export interface IHemisphericEmitterOptions {
  /**
   * 半球半径。
   */
  radius: number;
}

/**
 * `HemisphericEmitter`的追加uniforms。
 * 
 * @noInheritDoc
 */
export interface IHemisphericEmitterUniforms extends IParticleUniforms {
  /**
   * 半球半径的uniforms。
   */
  u_radius: {value: number};
}

/**
 * 半球发射器。通过半径指定一个半球的范围，粒子将在这个范围内生成并向半球外侧射出。
 * 
 * @noInheritDoc
 */
@Sein.SClass({className: 'HemisphericEmitter'})
export default class HemisphericEmitter extends Emitter<IHemisphericEmitterOptions, IHemisphericEmitterUniforms> {
  /**
   * 根据参数，添加uniform并获取具体实现的Shader。
   */
  public getShadersAndModifyUniforms(options: IHemisphericEmitterOptions, uniforms: IHemisphericEmitterUniforms) {
    uniforms.u_radius = {value: options.radius};

    const vs = `
uniform float u_radius;

vec3 getPosition(vec4 noise) {
  return vec3(noise[0] - .5, noise[1], noise[2] - .5) * 2. * u_radius * noise[3];
}

vec3 getDirection(vec4 noise, vec3 position) {
  return normalize(position);
}
    `;

    return {vs};
  }
}
