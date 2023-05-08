import * as THREE from "three"
import GUI from 'lil-gui'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import * as cameraUtils from "../helpers/cameraUtils"
import { resizeRendererToDisplaySize } from './../helpers/responsiveness'
import { System } from "./System";
import Constants from "../helpers/Constants"


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
    gui: GUI;
    gridhelper: THREE.GridHelper;

    clickPointer: THREE.Vector2;
    raycaster: THREE.Raycaster;
    followTarget?: THREE.Object3D;

    systems: System[];
    curSystem: System;

    /**
     *
     */
    constructor(system:System) {
        // Canvas, Renderer, Scene
        this.canvas = document.querySelector(`canvas#main`)!
        this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, alpha: true })
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        this.renderer.shadowMap.enabled = true
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
        this.renderer.setClearColor( 0x000000 )
        this.scene = new THREE.Scene()

        // Loading Manager
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

        // Camera
        this.camera = new THREE.PerspectiveCamera(30, this.canvas.clientWidth / this.canvas.clientHeight, 0.1, 100_000_000)
    
        this.cameraCtrl = new OrbitControls(this.camera, this.canvas)
        this.cameraCtrl.enableDamping = true
        this.cameraCtrl.autoRotate = false
        this.cameraCtrl.update()

        // Helper setup
        this.clock = new THREE.Clock()
        this.delta = 0;

        this.curSystem = system
        this.systems = [system]

        this.clickPointer = new THREE.Vector2(Infinity, Infinity)
        this.raycaster = new THREE.Raycaster()

        // Init methods
        this.initListeners()

        this.gridhelper = new THREE.GridHelper(100,100, 'teal', 'darkgray')
        this.gridhelper.scale.setScalar(10000)
        this.gridhelper.visible = false
        this.scene.add(this.gridhelper)

        // Gui
        this.gui = new GUI({ title: 'Settings', width: 300 })
        const worldFolder = this.gui.addFolder('World')

        worldFolder.add(Constants, 'DISTANCE_SCALE').min(0).name('Distance scale').onChange(() => {
            this.curSystem.init()
        })
        worldFolder.add(Constants, 'ORB_SCALE').min(0).name('Orbital speed')
        worldFolder.add(Constants, 'ROT_SCALE').min(0).name('Rotational speed')
        worldFolder.add(this, 'topView').name('Top View')
        worldFolder.add(this.gridhelper, "visible").name("Grid visiblity")

        const planets:any = {}
        this.curSystem.allCelestialObjects.forEach((obj) => planets[obj.name] = obj.masterGrp)
        worldFolder.add(this, "followTarget", planets).name("Camera Target")

        // Lights
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
    }

    initListeners(){
        const clickHandler = (event: MouseEvent) => {
            this.clickPointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
            this.clickPointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

            this.followTarget = this.dblclickTarget()
        }

        let mousedown = false;
        const mouseDown = (_: MouseEvent) => {
            mousedown = true;
        }
        const mouseUp = (_: MouseEvent) => {
            mousedown = false;
        }
        const mouesMove = (_: MouseEvent) => {
            if (mousedown) this.followTarget = undefined
        }

        window.addEventListener("dblclick", clickHandler);
        window.addEventListener("mousedown", mouseDown)
        window.addEventListener("mouseup", mouseUp)
        window.addEventListener("mousemove", mouesMove)

    }

    // World methods
    update() {
        if (this.followTarget) {
            cameraUtils.setCameraTarget(this.followTarget, this.cameraCtrl)
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

    // Helper methods
    dblclickTarget(){
        this.raycaster.setFromCamera( this.clickPointer, this.camera );
        const intersects = this.raycaster.intersectObjects( this.scene.children );
        this.clickPointer.set(Infinity, Infinity)

        if (intersects.length === 0) return undefined
        
        const obj = intersects[0].object
        return cameraUtils.getMasterParent(obj)
    }

    topView() {
        this.cameraCtrl.target.set(0,0,0)
        this.cameraCtrl.object.position.set(0,this.curSystem.radius*4,0)
        this.cameraCtrl.update()
    }
}