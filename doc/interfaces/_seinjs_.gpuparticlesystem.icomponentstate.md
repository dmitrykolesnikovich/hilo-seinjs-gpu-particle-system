[seinjs-gpu-particle-system](../README.md) > ["seinjs"](../modules/_seinjs_.md) > [GPUParticleSystem](../modules/_seinjs_.gpuparticlesystem.md) > [IComponentState](../interfaces/_seinjs_.gpuparticlesystem.icomponentstate.md)

# Interface: IComponentState

## Hierarchy

↳  [IComponentState](icomponentstate.md)

**↳ IComponentState**

## Index

### Properties

* [alphaMode](_seinjs_.gpuparticlesystem.icomponentstate.md#alphamode)
* [angularShader](_seinjs_.gpuparticlesystem.icomponentstate.md#angularshader)
* [atlas](_seinjs_.gpuparticlesystem.icomponentstate.md#atlas)
* [autoStart](_seinjs_.gpuparticlesystem.icomponentstate.md#autostart)
* [bornColor1](_seinjs_.gpuparticlesystem.icomponentstate.md#borncolor1)
* [bornColor2](_seinjs_.gpuparticlesystem.icomponentstate.md#borncolor2)
* [count](_seinjs_.gpuparticlesystem.icomponentstate.md#count)
* [dieColor1](_seinjs_.gpuparticlesystem.icomponentstate.md#diecolor1)
* [dieColor2](_seinjs_.gpuparticlesystem.icomponentstate.md#diecolor2)
* [emitter](_seinjs_.gpuparticlesystem.icomponentstate.md#emitter)
* [frames](_seinjs_.gpuparticlesystem.icomponentstate.md#frames)
* [loop](_seinjs_.gpuparticlesystem.icomponentstate.md#loop)
* [mask](_seinjs_.gpuparticlesystem.icomponentstate.md#mask)
* [materialOptions](_seinjs_.gpuparticlesystem.icomponentstate.md#materialoptions)
* [maxAcceleration](_seinjs_.gpuparticlesystem.icomponentstate.md#maxacceleration)
* [maxAngularVelocity](_seinjs_.gpuparticlesystem.icomponentstate.md#maxangularvelocity)
* [maxBornTime](_seinjs_.gpuparticlesystem.icomponentstate.md#maxborntime)
* [maxLifeTime](_seinjs_.gpuparticlesystem.icomponentstate.md#maxlifetime)
* [maxRotation](_seinjs_.gpuparticlesystem.icomponentstate.md#maxrotation)
* [maxScale](_seinjs_.gpuparticlesystem.icomponentstate.md#maxscale)
* [maxSize](_seinjs_.gpuparticlesystem.icomponentstate.md#maxsize)
* [maxVelocity](_seinjs_.gpuparticlesystem.icomponentstate.md#maxvelocity)
* [maxWorldAcceleration](_seinjs_.gpuparticlesystem.icomponentstate.md#maxworldacceleration)
* [minAcceleration](_seinjs_.gpuparticlesystem.icomponentstate.md#minacceleration)
* [minAngularVelocity](_seinjs_.gpuparticlesystem.icomponentstate.md#minangularvelocity)
* [minBornTime](_seinjs_.gpuparticlesystem.icomponentstate.md#minborntime)
* [minLifeTime](_seinjs_.gpuparticlesystem.icomponentstate.md#minlifetime)
* [minRotation](_seinjs_.gpuparticlesystem.icomponentstate.md#minrotation)
* [minScale](_seinjs_.gpuparticlesystem.icomponentstate.md#minscale)
* [minSize](_seinjs_.gpuparticlesystem.icomponentstate.md#minsize)
* [minVelocity](_seinjs_.gpuparticlesystem.icomponentstate.md#minvelocity)
* [minWorldAcceleration](_seinjs_.gpuparticlesystem.icomponentstate.md#minworldacceleration)
* [texture](_seinjs_.gpuparticlesystem.icomponentstate.md#texture)
* [trajectoryShader](_seinjs_.gpuparticlesystem.icomponentstate.md#trajectoryshader)
* [updateSpeed](_seinjs_.gpuparticlesystem.icomponentstate.md#updatespeed)

---

## Properties

<a id="alphamode"></a>

### `<Optional>` alphaMode

**● alphaMode**: *"BLEND" \| "MASK" \| "OPAQUE"*

*Inherited from [IComponentState](icomponentstate.md).[alphaMode](icomponentstate.md#alphamode)*

*Defined in Component.ts:200*

渲染模式。

*__default__*: 'BLEND'

___
<a id="angularshader"></a>

### `<Optional>` angularShader

**● angularShader**: *`string`*

*Inherited from [IComponentState](icomponentstate.md).[angularShader](icomponentstate.md#angularshader)*

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

*Inherited from [IComponentState](icomponentstate.md).[atlas](icomponentstate.md#atlas)*

*Defined in Component.ts:56*

粒子的图集，和`texture`二选一。若指定图集，则必须指定`frames`。

*__default__*: null

___
<a id="autostart"></a>

### `<Optional>` autoStart

**● autoStart**: *`boolean`*

*Inherited from [IComponentState](icomponentstate.md).[autoStart](icomponentstate.md#autostart)*

*Defined in Component.ts:38*

是否要自动开始生成。

*__default__*: true

___
<a id="borncolor1"></a>

### `<Optional>` bornColor1

**● bornColor1**: *`Color`*

*Inherited from [IComponentState](icomponentstate.md).[bornColor1](icomponentstate.md#borncolor1)*

*Defined in Component.ts:176*

出生颜色的左边界。

*__default__*: \[1,1,1,1\]

___
<a id="borncolor2"></a>

### `<Optional>` bornColor2

**● bornColor2**: *`Color`*

*Inherited from [IComponentState](icomponentstate.md).[bornColor2](icomponentstate.md#borncolor2)*

*Defined in Component.ts:182*

出生颜色的右边界。

*__default__*: bornColor1

___
<a id="count"></a>

###  count

**● count**: *`number`*

*Inherited from [IComponentState](icomponentstate.md).[count](icomponentstate.md#count)*

*Defined in Component.ts:26*

一批的粒子数量。

*__default__*: 200

___
<a id="diecolor1"></a>

### `<Optional>` dieColor1

**● dieColor1**: *`Color`*

*Inherited from [IComponentState](icomponentstate.md).[dieColor1](icomponentstate.md#diecolor1)*

*Defined in Component.ts:188*

消亡颜色的左边界。

*__default__*: \[bornColor1.r,bornColor1.g,bornColor1.b,0\]

___
<a id="diecolor2"></a>

### `<Optional>` dieColor2

**● dieColor2**: *`Color`*

*Inherited from [IComponentState](icomponentstate.md).[dieColor2](icomponentstate.md#diecolor2)*

*Defined in Component.ts:194*

消亡颜色的右边界。

*__default__*: \[bornColor2.r,bornColor2.g,bornColor2.b,0\]

___
<a id="emitter"></a>

###  emitter

**● emitter**: *[IEmitter](iemitter.md)*

*Inherited from [IComponentState](icomponentstate.md).[emitter](icomponentstate.md#emitter)*

*Defined in Component.ts:20*

指定发射器，发射器用于生成粒子的初始化位置和朝向。

___
<a id="frames"></a>

### `<Optional>` frames

**● frames**: *`string`[]*

*Inherited from [IComponentState](icomponentstate.md).[frames](icomponentstate.md#frames)*

*Defined in Component.ts:62*

粒子的图集帧名集合，渲染时会随机选取其中的一帧来作为粒子的纹理。

*__default__*: \[\]

___
<a id="loop"></a>

### `<Optional>` loop

**● loop**: *`boolean`*

*Inherited from [IComponentState](icomponentstate.md).[loop](icomponentstate.md#loop)*

*Defined in Component.ts:206*

是否要循环播放。

*__default__*: true

___
<a id="mask"></a>

### `<Optional>` mask

**● mask**: *`Texture`*

*Inherited from [IComponentState](icomponentstate.md).[mask](icomponentstate.md#mask)*

*Defined in Component.ts:50*

遮罩，通过透明通道控制粒子的增强。

*__default__*: null

___
<a id="materialoptions"></a>

### `<Optional>` materialOptions

**● materialOptions**: *`IMaterial`*

*Inherited from [IComponentState](icomponentstate.md).[materialOptions](icomponentstate.md#materialoptions)*

*Defined in Component.ts:252*

其他材质选项

*__default__*: null

___
<a id="maxacceleration"></a>

### `<Optional>` maxAcceleration

**● maxAcceleration**: *`number`*

*Inherited from [IComponentState](icomponentstate.md).[maxAcceleration](icomponentstate.md#maxacceleration)*

*Defined in Component.ts:152*

最大初始加速度。

*__default__*: 0

___
<a id="maxangularvelocity"></a>

### `<Optional>` maxAngularVelocity

**● maxAngularVelocity**: *`number`*

*Inherited from [IComponentState](icomponentstate.md).[maxAngularVelocity](icomponentstate.md#maxangularvelocity)*

*Defined in Component.ts:146*

最大初始角速度。

*__default__*: 0

___
<a id="maxborntime"></a>

### `<Optional>` maxBornTime

**● maxBornTime**: *`number`*

*Inherited from [IComponentState](icomponentstate.md).[maxBornTime](icomponentstate.md#maxborntime)*

*Defined in Component.ts:74*

最大粒子出生延迟时间。

*__default__*: 0

___
<a id="maxlifetime"></a>

### `<Optional>` maxLifeTime

**● maxLifeTime**: *`number`*

*Inherited from [IComponentState](icomponentstate.md).[maxLifeTime](icomponentstate.md#maxlifetime)*

*Defined in Component.ts:86*

最大粒子生存周期。

*__default__*: 2

___
<a id="maxrotation"></a>

### `<Optional>` maxRotation

**● maxRotation**: *`number`*

*Inherited from [IComponentState](icomponentstate.md).[maxRotation](icomponentstate.md#maxrotation)*

*Defined in Component.ts:116*

最大初始旋转弧度。

*__default__*: 1

___
<a id="maxscale"></a>

### `<Optional>` maxScale

**● maxScale**: *`number`*

*Inherited from [IComponentState](icomponentstate.md).[maxScale](icomponentstate.md#maxscale)*

*Defined in Component.ts:104*

最大初始粒子缩放。

*__default__*: 1

___
<a id="maxsize"></a>

### `<Optional>` maxSize

**● maxSize**: *`number`*

*Inherited from [IComponentState](icomponentstate.md).[maxSize](icomponentstate.md#maxsize)*

*Defined in Component.ts:98*

最大初始粒子尺寸。

*__default__*: 10

___
<a id="maxvelocity"></a>

### `<Optional>` maxVelocity

**● maxVelocity**: *`number`*

*Inherited from [IComponentState](icomponentstate.md).[maxVelocity](icomponentstate.md#maxvelocity)*

*Defined in Component.ts:134*

最大初始速度，此速度是沿着初始方向的速度。

*__default__*: 1

___
<a id="maxworldacceleration"></a>

### `<Optional>` maxWorldAcceleration

**● maxWorldAcceleration**: *`Vector3`*

*Inherited from [IComponentState](icomponentstate.md).[maxWorldAcceleration](icomponentstate.md#maxworldacceleration)*

*Defined in Component.ts:170*

最大初始世界加速度。

*__default__*: \[0,0,0\]

___
<a id="minacceleration"></a>

### `<Optional>` minAcceleration

**● minAcceleration**: *`number`*

*Inherited from [IComponentState](icomponentstate.md).[minAcceleration](icomponentstate.md#minacceleration)*

*Defined in Component.ts:158*

最小初始加速度，此加速度是沿着初始方向的加速度。

*__default__*: 0

___
<a id="minangularvelocity"></a>

### `<Optional>` minAngularVelocity

**● minAngularVelocity**: *`number`*

*Inherited from [IComponentState](icomponentstate.md).[minAngularVelocity](icomponentstate.md#minangularvelocity)*

*Defined in Component.ts:140*

最小初始角速度。

*__default__*: 0

___
<a id="minborntime"></a>

### `<Optional>` minBornTime

**● minBornTime**: *`number`*

*Inherited from [IComponentState](icomponentstate.md).[minBornTime](icomponentstate.md#minborntime)*

*Defined in Component.ts:68*

最小粒子出生延迟时间。

*__default__*: 0

___
<a id="minlifetime"></a>

### `<Optional>` minLifeTime

**● minLifeTime**: *`number`*

*Inherited from [IComponentState](icomponentstate.md).[minLifeTime](icomponentstate.md#minlifetime)*

*Defined in Component.ts:80*

最小粒子生存周期。

*__default__*: 1

___
<a id="minrotation"></a>

### `<Optional>` minRotation

**● minRotation**: *`number`*

*Inherited from [IComponentState](icomponentstate.md).[minRotation](icomponentstate.md#minrotation)*

*Defined in Component.ts:122*

最小初始旋转弧度。

*__default__*: 0

___
<a id="minscale"></a>

### `<Optional>` minScale

**● minScale**: *`number`*

*Inherited from [IComponentState](icomponentstate.md).[minScale](icomponentstate.md#minscale)*

*Defined in Component.ts:110*

最小初始粒子缩放。

*__default__*: 1

___
<a id="minsize"></a>

### `<Optional>` minSize

**● minSize**: *`number`*

*Inherited from [IComponentState](icomponentstate.md).[minSize](icomponentstate.md#minsize)*

*Defined in Component.ts:92*

最小初始粒子尺寸。

*__default__*: 5

___
<a id="minvelocity"></a>

### `<Optional>` minVelocity

**● minVelocity**: *`number`*

*Inherited from [IComponentState](icomponentstate.md).[minVelocity](icomponentstate.md#minvelocity)*

*Defined in Component.ts:128*

最小初始速度，此速度是沿着初始方向的速度。

*__default__*: .5

___
<a id="minworldacceleration"></a>

### `<Optional>` minWorldAcceleration

**● minWorldAcceleration**: *`Vector3`*

*Inherited from [IComponentState](icomponentstate.md).[minWorldAcceleration](icomponentstate.md#minworldacceleration)*

*Defined in Component.ts:164*

最小初始世界加速度。

*__default__*: \[0,0,0\]

___
<a id="texture"></a>

### `<Optional>` texture

**● texture**: *`Texture`*

*Inherited from [IComponentState](icomponentstate.md).[texture](icomponentstate.md#texture)*

*Defined in Component.ts:44*

粒子的纹理，和`atlas`二选一。

*__default__*: null

___
<a id="trajectoryshader"></a>

### `<Optional>` trajectoryShader

**● trajectoryShader**: *`string`*

*Inherited from [IComponentState](icomponentstate.md).[trajectoryShader](icomponentstate.md#trajectoryshader)*

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

*Inherited from [IComponentState](icomponentstate.md).[updateSpeed](icomponentstate.md#updatespeed)*

*Defined in Component.ts:32*

生成速度。

*__default__*: 0.01

___

