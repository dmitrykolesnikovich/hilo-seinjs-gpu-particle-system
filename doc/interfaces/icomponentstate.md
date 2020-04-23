[seinjs-gpu-particle-system](../README.md) > [IComponentState](../interfaces/icomponentstate.md)

# Interface: IComponentState

`GPUParticleSystemComponent`的初始化参数类型。 **以下各项，类似`minXXX`和`maxXXX`形式的配置，若二者一致，则会大幅降低GPU计算量，可用于性能优化。**

## Hierarchy

 `ISceneComponentState`

**↳ IComponentState**

↳  [IComponentState](_seinjs_.gpuparticlesystem.icomponentstate.md)

## Index

### Properties

* [alphaMode](icomponentstate.md#alphamode)
* [angularShader](icomponentstate.md#angularshader)
* [atlas](icomponentstate.md#atlas)
* [autoStart](icomponentstate.md#autostart)
* [bornColor1](icomponentstate.md#borncolor1)
* [bornColor2](icomponentstate.md#borncolor2)
* [count](icomponentstate.md#count)
* [dieColor1](icomponentstate.md#diecolor1)
* [dieColor2](icomponentstate.md#diecolor2)
* [emitter](icomponentstate.md#emitter)
* [frames](icomponentstate.md#frames)
* [loop](icomponentstate.md#loop)
* [mask](icomponentstate.md#mask)
* [materialOptions](icomponentstate.md#materialoptions)
* [maxAcceleration](icomponentstate.md#maxacceleration)
* [maxAngularVelocity](icomponentstate.md#maxangularvelocity)
* [maxBornTime](icomponentstate.md#maxborntime)
* [maxLifeTime](icomponentstate.md#maxlifetime)
* [maxRotation](icomponentstate.md#maxrotation)
* [maxScale](icomponentstate.md#maxscale)
* [maxSize](icomponentstate.md#maxsize)
* [maxVelocity](icomponentstate.md#maxvelocity)
* [maxWorldAcceleration](icomponentstate.md#maxworldacceleration)
* [minAcceleration](icomponentstate.md#minacceleration)
* [minAngularVelocity](icomponentstate.md#minangularvelocity)
* [minBornTime](icomponentstate.md#minborntime)
* [minLifeTime](icomponentstate.md#minlifetime)
* [minRotation](icomponentstate.md#minrotation)
* [minScale](icomponentstate.md#minscale)
* [minSize](icomponentstate.md#minsize)
* [minVelocity](icomponentstate.md#minvelocity)
* [minWorldAcceleration](icomponentstate.md#minworldacceleration)
* [texture](icomponentstate.md#texture)
* [trajectoryShader](icomponentstate.md#trajectoryshader)
* [updateSpeed](icomponentstate.md#updatespeed)

---

## Properties

<a id="alphamode"></a>

### `<Optional>` alphaMode

**● alphaMode**: *"BLEND" \| "MASK" \| "OPAQUE"*

*Defined in Component.ts:200*

渲染模式。

*__default__*: 'BLEND'

___
<a id="angularshader"></a>

### `<Optional>` angularShader

**● angularShader**: *`string`*

*Defined in Component.ts:246*

自定义角度Shader，你可以实现shader函数`getAngularUVMat`来自定义角度变化（每一帧粒子的旋转）。

```ts
vec3 getTrajectory(
float index,
float deltaTime,
float progress,
vec3 position,
vec3 direction,
float velocity,
float acceleration,
vec3 worldAcceleration,
vec4 noise
) {
return position + (normalize(direction) * (velocity + acceleration * deltaTime) + worldAcceleration * deltaTime) * deltaTime;
}
```

___
<a id="atlas"></a>

### `<Optional>` atlas

**● atlas**: *`AtlasManager`*

*Defined in Component.ts:56*

粒子的图集，和`texture`二选一。若指定图集，则必须指定`frames`。

*__default__*: null

___
<a id="autostart"></a>

### `<Optional>` autoStart

**● autoStart**: *`boolean`*

*Defined in Component.ts:38*

是否要自动开始生成。

*__default__*: true

___
<a id="borncolor1"></a>

### `<Optional>` bornColor1

**● bornColor1**: *`Color`*

*Defined in Component.ts:176*

出生颜色的左边界。

*__default__*: \[1,1,1,1\]

___
<a id="borncolor2"></a>

### `<Optional>` bornColor2

**● bornColor2**: *`Color`*

*Defined in Component.ts:182*

出生颜色的右边界。

*__default__*: bornColor1

___
<a id="count"></a>

###  count

**● count**: *`number`*

*Defined in Component.ts:26*

一批的粒子数量。

*__default__*: 200

___
<a id="diecolor1"></a>

### `<Optional>` dieColor1

**● dieColor1**: *`Color`*

*Defined in Component.ts:188*

消亡颜色的左边界。

*__default__*: \[bornColor1.r,bornColor1.g,bornColor1.b,0\]

___
<a id="diecolor2"></a>

### `<Optional>` dieColor2

**● dieColor2**: *`Color`*

*Defined in Component.ts:194*

消亡颜色的右边界。

*__default__*: \[bornColor2.r,bornColor2.g,bornColor2.b,0\]

___
<a id="emitter"></a>

###  emitter

**● emitter**: *[IEmitter](iemitter.md)*

*Defined in Component.ts:20*

指定发射器，发射器用于生成粒子的初始化位置和朝向。

___
<a id="frames"></a>

### `<Optional>` frames

**● frames**: *`string`[]*

*Defined in Component.ts:62*

粒子的图集帧名集合，渲染时会随机选取其中的一帧来作为粒子的纹理。

*__default__*: \[\]

___
<a id="loop"></a>

### `<Optional>` loop

**● loop**: *`boolean`*

*Defined in Component.ts:206*

是否要循环播放。

*__default__*: true

___
<a id="mask"></a>

### `<Optional>` mask

**● mask**: *`Texture`*

*Defined in Component.ts:50*

遮罩，通过透明通道控制粒子的增强。

*__default__*: null

___
<a id="materialoptions"></a>

### `<Optional>` materialOptions

**● materialOptions**: *`IMaterial`*

*Defined in Component.ts:252*

其他材质选项

*__default__*: null

___
<a id="maxacceleration"></a>

### `<Optional>` maxAcceleration

**● maxAcceleration**: *`number`*

*Defined in Component.ts:152*

最大初始加速度。

*__default__*: 0

___
<a id="maxangularvelocity"></a>

### `<Optional>` maxAngularVelocity

**● maxAngularVelocity**: *`number`*

*Defined in Component.ts:146*

最大初始角速度。

*__default__*: 0

___
<a id="maxborntime"></a>

### `<Optional>` maxBornTime

**● maxBornTime**: *`number`*

*Defined in Component.ts:74*

最大粒子出生延迟时间。

*__default__*: 0

___
<a id="maxlifetime"></a>

### `<Optional>` maxLifeTime

**● maxLifeTime**: *`number`*

*Defined in Component.ts:86*

最大粒子生存周期。

*__default__*: 2

___
<a id="maxrotation"></a>

### `<Optional>` maxRotation

**● maxRotation**: *`number`*

*Defined in Component.ts:116*

最大初始旋转弧度。

*__default__*: 1

___
<a id="maxscale"></a>

### `<Optional>` maxScale

**● maxScale**: *`number`*

*Defined in Component.ts:104*

最大初始粒子缩放。

*__default__*: 1

___
<a id="maxsize"></a>

### `<Optional>` maxSize

**● maxSize**: *`number`*

*Defined in Component.ts:98*

最大初始粒子尺寸。

*__default__*: 10

___
<a id="maxvelocity"></a>

### `<Optional>` maxVelocity

**● maxVelocity**: *`number`*

*Defined in Component.ts:134*

最大初始速度，此速度是沿着初始方向的速度。

*__default__*: 1

___
<a id="maxworldacceleration"></a>

### `<Optional>` maxWorldAcceleration

**● maxWorldAcceleration**: *`Vector3`*

*Defined in Component.ts:170*

最大初始世界加速度。

*__default__*: \[0,0,0\]

___
<a id="minacceleration"></a>

### `<Optional>` minAcceleration

**● minAcceleration**: *`number`*

*Defined in Component.ts:158*

最小初始加速度，此加速度是沿着初始方向的加速度。

*__default__*: 0

___
<a id="minangularvelocity"></a>

### `<Optional>` minAngularVelocity

**● minAngularVelocity**: *`number`*

*Defined in Component.ts:140*

最小初始角速度。

*__default__*: 0

___
<a id="minborntime"></a>

### `<Optional>` minBornTime

**● minBornTime**: *`number`*

*Defined in Component.ts:68*

最小粒子出生延迟时间。

*__default__*: 0

___
<a id="minlifetime"></a>

### `<Optional>` minLifeTime

**● minLifeTime**: *`number`*

*Defined in Component.ts:80*

最小粒子生存周期。

*__default__*: 1

___
<a id="minrotation"></a>

### `<Optional>` minRotation

**● minRotation**: *`number`*

*Defined in Component.ts:122*

最小初始旋转弧度。

*__default__*: 0

___
<a id="minscale"></a>

### `<Optional>` minScale

**● minScale**: *`number`*

*Defined in Component.ts:110*

最小初始粒子缩放。

*__default__*: 1

___
<a id="minsize"></a>

### `<Optional>` minSize

**● minSize**: *`number`*

*Defined in Component.ts:92*

最小初始粒子尺寸。

*__default__*: 5

___
<a id="minvelocity"></a>

### `<Optional>` minVelocity

**● minVelocity**: *`number`*

*Defined in Component.ts:128*

最小初始速度，此速度是沿着初始方向的速度。

*__default__*: .5

___
<a id="minworldacceleration"></a>

### `<Optional>` minWorldAcceleration

**● minWorldAcceleration**: *`Vector3`*

*Defined in Component.ts:164*

最小初始世界加速度。

*__default__*: \[0,0,0\]

___
<a id="texture"></a>

### `<Optional>` texture

**● texture**: *`Texture`*

*Defined in Component.ts:44*

粒子的纹理，和`atlas`二选一。

*__default__*: null

___
<a id="trajectoryshader"></a>

### `<Optional>` trajectoryShader

**● trajectoryShader**: *`string`*

*Defined in Component.ts:226*

自定义轨迹Shader，你可以实现shader函数`getTrajectory`来自定义轨迹（每一帧粒子的位置）。

```ts
vec3 getTrajectory(
 float index,
 float deltaTime,
 float progress,
 vec3 position,
 vec3 direction,
 float velocity,
 float acceleration,
 vec3 worldAcceleration,
 vec4 noise
) {
 return position + (normalize(direction) * (velocity + acceleration * deltaTime) + worldAcceleration * deltaTime) * deltaTime;
}
```

___
<a id="updatespeed"></a>

### `<Optional>` updateSpeed

**● updateSpeed**: *`number`*

*Defined in Component.ts:32*

生成速度。

*__default__*: 0.01

___

