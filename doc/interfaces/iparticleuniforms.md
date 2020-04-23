[seinjs-gpu-particle-system](../README.md) > [IParticleUniforms](../interfaces/iparticleuniforms.md)

# Interface: IParticleUniforms

粒子系统的默认uniforms。一般不需要自己处理。 每个uniform的含义可见[IComponentState](../interfaces/icomponentstate)中对应的配置项。

## Hierarchy

**IParticleUniforms**

↳  [ICircleEmitterUniforms](icircleemitteruniforms.md)

↳  [IConeEmitterUniforms](iconeemitteruniforms.md)

↳  [IEdgeEmitterUniforms](iedgeemitteruniforms.md)

↳  [IHemisphericEmitterUniforms](ihemisphericemitteruniforms.md)

↳  [IRectangleEmitterUniforms](irectangleemitteruniforms.md)

↳  [ISphereEmitterUniforms](isphereemitteruniforms.md)

↳  [IWindEmitterUniforms](iwindemitteruniforms.md)

↳  [IParticleUniforms](_seinjs_.gpuparticlesystem.iparticleuniforms.md)

## Index

### Properties

* [u_bornColor1](iparticleuniforms.md#u_borncolor1)
* [u_bornColor2](iparticleuniforms.md#u_borncolor2)
* [u_dieColor1](iparticleuniforms.md#u_diecolor1)
* [u_dieColor2](iparticleuniforms.md#u_diecolor2)
* [u_lifeStep](iparticleuniforms.md#u_lifestep)
* [u_mask](iparticleuniforms.md#u_mask)
* [u_maxAcceleration](iparticleuniforms.md#u_maxacceleration)
* [u_maxAngularVelocity](iparticleuniforms.md#u_maxangularvelocity)
* [u_maxBornTime](iparticleuniforms.md#u_maxborntime)
* [u_maxLifeTime](iparticleuniforms.md#u_maxlifetime)
* [u_maxRotation](iparticleuniforms.md#u_maxrotation)
* [u_maxScale](iparticleuniforms.md#u_maxscale)
* [u_maxSize](iparticleuniforms.md#u_maxsize)
* [u_maxVelocity](iparticleuniforms.md#u_maxvelocity)
* [u_maxWorldAcceleration](iparticleuniforms.md#u_maxworldacceleration)
* [u_minAcceleration](iparticleuniforms.md#u_minacceleration)
* [u_minAngularVelocity](iparticleuniforms.md#u_minangularvelocity)
* [u_minBornTime](iparticleuniforms.md#u_minborntime)
* [u_minLifeTime](iparticleuniforms.md#u_minlifetime)
* [u_minRotation](iparticleuniforms.md#u_minrotation)
* [u_minScale](iparticleuniforms.md#u_minscale)
* [u_minSize](iparticleuniforms.md#u_minsize)
* [u_minVelocity](iparticleuniforms.md#u_minvelocity)
* [u_minWorldAcceleration](iparticleuniforms.md#u_minworldacceleration)
* [u_modelViewProjectionMatrix](iparticleuniforms.md#u_modelviewprojectionmatrix)
* [u_texture](iparticleuniforms.md#u_texture)
* [u_time](iparticleuniforms.md#u_time)
* [u_updateSpeed](iparticleuniforms.md#u_updatespeed)

---

## Properties

<a id="u_borncolor1"></a>

### `<Optional>` u_bornColor1

**● u_bornColor1**: *`object`*

*Defined in emitter/IEmitter.ts:39*

#### Type declaration

 value: `Color`

___
<a id="u_borncolor2"></a>

### `<Optional>` u_bornColor2

**● u_bornColor2**: *`object`*

*Defined in emitter/IEmitter.ts:40*

#### Type declaration

 value: `Color`

___
<a id="u_diecolor1"></a>

### `<Optional>` u_dieColor1

**● u_dieColor1**: *`object`*

*Defined in emitter/IEmitter.ts:41*

#### Type declaration

 value: `Color`

___
<a id="u_diecolor2"></a>

### `<Optional>` u_dieColor2

**● u_dieColor2**: *`object`*

*Defined in emitter/IEmitter.ts:42*

#### Type declaration

 value: `Color`

___
<a id="u_lifestep"></a>

###  u_lifeStep

**● u_lifeStep**: *`object`*

*Defined in emitter/IEmitter.ts:16*

#### Type declaration

 value: `number`

___
<a id="u_mask"></a>

### `<Optional>` u_mask

**● u_mask**: *`object`*

*Defined in emitter/IEmitter.ts:20*

#### Type declaration

 value: `Texture`

___
<a id="u_maxacceleration"></a>

###  u_maxAcceleration

**● u_maxAcceleration**: *`object`*

*Defined in emitter/IEmitter.ts:36*

#### Type declaration

 value: `number`

___
<a id="u_maxangularvelocity"></a>

###  u_maxAngularVelocity

**● u_maxAngularVelocity**: *`object`*

*Defined in emitter/IEmitter.ts:34*

#### Type declaration

 value: `number`

___
<a id="u_maxborntime"></a>

###  u_maxBornTime

**● u_maxBornTime**: *`object`*

*Defined in emitter/IEmitter.ts:22*

#### Type declaration

 value: `number`

___
<a id="u_maxlifetime"></a>

###  u_maxLifeTime

**● u_maxLifeTime**: *`object`*

*Defined in emitter/IEmitter.ts:24*

#### Type declaration

 value: `number`

___
<a id="u_maxrotation"></a>

###  u_maxRotation

**● u_maxRotation**: *`object`*

*Defined in emitter/IEmitter.ts:29*

#### Type declaration

 value: `number`

___
<a id="u_maxscale"></a>

###  u_maxScale

**● u_maxScale**: *`object`*

*Defined in emitter/IEmitter.ts:27*

#### Type declaration

 value: `number`

___
<a id="u_maxsize"></a>

###  u_maxSize

**● u_maxSize**: *`object`*

*Defined in emitter/IEmitter.ts:26*

#### Type declaration

 value: `number`

___
<a id="u_maxvelocity"></a>

###  u_maxVelocity

**● u_maxVelocity**: *`object`*

*Defined in emitter/IEmitter.ts:32*

#### Type declaration

 value: `number`

___
<a id="u_maxworldacceleration"></a>

###  u_maxWorldAcceleration

**● u_maxWorldAcceleration**: *`object`*

*Defined in emitter/IEmitter.ts:38*

#### Type declaration

 value: `Vector3`

___
<a id="u_minacceleration"></a>

###  u_minAcceleration

**● u_minAcceleration**: *`object`*

*Defined in emitter/IEmitter.ts:35*

#### Type declaration

 value: `number`

___
<a id="u_minangularvelocity"></a>

###  u_minAngularVelocity

**● u_minAngularVelocity**: *`object`*

*Defined in emitter/IEmitter.ts:33*

#### Type declaration

 value: `number`

___
<a id="u_minborntime"></a>

###  u_minBornTime

**● u_minBornTime**: *`object`*

*Defined in emitter/IEmitter.ts:21*

#### Type declaration

 value: `number`

___
<a id="u_minlifetime"></a>

###  u_minLifeTime

**● u_minLifeTime**: *`object`*

*Defined in emitter/IEmitter.ts:23*

#### Type declaration

 value: `number`

___
<a id="u_minrotation"></a>

###  u_minRotation

**● u_minRotation**: *`object`*

*Defined in emitter/IEmitter.ts:30*

#### Type declaration

 value: `number`

___
<a id="u_minscale"></a>

###  u_minScale

**● u_minScale**: *`object`*

*Defined in emitter/IEmitter.ts:28*

#### Type declaration

 value: `number`

___
<a id="u_minsize"></a>

###  u_minSize

**● u_minSize**: *`object`*

*Defined in emitter/IEmitter.ts:25*

#### Type declaration

 value: `number`

___
<a id="u_minvelocity"></a>

###  u_minVelocity

**● u_minVelocity**: *`object`*

*Defined in emitter/IEmitter.ts:31*

#### Type declaration

 value: `number`

___
<a id="u_minworldacceleration"></a>

###  u_minWorldAcceleration

**● u_minWorldAcceleration**: *`object`*

*Defined in emitter/IEmitter.ts:37*

#### Type declaration

 value: `Vector3`

___
<a id="u_modelviewprojectionmatrix"></a>

###  u_modelViewProjectionMatrix

**● u_modelViewProjectionMatrix**: *"MODELVIEWPROJECTION"*

*Defined in emitter/IEmitter.ts:15*

___
<a id="u_texture"></a>

### `<Optional>` u_texture

**● u_texture**: *`object`*

*Defined in emitter/IEmitter.ts:19*

#### Type declaration

 value: `Texture`

___
<a id="u_time"></a>

###  u_time

**● u_time**: *`object`*

*Defined in emitter/IEmitter.ts:17*

#### Type declaration

 value: `number`

___
<a id="u_updatespeed"></a>

###  u_updateSpeed

**● u_updateSpeed**: *`object`*

*Defined in emitter/IEmitter.ts:18*

#### Type declaration

 value: `number`

___

