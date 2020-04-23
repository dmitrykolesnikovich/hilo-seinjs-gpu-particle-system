[seinjs-gpu-particle-system](../README.md) > [Emitter](../classes/emitter.md)

# Class: Emitter

GPU例子系统发生器基类，一般不直接使用，而是使用其派生类。

*__template__*: IOptions 初始化参数类型。

*__template__*: IUniforms 用于自定义需要追加的Uniform类型。

## Type parameters
#### IOptions 
#### IUniforms :  [IParticleUniforms](../interfaces/iparticleuniforms.md)
## Hierarchy

 `SObject`

**↳ Emitter**

↳  [CircleEmitter](circleemitter.md)

↳  [ConeEmitter](coneemitter.md)

↳  [EdgeEmitter](edgeemitter.md)

↳  [HemisphericEmitter](hemisphericemitter.md)

↳  [RectangleEmitter](rectangleemitter.md)

↳  [SphereEmitter](sphereemitter.md)

↳  [WindEmitter](windemitter.md)

↳  [Emitter](../interfaces/_seinjs_.gpuparticlesystem.emitter.md)

## Implements

* [IEmitter](../interfaces/iemitter.md)<`IOptions`, `IUniforms`>

## Index

### Constructors

* [constructor](emitter.md#constructor)

### Properties

* [system](emitter.md#system)

### Methods

* [getOption](emitter.md#getoption)
* [getShadersAndModifyUniforms](emitter.md#getshadersandmodifyuniforms)
* [setOption](emitter.md#setoption)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Emitter**(options: *`IOptions`*): [Emitter](emitter.md)

*Overrides SObject.__constructor*

*Defined in emitter/Emitter.ts:32*

**Parameters:**

| Name | Type |
| ------ | ------ |
| options | `IOptions` |

**Returns:** [Emitter](emitter.md)

___

## Properties

<a id="system"></a>

###  system

**● system**: *[Component](component.md)*

*Implementation of [IEmitter](../interfaces/iemitter.md).[system](../interfaces/iemitter.md#system)*

*Defined in emitter/Emitter.ts:28*

从属的粒子系统实例引用。

___

## Methods

<a id="getoption"></a>

###  getOption

▸ **getOption**<`Key`>(key: *`Key`*): `IOptions[Key]`

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

▸ **getShadersAndModifyUniforms**(options: *`IOptions`*, uniforms: *`IUniforms`*, systemState: *[IComponentState](../interfaces/icomponentstate.md)*): `object`

*Defined in emitter/Emitter.ts:43*

根据参数，添加uniform并获取具体实现的Shader。

**Parameters:**

| Name | Type |
| ------ | ------ |
| options | `IOptions` |
| uniforms | `IUniforms` |
| systemState | [IComponentState](../interfaces/icomponentstate.md) |

**Returns:** `object`

___
<a id="setoption"></a>

###  setOption

▸ **setOption**<`Key`>(key: *`Key`*, value: *`IOptions[Key]`*): `this`

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

