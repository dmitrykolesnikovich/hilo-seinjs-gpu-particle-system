/**
 * @File   : Component.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 1/3/2019, 12:01:10 AM
 * @Description:
 */
import * as Sein from 'seinjs';
import IEmitter, {IParticleUniforms} from './emitter/IEmitter';

/**
 * `GPUParticleSystemComponent`的初始化参数类型。
 * **以下各项，类似`minXXX`和`maxXXX`形式的配置，若二者一致，则会大幅降低GPU计算量，可用于性能优化。**
 * 
 * @noInheritDoc
 */
export interface IComponentState extends Sein.ISceneComponentState {
  /**
   * 指定发射器，发射器用于生成粒子的初始化位置和朝向。
   */
  emitter: IEmitter;
  /**
   * 一批的粒子数量。
   * 
   * @default 200
   */
  count: number;
  /**
   * 生成速度。
   * 
   * @default 0.01
   */
  updateSpeed?: number;
  /**
   * 是否要自动开始生成。
   * 
   * @default true
   */
  autoStart?: boolean;
  /**
   * 粒子的纹理，和`atlas`二选一。
   * 
   * @default null
   */
  texture?: Sein.Texture;
  /**
   * 遮罩，通过透明通道控制粒子的增强。
   * 
   * @default null
   */
  mask?: Sein.Texture;
  /**
   * 粒子的图集，和`texture`二选一。若指定图集，则必须指定`frames`。
   * 
   * @default null
   */
  atlas?: Sein.AtlasManager;
  /**
   * 粒子的图集帧名集合，渲染时会随机选取其中的一帧来作为粒子的纹理。
   * 
   * @default []
   */
  frames?: string[];
  /**
   * 最小粒子出生延迟时间。
   * 
   * @default 0
   */
  minBornTime?: number;
  /**
   * 最大粒子出生延迟时间。
   * 
   * @default 0
   */
  maxBornTime?: number;
  /**
   * 最小粒子生存周期。
   * 
   * @default 1
   */
  minLifeTime?: number;
  /**
   * 最大粒子生存周期。
   * 
   * @default 2
   */
  maxLifeTime?: number;
  /**
   * 最小初始粒子尺寸。
   * 
   * @default 5
   */
  minSize?: number;
  /**
   * 最大初始粒子尺寸。
   * 
   * @default 10
   */
  maxSize?: number;
  /**
   * 最大初始粒子缩放。
   * 
   * @default 1
   */
  maxScale?: number;
  /**
   * 最小初始粒子缩放。
   * 
   * @default 1
   */
  minScale?: number;
  /**
   * 最大初始旋转弧度。
   * 
   * @default 1
   */
  maxRotation?: number;
  /**
   * 最小初始旋转弧度。
   * 
   * @default 0
   */
  minRotation?: number;
  /**
   * 最小初始速度，此速度是沿着初始方向的速度。
   * 
   * @default .5
   */
  minVelocity?: number;
  /**
   * 最大初始速度，此速度是沿着初始方向的速度。
   * 
   * @default 1
   */
  maxVelocity?: number;
  /**
   * 最小初始角速度。
   * 
   * @default 0
   */
  minAngularVelocity?: number;
  /**
   * 最大初始角速度。
   * 
   * @default 0
   */
  maxAngularVelocity?: number;
  /**
   * 最大初始加速度。
   * 
   * @default 0
   */
  maxAcceleration?: number;
  /**
   * 最小初始加速度，此加速度是沿着初始方向的加速度。
   * 
   * @default 0
   */
  minAcceleration?: number;
  /**
   * 最小初始世界加速度。
   * 
   * @default [0,0,0]
   */
  minWorldAcceleration?: Sein.Vector3;
  /**
   * 最大初始世界加速度。
   * 
   * @default [0,0,0]
   */
  maxWorldAcceleration?: Sein.Vector3;
  /**
   * 出生颜色的左边界。
   * 
   * @default [1,1,1,1]
   */
  bornColor1?: Sein.Color;
  /**
   * 出生颜色的右边界。
   * 
   * @default bornColor1
   */
  bornColor2?: Sein.Color;
  /**
   * 消亡颜色的左边界。
   * 
   * @default [bornColor1.r,bornColor1.g,bornColor1.b,0]
   */
  dieColor1?: Sein.Color;
  /**
   * 消亡颜色的右边界。
   * 
   * @default [bornColor2.r,bornColor2.g,bornColor2.b,0]
   */
  dieColor2?: Sein.Color;
  /**
   * 渲染模式。
   * 
   * @default 'BLEND'
   */
  alphaMode?: Sein.IShaderMaterialOptions['alphaMode'];
  /**
   * 是否要循环播放。
   * 
   * @default true
   */
  loop?: boolean;
  /**
   * 自定义轨迹Shader，你可以实现shader函数`getTrajectory`来自定义轨迹（每一帧粒子的位置）。
   * 
   * ```ts
   * vec3 getTrajectory(
   *  float index,
   *  float deltaTime,
   *  float progress,
   *  vec3 position,
   *  vec3 direction,
   *  float velocity,
   *  float acceleration,
   *  vec3 worldAcceleration,
   *  vec4 noise
   * ) {
   *  return position + (normalize(direction) * (velocity + acceleration * deltaTime) + worldAcceleration * deltaTime) * deltaTime;
   * }
   * ```
   */
  trajectoryShader?: string;
  /**
   * 自定义角度Shader，你可以实现shader函数`getAngularUVMat`来自定义角度变化（每一帧粒子的旋转）。
   * 
   * ```ts
   * vec3 getTrajectory(
   * float index,
   * float deltaTime,
   * float progress,
   * vec3 position,
   * vec3 direction,
   * float velocity,
   * float acceleration,
   * vec3 worldAcceleration,
   * vec4 noise
   * ) {
   * return position + (normalize(direction) * (velocity + acceleration * deltaTime) + worldAcceleration * deltaTime) * deltaTime;
   * }
   * ```
   */
  angularShader?: string;
  /**
   * 其他材质选项
   * 
   * @default null
   */
  materialOptions?: Sein.IMaterial;
}

