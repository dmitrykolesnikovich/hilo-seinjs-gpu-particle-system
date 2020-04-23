[seinjs-gpu-particle-system](../README.md) > ["seinjs"](../modules/_seinjs_.md) > [GPUParticleSystem](../modules/_seinjs_.gpuparticlesystem.md) > [Emitter](../interfaces/_seinjs_.gpuparticlesystem.emitter.md)

# Interface: Emitter

## Type parameters
#### IOptions :  `Object`
#### IUniforms :  `TParticleUniforms`
## Hierarchy

↳  [Emitter](../classes/emitter.md)<`IOptions`, `IUniforms`>

**↳ Emitter**

## Implements

* [IEmitter](iemitter.md)<`IOptions`, `IUniforms`>

## Index

### Constructors

* [constructor](_seinjs_.gpuparticlesystem.emitter.md#constructor)

### Properties

* [system](_seinjs_.gpuparticlesystem.emitter.md#system)

### Methods

* [getOption](_seinjs_.gpuparticlesystem.emitter.md#getoption)
* [getShadersAndModifyUniforms](_seinjs_.gpuparticlesystem.emitter.md#getshadersandmodifyuniforms)
* [setOption](_seinjs_.gpuparticlesystem.emitter.md#setoption)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Emitter**(options: *`IOptions`*): [Emitter](_seinjs_.gpuparticlesystem.emitter.md)

*Inherited from [Emitter](../classes/emitter.md).[constructor](../classes/emitter.md#constructor)*

*Overrides SObject.__constructor*

*Defined in emitter/Emitter.ts:32*

**Parameters:**

| Name | Type |
| ------ | ------ |
| options | `IOptions` |

**Returns:** [Emitter](_seinjs_.gpuparticlesystem.emitter.md)

___

## Properties

<a id="system"></a>

###  system

**● system**: *[Component](../classes/component.md)*

*Inherited from [Emitter](../classes/emitter.md).[system](../classes/emitter.md#system)*

*Defined in emitter/Emitter.ts:28*

从属的粒子系统实例引用。

___

## Methods

<a id="getoption"></a>

###  getOption

▸ **getOption**<`Key`>(key: *`Key`*): `IOptions[Key]`

*Inherited from [Emitter](../classes/emitter.md).[getOption](../classes/emitter.md#getoption)*

*Defined in emitter/Emitter.ts:63*

获取某个配置项。

**Type parameters:**

#### Key :  `keyof IOptions`
**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `Key` |

**Returns:** `IOptions[Key]`

___
<a id="getshadersandmodifyuniforms"></a>

###  getShadersAndModifyUniforms

▸ **getShadersAndModifyUniforms**(options: *`IOptions`*, uniforms: *`IUniforms`*, systemState: *[IComponentState](icomponentstate.md)*): `object`

*Inherited from [Emitter](../classes/emitter.md).[getShadersAndModifyUniforms](../classes/emitter.md#getshadersandmodifyuniforms)*

*Defined in emitter/Emitter.ts:43*

根据参数，添加uniform并获取具体实现的Shader。

**Parameters:**

| Name | Type |
| ------ | ------ |
| options | `IOptions` |
| uniforms | `IUniforms` |
| systemState | [IComponentState](icomponentstate.md) |

**Returns:** `object`

___
<a id="setoption"></a>

###  setOption

▸ **setOption**<`Key`>(key: *`Key`*, value: *`IOptions[Key]`*): `this`

*Inherited from [Emitter](../classes/emitter.md).[setOption](../classes/emitter.md#setoption)*

*Defined in emitter/Emitter.ts:53*

设置某配置项，将会强制重新生成粒子系统的`Material`，**谨慎使用！**。

**Type parameters:**

#### Key :  `keyof IOptions`
**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `Key` |
| value | `IOptions[Key]` |

**Returns:** `this`

___

