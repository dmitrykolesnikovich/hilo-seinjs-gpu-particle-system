/**
 * @File   : Emitter.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 1/3/2019, 2:42:41 PM
 * @Description:
 */
import * as Sein from 'seinjs';
import Component, {IComponentState} from '../Component';

/**
 * 粒子系统的默认uniforms。一般不需要自己处理。
 * 每个uniform的含义可见[IComponentState](../interfaces/icomponentstate)中对应的配置项。
 */
export interface IParticleUniforms {
  u_modelViewProjectionMatrix: 'MODELVIEWPROJECTION',
  u_lifeStep: {value: number};
  u_time: {value: number};
  u_updateSpeed: {value: number};
  u_texture?: {value: Sein.Texture};
  u_mask?: {value: Sein.Texture};
  u_minBornTime: {value: number};
  u_maxBornTime: {value: number};
  u_minLifeTime: {value: number};
  u_maxLifeTime: {value: number};
  u_minSize: {value: number};
  u_maxSize: {value: number};
  u_maxScale: {value: number};
  u_minScale: {value: number};
  u_maxRotation: {value: number};
  u_minRotation: {value: number};
  u_minVelocity: {value: number};
  u_maxVelocity: {value: number};
  u_minAngularVelocity: {value: number};
  u_maxAngularVelocity: {value: number};
  u_minAcceleration: {value: number};
  u_maxAcceleration: {value: number};
  u_minWorldAcceleration: {value: Sein.Vector3};
  u_maxWorldAcceleration: {value: Sein.Vector3};
  u_bornColor1?: {value: Sein.Color};
  u_bornColor2?: {value: Sein.Color};
  u_dieColor1?: {value: Sein.Color};
  u_dieColor2?: {value: Sein.Color};
}

/**
 * GPU例子系统发生器基类接口。
 * 
 * @noInheritDoc
 * @template IOptions 初始化参数类型。
 * @template IUniforms 用于自定义需要追加的Uniform类型。
 */
export default interface IEmitter<
  IOptions extends {[key: string]: any} = any,
  IUniforms extends IParticleUniforms = IParticleUniforms
> extends Sein.SObject {
  system: Component;
  _options: IOptions
  getShadersAndModifyUniforms(options: IOptions, uniforms: IUniforms, systemState: IComponentState): {
    defines?: string;
    vs: string;
  };
}