/**
 * 基于GPU的例子系统组件，此系统完全使用GPU计算，通过参数进行初始化，并用一个`noise`的attribute来进行随机扰动。
 * 详细使用可以见官网的**GPU粒子系统**的引导。
 * 
 * @noInheritDoc
 */
@Sein.SClass({className: 'GPUParticleSystemComponent'})
export default class Component extends Sein.SceneComponent<IComponentState> {
  protected static defaultState: IComponentState = {
    emitter: null,
    count: 200,
    autoStart: true,
    updateSpeed: .01,
    texture: null,
    mask: null,
    maxBornTime: 0,
    minBornTime: 0,
    maxLifeTime: 2,
    minLifeTime: 1,
    maxSize: 10,
    minSize: 5,
    maxScale: 1,
    minScale: 1,
    maxRotation: 1,
    minRotation: 0,
    minVelocity: .5,
    maxVelocity: 1,
    minAngularVelocity: 0,
    maxAngularVelocity: 0,
    maxAcceleration: 0,
    minAcceleration: 0,
    minWorldAcceleration: new Sein.Vector3(0, 0, 0),
    maxWorldAcceleration: new Sein.Vector3(0, 0, 0),
    bornColor1: new Sein.Color(1, 1, 1, 1),
    bornColor2: null,
    dieColor1: null,
    dieColor2: null,
    loop: true,
    angularShader: `
mat2 getAngularUVMat(
  float index,
  float deltaTime,
  float progress,
  vec3 position,
  float rotation,
  float angularVelocity,
  vec4 noise
) {
  float finalRt = rotation + angularVelocity * deltaTime;
  return mat2(cos(finalRt), sin(finalRt), -sin(finalRt), cos(finalRt));
}
`,
    trajectoryShader: `
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
    `,
    alphaMode: 'BLEND',
    materialOptions: null
  };

  public isGPUParticleSystemComponent = true;

