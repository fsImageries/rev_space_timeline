import * as THREE from "three";
import { Text } from "troika-three-text";
import { Sun } from "../Models/Sun";
import { System } from "../Models/System";
import { SystemParams } from "../interfaces";

import { DEG2RAD, clamp, mapLinear } from "three/src/math/MathUtils";
import sunFactory from "../Factories/SunFactory";
import spriteFactory from "../Factories/SpriteFactory"
import Constants from "../helpers/Constants";
import { World } from "./World";


const LEN_MAT = new THREE.LineBasicMaterial({
    color: "#ffffff",
    transparent: true,
    opacity: .2
})

const OBJ_MAT = new THREE.LineBasicMaterial({
    color: "#ffffff",
    transparent: true,
    opacity: .075
})

const GEOM = new THREE.BufferGeometry()
const LEN_VERTS: THREE.Vector3[] = []
const OBJ_VERTS: THREE.Vector3[] = []
const ORIGIN = new THREE.Vector3(0, 0, 0)

const SOURCES = [
    {
        isSimple: false, color: "red", name: "epsilonEridani", radius: 2200, hTemp: 5000, lTemp: 4000,
        texts: ["Yellowstone [GRUBS]", "- Marcos Eye", "Tangerine Dream", "Conjoiner Nest", "- Conjoiner Comet"],
    },
    {
        isSimple: false, color: "red", name: "p Eridani", radius: 2200, hTemp: 5100, lTemp: 1500,
        texts: ["Ararat [PATTERN JUGGLERS, NESTBUILDERS]"],
    },
    {
        isSimple: false, color: "red", name: "Delta Pavonis", radius: 3600, hTemp: 7000, lTemp: 3000,
        texts: ["Resurgam [AMARATIN]", "Hades [HADES MATRIX CIVILISATION]", "- Cerberus [INHIBITORS, AMARATIN, CERBERUS CIVILISATION]", "ROC"]
    },
    {
        isSimple: false, color: "red", name: "Lacaille 9352", radius: 2000, hTemp: 4000, lTemp: 3000,
        texts: ["Fand"]
    },
    {
        isSimple: false, color: "red", name: "Luyten 726-8", radius: 500, hTemp: 2000, lTemp: 900,
        texts: ["Luyten 726-8 Cometary Halo"]
    },
    {
        isSimple: false, color: "red", name: "Ross 248", radius: 1000, hTemp: 2000, lTemp: 900,
        texts: ["Diadem"]
    },
    {
        isSimple: false, color: "red", name: "61 Cygni", radius: 2000, hTemp: 3000, lTemp: 500,
        texts: ["Sky's Edge"]
    },
    {
        isSimple: false, color: "red", name: "Lalande 21185", radius: 1250, hTemp: 3000, lTemp: 500,
        texts: ["Zion"]
    },
    {
        isSimple: false, color: "red", name: "Gliese 687", radius: 1560, hTemp: 3000, lTemp: 500,
        texts: ["Haven"]
    },
    {
        isSimple: false, color: "red", name: "Groombridge 1618", radius: 1450, hTemp: 5000, lTemp: 500,
        texts: ["Turquoise [PATTERN JUGGLERS]"]
    },
    {
        isSimple: false, color: "red", name: "107 Piscium", radius: 3000, hTemp: 10000, lTemp: 500,
        texts: ["Haldora [SHADOWS]", "- Hela [SCUTTLERS, NESTBUILDERS(?)]"]
    },
]

const TRANFORM_DATA = [
    { x: 1000, y: 300, rotY: Math.PI * 2.1, textsHeight: 250 },
    { x: 1200, y: 2000, rotY: Math.PI * -1.9 * -1, textsHeight: 60 },
    { x: 750, y: 2150, rotY: Math.PI / 2 * -1, textsHeight: 175 },
    { x: 1000, y: 800, rotY: Math.PI * 1.65, textsHeight: 60 },
    { x: 800, y: 500, rotY: Math.PI * 1.9, textsHeight: 60 },
    { x: 834, y: -800, rotY: Math.PI * 1.72, textsHeight: 60 },
    { x: 626, y: -1000, rotY: Math.PI * 1.578, textsHeight: 80 },
    { x: 550, y: -800, rotY: Math.PI * .75, textsHeight: 70 },
    { x: 400, y: -1900, rotY: Math.PI * 1.3, textsHeight: 70 },
    { x: 857, y: -1734, rotY: Math.PI * .689, textsHeight: -70 },
    { x: 2222, y: -1200, rotY: Math.PI * -.1, textsHeight: 125 },
]

