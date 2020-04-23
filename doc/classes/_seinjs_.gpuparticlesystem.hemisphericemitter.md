[seinjs-gpu-particle-system](../README.md) > ["seinjs"](../modules/_seinjs_.md) > [GPUParticleSystem](../modules/_seinjs_.gpuparticlesystem.md) > [HemisphericEmitter](../classes/_seinjs_.gpuparticlesystem.hemisphericemitter.md)

# Class: HemisphericEmitter

## Hierarchy

↳  [HemisphericEmitter](hemisphericemitter.md)

**↳ HemisphericEmitter**

## Implements

* [IEmitter](../interfaces/iemitter.md)<[IHemisphericEmitterOptions](../interfaces/ihemisphericemitteroptions.md), [IHemisphericEmitterUniforms](../interfaces/ihemisphericemitteruniforms.md)>

## Index

### Methods

* [getShadersAndModifyUniforms](_seinjs_.gpuparticlesystem.hemisphericemitter.md#getshadersandmodifyuniforms)

---

## Methods

<a id="getshadersandmodifyuniforms"></a>

###  getShadersAndModifyUniforms

▸ **getShadersAndModifyUniforms**(options: *[IHemisphericEmitterOptions](../interfaces/ihemisphericemitteroptions.md)*, uniforms: *[IHemisphericEmitterUniforms](../interfaces/ihemisphericemitteruniforms.md)*): `object`

*Inherited from [HemisphericEmitter](hemisphericemitter.md).[getShadersAndModifyUniforms](hemisphericemitter.md#getshadersandmodifyuniforms)*

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

