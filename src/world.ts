import {
    AmbientLight,
    AxesHelper,
    Clock,
    LoadingManager,
    Mesh,
    MeshStandardMaterial,
    PCFSoftShadowMap,
    PerspectiveCamera,
    PointLight,
    PointLightHelper,
    Scene,
    SphereGeometry,
    WebGLRenderer,
    TextureLoader,
    NearestFilter,
    Vector2,
    Raycaster,
    Material,
    ShaderMaterial
} from "three";
import * as THREE from "three"
import {Text} from 'troika-three-text'
import { DragControls } from 'three/examples/jsm/controls/DragControls'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Stats from 'three/examples/jsm/libs/stats.module'

import { toggleFullScreen } from './helpers/fullscreen'
import { resizeRendererToDisplaySize } from './helpers/responsiveness'
import './style.css'

import * as meshes from "./popuate"
import * as cameraUtils from "./cameraUtils"

import { System } from "./Models/System";

import celestialData from "./object_data.json"


class World {
    canvas: HTMLElement;
    renderer: WebGLRenderer;
    scene: Scene;
    loadingManager: LoadingManager;
    pointLight: THREE.PointLight;
    camera: PerspectiveCamera;
    cameraCtrl: OrbitControls;

    clickPointer: Vector2;
    raycaster: Raycaster;

    /**
     *
     */
    constructor() {
        // ===== 🖼️ CANVAS, RENDERER, & SCENE =====
        this.canvas = document.querySelector(`canvas#main`)!
        this.renderer = new WebGLRenderer({ canvas: this.canvas, antialias: true, alpha: true })
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        this.renderer.shadowMap.enabled = true
        this.renderer.shadowMap.type = PCFSoftShadowMap
        this.renderer.setClearColor( 0x000000 )
        this.scene = new Scene()

        // ===== 👨🏻‍💼 LOADING MANAGER =====
        this.loadingManager = new LoadingManager()

        this.loadingManager.onStart = () => {
        console.log('loading started')
        }
        this.loadingManager.onProgress = (url, loaded, total) => {
        console.log('loading in progress:')
        console.log(`${url} -> ${loaded} / ${total}`)
        }
        this.loadingManager.onLoad = () => {
        console.log('loaded!')
        }
        this.loadingManager.onError = () => {
        console.log('❌ error while loading')
        }

        // // ===== 💡 LIGHTS =====
        this.pointLight = new THREE.PointLight('#ffdca8', 10.2, 100)
        // this.pointLight.castShadow = true
        // this.pointLight.shadow.radius = 4
        // this.pointLight.shadow.camera.near = 0.5
        // this.pointLight.shadow.camera.far = 4000
        // this.pointLight.shadow.mapSize.width = 2048
        // this.pointLight.shadow.mapSize.height = 2048
        this.scene.add(this.pointLight)

        // ===== 🎥 CAMERA =====
        this.camera = new PerspectiveCamera(50, this.canvas.clientWidth / this.canvas.clientHeight, 0.1, 1000)
        this.camera.position.set(2, 2, 5)

        
        // ===== 🕹️ CONTROLS =====
        this.cameraCtrl = new OrbitControls(this.camera, this.canvas)
        this.cameraCtrl.enableDamping = true
        this.cameraCtrl.autoRotate = false
        this.cameraCtrl.update()

        this.initListeners()

        this.clickPointer = new Vector2(Infinity, Infinity)
        this.raycaster = new Raycaster()

        // this.populate()



        // const obj = this.scene.getObjectByName("yellowstone")
        // const objAtmo = this.scene.getObjectByName("yellowstone_atmo")
        // if (obj) {
        //     // const vec = ((objAtmo as Mesh).material as ShaderMaterial).uniforms.viewVector.value
        //     // const wu = vec.subVectors(this.camera.position, obj.getWorldPosition(obj.position));
        
        //     cameraUtils.setCameraTarget(obj, this.cameraCtrl)
        //     cameraUtils.jumpToTarget(obj, this.cameraCtrl)
        // }
    }

    populate(){
        meshes.build_yellowstone(this.scene)
        meshes.build_epsilon_eridani(this.scene)
    }

    initListeners(){
        const clickHandler = (event: MouseEvent) => {
            this.clickPointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
            this.clickPointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
        }

        window.addEventListener("dblclick", clickHandler);
    }
}


class Actions{
    world: World

    /**
     *
     */
    constructor() {
        this.world = new World()
    }

    dblclickTarget(){
        this.world.raycaster.setFromCamera( this.world.clickPointer, this.world.camera );
        const intersects = this.world.raycaster.intersectObjects( this.world.scene.children );
        this.world.clickPointer.set(Infinity, Infinity)

        if (intersects.length === 0) return null
        
        const obj = intersects[0].object
        if (obj.parent instanceof THREE.Group) return obj.parent
        
        return obj
    }

    updateVariables() {
        ((this.world.scene.getObjectByName("eridani") as Mesh).material as ShaderMaterial).uniforms.time.value += .01;

        const yellowstoneAtmo = (this.world.scene.getObjectByName("yellowstone_atmo") as Mesh)
        const vec = (yellowstoneAtmo.material as ShaderMaterial).uniforms.viewVector.value        
        yellowstoneAtmo.getWorldPosition(outWorldPosition)
        vec.subVectors(this.world.camera.position.clone(), outWorldPosition);
    }

    update() {
        let target = this.dblclickTarget()
        if (target) {
            // console.log(target)
            cameraUtils.setCameraTarget(target, this.world.cameraCtrl)
            cameraUtils.jumpToTarget(target, this.world.cameraCtrl)
        }

        if (resizeRendererToDisplaySize(this.world.renderer)) {
            const canvas = this.world.renderer.domElement
            this.world.camera.aspect = canvas.clientWidth / canvas.clientHeight
            this.world.camera.updateProjectionMatrix()
        }
    
        this.world.cameraCtrl.update()
        this.world.renderer.render(this.world.scene, this.world.camera)
    }
}

let outWorldPosition = new THREE.Vector3();
let lastTime:number;
let requiredElapsed = 1000 / 60; // desired interval is 60fps

function event_loop(now: number, X: Actions) {
    requestAnimationFrame((n) => event_loop(n, X))

    // delta time
    if (!lastTime) { lastTime = now; }
    const elapsed = now - lastTime;

    if (elapsed > requiredElapsed) {
        // TODO find nearest target and set as camera target
    
        X.updateVariables()
        X.update()
        lastTime = now;
    }
}

requestAnimationFrame((now)=>event_loop(now, new Actions()))