  protected _systemState: IComponentState = null;
  protected _list: {mesh: Sein.Mesh, lastBorn: number, lastDead: number, started: boolean}[] = [];
  protected _modified: {mat: boolean, geo: boolean[]} = {
    geo: [true, true],
    mat: true
  };
  protected _preGeometry: Sein.Geometry;
  protected _preMaterialOptions: Sein.IShaderMaterialOptions;
  protected _paused: boolean = false;

  /**
   * 初始化，继承请先`super.onInit()`。
   */
  public onInit(initState: IComponentState) {
    super.onInit(initState);

    this._systemState = Object.assign({}, Component.defaultState, initState);

    if (!this._systemState.dieColor1) {
      if (!this._systemState.bornColor2) {
        this._systemState.dieColor1 = this._systemState.bornColor1.clone();
        this._systemState.dieColor1.a = 0;
        this._systemState.dieColor2 = this._systemState.dieColor1;
      } else {
        this._systemState.dieColor1 = this._systemState.bornColor1.clone();
        this._systemState.dieColor1.a = 0;
        this._systemState.dieColor2 = this._systemState.bornColor2.clone();
        this._systemState.dieColor2.a = 0;
      }
    }

    if (!this._systemState.bornColor2) {
      this._systemState.bornColor2 = this._systemState.bornColor1;
    }

    if (!this._systemState.dieColor2) {
      this._systemState.dieColor2 = this._systemState.dieColor1;
    }

    this._systemState.emitter.system = this;
    this._paused = !this._systemState.autoStart;
  }

  /**
   * 添加到世界，继承请先`super.onAdd()`。
   */
  public onAdd() {
    const system1 = this.generateParticles(0);
    this._node.addChild(system1.mesh);
    this._list.push(system1);

    const system2 = this.generateParticles(1);
    system2.started = false;
    this._node.addChild(system2.mesh);
    this._list.push(system2);
  }

  /**
   * 每一帧更新，继承请先`super.onUpdate()`。
   */
  public onUpdate(delta: number) {
    if (this._paused) {
      return;
    }

    const dt = delta / 1000;

    this.updateOne(0, dt);
    this.updateOne(1, dt);
  }

  protected updateOne(index: number, dt: number) {
    const system = this._list[index];

    if (!system.started) {
      return;
    }

    const uTime = system.mesh.getMaterial<Sein.RawShaderMaterial>().getUniform<number>('u_time');
    if (uTime.value + dt > system.lastBorn) {
      this._list[1].started = true;
    }

    if (uTime.value > system.lastDead) {
      if (this._systemState.loop) {
        uTime.value = 0;
        if (this._modified.geo[index] || this._modified.mat) {
          this._node.removeChild(system.mesh);
          this._list[index] = this.generateParticles(index);
        }
      }
    } else {
      uTime.value += dt;
    }
  }

  /**
   * 销毁，继承请先`super.onUpdate()`。
   */
  public onDestroy() {
    this.stop();

    super.onDestroy();
  }

  /**
   * 设置某个配置，修改设置后将会根据状况重新生成`Geometry`或`Material`，**谨慎使用！**。
   */
  public setOption<Key extends keyof IComponentState>(key: Key, value: IComponentState[Key]) {
    this._systemState[key] = value;
    this._initState[key] = value;

    if (this._systemState[key] !== value) {
      if (key === 'count') {
        this._modified.geo.forEach((_, index) => {
          this._modified.geo[index] = true;
        });
      } else {
        this._modified.mat = true;
      }
    }

    this._systemState.emitter.system = this;
  }

  /**
   * 获取某个配置。
   */
  public getOption<Key extends keyof IComponentState>(key: Key): IComponentState[Key] {
    return this._systemState[key];
  }

  /**
   * 强制重新生成材质，**谨慎使用！**。
   */
  public forceModifyMat() {
    this._modified.mat = true;
  }

