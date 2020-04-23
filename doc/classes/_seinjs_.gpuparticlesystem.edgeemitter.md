[seinjs-gpu-particle-system](../README.md) > ["seinjs"](../modules/_seinjs_.md) > [GPUParticleSystem](../modules/_seinjs_.gpuparticlesystem.md) > [EdgeEmitter](../classes/_seinjs_.gpuparticlesystem.edgeemitter.md)

# Class: EdgeEmitter

## Hierarchy

↳  [EdgeEmitter](edgeemitter.md)

**↳ EdgeEmitter**

## Implements

* [IEmitter](../interfaces/iemitter.md)<[IEdgeEmitterOptions](../interfaces/iedgeemitteroptions.md), [IEdgeEmitterUniforms](../interfaces/iedgeemitteruniforms.md)>

## Index

### Methods

* [getShadersAndModifyUniforms](_seinjs_.gpuparticlesystem.edgeemitter.md#getshadersandmodifyuniforms)

---

## Methods

<a id="getshadersandmodifyuniforms"></a>

###  getShadersAndModifyUniforms

▸ **getShadersAndModifyUniforms**(options: *[IEdgeEmitterOptions](../interfaces/iedgeemitteroptions.md)*, uniforms: *[IEdgeEmitterUniforms](../interfaces/iedgeemitteruniforms.md)*): `object`

*Inherited from [EdgeEmitter](edgeemitter.md).[getShadersAndModifyUniforms](edgeemitter.md#getshadersandmodifyuniforms)*

*Overrides [Emitter](emitter.md).[getShadersAndModifyUniforms](emitter.md#getshadersandmodifyuniforms)*

*Defined in emitter/EdgeEmitter.ts:50*

根据参数，添加uniform并获取具体实现的Shader。

**Parameters:**

| Name | Type |
| ------ | ------ |
| options | [IEdgeEmitterOptions](../interfaces/iedgeemitteroptions.md) |
| uniforms | [IEdgeEmitterUniforms](../interfaces/iedgeemitteruniforms.md) |

**Returns:** `object`

___

