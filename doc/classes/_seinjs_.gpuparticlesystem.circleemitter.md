[seinjs-gpu-particle-system](../README.md) > ["seinjs"](../modules/_seinjs_.md) > [GPUParticleSystem](../modules/_seinjs_.gpuparticlesystem.md) > [CircleEmitter](../classes/_seinjs_.gpuparticlesystem.circleemitter.md)

# Class: CircleEmitter

## Hierarchy

↳  [CircleEmitter](circleemitter.md)

**↳ CircleEmitter**

## Implements

* [IEmitter](../interfaces/iemitter.md)<[ICircleEmitterOptions](../interfaces/icircleemitteroptions.md), [ICircleEmitterUniforms](../interfaces/icircleemitteruniforms.md)>

## Index

### Methods

* [getShadersAndModifyUniforms](_seinjs_.gpuparticlesystem.circleemitter.md#getshadersandmodifyuniforms)

---

## Methods

<a id="getshadersandmodifyuniforms"></a>

###  getShadersAndModifyUniforms

▸ **getShadersAndModifyUniforms**(options: *[ICircleEmitterOptions](../interfaces/icircleemitteroptions.md)*, uniforms: *[ICircleEmitterUniforms](../interfaces/icircleemitteruniforms.md)*): `object`

*Inherited from [CircleEmitter](circleemitter.md).[getShadersAndModifyUniforms](circleemitter.md#getshadersandmodifyuniforms)*

*Overrides [Emitter](emitter.md).[getShadersAndModifyUniforms](emitter.md#getshadersandmodifyuniforms)*

*Defined in emitter/CircleEmitter.ts:71*

根据参数，添加uniform并获取具体实现的Shader

**Parameters:**

| Name | Type |
| ------ | ------ |
| options | [ICircleEmitterOptions](../interfaces/icircleemitteroptions.md) |
| uniforms | [ICircleEmitterUniforms](../interfaces/icircleemitteruniforms.md) |

**Returns:** `object`

___

