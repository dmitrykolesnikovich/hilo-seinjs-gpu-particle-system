[seinjs-gpu-particle-system](../README.md) > ["seinjs"](../modules/_seinjs_.md) > [GPUParticleSystem](../modules/_seinjs_.gpuparticlesystem.md) > [WindEmitter](../classes/_seinjs_.gpuparticlesystem.windemitter.md)

# Class: WindEmitter

## Hierarchy

↳  [WindEmitter](windemitter.md)

**↳ WindEmitter**

## Implements

* [IEmitter](../interfaces/iemitter.md)<[IWindEmitterOptions](../interfaces/iwindemitteroptions.md), [IWindEmitterUniforms](../interfaces/iwindemitteruniforms.md)>

## Index

### Methods

* [getShadersAndModifyUniforms](_seinjs_.gpuparticlesystem.windemitter.md#getshadersandmodifyuniforms)

---

## Methods

<a id="getshadersandmodifyuniforms"></a>

###  getShadersAndModifyUniforms

▸ **getShadersAndModifyUniforms**(options: *[IWindEmitterOptions](../interfaces/iwindemitteroptions.md)*, uniforms: *[IWindEmitterUniforms](../interfaces/iwindemitteruniforms.md)*): `object`

*Inherited from [WindEmitter](windemitter.md).[getShadersAndModifyUniforms](windemitter.md#getshadersandmodifyuniforms)*

*Overrides [Emitter](emitter.md).[getShadersAndModifyUniforms](emitter.md#getshadersandmodifyuniforms)*

*Defined in emitter/WindEmitter.ts:58*

根据参数，添加uniform并获取具体实现的Shader。

**Parameters:**

| Name | Type |
| ------ | ------ |
| options | [IWindEmitterOptions](../interfaces/iwindemitteroptions.md) |
| uniforms | [IWindEmitterUniforms](../interfaces/iwindemitteruniforms.md) |

**Returns:** `object`

___

