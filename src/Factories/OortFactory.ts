import * as THREE from "three";
import { CelestialObject } from "../Models/Celestial";
import CelestialBase from "../Models/CelestialBase";
import Internal3DObject from "../Models/Internal3DObject";
import Oort from "../Models/Oort";
import { uuidv4 } from "../helpers/utils";
import { OortCloudJson, SystemObjectData } from "../jsonInterfaces";


export default async function buildAsync(data:SystemObjectData) {
    const material = new THREE.PointsMaterial({
        color: "white",
        opacity: 0.2,
        transparent: true
    })
    const geometry = new THREE.BufferGeometry()
    const points = new THREE.Points(geometry, material)

    const parentGrp = new THREE.Group()
    parentGrp.add(points)
    points.name = `${data.name}_masterGrp`
    parentGrp.name = `${data.name}_parentGrp`

    const celestialData = new CelestialBase({
        id: uuidv4(),
        name: data.name,
        type: data.type,
        tilt: data.tilt,
        parent: data.parent,
        radius: data.radius,
        texts: data.texts,
        orbitalPeriod: data.orbitalPeriod,
        rotationPeriod: data.rotationPeriod,
        distanceToParent: data.distanceToParent,
        drawRadius: data.draw.radius
    })

    const internalObject = new Internal3DObject({
        parentGrp,
        masterGrp:points,
    })

    return new Oort({
        data: celestialData,
        object: internalObject
    })
}