  /**
   * 开始生成。
   */
  public start() {
    this._paused = false;
    this._systemState.loop = this._initState.loop;
    this._list[0].mesh.getMaterial<Sein.RawShaderMaterial>().getUniform<number>('u_time').value = 0;
    this._list[1].started = false;
    this._list[1].mesh.getMaterial<Sein.RawShaderMaterial>().getUniform<number>('u_time').value = 0;
  }

  /**
   * 停止生成。
   */
  public stop() {
    this._paused = true;
    this._systemState.loop = false;
  }

  /**
   * 暂停生成。
   */
  public pause() {
    this._paused = true;
  }

  /**
   * 唤醒生成。
   */
  public resume() {
    this._paused = false;
  }

  protected generateParticles(index: number) {
    const state = this._systemState;
    const lifeStep = state.updateSpeed;

    let geometry: Sein.Geometry;
    let material: Sein.RawShaderMaterial;
    if (this._modified.geo[index]) {
      geometry = this.generateGeometry();
    } else {
      geometry = this._preGeometry;
    }

    if (this._modified.mat) {
      material = this.generateMaterial();
    } else {
      material = new Sein.RawShaderMaterial(this._preMaterialOptions);
      material.getUniform<number>('u_time').value = 0;
    }

    const mesh = new Sein.Mesh({geometry, material});

    this._modified.geo[index] = false;
    this._modified.mat = false;

    return {
      mesh,
      lastBorn: state.count * lifeStep / 2,
      lastDead: state.count * lifeStep / 2 + state.maxLifeTime,
      started: true
    };
  }

  protected generateGeometry(): Sein.Geometry {
    const state = this._systemState;
    const vertexCount = state.count / 2;

    // x, y, w, h
    const useAtlas = state.atlas && state.frames;
    let cell: Float32Array;
    if (useAtlas) {
      cell = new Float32Array(vertexCount * 4);
    }
    let frameCount: number;
    if (useAtlas) {
      frameCount = state.frames.length;
    }

    const vertices = new Float32Array(vertexCount * 3);
    const index = new Float32Array(vertexCount);
    const noise = new Float32Array(vertexCount * 4);

    for (let i = 0; i < vertexCount; i += 1) {
      index[i] = i;
      let idx = i * 3;

      vertices[idx] = 0;
      vertices[idx + 1] = 0;
      vertices[idx + 2] = 0;

      idx = i * 4;
      noise[idx] = Math.random();
      noise[idx + 1] = Math.random();
      noise[idx + 2] = Math.random();
      noise[idx + 3] = Math.random();

      if (useAtlas) {
        const {atlas, frames} = state;
        const {w, h} = atlas.meta.size;
        const frame = atlas.getFrame(frames[i % frameCount]);
        cell[idx] = frame.x / w;
        cell[idx + 1] = frame.y / h;
        cell[idx + 2] = frame.w / w;
        cell[idx + 3] = frame.h / h;
      }
    }

    const attributes: any = {
      vertices: new Sein.GeometryData(vertices, 3, null),
      index: new Sein.GeometryData(index, 1, null),
      noise: new Sein.GeometryData(noise, 4, null)
    };

    if (useAtlas) {
      attributes.cell = new Sein.GeometryData(cell, 4, null);
    }

    this._preGeometry = new Sein.Geometry(attributes);
    this._preGeometry.mode = Sein.Constants.POINTS;

    return this._preGeometry;
  }

