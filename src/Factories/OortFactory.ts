import Oort from "../Models/Oort";
import importRocks from "../helpers/rockImporter";
import { OortCloudJson } from "../jsonInterfaces";


export default async function buildAsync(data:OortCloudJson) {

    
    return new Oort({
        distanceToParent: data.distanceToParent,
        distanceEnd: data.distanceEnd,
        radius: data.draw.radius,
    })
}