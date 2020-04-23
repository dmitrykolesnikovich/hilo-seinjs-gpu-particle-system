[seinjs-gpu-particle-system](../README.md) > [HemisphericEmitter](../classes/hemisphericemitter.md)

# Class: HemisphericEmitter

半球发射器。通过半径指定一个半球的范围，粒子将在这个范围内生成并向半球外侧射出。

## Hierarchy

↳  [Emitter](emitter.md)<[IHemisphericEmitterOptions](../interfaces/ihemisphericemitteroptions.md), [IHemisphericEmitterUniforms](../interfaces/ihemisphericemitteruniforms.md)>

**↳ HemisphericEmitter**

↳  [HemisphericEmitter](_seinjs_.gpuparticlesystem.hemisphericemitter.md)

## Implements

* [IEmitter](../interfaces/iemitter.md)<[IHemisphericEmitterOptions](../interfaces/ihemisphericemitteroptions.md), [IHemisphericEmitterUniforms](../interfaces/ihemisphericemitteruniforms.md)>

## Index

### Methods

* [getShadersAndModifyUniforms](hemisphericemitter.md#getshadersandmodifyuniforms)

---

## Methods

<a id="getshadersandmodifyuniforms"></a>

###  getShadersAndModifyUniforms

▸ **getShadersAndModifyUniforms**(options: *[IHemisphericEmitterOptions](../interfaces/ihemisphericemitteroptions.md)*, uniforms: *[IHemisphericEmitterUniforms](../interfaces/ihemisphericemitteruniforms.md)*): `object`

*Overrides [Emitter](emitter.md).[getShadersAndModifyUniforms](emitter.md#getshadersandmodifyuniforms)*

*Defined in emitter/HemisphericEmitter.ts:42*

根据参数，添加uniform并获取具体实现的Shader。

**Parameters:**

| Name | Type |
| ------ | ------ |
| options | [IHemisphericEmitterOptions](../interfaces/ihemisphericemitteroptions.md) |
| uniforms | [IHemisphericEmitterUniforms](../interfaces/ihemisphericemitteruniforms.md) |

**Returns:** `object`

___