export class CosmicMap extends System {
    private _mainArea: HTMLElement;
    private _viewSprites: THREE.Sprite[];

    constructor(data: SystemParams) {
        super(data);
        this.name = "cosmicMap"
        this._mainArea = document.getElementById("cosmicMapTItle")
        this._mainArea.ontransitionend = (e) => {
            const v = (e.target as HTMLElement).style.visibility;
            (e.target as HTMLElement).style.visibility = v == "visible" ? "hidden" : "visible"
        }
        this._viewSprites = []
    }

    public set textOpacity(value: number) {
        this._mainArea.style.opacity = value.toString()
        this._mainArea.style.visibility = value <= 0 ? "hidden" : "visible"
    }

    public update(world: World): void {
        super.update(world)
        let dist = world.cam.active.position.distanceTo(ORIGIN)
        dist = clamp(dist, 8000, 10000)
        dist = mapLinear(dist, 8000, 10000, 0, 1)
        if (this.textOpacity != dist)
            this.textOpacity = dist
        
        this._viewSprites.forEach(sp => {
            sp.getWorldPosition(Constants.WORLD_POS)
            dist = world.cam.active.position.distanceTo(Constants.WORLD_POS)
            dist = clamp(dist, 400, 500)
            dist = mapLinear(dist, 400, 500, 1, 0)
            sp.material.opacity = dist
        })
    }

    static buildSun(data: {
        name: string,
        radius: number,
        hTemp: number,
        lTemp: number,
        isSimple?: boolean,
        color?: THREE.ColorRepresentation,
        texts?: string[]
    }) {
        return sunFactory({
            name: data.name,
            type: "sun",
            radius: data.radius,
            rotationPeriod: 0,
            orbitalPeriod: 0,
            highTemp: data.hTemp,
            lowTemp: data.lTemp,
            distanceToParent: 1,
            tilt: 0,
            parent: "",
            draw: { radius: 1 },
            isSimple: data.isSimple,
            color: data.color,
            disableLight: true,
            texts: data.texts,
            displayInfo: false
        })
    }

    static buildLine(p1: THREE.Vector3, p2: THREE.Vector3, len?: boolean) {
        const arr = len ? LEN_VERTS : OBJ_VERTS
        arr.push(p1.clone(), p2.clone())
    }

    static buildDiskLine(sun: Sun, data: { x: number, y: number, rotY: number }) {
        sun.object.masterGrp.position.x -= data.x
        sun.object.masterGrp.position.y -= data.y
        sun.object.parentGrp.rotateY(data.rotY)

        sun.object.masterGrp.getWorldPosition(Constants.WORLD_POS)
        const diskPnt = Constants.WORLD_POS.clone()
        diskPnt.y += data.y;
        return CosmicMap.buildLine(Constants.WORLD_POS.clone(), diskPnt, true)
    }

    static buildObjectLine(o1: Sun, o2: Sun) {
        const p1 = o1.object.masterGrp.getWorldPosition(Constants.WORLD_POS).clone()
        const p2 = o2.object.masterGrp.getWorldPosition(Constants.WORLD_POS)
        return CosmicMap.buildLine(p1, p2, false)
    }

    static buildNameTag(sun: Sun, xOff: number, yOff = 25, text?: string, fontSize = 50, rot?: number, opacity?: number) {
        const base = sun.object.masterGrp.getWorldPosition(Constants.WORLD_POS)
        base.x -= xOff

        const txt = new Text()
        txt.text = text != undefined ? text : sun.data.name
        txt.fontSize = fontSize
        txt.color = 0xffffff
        txt.rotateY(rot != undefined ? rot : Math.PI * .85)
        txt.position.copy(base)
        txt.position.y += yOff
        txt.fillOpacity = opacity != undefined ? opacity : 1;
        txt.font = "./Open_Sans/static/OpenSans-Light.ttf"
        return txt
    }

