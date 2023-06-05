import * as THREE from "three"
import GUI from 'lil-gui'

import {getMasterParent} from "../helpers/utils"
import { resizeRendererToDisplaySize } from './../helpers/utils'
import { System } from "./System";
import Constants from "../helpers/Constants"
import { Camera } from "./Camera"


let lastTime: number;
let requiredElapsed = 1000 / 60; // desired interval is 60fps

export class World {
    canvas: HTMLElement;
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    loadingManager: THREE.LoadingManager;
    clock: THREE.Clock;
    delta: number;
    gui: GUI;
    gridhelper: THREE.GridHelper;
    cam: Camera

    clickPointer: THREE.Vector2;
    raycaster: THREE.Raycaster;

    systems: System[];
    curSystem: System;

    /**
     *
     */
    constructor(system: System) {
        // Canvas, Renderer, Scene
        this.canvas = document.querySelector(`canvas#main`)!
        this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, alpha: true })
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        this.renderer.shadowMap.enabled = true
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
        this.renderer.setClearColor(0x000000)
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

        this.cam = new Camera(this.canvas as HTMLCanvasElement, this)

        // Helper setup
        this.clock = new THREE.Clock()
        this.delta = 0;

        this.curSystem = system
        this.systems = [system]

        this.clickPointer = new THREE.Vector2(Infinity, Infinity)
        this.raycaster = new THREE.Raycaster()

        // Init methods
        this.initListeners()

        this.gridhelper = new THREE.GridHelper(100, 100, 'teal', 'darkgray')
        this.gridhelper.scale.setScalar(10000)
        this.gridhelper.visible = false
        this.scene.add(this.gridhelper)

        // Sky box
        const textureLoader = new THREE.TextureLoader();
        const backgroundImage = textureLoader.load("/starmap_8k.jpg");
        backgroundImage.mapping = THREE.EquirectangularReflectionMapping;
        backgroundImage.encoding = THREE.sRGBEncoding;
        this.scene.background = backgroundImage

        // Gui
        this.gui = new GUI({ title: 'Settings', width: 300 })
        const worldFolder = this.gui.addFolder('World')

        worldFolder.add(Constants, 'DISTANCE_SCALE').min(0).name('Distance scale').onChange(() => {
            this.curSystem.init()
        })
        worldFolder.add(Constants, 'TIME_SCALE').min(0).name('Time scale').onChange((v:number) => {
            Constants.TIME_SCALE = v
        })
        worldFolder.add(Constants, 'ORB_SCALE').min(0).name('Orbital speed')
        worldFolder.add(Constants, 'ROT_SCALE').min(0).name('Rotational speed')
        worldFolder.add(this, 'topView').name('Top View')
        worldFolder.add(this.gridhelper, "visible").name("Grid visiblity")
        worldFolder.add(Constants, "CELESTIAL_ORB").name("Main Orb Rotation")

        const planets: any = {}
        this.curSystem.allCelestialObjects.forEach((obj) => planets[obj.name] = obj.masterGrp)
        worldFolder.add(this, "followTarget", planets).name("Camera Target")

        // Lights
        // const ambientLight = new THREE.AmbientLight('#ffdca8', .1)
        // this.scene.add(ambientLight)
    }

    public initListeners() {
        const clickHandler = (event: MouseEvent) => {
            this.clickPointer.x = (event.clientX / window.innerWidth) * 2 - 1;
            this.clickPointer.y = - (event.clientY / window.innerHeight) * 2 + 1;

            const target = this.dblclickTarget();
            console.log(target)
            if (!target) return
            const obj = this.curSystem.getById(target.userData["id"])
            if (!obj) return
            this.cam.setFollowTarget(obj)
            this.cam.activateThird()
            this.cam.third2Free()
        }

        let mousedown = false;
        const mouseDown = (_: MouseEvent) => {
            mousedown = true;
        }
        const mouseUp = (_: MouseEvent) => {
            mousedown = false;
        }
        const mouesMove = (e: MouseEvent) => {
            if (mousedown && e.altKey && !this.cam.isFree) {
                this.cam.third2Free()
                this.cam.activateFree()
            }

        }

        window.addEventListener("dblclick", clickHandler);
        window.addEventListener("mousedown", mouseDown)
        window.addEventListener("mouseup", mouseUp)
        window.addEventListener("mousemove", mouesMove)

    }

    // World methods
    public update() {
        if (resizeRendererToDisplaySize(this.renderer)) {
            const canvas = this.renderer.domElement
            this.cam.active.aspect = canvas.clientWidth / canvas.clientHeight
            this.cam.active.updateProjectionMatrix()
        }

        this.curSystem.update(this)
        this.cam.update(this.delta)
        this.renderer.render(this.scene, this.cam.active)
    }

    static eventLoop(now: number, world: World) {
        window.requestAnimationFrame((n: number) => World.eventLoop(n, world))

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
    public dblclickTarget() {
        this.raycaster.setFromCamera(this.clickPointer, this.cam.active);
        const intersects = this.raycaster.intersectObjects(this.curSystem.topGrp.children);
        this.clickPointer.set(Infinity, Infinity)

        if (intersects.length === 0) return undefined

        const obj = intersects[0].object
        return getMasterParent(obj)
    }

    public topView() {
        this.cam.activateFree()
        this.cam.activeCtrl.setTarget(0, 0, 0, true)
        this.cam.activeCtrl.setPosition(0, this.curSystem.radius * 4, 0)
    }
}