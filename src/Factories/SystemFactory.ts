import planetFactory from "../Factories/PlanetFactory"
import sunFactory from "../Factories/SunFactory"
import { SystemJson } from "../jsonInterfaces";
import oortFactoryAsync from "../Factories/OortFactory";
import { System } from "../Models/System";


export default async function buildAsync(data: SystemJson) {
    const name = data.name
    const isSingleSun = data.isSingleSun
    
    const suns = data.suns.map((d) => sunFactory(d))
    const planets = data.planets.map((d) => {
        const parent = suns.filter(s => s.name === d.parent)
        return planetFactory(d, parent.length == 0 ? undefined : parent[0])
    })

    const oortParent = isSingleSun ? suns[0] : suns.reduce((acc, cur) => acc.name == data.oortCloud.parent ? acc : cur)
    const oort = await oortFactoryAsync(data.oortCloud, oortParent)
    
    return new System({ suns, planets, oort, name, isSingleSun })
}