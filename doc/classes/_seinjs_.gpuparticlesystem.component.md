[seinjs-gpu-particle-system](../README.md) > ["seinjs"](../modules/_seinjs_.md) > [GPUParticleSystem](../modules/_seinjs_.gpuparticlesystem.md) > [Component](../classes/_seinjs_.gpuparticlesystem.component.md)

# Class: Component

## Hierarchy

↳  [Component](component.md)

**↳ Component**

## Implements

* `ISceneComponent`<`ISceneComponentState`>

## Index

### Properties

* [isGPUParticleSystemComponent](_seinjs_.gpuparticlesystem.component.md#isgpuparticlesystemcomponent)

### Methods

* [forceModifyMat](_seinjs_.gpuparticlesystem.component.md#forcemodifymat)
* [getOption](_seinjs_.gpuparticlesystem.component.md#getoption)
* [onAdd](_seinjs_.gpuparticlesystem.component.md#onadd)
* [onDestroy](_seinjs_.gpuparticlesystem.component.md#ondestroy)
* [onInit](_seinjs_.gpuparticlesystem.component.md#oninit)
* [onUpdate](_seinjs_.gpuparticlesystem.component.md#onupdate)
* [pause](_seinjs_.gpuparticlesystem.component.md#pause)
* [resume](_seinjs_.gpuparticlesystem.component.md#resume)
* [setOption](_seinjs_.gpuparticlesystem.component.md#setoption)
* [start](_seinjs_.gpuparticlesystem.component.md#start)
* [stop](_seinjs_.gpuparticlesystem.component.md#stop)

---

## Properties

<a id="isgpuparticlesystemcomponent"></a>

###  isGPUParticleSystemComponent

**● isGPUParticleSystemComponent**: *`boolean`* = true

*Inherited from [Component](component.md).[isGPUParticleSystemComponent](component.md#isgpuparticlesystemcomponent)*

*Defined in Component.ts:326*

___

## Methods

<a id="forcemodifymat"></a>

###  forceModifyMat

▸ **forceModifyMat**(): `void`

*Inherited from [Component](component.md).[forceModifyMat](component.md#forcemodifymat)*

*Defined in Component.ts:463*

强制重新生成材质，**谨慎使用！**。

**Returns:** `void`

___
<a id="getoption"></a>

###  getOption

▸ **getOption**<`Key`>(key: *`Key`*): `IComponentState[Key]`

*Inherited from [Component](component.md).[getOption](component.md#getoption)*

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

*Inherited from [Component](component.md).[onAdd](component.md#onadd)*

*Overrides Component.onAdd*

*Defined in Component.ts:374*

添加到世界，继承请先`super.onAdd()`。

**Returns:** `void`

___
<a id="ondestroy"></a>

###  onDestroy

▸ **onDestroy**(): `void`

*Inherited from [Component](component.md).[onDestroy](component.md#ondestroy)*

*Overrides SceneComponent.onDestroy*

*Defined in Component.ts:427*

销毁，继承请先`super.onUpdate()`。

**Returns:** `void`

___
<a id="oninit"></a>

###  onInit

▸ **onInit**(initState: *[IComponentState](../interfaces/icomponentstate.md)*): `void`

*Inherited from [Component](component.md).[onInit](component.md#oninit)*

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

*Inherited from [Component](component.md).[onUpdate](component.md#onupdate)*

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

*Inherited from [Component](component.md).[pause](component.md#pause)*

*Defined in Component.ts:489*

暂停生成。

**Returns:** `void`

___
<a id="resume"></a>

###  resume

▸ **resume**(): `void`

*Inherited from [Component](component.md).[resume](component.md#resume)*

*Defined in Component.ts:496*

唤醒生成。

**Returns:** `void`

___
<a id="setoption"></a>

###  setOption

▸ **setOption**<`Key`>(key: *`Key`*, value: *`IComponentState[Key]`*): `void`

*Inherited from [Component](component.md).[setOption](component.md#setoption)*

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

*Inherited from [Component](component.md).[start](component.md#start)*

*Defined in Component.ts:470*

开始生成。

**Returns:** `void`

___
<a id="stop"></a>

###  stop

▸ **stop**(): `void`

*Inherited from [Component](component.md).[stop](component.md#stop)*

*Defined in Component.ts:481*

停止生成。

**Returns:** `void`

___

