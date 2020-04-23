[seinjs-gpu-particle-system](../README.md) > ["seinjs"](../modules/_seinjs_.md) > [GPUParticleSystem](../modules/_seinjs_.gpuparticlesystem.md) > [SphereEmitter](../classes/_seinjs_.gpuparticlesystem.sphereemitter.md)

# Class: SphereEmitter

## Hierarchy

↳  [SphereEmitter](sphereemitter.md)

**↳ SphereEmitter**

## Implements

* [IEmitter](../interfaces/iemitter.md)<[ISphereEmitterOptions](../interfaces/isphereemitteroptions.md), [ISphereEmitterUniforms](../interfaces/isphereemitteruniforms.md)>

## Index

### Methods

* [getShadersAndModifyUniforms](_seinjs_.gpuparticlesystem.sphereemitter.md#getshadersandmodifyuniforms)

---

## Methods

<a id="getshadersandmodifyuniforms"></a>

###  getShadersAndModifyUniforms

▸ **getShadersAndModifyUniforms**(options: *[ISphereEmitterOptions](../interfaces/isphereemitteroptions.md)*, uniforms: *[ISphereEmitterUniforms](../interfaces/isphereemitteruniforms.md)*): `object`

*Inherited from [SphereEmitter](sphereemitter.md).[getShadersAndModifyUniforms](sphereemitter.md#getshadersandmodifyuniforms)*

*Overrides [Emitter](emitter.md).[getShadersAndModifyUniforms](emitter.md#getshadersandmodifyuniforms)*

*Defined in emitter/SphereEmitter.ts:42*

根据参数，添加uniform并获取具体实现的Shader。

**Parameters:**

| Name | Type |
| ------ | ------ |
| options | [ISphereEmitterOptions](../interfaces/isphereemitteroptions.md) |
| uniforms | [ISphereEmitterUniforms](../interfaces/isphereemitteruniforms.md) |

**Returns:** `object`

___

