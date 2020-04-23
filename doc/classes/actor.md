[seinjs-gpu-particle-system](../README.md) > [Actor](../classes/actor.md)

# Class: Actor

`GPUParticleSystemComponent`的一个容器封装。

## Hierarchy

 `SceneActor`<[IComponentState](../interfaces/icomponentstate.md), [Component](component.md)>

**↳ Actor**

↳  [Actor](_seinjs_.gpuparticlesystem.actor.md)

## Implements

* `ISceneActor`<[IComponentState](../interfaces/icomponentstate.md), [Component](component.md)>

## Index

### Properties

* [isGPUParticleSystemActor](actor.md#isgpuparticlesystemactor)

### Methods

* [forceModifyMat](actor.md#forcemodifymat)
* [getOption](actor.md#getoption)
* [onCreateRoot](actor.md#oncreateroot)
* [pause](actor.md#pause)
* [resume](actor.md#resume)
* [setOption](actor.md#setoption)
* [start](actor.md#start)
* [stop](actor.md#stop)

---

## Properties

<a id="isgpuparticlesystemactor"></a>

###  isGPUParticleSystemActor

**● isGPUParticleSystemActor**: *`boolean`* = true

*Defined in Actor.ts:18*

___

## Methods

<a id="forcemodifymat"></a>

###  forceModifyMat

▸ **forceModifyMat**(): `void`

*Defined in Actor.ts:44*

强制重新生成材质，**谨慎使用！**。

**Returns:** `void`

___
<a id="getoption"></a>

###  getOption

▸ **getOption**<`Key`>(key: *`Key`*): `IComponentState[Key]`

*Defined in Actor.ts:37*

获取某个配置。

**Type parameters:**

#### Key :  `keyof IComponentState`
**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `Key` |

**Returns:** `IComponentState[Key]`

___
<a id="oncreateroot"></a>

###  onCreateRoot

▸ **onCreateRoot**(initOptions: *[IComponentState](../interfaces/icomponentstate.md)*): [Component](component.md)

*Overrides SceneActor.onCreateRoot*

*Defined in Actor.ts:23*

生成根组件，继承请先`super.onCreateRoot()`。

**Parameters:**

| Name | Type |
| ------ | ------ |
| initOptions | [IComponentState](../interfaces/icomponentstate.md) |

**Returns:** [Component](component.md)

___
<a id="pause"></a>

###  pause

▸ **pause**(): `void`

*Defined in Actor.ts:65*

暂停生成。

**Returns:** `void`

___
<a id="resume"></a>

###  resume

▸ **resume**(): `void`

*Defined in Actor.ts:72*

唤醒生成。

**Returns:** `void`

___
<a id="setoption"></a>

###  setOption

▸ **setOption**<`Key`>(key: *`Key`*, value: *`IComponentState[Key]`*): `void`

*Defined in Actor.ts:30*

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

*Defined in Actor.ts:51*

开始生成。

**Returns:** `void`

___
<a id="stop"></a>

###  stop

▸ **stop**(): `void`

*Defined in Actor.ts:58*

停止生成。

**Returns:** `void`

___

