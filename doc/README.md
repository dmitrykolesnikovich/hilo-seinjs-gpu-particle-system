
GPUParticleSystem
=================

基于GPU的粒子系统。使用教程可见[seinjs-gpu-particle-system](http://seinjs.com/cn/extension/common-extensions/gpu-particles)。

[更多请见API文档。](doc/README.md)

## Index

### Classes

* [Actor](classes/actor.md)
* [CircleEmitter](classes/circleemitter.md)
* [Component](classes/component.md)
* [ConeEmitter](classes/coneemitter.md)
* [EdgeEmitter](classes/edgeemitter.md)
* [Emitter](classes/emitter.md)
* [HemisphericEmitter](classes/hemisphericemitter.md)
* [RectangleEmitter](classes/rectangleemitter.md)
* [SphereEmitter](classes/sphereemitter.md)
* [WindEmitter](classes/windemitter.md)

### Interfaces

* [ICircleEmitterOptions](interfaces/icircleemitteroptions.md)
* [ICircleEmitterUniforms](interfaces/icircleemitteruniforms.md)
* [IComponentState](interfaces/icomponentstate.md)
* [IConeEmitterOptions](interfaces/iconeemitteroptions.md)
* [IConeEmitterUniforms](interfaces/iconeemitteruniforms.md)
* [IEdgeEmitterOptions](interfaces/iedgeemitteroptions.md)
* [IEdgeEmitterUniforms](interfaces/iedgeemitteruniforms.md)
* [IEmitter](interfaces/iemitter.md)
* [IHemisphericEmitterOptions](interfaces/ihemisphericemitteroptions.md)
* [IHemisphericEmitterUniforms](interfaces/ihemisphericemitteruniforms.md)
* [IParticleUniforms](interfaces/iparticleuniforms.md)
* [IRectangleEmitterOptions](interfaces/irectangleemitteroptions.md)
* [IRectangleEmitterUniforms](interfaces/irectangleemitteruniforms.md)
* [ISphereEmitterOptions](interfaces/isphereemitteroptions.md)
* [ISphereEmitterUniforms](interfaces/isphereemitteruniforms.md)
* [IWindEmitterOptions](interfaces/iwindemitteroptions.md)
* [IWindEmitterUniforms](interfaces/iwindemitteruniforms.md)

### Functions

* [isActor](#isactor)
* [isComponent](#iscomponent)

---

## Functions

<a id="isactor"></a>

###  isActor

▸ **isActor**(value: *`SObject`*): `boolean`

*Defined in index.ts:75*

判断一个实例是否为`DomHUDActor`。

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `SObject` |

**Returns:** `boolean`

___
<a id="iscomponent"></a>

###  isComponent

▸ **isComponent**(value: *`SObject`*): `boolean`

*Defined in index.ts:82*

判断一个实例是否为`DomHUDComponent`。

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `SObject` |

**Returns:** `boolean`

___

