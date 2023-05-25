import planetFactory from "../Factories/PlanetFactory"
import sunFactory from "../Factories/SunFactory"
import { SystemJson } from "../interfaces";
import oortFactoryAsync from "../Factories/OortFactory";
import { System } from "../Models/System";


export default async function buildAsync(data: SystemJson) {
    const suns = data.suns.map((d) => sunFactory(d))
    const planets = data.planets.map((d) => planetFactory(d))
    const oort = await oortFactoryAsync(data.oortCloud)

    const name = data.name
    const isSingleSun = data.isSingleSun
    
    return new System({ suns, planets, oort, name, isSingleSun })
}