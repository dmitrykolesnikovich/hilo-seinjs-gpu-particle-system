/**
 * @File   : Emitter.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 1/7/2019, 7:37:40 PM
 * @Description:
 */
import * as Sein from 'seinjs';
import IEmitter, {IParticleUniforms} from './IEmitter';
import Component, {IComponentState} from '../Component';

export {IParticleUniforms};

/**
 * GPU例子系统发生器基类，一般不直接使用，而是使用其派生类。
 * 
 * @noInheritDoc
 * @template IOptions 初始化参数类型。
 * @template IUniforms 用于自定义需要追加的Uniform类型。
 */
@Sein.SClass({className: 'Emitter', classType: 'ParticlesEmitter'})
export default class Emitter<
  IOptions,
  IUniforms extends IParticleUniforms
> extends Sein.SObject implements IEmitter<IOptions, IUniforms> {
  /**
   * 从属的粒子系统实例引用。
   */
  public system: Component;
  /**
   * @hidden
   */
  public _options: IOptions;

  constructor(options: IOptions) {
    super();

    this._options = options;
  }

  /**
   * 根据参数，添加uniform并获取具体实现的Shader。
   */
  public getShadersAndModifyUniforms(options: IOptions, uniforms: IUniforms, systemState: IComponentState): {
    defines?: string;
    vs: string;
  } {
    return null;
  }

  /**
   * 设置某配置项，将会强制重新生成粒子系统的`Material`，**谨慎使用！**。
   */
  public setOption<Key extends keyof IOptions>(key: Key, value: IOptions[Key]) {
    this._options[key] = value;
    this.system.forceModifyMat();

    return this;
  }

  /**
   * 获取某个配置项。
   */
  public getOption<Key extends keyof IOptions>(key: Key): IOptions[Key] {
    return this._options[key];
  }
}
