[seinjs-gpu-particle-system](../README.md) > [IWindEmitterUniforms](../interfaces/iwindemitteruniforms.md)

# Interface: IWindEmitterUniforms

`WindEmitter`的追加uniforms。

## Hierarchy

 [IParticleUniforms](iparticleuniforms.md)

**↳ IWindEmitterUniforms**

↳  [IWindEmitterUniforms](_seinjs_.gpuparticlesystem.iwindemitteruniforms.md)

## Index

### Properties

* [u_direction](iwindemitteruniforms.md#u_direction)
* [u_planeLeftTop](iwindemitteruniforms.md#u_planelefttop)
* [u_planeRightBottom](iwindemitteruniforms.md#u_planerightbottom)

---

## Properties

<a id="u_direction"></a>

###  u_direction

**● u_direction**: *`object`*

*Defined in emitter/WindEmitter.ts:45*

风场方向，决定粒子的运动方向的uniform。

#### Type declaration

 value: `Vector3`

___
<a id="u_planelefttop"></a>

###  u_planeLeftTop

**● u_planeLeftTop**: *`object`*

*Defined in emitter/WindEmitter.ts:37*

粒子生成盒范围的左上角顶点的uniform。

#### Type declaration

 value: `Vector3`

___
<a id="u_planerightbottom"></a>

###  u_planeRightBottom

**● u_planeRightBottom**: *`object`*

*Defined in emitter/WindEmitter.ts:41*

粒子生成盒范围的右下角顶点的uniform。

#### Type declaration

 value: `Vector3`

___

