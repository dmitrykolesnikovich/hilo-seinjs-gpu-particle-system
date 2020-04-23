/**
 * @File   : index.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 1/2/2019, 7:38:47 PM
 * @Description:
 */
import * as Sein from 'seinjs';

import TEmitter, {IParticleUniforms as TParticleUniforms} from './emitter/IEmitter';
import SystemEmitter from './emitter/Emitter';
import ParticleEdgeEmitter, {
  IEdgeEmitterUniforms as TEdgeEmitterUniforms, IEdgeEmitterOptions as TEdgeEmitterOptions
} from './emitter/EdgeEmitter';
import ParticleWindEmitter, {
  IWindEmitterUniforms as TWindEmitterUniforms, IWindEmitterOptions as TWindEmitterOptions
} from './emitter/WindEmitter';
import ParticleSphereEmitter, {
  ISphereEmitterUniforms as TSphereEmitterUniforms, ISphereEmitterOptions as TSphereEmitterOptions
} from './emitter/SphereEmitter';
import ParticleHemisphericEmitter, {
  IHemisphericEmitterUniforms as THemisphericEmitterUniforms, IHemisphericEmitterOptions as THemisphericEmitterOptions
} from './emitter/HemisphericEmitter';
import ParticleCircleEmitter, {
  ICircleEmitterUniforms as TCircleEmitterUniforms, ICircleEmitterOptions as TCircleEmitterOptions
} from './emitter/CircleEmitter';
import ParticleRectangleEmitter, {
  IRectangleEmitterUniforms as TRectangleEmitterUniforms, IRectangleEmitterOptions as TRectangleEmitterOptions
} from './emitter/RectangleEmitter';
import ParticleConeEmitter, {
  IConeEmitterUniforms as TConeEmitterUniforms, IConeEmitterOptions as TConeEmitterOptions
} from './emitter/ConeEmitter';
import ParticleComponent, {IComponentState as TComponentState} from './Component';
import ParticleActor from './Actor';

declare module 'seinjs' {
  export namespace GPUParticleSystem {
    export interface IParticleUniforms extends TParticleUniforms {}
    export interface IEmitter<IOptions extends Object = {}, IUniforms extends TParticleUniforms = TParticleUniforms> extends TEmitter<IOptions, IUniforms> {}
    export interface Emitter<IOptions extends Object = {}, IUniforms extends TParticleUniforms = TParticleUniforms> extends SystemEmitter<IOptions, IUniforms> {}

    export interface IEdgeEmitterOptions extends TEdgeEmitterOptions {}
    export interface IEdgeEmitterUniforms extends TEdgeEmitterUniforms {}
    export class EdgeEmitter extends ParticleEdgeEmitter {}
    export interface IWindEmitterOptions extends TWindEmitterOptions {}
    export interface IWindEmitterUniforms extends TWindEmitterUniforms {}
    export class WindEmitter extends ParticleWindEmitter {}
    export interface ISphereEEmitterOptions extends TSphereEmitterOptions {}
    export interface ISphereEmitterUniforms extends TSphereEmitterUniforms {}
    export class SphereEmitter extends ParticleSphereEmitter {}
    export interface IHemisphericEmitterOptions extends THemisphericEmitterOptions {}
    export interface IHemisphericEmitterUniforms extends THemisphericEmitterUniforms {}
    export class HemisphericEmitter extends ParticleHemisphericEmitter {}
    export interface ICircleEmitterOptions extends TCircleEmitterOptions {}
    export interface ICircleEmitterUniforms extends TCircleEmitterUniforms {}
    export class CircleEmitter extends ParticleCircleEmitter {}
    export interface IRectangleEmitterOptions extends TRectangleEmitterOptions {}
    export interface IRectangleEmitterUniforms extends TRectangleEmitterUniforms {}
    export class RectangleEmitter extends ParticleRectangleEmitter {}
    export interface IConeEmitterOptions extends TConeEmitterOptions {}
    export interface IConeEmitterUniforms extends TConeEmitterUniforms {}
    export class ConeEmitter extends ParticleConeEmitter {}

    export interface IComponentState extends TComponentState {}
    export class Component extends ParticleComponent {}
    export class Actor extends ParticleActor {}

    export function isActor(value: Sein.SObject): value is Actor;
    export function isComponent(value: Sein.SObject): value is Component;
  }
}

/**
 * 判断一个实例是否为`DomHUDActor`。
 */
function isActor(value: Sein.SObject): value is ParticleActor {
  return (value as ParticleActor).isGPUParticleSystemActor;
}

/**
 * 判断一个实例是否为`DomHUDComponent`。
 */
function isComponent(value: Sein.SObject): value is ParticleComponent {
  return (value as ParticleComponent).isGPUParticleSystemComponent;
}

(Sein as any).GPUParticleSystem = {
  Component: ParticleComponent,
  Actor: ParticleActor,
  EdgeEmitter: ParticleEdgeEmitter,
  WindEmitter: ParticleWindEmitter,
  SphereEmitter: ParticleSphereEmitter,
  HemisphericEmitter: ParticleHemisphericEmitter,
  CircleEmitter: ParticleCircleEmitter,
  RectangleEmitter: ParticleRectangleEmitter,
  ConeEmitter: ParticleConeEmitter,
  isActor,
  isComponent,
};

export {
  TEmitter as IEmitter,
  TParticleUniforms as IParticleUniforms,

  TEdgeEmitterOptions as IEdgeEmitterOptions,
  TEdgeEmitterUniforms as IEdgeEmitterUniforms,
  ParticleEdgeEmitter as EdgeEmitter,
  TWindEmitterOptions as IWindEmitterOptions,
  TWindEmitterUniforms as IWindEmitterUniforms,
  ParticleWindEmitter as WindEmitter,
  TSphereEmitterOptions as ISphereEmitterOptions,
  TSphereEmitterUniforms as ISphereEmitterUniforms,
  ParticleSphereEmitter as SphereEmitter,
  THemisphericEmitterOptions as IHemisphericEmitterOptions,
  THemisphericEmitterUniforms as IHemisphericEmitterUniforms,
  ParticleHemisphericEmitter as HemisphericEmitter,
  TCircleEmitterOptions as ICircleEmitterOptions,
  TCircleEmitterUniforms as TCircleEmitterUniforms,
  ParticleCircleEmitter as CircleEmitter,
  TRectangleEmitterOptions as IRectangleEmitterOptions,
  TRectangleEmitterUniforms as IRectangleEmitterUniforms,
  ParticleRectangleEmitter as RectangleEmitter,
  TConeEmitterOptions as IConeEmitterOptions,
  TConeEmitterUniforms as IConeEmitterUniforms,
  ParticleConeEmitter as ConeEmitter,

  ParticleComponent as Component,
  TComponentState as IComponentState,
  ParticleActor as Actor,
  isActor,
  isComponent,
};
