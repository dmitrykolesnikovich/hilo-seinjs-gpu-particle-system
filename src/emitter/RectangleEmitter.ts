/**
 * @File   : RectangleEmitter.ts
 * @Author : AlchemyZJK (alchemyzjk@foxmail.com)
 * @Link   : 
 * @Date   : 10/8/2019, 8:05:27 PM
 */

import * as Sein from 'seinjs';
import Emitter, {IParticleUniforms} from './Emitter';

/**
 * `RectangleEmitter`的初始化参数类型
 */
export interface IRectangleEmitterOptions {
  /**
   * 长方形发射器的长
   */
  width: number;
  /**
   * 长方形发射器的宽
   */
  height: number;
}

/**
 * `RectangleEmitter`的追加uniforms
 * 
 * @noInheritDoc
 */
export interface IRectangleEmitterUniforms extends IParticleUniforms {
  /**
   * 长方形发射器长的uniforms
   */
  u_width: {value: number};
  /**
   * 长方形发射器宽的uniforms
   */
  u_height: {value: number};
}

/**
 * 长方形发射器
 * 
 * @noInheritDoc
 */
@Sein.SClass({className: 'RectangleEmitter'})
export default class RectangleEmitter extends Emitter<IRectangleEmitterOptions, IRectangleEmitterUniforms> {
  /**
   * 根据参数，添加uniform并获取具体实现的Shader
   */
  public getShadersAndModifyUniforms(options: IRectangleEmitterOptions, uniforms: IRectangleEmitterUniforms) {
    uniforms.u_width = {value: options.width};
    uniforms.u_height = {value: options.height};

    const vs = `
uniform float u_width;
uniform float u_height;

vec3 getPosition(vec4 noise) {
  float x = noise[0] * u_width - u_width / 2.0;
  float y = noise[1] * u_height - u_height / 2.0;
  return vec3(x, y, 0.0);
}

vec3 getDirection(vec4 noise, vec3 position) {
  return vec3(0.0, 0.0, 1.0);
}
    `;
    return {vs};
  }
}

