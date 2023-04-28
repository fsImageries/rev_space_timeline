import { Planet } from "./Planet"
import { World } from "./World"
import { Sun } from "./Sun";
import { CelestiaObject } from "./Celestial";

export class System {
    public suns: Sun[];
    public planets: Planet[];

    constructor(data: any /*Json system data is coming in hot*/) {
        this.suns = this.buildSuns(data.suns)
        // this.suns = []
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

    private buildSuns(data: any): Sun[] {
        return data.map((sun: any) => new Sun({
            name: sun.name,
            radius: sun.draw.radius,
            rotationPeriod: sun.rotationPeriod,
            orbitalPeriod: sun.orbitalPeriod,
            tilt: sun.tilt,
            distanceToParent: sun.distanceToParent,
        }));
    }

    private buildPlanets(data: any): Planet[] {
        return data.map((planet: any) => new Planet({
            name: planet.name,
            glowColor: planet.draw.glowColor,
            glowIntesity: planet.draw.glowIntensity,
            radius: planet.draw.radius,
            rotationPeriod: planet.rotationPeriod,
            orbitalPeriod: planet.orbitalPeriod,
            tilt: planet.tilt,
            distanceToParent: planet.distanceToParent,
            albedoPath: planet.draw.albedoPath,
            normalPath: planet.draw.normalPath,
            texts: planet.texts
        }));
    }

    initWorld(world: World) {
        (this.suns as any).concat(this.planets).forEach((obj:CelestiaObject) => {
            if (obj.group) {
                world.scene.add(obj.group)
            }
        })
    }

    update(world: World) {
        this.planets.forEach((planet) => planet.update(world))
        this.suns.forEach((sun) => sun.update(world))
    }
}