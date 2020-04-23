[seinjs-gpu-particle-system](../README.md) > [WindEmitter](../classes/windemitter.md)

# Class: WindEmitter

风场发射器。通过两点确定一个盒的范围，粒子将从这个范围内生成，同时指定一个朝向来确定风场的方向，粒子将向着这个方向运动。

## Hierarchy

↳  [Emitter](emitter.md)<[IWindEmitterOptions](../interfaces/iwindemitteroptions.md), [IWindEmitterUniforms](../interfaces/iwindemitteruniforms.md)>

**↳ WindEmitter**

↳  [WindEmitter](_seinjs_.gpuparticlesystem.windemitter.md)

## Implements

* [IEmitter](../interfaces/iemitter.md)<[IWindEmitterOptions](../interfaces/iwindemitteroptions.md), [IWindEmitterUniforms](../interfaces/iwindemitteruniforms.md)>

## Index

### Methods

* [getShadersAndModifyUniforms](windemitter.md#getshadersandmodifyuniforms)

---

## Methods

<a id="getshadersandmodifyuniforms"></a>

###  getShadersAndModifyUniforms

▸ **getShadersAndModifyUniforms**(options: *[IWindEmitterOptions](../interfaces/iwindemitteroptions.md)*, uniforms: *[IWindEmitterUniforms](../interfaces/iwindemitteruniforms.md)*): `object`

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

