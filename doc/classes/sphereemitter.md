[seinjs-gpu-particle-system](../README.md) > [SphereEmitter](../classes/sphereemitter.md)

# Class: SphereEmitter

球体发射器。通过半径指定一个球体的范围，粒子将在这个范围内生成并向球体外侧射出。

## Hierarchy

↳  [Emitter](emitter.md)<[ISphereEmitterOptions](../interfaces/isphereemitteroptions.md), [ISphereEmitterUniforms](../interfaces/isphereemitteruniforms.md)>

**↳ SphereEmitter**

↳  [SphereEmitter](_seinjs_.gpuparticlesystem.sphereemitter.md)

## Implements

* [IEmitter](../interfaces/iemitter.md)<[ISphereEmitterOptions](../interfaces/isphereemitteroptions.md), [ISphereEmitterUniforms](../interfaces/isphereemitteruniforms.md)>

## Index

### Methods

* [getShadersAndModifyUniforms](sphereemitter.md#getshadersandmodifyuniforms)

---

## Methods

<a id="getshadersandmodifyuniforms"></a>

###  getShadersAndModifyUniforms

▸ **getShadersAndModifyUniforms**(options: *[ISphereEmitterOptions](../interfaces/isphereemitteroptions.md)*, uniforms: *[ISphereEmitterUniforms](../interfaces/isphereemitteruniforms.md)*): `object`

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

