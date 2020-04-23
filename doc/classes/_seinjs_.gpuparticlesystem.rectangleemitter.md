[seinjs-gpu-particle-system](../README.md) > ["seinjs"](../modules/_seinjs_.md) > [GPUParticleSystem](../modules/_seinjs_.gpuparticlesystem.md) > [RectangleEmitter](../classes/_seinjs_.gpuparticlesystem.rectangleemitter.md)

# Class: RectangleEmitter

## Hierarchy

↳  [RectangleEmitter](rectangleemitter.md)

**↳ RectangleEmitter**

## Implements

* [IEmitter](../interfaces/iemitter.md)<[IRectangleEmitterOptions](../interfaces/irectangleemitteroptions.md), [IRectangleEmitterUniforms](../interfaces/irectangleemitteruniforms.md)>

## Index

### Methods

* [getShadersAndModifyUniforms](_seinjs_.gpuparticlesystem.rectangleemitter.md#getshadersandmodifyuniforms)

---

## Methods

<a id="getshadersandmodifyuniforms"></a>

###  getShadersAndModifyUniforms

▸ **getShadersAndModifyUniforms**(options: *[IRectangleEmitterOptions](../interfaces/irectangleemitteroptions.md)*, uniforms: *[IRectangleEmitterUniforms](../interfaces/irectangleemitteruniforms.md)*): `object`

*Inherited from [RectangleEmitter](rectangleemitter.md).[getShadersAndModifyUniforms](rectangleemitter.md#getshadersandmodifyuniforms)*

*Overrides [Emitter](emitter.md).[getShadersAndModifyUniforms](emitter.md#getshadersandmodifyuniforms)*

*Defined in emitter/RectangleEmitter.ts:51*

根据参数，添加uniform并获取具体实现的Shader

**Parameters:**

| Name | Type |
| ------ | ------ |
| options | [IRectangleEmitterOptions](../interfaces/irectangleemitteroptions.md) |
| uniforms | [IRectangleEmitterUniforms](../interfaces/irectangleemitteruniforms.md) |

**Returns:** `object`

___

