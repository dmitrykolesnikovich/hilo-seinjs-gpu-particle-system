[seinjs-gpu-particle-system](../README.md) > [ConeEmitter](../classes/coneemitter.md)

# Class: ConeEmitter

圆锥形发射器。

## Hierarchy

↳  [Emitter](emitter.md)<[IConeEmitterOptions](../interfaces/iconeemitteroptions.md), [IConeEmitterUniforms](../interfaces/iconeemitteruniforms.md)>

**↳ ConeEmitter**

↳  [ConeEmitter](_seinjs_.gpuparticlesystem.coneemitter.md)

## Implements

* [IEmitter](../interfaces/iemitter.md)<[IConeEmitterOptions](../interfaces/iconeemitteroptions.md), [IConeEmitterUniforms](../interfaces/iconeemitteruniforms.md)>

## Index

### Methods

* [getShadersAndModifyUniforms](coneemitter.md#getshadersandmodifyuniforms)

---

## Methods

<a id="getshadersandmodifyuniforms"></a>

###  getShadersAndModifyUniforms

▸ **getShadersAndModifyUniforms**(options: *[IConeEmitterOptions](../interfaces/iconeemitteroptions.md)*, uniforms: *[IConeEmitterUniforms](../interfaces/iconeemitteruniforms.md)*): `object`

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

