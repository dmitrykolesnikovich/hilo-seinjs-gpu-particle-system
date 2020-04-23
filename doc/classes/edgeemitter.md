[seinjs-gpu-particle-system](../README.md) > [EdgeEmitter](../classes/edgeemitter.md)

# Class: EdgeEmitter

边界发射器。通过两个顶点规定一个盒装区域，粒子将从原点向盒装区域内发射。

## Hierarchy

↳  [Emitter](emitter.md)<[IEdgeEmitterOptions](../interfaces/iedgeemitteroptions.md), [IEdgeEmitterUniforms](../interfaces/iedgeemitteruniforms.md)>

**↳ EdgeEmitter**

↳  [EdgeEmitter](_seinjs_.gpuparticlesystem.edgeemitter.md)

## Implements

* [IEmitter](../interfaces/iemitter.md)<[IEdgeEmitterOptions](../interfaces/iedgeemitteroptions.md), [IEdgeEmitterUniforms](../interfaces/iedgeemitteruniforms.md)>

## Index

### Methods

* [getShadersAndModifyUniforms](edgeemitter.md#getshadersandmodifyuniforms)

---

## Methods

<a id="getshadersandmodifyuniforms"></a>

###  getShadersAndModifyUniforms

▸ **getShadersAndModifyUniforms**(options: *[IEdgeEmitterOptions](../interfaces/iedgeemitteroptions.md)*, uniforms: *[IEdgeEmitterUniforms](../interfaces/iedgeemitteruniforms.md)*): `object`

*Overrides [Emitter](emitter.md).[getShadersAndModifyUniforms](emitter.md#getshadersandmodifyuniforms)*

*Defined in emitter/EdgeEmitter.ts:50*

根据参数，添加uniform并获取具体实现的Shader。

**Parameters:**

| Name | Type |
| ------ | ------ |
| options | [IEdgeEmitterOptions](../interfaces/iedgeemitteroptions.md) |
| uniforms | [IEdgeEmitterUniforms](../interfaces/iedgeemitteruniforms.md) |

**Returns:** `object`

___

