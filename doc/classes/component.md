[seinjs-gpu-particle-system](../README.md) > [Component](../classes/component.md)

# Class: Component

基于GPU的例子系统组件，此系统完全使用GPU计算，通过参数进行初始化，并用一个`noise`的attribute来进行随机扰动。 详细使用可以见官网的**GPU粒子系统**的引导。

## Hierarchy

 `SceneComponent`<[IComponentState](../interfaces/icomponentstate.md)>

**↳ Component**

↳  [Component](_seinjs_.gpuparticlesystem.component.md)

## Implements

* `ISceneComponent`<`ISceneComponentState`>

## Index

### Properties

* [isGPUParticleSystemComponent](component.md#isgpuparticlesystemcomponent)

### Methods

* [forceModifyMat](component.md#forcemodifymat)
* [getOption](component.md#getoption)
* [onAdd](component.md#onadd)
* [onDestroy](component.md#ondestroy)
* [onInit](component.md#oninit)
* [onUpdate](component.md#onupdate)
* [pause](component.md#pause)
* [resume](component.md#resume)
* [setOption](component.md#setoption)
* [start](component.md#start)
* [stop](component.md#stop)

---

## Properties

<a id="isgpuparticlesystemcomponent"></a>

###  isGPUParticleSystemComponent

**● isGPUParticleSystemComponent**: *`boolean`* = true

*Defined in Component.ts:326*

___

## Methods

<a id="forcemodifymat"></a>

###  forceModifyMat

▸ **forceModifyMat**(): `void`

*Defined in Component.ts:463*

强制重新生成材质，**谨慎使用！**。

**Returns:** `void`

___
<a id="getoption"></a>

###  getOption

▸ **getOption**<`Key`>(key: *`Key`*): `IComponentState[Key]`

*Defined in Component.ts:456*

获取某个配置。

**Type parameters:**

#### Key :  `keyof IComponentState`
**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `Key` |

**Returns:** `IComponentState[Key]`

___
<a id="onadd"></a>

###  onAdd

▸ **onAdd**(): `void`

*Overrides Component.onAdd*

*Defined in Component.ts:374*

添加到世界，继承请先`super.onAdd()`。

**Returns:** `void`

___
<a id="ondestroy"></a>

###  onDestroy

▸ **onDestroy**(): `void`

*Overrides SceneComponent.onDestroy*

*Defined in Component.ts:427*

销毁，继承请先`super.onUpdate()`。

**Returns:** `void`

___
<a id="oninit"></a>

###  onInit

▸ **onInit**(initState: *[IComponentState](../interfaces/icomponentstate.md)*): `void`

*Overrides SceneComponent.onInit*

*Defined in Component.ts:341*

初始化，继承请先`super.onInit()`。

**Parameters:**

| Name | Type |
| ------ | ------ |
| initState | [IComponentState](../interfaces/icomponentstate.md) |

**Returns:** `void`

___
<a id="onupdate"></a>

###  onUpdate

▸ **onUpdate**(delta: *`number`*): `void`

*Overrides Component.onUpdate*

*Defined in Component.ts:388*

每一帧更新，继承请先`super.onUpdate()`。

**Parameters:**

| Name | Type |
| ------ | ------ |
| delta | `number` |

**Returns:** `void`

___
<a id="pause"></a>

###  pause

▸ **pause**(): `void`

*Defined in Component.ts:489*

暂停生成。

**Returns:** `void`

___
<a id="resume"></a>

###  resume

▸ **resume**(): `void`

*Defined in Component.ts:496*

唤醒生成。

**Returns:** `void`

___
<a id="setoption"></a>

###  setOption

▸ **setOption**<`Key`>(key: *`Key`*, value: *`IComponentState[Key]`*): `void`

*Defined in Component.ts:436*

设置某个配置，修改设置后将会根据状况重新生成`Geometry`或`Material`，**谨慎使用！**。

**Type parameters:**

#### Key :  `keyof IComponentState`
**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `Key` |
| value | `IComponentState[Key]` |

**Returns:** `void`

___
<a id="start"></a>

###  start

▸ **start**(): `void`

*Defined in Component.ts:470*

开始生成。

**Returns:** `void`

___
<a id="stop"></a>

###  stop

▸ **stop**(): `void`

*Defined in Component.ts:481*

停止生成。

**Returns:** `void`

___

