import { Planet } from "./Planet"
import { World} from "./World"
import Constants from "../Constants";
import { Sun } from "./Sun";

export class System {
    public suns: Sun[];
    public planets: Planet[];

    constructor(data:any /*Json system data is coming in hot*/) { 
        this.suns = this.buildSuns(data.suns)
        this.planets = this.buildPlanets(data.planets)

        // ===== 💡 LIGHTS =====
        // this.pointLight = new THREE.PointLight('#ffdca8', 10.2, 100)
        // this.pointLight.castShadow = true
        // this.pointLight.shadow.radius = 4
        // this.pointLight.shadow.camera.near = 0.5
        // this.pointLight.shadow.camera.far = 4000
        // this.pointLight.shadow.mapSize.width = 2048
        // this.pointLight.shadow.mapSize.height = 2048
        // this.scene.add(this.pointLight)
    }

    private buildSuns(data:any): Sun[] {
        return data.map((sun:any) => new Sun({
            name: sun.name,
            radius: sun.draw.radius,
            rotationPeriod: sun.rotationPeriod,
            orbitalPeriod: sun.orbitalPeriod,
            tilt: sun.tilt,
            distanceToParent: sun.distanceToParent,
        }));
    }

    private buildPlanets(data:any): Planet[] {
        return data.map((planet:any) => new Planet({
            name: planet.name,
            glowColor: planet.glowColor,
            radius: planet.draw.radius,
            rotationPeriod: planet.rotationPeriod,
            orbitalPeriod: planet.orbitalPeriod,
            tilt: planet.tilt,
            distanceToParent: planet.distanceToParent,
            albedoPath: planet.draw.albedoPath,
            normalPath: planet.draw.normalPath
        }));
    }

    initWorld(world:World) {
        this.planets.forEach((planet) => {
            // console.log(planet.distanceToParent / Constants.DISTANCE_SCALE)
            // console.log(this.perc(planet.distanceToParent, .00001))
            // console.log("------------------------")
            // const dist = planet.distanceToParent / Constants.DISTANCE_SCALE
            // // const dist = planet.distanceToParent
            // const obj = planet.group
            // obj.position.set(0, 0, -dist)
            world.scene.add(planet.group)
        })

        this.suns.forEach((sun) => {
            world.scene.add(sun.object)
        })
    }

    update(world:World) {
        this.planets.forEach((planet) => planet.update(world))
    }
}