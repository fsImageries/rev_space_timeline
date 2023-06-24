import { describe, it, expect } from 'vitest';
import { SystemManager } from "../src/ecs/SystemManager"
import { RadiusComponent, RadiusMultSystem, RotComponent } from './samples';
import { World } from '../src/ecs/World';
import { EntityComponentManager } from '../src/ecs/EntityComponentManager';


describe("EntityComponentManager test", () => {
    it("instantiate subclass", () => {
        // Arrange
        const world = new World()
        // Act
        const act = () => new EntityComponentManager()
        // Assert
        expect(act).not.toThrowError("Entity Component Manager couldn't be instantiated")
    })

    it("create entity", () => {
        // Arrange
        const world = new World()
        const man = world.ecManager
        // Act
        man.createEntity()
        // Assert
        expect(man.entities.length).to.be.equal(1, `Entries should be len(1) after adding but they are len(${man.entities.length})`)
    })

    it("add component to entity", () => {
        // Arrange
        const world = new World()
        const man = world.ecManager
        const data = { real: 555, draw: 5.5 }
        // Act
        man
        .createEntity()
        .addComponent(RadiusComponent, data)
        
        // Assert
        expect(man.entities.length).to.be.equal(1, `Entries should be len(1) after adding but they are len(${man.entities.length})`)
        expect(man.entities[0].components.length).to.be.equal(1, `Components of entry should be len(1) after adding but they are len(${man.entities.length})`)
        expect(man.entities[0].components[0]).to.be.instanceOf(RadiusComponent, `Should be instance of ${RadiusComponent.name}`)
        expect(man.entities[0].components[0].data).to.be.equal(data, "Data should be equal to source data")
    })

    it("add multiple components to entity", () => {
        // Arrange
        const world = new World()
        const man = world.ecManager
        const data = { real: 555, draw: 5.5 }
        const data2 = { rot: 180 }
        // Act
        man
        .createEntity()
        .addComponent(RadiusComponent, data)
        .addComponent(RotComponent, data2)
        
        // Assert
        expect(man.entities.length).to.be.equal(1, `Entries should be len(1) after adding but they are len(${man.entities.length})`)
        expect(man.entities[0].components.length).to.be.equal(2, `Components of entry should be len(2) after adding but they are len(${man.entities.length})`)
        expect(man.entities[0].components[0]).to.be.instanceOf(RadiusComponent, `Should be instance of ${RadiusComponent.name}`)
        expect(man.entities[0].components[1]).to.be.instanceOf(RotComponent, `Should be instance of ${RotComponent.name}`)
        expect(man.entities[0].components[0].data).to.be.equal(data, "Data should be equal to source data")
        expect(man.entities[0].components[1].data).to.be.equal(data2, "Data should be equal to source data")
    })

    it("query should update", () => {
        // Arrange
        const world = new World()
        const man = world.ecManager
        const sys = world.sysManager
        const data = { real: 555, draw: 5.5 }

        sys.registerSystem(RadiusMultSystem)

        // Act
        man.createEntity()
        .addComponent(RadiusComponent, data)

        // Assert
        const queries = man.queries[sys.systems[0].key]
        const entities = sys.systems[0].entities

        expect(() => man.queries[sys.systems[0].key]).not.toThrowError("Query should return the query object for the added system's key")
        expect(queries).toBe(entities)
        expect(queries[0]).toBe(entities[0])
    })
})