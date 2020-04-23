[seinjs-gpu-particle-system](../README.md) > [IEmitter](../interfaces/iemitter.md)

# Interface: IEmitter

GPU例子系统发生器基类接口。

*__template__*: IOptions 初始化参数类型。

*__template__*: IUniforms 用于自定义需要追加的Uniform类型。

## Type parameters
#### IOptions :  `object`
#### IUniforms :  [IParticleUniforms](iparticleuniforms.md)
## Hierarchy

 `SObject`

**↳ IEmitter**

↳  [IEmitter](_seinjs_.gpuparticlesystem.iemitter.md)

## Implemented by

* [CircleEmitter](../classes/_seinjs_.gpuparticlesystem.circleemitter.md)
* [CircleEmitter](../classes/circleemitter.md)
* [ConeEmitter](../classes/_seinjs_.gpuparticlesystem.coneemitter.md)
* [ConeEmitter](../classes/coneemitter.md)
* [EdgeEmitter](../classes/edgeemitter.md)
* [EdgeEmitter](../classes/_seinjs_.gpuparticlesystem.edgeemitter.md)
* [Emitter](../classes/emitter.md)
* [Emitter](_seinjs_.gpuparticlesystem.emitter.md)
* [HemisphericEmitter](../classes/_seinjs_.gpuparticlesystem.hemisphericemitter.md)
* [HemisphericEmitter](../classes/hemisphericemitter.md)
* [RectangleEmitter](../classes/rectangleemitter.md)
* [RectangleEmitter](../classes/_seinjs_.gpuparticlesystem.rectangleemitter.md)
* [SphereEmitter](../classes/sphereemitter.md)
* [SphereEmitter](../classes/_seinjs_.gpuparticlesystem.sphereemitter.md)
* [WindEmitter](../classes/windemitter.md)
* [WindEmitter](../classes/_seinjs_.gpuparticlesystem.windemitter.md)

## Index

### Properties

* [_options](iemitter.md#_options)
* [system](iemitter.md#system)

### Methods

* [getShadersAndModifyUniforms](iemitter.md#getshadersandmodifyuniforms)

---

## Properties

<a id="_options"></a>

###  _options

**● _options**: *`IOptions`*

*Defined in emitter/IEmitter.ts:57*

___
<a id="system"></a>

###  system

**● system**: *[Component](../classes/component.md)*

*Defined in emitter/IEmitter.ts:56*

___

## Methods

<a id="getshadersandmodifyuniforms"></a>

###  getShadersAndModifyUniforms

▸ **getShadersAndModifyUniforms**(options: *`IOptions`*, uniforms: *`IUniforms`*, systemState: *[IComponentState](icomponentstate.md)*): `object`

*Defined in emitter/IEmitter.ts:58*

**Parameters:**

| Name | Type |
| ------ | ------ |
| options | `IOptions` |
| uniforms | `IUniforms` |
| systemState | [IComponentState](icomponentstate.md) |

**Returns:** `object`

___

