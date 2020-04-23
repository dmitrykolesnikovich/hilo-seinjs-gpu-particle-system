[seinjs-gpu-particle-system](../README.md) > ["seinjs"](../modules/_seinjs_.md) > [GPUParticleSystem](../modules/_seinjs_.gpuparticlesystem.md) > [ConeEmitter](../classes/_seinjs_.gpuparticlesystem.coneemitter.md)

# Class: ConeEmitter

## Hierarchy

↳  [ConeEmitter](coneemitter.md)

**↳ ConeEmitter**

## Implements

* [IEmitter](../interfaces/iemitter.md)<[IConeEmitterOptions](../interfaces/iconeemitteroptions.md), [IConeEmitterUniforms](../interfaces/iconeemitteruniforms.md)>

## Index

### Methods

* [getShadersAndModifyUniforms](_seinjs_.gpuparticlesystem.coneemitter.md#getshadersandmodifyuniforms)

---

## Methods

<a id="getshadersandmodifyuniforms"></a>

###  getShadersAndModifyUniforms

▸ **getShadersAndModifyUniforms**(options: *[IConeEmitterOptions](../interfaces/iconeemitteroptions.md)*, uniforms: *[IConeEmitterUniforms](../interfaces/iconeemitteruniforms.md)*): `object`

*Inherited from [ConeEmitter](coneemitter.md).[getShadersAndModifyUniforms](coneemitter.md#getshadersandmodifyuniforms)*

*Overrides [Emitter](emitter.md).[getShadersAndModifyUniforms](emitter.md#getshadersandmodifyuniforms)*

*Defined in emitter/ConeEmitter.ts:52*

根据参数，添加uniform并获取具体实现的Shader

**Parameters:**

| Name | Type |
| ------ | ------ |
| options | [IConeEmitterOptions](../interfaces/iconeemitteroptions.md) |
| uniforms | [IConeEmitterUniforms](../interfaces/iconeemitteruniforms.md) |

**Returns:** `object`

___

