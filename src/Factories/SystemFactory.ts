import planetFactory from "../Factories/PlanetFactory"
import sunFactory from "../Factories/SunFactory"
import { PlanetJson, SystemJson } from "../jsonInterfaces";
import oortFactoryAsync from "../Factories/OortFactory";
import { System } from "../Models/System";


export default async function buildAsync(data: SystemJson) {
    const name = data.name
    const isSingleSun = data.isSingleSun
    
    const suns = data.suns.map((d) => sunFactory(d))
    const planets = data.planets.map((d) => {
        const parent = isSingleSun ? suns[0] : suns.reduce((acc, cur) => acc.name == d.parent ? acc : cur)
        return planetFactory(d, parent)
    })

    const oortParent = isSingleSun ? suns[0] : suns.reduce((acc, cur) => acc.name == data.oortCloud.parent ? acc : cur)
    const oort = await oortFactoryAsync(data.oortCloud, oortParent)
    
    return new System({ suns, planets, oort, name, isSingleSun })
}