  /* tslint:disable */
  protected generateMaterial(): Sein.RawShaderMaterial {
    const state = this._systemState;
    const lifeStep = state.updateSpeed;
    const useAtlas = state.atlas && state.frames;

    const uniforms: IParticleUniforms = {
      u_modelViewProjectionMatrix: 'MODELVIEWPROJECTION',
      u_time: {value: 0},
      u_lifeStep: {value: lifeStep},
      u_updateSpeed: {value: state.updateSpeed}
    } as any;
    const attributes: {[name: string]: Sein.IMaterialAttribute} = {
      a_index: {name: 'index'},
      a_noise: {name: 'noise'}
    };
    if (useAtlas) {
      attributes.a_cell = {name: 'cell'};
    }

    const emitterShaders = state.emitter.getShadersAndModifyUniforms(state.emitter._options, uniforms, state);

    let defines = emitterShaders.defines || '';
    let vs = `
precision HILO_MAX_VERTEX_PRECISION float;

attribute float a_index;
attribute vec4 a_noise;
${useAtlas ? 'attribute vec4 a_cell;' : ''}

uniform float u_time;
uniform float u_lifeStep;
uniform mat4 u_modelViewProjectionMatrix;

varying float v_progress;
varying vec4 v_noise;
varying mat2 v_uv;
${useAtlas ? 'varying vec4 v_cell;' : ''}
    `;
    let fs = `
precision HILO_MAX_FRAGMENT_PRECISION float;

varying mat2 v_uv;
varying vec4 v_noise;
varying float v_progress;
${useAtlas ? 'varying vec4 v_cell;' : ''}
    `;

    if (state.maxBornTime === state.minBornTime) {
      uniforms.u_maxBornTime = {value: state.maxBornTime};
      vs += `
uniform float u_maxBornTime;

float getBornTime(vec4 noise) {
  return u_maxBornTime;
}
`;
    } else {
      uniforms.u_maxBornTime = {value: state.maxBornTime};
      uniforms.u_minBornTime = {value: state.minBornTime};
      vs += `
uniform float u_maxBornTime;
uniform float u_minBornTime;

float getBornTime(vec4 noise) {
  return (u_maxBornTime - u_minBornTime)* noise[0] + u_minBornTime;
}
`;
    }

    if (state.maxLifeTime === state.minLifeTime) {
      uniforms.u_maxLifeTime = {value: state.maxLifeTime};
      vs += `
uniform float u_maxLifeTime;

float getLifeTime(vec4 noise) {
  return u_maxLifeTime;
}
`;
    } else {
      uniforms.u_maxLifeTime = {value: state.maxLifeTime};
      uniforms.u_minLifeTime = {value: state.minLifeTime};
      vs += `
uniform float u_maxLifeTime;
uniform float u_minLifeTime;

float getLifeTime(vec4 noise) {
  return (u_maxLifeTime - u_minLifeTime)* noise[1] + u_minLifeTime;
}
`;
    }

    if (state.minSize === state.maxSize) {
      uniforms.u_maxSize = {value: state.maxSize};
      vs += `
uniform float u_maxSize;

float getSize(vec4 noise) {
  return u_maxSize;
}
`;
    } else {
      uniforms.u_maxSize = {value: state.maxSize};
      uniforms.u_minSize = {value: state.minSize};
      vs += `
uniform float u_maxSize;
uniform float u_minSize;

float getSize(vec4 noise) {
  return (u_maxSize - u_minSize)* noise[2] + u_minSize;
}
`;
    }

    if (state.minScale === state.maxScale) {
      uniforms.u_maxScale = {value: state.maxScale};
      vs += `
uniform float u_maxScale;

float getScale(vec4 noise) {
  return u_maxScale;
}
`;
    } else {
      uniforms.u_maxScale = {value: state.maxScale};
      uniforms.u_minScale = {value: state.minScale};
      vs += `
uniform float u_maxScale;
uniform float u_minScale;

float getScale(vec4 noise) {
  return (u_maxScale - u_minScale)* noise[3] + u_minScale;
}
`;
    }

    if (state.minRotation === state.maxRotation) {
      uniforms.u_maxRotation = {value: state.maxRotation};
      vs += `
uniform float u_maxRotation;

float getRotation(vec4 noise) {
  return u_maxRotation;
}
`;
    } else {
      uniforms.u_maxRotation = {value: state.maxRotation};
      uniforms.u_minRotation = {value: state.minRotation};
      vs += `
uniform float u_maxRotation;
uniform float u_minRotation;

float getRotation(vec4 noise) {
  return (u_maxRotation - u_minRotation)* noise[0] + u_minRotation;
}
`;
    }

    if (state.minVelocity === state.maxVelocity) {
      uniforms.u_maxVelocity = {value: state.maxVelocity};
      vs += `
uniform float u_maxVelocity;

float getVelocity(vec4 noise) {
  return u_maxVelocity;
}
`;
    } else {
      uniforms.u_maxVelocity = {value: state.maxVelocity};
      uniforms.u_minVelocity = {value: state.minVelocity};
      vs += `
uniform float u_maxVelocity;
uniform float u_minVelocity;

float getVelocity(vec4 noise) {
  return (u_maxVelocity - u_minVelocity)* noise[1] + u_minVelocity;
}
`;
    }

    if (state.minAngularVelocity === state.maxAngularVelocity) {
      uniforms.u_maxAngularVelocity = {value: state.maxAngularVelocity};
      vs += `
uniform float u_maxAngularVelocity;

float getAngularVelocity(vec4 noise) {
  return u_maxAngularVelocity;
}
`;
    } else {
      uniforms.u_maxAngularVelocity = {value: state.maxAngularVelocity};
      uniforms.u_minAngularVelocity = {value: state.minAngularVelocity};
      vs += `
uniform float u_maxAngularVelocity;
uniform float u_minAngularVelocity;

float getAngularVelocity(vec4 noise) {
  return (u_maxAngularVelocity - u_minAngularVelocity)* noise[2] + u_minAngularVelocity;
}
`;
    }

    if (state.minAcceleration === state.maxAcceleration) {
      uniforms.u_maxAcceleration = {value: state.maxAcceleration};
      vs += `
uniform float u_maxAcceleration;

float getAcceleration(vec4 noise) {
  return u_maxAcceleration;
}
`;
    } else {
      uniforms.u_maxAcceleration = {value: state.maxAcceleration};
      uniforms.u_minAcceleration = {value: state.minAcceleration};
      vs += `
uniform float u_maxAcceleration;
uniform float u_minAcceleration;

float getAcceleration(vec4 noise) {
  return (u_maxAcceleration - u_minAcceleration)* noise[3] + u_minAcceleration;
}
`;
    }

    if (state.minWorldAcceleration.exactEquals(state.maxWorldAcceleration)) {
      uniforms.u_maxWorldAcceleration = {value: state.maxWorldAcceleration};
      vs += `
uniform vec3 u_maxWorldAcceleration;

vec3 getWorldAcceleration(vec4 noise) {
  return u_maxWorldAcceleration;
}
`;
    } else {
      uniforms.u_maxWorldAcceleration = {value: state.maxWorldAcceleration};
      uniforms.u_minWorldAcceleration = {value: state.minWorldAcceleration};
      vs += `
uniform vec3 u_maxWorldAcceleration;
uniform vec3 u_minWorldAcceleration;

vec3 getWorldAcceleration(vec4 noise) {
  return (u_maxWorldAcceleration - u_minWorldAcceleration)* noise[3] + u_minWorldAcceleration;
}
`;
    }

    if (state.bornColor1.exactEquals(state.bornColor2)) {
      uniforms.u_bornColor1 = {value: state.bornColor1};
      fs += `
uniform vec4 u_bornColor1;

vec4 getBornColor(vec4 noise) {
  return u_bornColor1;
}
`
    } else {
      uniforms.u_bornColor1 = {value: state.bornColor1};
      uniforms.u_bornColor2 = {value: state.bornColor2};
      fs += `
uniform vec4 u_bornColor1;
uniform vec4 u_bornColor2;

vec4 getBornColor(vec4 noise) {
  return (u_bornColor2 - u_bornColor1) * v_noise + u_bornColor1;
}
`
    }

    if (state.dieColor1.exactEquals(state.dieColor2)) {
      uniforms.u_dieColor1 = {value: state.dieColor1};
      fs += `
uniform vec4 u_dieColor1;

vec4 getDieColor(vec4 noise) {
  return u_dieColor1;
}
`
    } else {
      uniforms.u_dieColor1 = {value: state.dieColor1};
      uniforms.u_dieColor2 = {value: state.dieColor2};
      fs += `
uniform vec4 u_dieColor1;
uniform vec4 u_dieColor2;

vec4 getDieColor(vec4 noise) {
  return (u_dieColor2 - u_dieColor1) * v_noise + u_dieColor1;
}
`
    }

    if (state.mask) {
      uniforms.u_mask = {value: state.mask};
      fs += `
uniform sampler2D u_mask;
      `
    }

    if (useAtlas) {
      uniforms.u_texture = {value: state.atlas.getWholeTexture()};

      fs += `
uniform sampler2D u_texture;

vec4 getColor(vec4 noise) {
  vec4 bornColor = getBornColor(noise);
  vec4 dieColor = getDieColor(noise);
  vec4 color = (dieColor - bornColor) * v_progress + bornColor;
  vec2 uv = (v_uv * (gl_PointCoord - vec2(.5))) + vec2(.5);
  vec2 finalUV = uv * vec2(v_cell[2], v_cell[3]) + vec2(v_cell.x, v_cell.y);
  vec4 fColor = texture2D(u_texture, finalUV) * color;

  return ${state.mask ? 'vec4(fColor.rgb + texture2D(u_mask, uv).a, fColor.a)' : 'fColor'};
}
`
    } else if (state.texture) {
      uniforms.u_texture = {value: state.texture};
      fs += `
uniform sampler2D u_texture;

vec4 getColor(vec4 noise) {
  vec4 bornColor = getBornColor(noise);
  vec4 dieColor = getDieColor(noise);
  vec4 color = (dieColor - bornColor) * v_progress + bornColor;
  vec2 uv = (v_uv * (gl_PointCoord - vec2(.5))) + vec2(.5);
  vec4 fColor = texture2D(u_texture, uv) * color;

  return ${state.mask ? 'vec4(fColor.rgb + texture2D(u_mask, uv).a, fColor.a)' : 'fColor'};
}
`
    } else {
      fs += `
vec4 getColor(vec4 noise) {
  vec4 bornColor = getBornColor(noise);
  vec4 dieColor = getDieColor(noise);

  return ((dieColor - bornColor) * v_progress + bornColor)${state.mask ? ' * texture2D(u_mask, uv).a' : ''};
}
`
    }

    vs = defines + vs + state.trajectoryShader + state.angularShader + emitterShaders.vs + `
void main() {
  vec4 noise = a_noise;
  float bornTime = a_index * u_lifeStep + getBornTime(noise);
  float lifeTime = getLifeTime(noise);
  float deltaTime = max(u_time - bornTime, 0.);
  float progress = min(deltaTime / lifeTime, 1.);

  float size = getSize(noise);
  float scale = getScale(noise);
  float rotation = getRotation(noise);
  vec3 position = getPosition(noise);
  vec3 direction = getDirection(noise, position);
  float velocity = getVelocity(noise);
  float angularVelocity = getAngularVelocity(noise);
  float acceleration = getAcceleration(noise);
  vec3 worldAcceleration = getWorldAcceleration(noise);
  
  vec3 finalPos = getTrajectory(a_index, deltaTime, progress, position, direction, velocity, acceleration, worldAcceleration, noise);
  v_uv = getAngularUVMat(a_index, deltaTime, progress, finalPos, rotation, angularVelocity, noise);

  v_progress = progress;
  v_noise = noise;
  gl_Position = u_modelViewProjectionMatrix * vec4(finalPos, 1.0);
  gl_PointSize = size * (progress * (scale - 1.) + 1.);
  ${useAtlas ? 'v_cell = a_cell;' : ''}
}
    `;

    fs = defines + fs + `
void main() {
  vec4 color = getColor(v_noise);

  if (v_progress < .1) {
    color.a *= v_progress * 10.;
  }

  gl_FragColor = color;
}
    `;

    this._preMaterialOptions = {
      attributes,
      uniforms,
      vs,
      fs,
      alphaMode: state.alphaMode,
      ...state.materialOptions
    } as any;

    return new Sein.RawShaderMaterial(this._preMaterialOptions);
  }
  /* tslint:enable */
}
