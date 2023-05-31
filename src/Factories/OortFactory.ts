import { CelestialObject } from "../Models/Celestial";
import Oort from "../Models/Oort";
import { OortCloudJson } from "../jsonInterfaces";


export default async function buildAsync(data:OortCloudJson, parent?: CelestialObject) {

    return new Oort({
        distanceToParent: data.distanceToParent,
        distanceEnd: data.distanceEnd,
        radius: data.draw.radius,
        parent: parent
    })
}