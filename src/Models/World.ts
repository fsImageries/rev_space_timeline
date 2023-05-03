import * as THREE from "three"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import * as cameraUtils from "../helpers/cameraUtils"
import { resizeRendererToDisplaySize } from './../helpers/responsiveness'
import { System } from "./System";


let lastTime:number;
let requiredElapsed = 1000 / 60; // desired interval is 60fps

export class World {
    canvas: HTMLElement;
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    loadingManager: THREE.LoadingManager;
    camera: THREE.PerspectiveCamera;
    cameraCtrl: OrbitControls;
    clock: THREE.Clock;
    delta: number;

    clickPointer: THREE.Vector2;
    raycaster: THREE.Raycaster;
    followTarget?: THREE.Object3D;

    systems: System[];
    curSystem: System;

    /**
     *
     */
    constructor(system:System) {
        // ===== 🖼️ CANVAS, RENDERER, & SCENE =====
        this.canvas = document.querySelector(`canvas#main`)!
        this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, alpha: true })
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        this.renderer.shadowMap.enabled = true
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
        this.renderer.setClearColor( 0x000000 )
        this.scene = new THREE.Scene()

        // ===== 👨🏻‍💼 LOADING MANAGER =====
        this.loadingManager = new THREE.LoadingManager()

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

        // ===== 🎥 CAMERA =====
        this.camera = new THREE.PerspectiveCamera(30, this.canvas.clientWidth / this.canvas.clientHeight, 0.1, 100_000_000)
        
        // ===== 🕹️ CONTROLS =====
        this.cameraCtrl = new OrbitControls(this.camera, this.canvas)
        this.cameraCtrl.enableDamping = true
        this.cameraCtrl.autoRotate = false
        this.cameraCtrl.update()

        this.clock = new THREE.Clock()
        this.delta = 0;

        this.initListeners()

        this.clickPointer = new THREE.Vector2(Infinity, Infinity)
        this.raycaster = new THREE.Raycaster()

        // const obj = this.scene.getObjectByName("yellowstone")
        // const objAtmo = this.scene.getObjectByName("yellowstone_atmo")
        // if (obj) {
        //     // const vec = ((objAtmo as Mesh).material as ShaderMaterial).uniforms.viewVector.value
        //     // const wu = vec.subVectors(this.camera.position, obj.getWorldPosition(obj.position));
        
        //     cameraUtils.setCameraTarget(obj, this.cameraCtrl)
        //     cameraUtils.jumpToTarget(obj, this.cameraCtrl)
        // }

        // ===== 💡 LIGHTS =====
        // const pointLight = new THREE.PointLight('#ffdca8', 10.2, 100)
        const pointLight = new THREE.PointLight('#ffffff', 1, 100000)
        pointLight.castShadow = true
        pointLight.shadow.radius = 4
        pointLight.shadow.camera.near = 0.5
        pointLight.shadow.camera.far = 100000
        pointLight.shadow.mapSize.width = 2048
        pointLight.shadow.mapSize.height = 2048
        this.scene.add(pointLight)

        const pointLight2 = new THREE.AmbientLight('#ffdca8', 0.1)
        this.scene.add(pointLight2)

        this.curSystem = system
        this.systems = [system]
    }

    initListeners(){
        const clickHandler = (event: MouseEvent) => {
            this.clickPointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
            this.clickPointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

            this.followTarget = this.dblclickTarget()
        }

        const mousemoveHandler = (_: MouseEvent) => {
            console.log("mousemove gefeuert")
            this.followTarget = undefined
        }

        window.addEventListener("dblclick", clickHandler);
        window.addEventListener("mousedown", mousemoveHandler)
    }

    dblclickTarget(){
        this.raycaster.setFromCamera( this.clickPointer, this.camera );
        const intersects = this.raycaster.intersectObjects( this.scene.children );
        this.clickPointer.set(Infinity, Infinity)

        if (intersects.length === 0) return
        
        const obj = intersects[0].object
        return cameraUtils.getRootParent(obj)
    }

    update() {
        if (this.followTarget) {
            // console.log(this.followTarget)
            const v = new THREE.Vector3()
            this.followTarget.getWorldPosition(v)
            cameraUtils.setCameraTarget(v, this.cameraCtrl)
            cameraUtils.jumpToTarget(this.followTarget, this.cameraCtrl)
        }

        if (resizeRendererToDisplaySize(this.renderer)) {
            const canvas = this.renderer.domElement
            this.camera.aspect = canvas.clientWidth / canvas.clientHeight
            this.camera.updateProjectionMatrix()
        }
    
        this.curSystem.update(this)
        this.cameraCtrl.update()
        this.renderer.render(this.scene, this.camera)
    }

    static eventLoop(now:number, world:World) {
        window.requestAnimationFrame((n:number) => World.eventLoop(n, world))

        // delta time
        if (!lastTime) { lastTime = now; }
        const elapsed = now - lastTime;
        world.delta = world.clock.getDelta()

        if (elapsed > requiredElapsed) {
            world.update()
            lastTime = now;
        }
    }
}