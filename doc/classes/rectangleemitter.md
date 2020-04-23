[seinjs-gpu-particle-system](../README.md) > [RectangleEmitter](../classes/rectangleemitter.md)

# Class: RectangleEmitter

长方形发射器

## Hierarchy

↳  [Emitter](emitter.md)<[IRectangleEmitterOptions](../interfaces/irectangleemitteroptions.md), [IRectangleEmitterUniforms](../interfaces/irectangleemitteruniforms.md)>

**↳ RectangleEmitter**

↳  [RectangleEmitter](_seinjs_.gpuparticlesystem.rectangleemitter.md)

## Implements

* [IEmitter](../interfaces/iemitter.md)<[IRectangleEmitterOptions](../interfaces/irectangleemitteroptions.md), [IRectangleEmitterUniforms](../interfaces/irectangleemitteruniforms.md)>

## Index

### Methods

* [getShadersAndModifyUniforms](rectangleemitter.md#getshadersandmodifyuniforms)

---

## Methods

<a id="getshadersandmodifyuniforms"></a>

###  getShadersAndModifyUniforms

▸ **getShadersAndModifyUniforms**(options: *[IRectangleEmitterOptions](../interfaces/irectangleemitteroptions.md)*, uniforms: *[IRectangleEmitterUniforms](../interfaces/irectangleemitteruniforms.md)*): `object`

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

