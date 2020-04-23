[seinjs-gpu-particle-system](../README.md) > ["seinjs"](../modules/_seinjs_.md) > [GPUParticleSystem](../modules/_seinjs_.gpuparticlesystem.md) > [IEmitter](../interfaces/_seinjs_.gpuparticlesystem.iemitter.md)

# Interface: IEmitter

## Type parameters
#### IOptions :  `Object`
#### IUniforms :  `TParticleUniforms`
## Hierarchy

↳  [IEmitter](iemitter.md)<`IOptions`, `IUniforms`>

**↳ IEmitter**

## Index

### Properties

* [_options](_seinjs_.gpuparticlesystem.iemitter.md#_options)
* [system](_seinjs_.gpuparticlesystem.iemitter.md#system)

### Methods

* [getShadersAndModifyUniforms](_seinjs_.gpuparticlesystem.iemitter.md#getshadersandmodifyuniforms)

---

## Properties

<a id="_options"></a>

###  _options

**● _options**: *`IOptions`*

*Inherited from [IEmitter](iemitter.md).[_options](iemitter.md#_options)*

*Defined in emitter/IEmitter.ts:57*

___
<a id="system"></a>

###  system

**● system**: *[Component](../classes/component.md)*

*Inherited from [IEmitter](iemitter.md).[system](iemitter.md#system)*

*Defined in emitter/IEmitter.ts:56*

___

## Methods

<a id="getshadersandmodifyuniforms"></a>

###  getShadersAndModifyUniforms

▸ **getShadersAndModifyUniforms**(options: *`IOptions`*, uniforms: *`IUniforms`*, systemState: *[IComponentState](icomponentstate.md)*): `object`

*Inherited from [IEmitter](iemitter.md).[getShadersAndModifyUniforms](iemitter.md#getshadersandmodifyuniforms)*

*Defined in emitter/IEmitter.ts:58*

**Parameters:**

| Name | Type |
| ------ | ------ |
| options | `IOptions` |
| uniforms | `IUniforms` |
| systemState | [IComponentState](icomponentstate.md) |

**Returns:** `object`

___