    static buildLyRings(sol: Sun) {
        const ly = 100;
        const points = []
        const radius = ly;
        for (let i = 0; i <= 360; i++) {
            points.push(new THREE.Vector3(radius * Math.sin(i * DEG2RAD), 0, radius * Math.cos(i * DEG2RAD)));
        }
        const geom1 = new THREE.BufferGeometry();
        geom1.setFromPoints(points);
        const mat = new THREE.LineBasicMaterial({
            color: "#ffffff",
            transparent: true,
            opacity: .45
        })
        const ly1 = new THREE.Line(geom1, mat);

        const geom2 = geom1.clone()
        geom2.scale(5, 1, 5)
        const ly5 = new THREE.Line(geom2, mat);

        const geom3 = geom1.clone()
        geom3.scale(15, 1, 15)
        const ly15 = new THREE.Line(geom3, mat);

        ly1.userData["title"] = "1LY"
        ly5.userData["title"] = "5LY"
        ly15.userData["title"] = "15LY"

        const lys = [[ly1, 1], [ly5, 5], [ly15, 15]]

        const height = 40
        lys.forEach((obj) => {
            const ly = obj[0] as THREE.Line
            const mult = obj[1] as number
            const txt = new Text()
            txt.text = ly.userData["title"]
            txt.fontSize = height
            txt.color = 0xffffff
            txt.position.x += 100 * mult + height + 10
            txt.position.y += height
            txt.rotateY(Math.PI)
            ly.add(txt)
        })
        sol.object.masterGrp.add(ly1)
        sol.object.masterGrp.add(ly5)
        sol.object.masterGrp.add(ly15)
    }

    static setupSun(system: System, sun: Sun, data: { x: number, y: number, rotY: number, textsHeight?: number }) {
        CosmicMap.buildDiskLine(sun, data)
        system.topGrp.add(CosmicMap.buildNameTag(sun, 25))
        system.topGrp.add(CosmicMap.buildNameTag(sun, 10, data.textsHeight != undefined ? data.textsHeight : 250, sun.data.texts.join("\n"), 27.5, Math.PI, .35))
    }

    static connectSuns(sun: Sun, connects: Sun[]) {
        // connects.forEach(c => sol.object.parentGrp.add(CosmicMap.buildObjectLine(sun, c)))
        connects.forEach(c => CosmicMap.buildObjectLine(sun, c))
    }

    static build() {
        const sol = CosmicMap.buildSun({ name: "Sol", radius: 3000, hTemp: 7100, lTemp: 3100 })
        CosmicMap.buildLyRings(sol)

        const suns = SOURCES.map(d => CosmicMap.buildSun(d))

        const sunss = [sol, ...suns]
        const params = {
            tree: sunss,
            flat: sunss,
            isSingleSun: true,
            name: "cosmicMap",
            startTarget: "Sol"
        }
        const map = new CosmicMap(params)
        map.topGrp.add(CosmicMap.buildNameTag(sol, 25))
        map.topGrp.add(CosmicMap.buildNameTag(sol, -25, -50, ["Earth", "- Moon", "Mars", "- Phobos", "Europa"].join("\n"), 27.5, Math.PI, .35))

        suns.forEach(s => {
            const sprite = spriteFactory("./eye-solid.svg")
            const rad = s.drawRadius * 1.15
            sprite.position.x += rad
            sprite.scale.setScalar(s.drawRadius * .3)
            sprite.name = `${s.data.name}_view`
            s.object.masterGrp.add(sprite)
            map._viewSprites.push(sprite)
        })

        TRANFORM_DATA.forEach((d, idx) => CosmicMap.setupSun(map, suns[idx], d))

        CosmicMap.connectSuns(sol, suns.filter(s => ["Ross 248", "61 Cygni"].includes(s.data.name)))
        CosmicMap.connectSuns(suns.reduce((a, c) => a.data.name == "p Eridani" ? a : c), suns.filter(s => ["Delta Pavonis"].includes(s.data.name)))
        CosmicMap.connectSuns(
            suns.reduce((a, c) => a.data.name == "Epsilon Eridani" ? a : c),
            suns.filter(s => ["p Eridani", "Delta Pavonis", "61 Cygni", "107 Piscium"].includes(s.data.name))
        )

        GEOM.setFromPoints(LEN_VERTS)
        sol.object.parentGrp.add(new THREE.LineSegments(GEOM.clone(), LEN_MAT))

        GEOM.setFromPoints(OBJ_VERTS)
        sol.object.parentGrp.add(new THREE.LineSegments(GEOM, OBJ_MAT))

        const light = new THREE.PointLight("#ffffff", 1, 1000);
        light.castShadow = true;
        light.shadow.radius = 4;
        light.shadow.camera.near = 0.5;
        light.shadow.camera.far = 100000;
        light.shadow.mapSize.width = 2048;
        light.shadow.mapSize.height = 2048;
        map.topGrp.add(light)

        return map
    }
}