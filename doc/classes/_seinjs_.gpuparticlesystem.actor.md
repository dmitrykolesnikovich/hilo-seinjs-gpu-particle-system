[seinjs-gpu-particle-system](../README.md) > ["seinjs"](../modules/_seinjs_.md) > [GPUParticleSystem](../modules/_seinjs_.gpuparticlesystem.md) > [Actor](../classes/_seinjs_.gpuparticlesystem.actor.md)

# Class: Actor

## Hierarchy

↳  [Actor](actor.md)

**↳ Actor**

## Implements

* `ISceneActor`<[IComponentState](../interfaces/icomponentstate.md), [Component](component.md)>

## Index

### Properties

* [isGPUParticleSystemActor](_seinjs_.gpuparticlesystem.actor.md#isgpuparticlesystemactor)

### Methods

* [forceModifyMat](_seinjs_.gpuparticlesystem.actor.md#forcemodifymat)
* [getOption](_seinjs_.gpuparticlesystem.actor.md#getoption)
* [onCreateRoot](_seinjs_.gpuparticlesystem.actor.md#oncreateroot)
* [pause](_seinjs_.gpuparticlesystem.actor.md#pause)
* [resume](_seinjs_.gpuparticlesystem.actor.md#resume)
* [setOption](_seinjs_.gpuparticlesystem.actor.md#setoption)
* [start](_seinjs_.gpuparticlesystem.actor.md#start)
* [stop](_seinjs_.gpuparticlesystem.actor.md#stop)

---

## Properties

<a id="isgpuparticlesystemactor"></a>

###  isGPUParticleSystemActor

**● isGPUParticleSystemActor**: *`boolean`* = true

*Inherited from [Actor](actor.md).[isGPUParticleSystemActor](actor.md#isgpuparticlesystemactor)*

*Defined in Actor.ts:18*

___

## Methods

<a id="forcemodifymat"></a>

###  forceModifyMat

▸ **forceModifyMat**(): `void`

*Inherited from [Actor](actor.md).[forceModifyMat](actor.md#forcemodifymat)*

*Defined in Actor.ts:44*

强制重新生成材质，**谨慎使用！**。

**Returns:** `void`

___
<a id="getoption"></a>

###  getOption

▸ **getOption**<`Key`>(key: *`Key`*): `IComponentState[Key]`

*Inherited from [Actor](actor.md).[getOption](actor.md#getoption)*

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

*Inherited from [Actor](actor.md).[onCreateRoot](actor.md#oncreateroot)*

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

*Inherited from [Actor](actor.md).[pause](actor.md#pause)*

*Defined in Actor.ts:65*

暂停生成。

**Returns:** `void`

___
<a id="resume"></a>

###  resume

▸ **resume**(): `void`

*Inherited from [Actor](actor.md).[resume](actor.md#resume)*

*Defined in Actor.ts:72*

唤醒生成。

**Returns:** `void`

___
<a id="setoption"></a>

###  setOption

▸ **setOption**<`Key`>(key: *`Key`*, value: *`IComponentState[Key]`*): `void`

*Inherited from [Actor](actor.md).[setOption](actor.md#setoption)*

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

*Inherited from [Actor](actor.md).[start](actor.md#start)*

*Defined in Actor.ts:51*

开始生成。

**Returns:** `void`

___
<a id="stop"></a>

###  stop

▸ **stop**(): `void`

*Inherited from [Actor](actor.md).[stop](actor.md#stop)*

*Defined in Actor.ts:58*

停止生成。

**Returns:** `void`

___

