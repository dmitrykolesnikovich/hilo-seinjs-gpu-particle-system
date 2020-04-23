[seinjs-gpu-particle-system](../README.md) > [CircleEmitter](../classes/circleemitter.md)

# Class: CircleEmitter

圆形发射器。通过半径指定一个圆形的范围，粒子将在这个范围内生成并向圆形径向发射

## Hierarchy

↳  [Emitter](emitter.md)<[ICircleEmitterOptions](../interfaces/icircleemitteroptions.md), [ICircleEmitterUniforms](../interfaces/icircleemitteruniforms.md)>

**↳ CircleEmitter**

↳  [CircleEmitter](_seinjs_.gpuparticlesystem.circleemitter.md)

## Implements

* [IEmitter](../interfaces/iemitter.md)<[ICircleEmitterOptions](../interfaces/icircleemitteroptions.md), [ICircleEmitterUniforms](../interfaces/icircleemitteruniforms.md)>

## Index

### Methods

* [getShadersAndModifyUniforms](circleemitter.md#getshadersandmodifyuniforms)

---

## Methods

<a id="getshadersandmodifyuniforms"></a>

###  getShadersAndModifyUniforms

▸ **getShadersAndModifyUniforms**(options: *[ICircleEmitterOptions](../interfaces/icircleemitteroptions.md)*, uniforms: *[ICircleEmitterUniforms](../interfaces/icircleemitteruniforms.md)*): `object`

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

