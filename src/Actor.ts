/**
 * @File   : Actor.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 1/3/2019, 12:01:23 AM
 * @Description:
 */
import * as Sein from 'seinjs';

import Component, {IComponentState} from './Component';

/**
 * `GPUParticleSystemComponent`的一个容器封装。
 * 
 * @noInheritDoc
 */
@Sein.SClass({className: 'GPUParticleSystemActor'})
export default class Actor extends Sein.SceneActor<IComponentState, Component> {
  public isGPUParticleSystemActor = true;

  /**
   * 生成根组件，继承请先`super.onCreateRoot()`。
   */
  public onCreateRoot(initOptions: IComponentState) {
    return this.addComponent('root', Component, initOptions);
  }

  /**
   * 设置某个配置，修改设置后将会根据状况重新生成`Geometry`或`Material`，**谨慎使用！**。
   */
  public setOption<Key extends keyof IComponentState>(key: Key, value: IComponentState[Key]) {
    this.root.setOption<Key>(key, value);
  }

  /**
   * 获取某个配置。
   */
  public getOption<Key extends keyof IComponentState>(key: Key): IComponentState[Key] {
    return this.root.getOption<Key>(key);
  }

  /**
   * 强制重新生成材质，**谨慎使用！**。
   */
  public forceModifyMat() {
    this.root.forceModifyMat();
  }

  /**
   * 开始生成。
   */
  public start() {
    this.root.start();
  }

  /**
   * 停止生成。
   */
  public stop() {
    this.root.stop();
  }

  /**
   * 暂停生成。
   */
  public pause() {
    this.root.pause();
  }

  /**
   * 唤醒生成。
   */
  public resume() {
    this.root.resume();
  }
}
