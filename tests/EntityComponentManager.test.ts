import { describe, it, expect } from 'vitest';
import { SystemManager } from "../src/ecs/SystemManager"
import { RadiusComponent, RadiusMultSystem, RotSystem, RotComponent, RotRadSystem } from './samples';
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
        const key = RadiusMultSystem.typeID

        // Act
        man.createEntity()
        .addComponent(RadiusComponent, data)

        // Assert
        const queryEntities = man.queries[key].entities
        const entities = sys.systems[0].entities

        expect(man.queries[key]).not.be.equal(undefined, "Query should return the query object for the added system's key")
        expect(queryEntities.length).to.be.equal(1, "Query entities should be len(1)")
        expect(queryEntities).toBe(entities)
        expect(queryEntities[0]).toBe(entities[0])
    })

    it("multi system query should update", () => {
        // Arrange
        const world = new World()
        const man = world.ecManager
        const sys = world.sysManager
        const data = { real: 555, draw: 5.5 }
        const data2 = { rot: 180 }

        sys.registerSystem(RadiusMultSystem)
        sys.registerSystem(RotSystem)
        sys.registerSystem(RotRadSystem)

        const key0 = RadiusMultSystem.typeID
        const key1 = RotSystem.typeID
        const key2 = RotRadSystem.typeID
        const keys = [key0, key1, key2]

        // Act
        man.createEntity()
        .addComponent(RadiusComponent, data)
        .addComponent(RotComponent, data2)

        // Assert
        expect(new Set(keys).size).to.be.equal(keys.length, "Keys shouldn't be duplicated.")
        
        expect(man.queries[key0]).not.be.equal(undefined, "Query should return the query object for the added system's key")
        expect(man.queries[key1]).not.be.equal(undefined, "Query should return the query object for the added system's key")
        expect(man.queries[key2]).not.be.equal(undefined, "Query should return the query object for the added system's key")
        
        
        let queryEntities = man.queries[key0].entities
        let entities = sys.systems[0].entities
        expect(queryEntities.length).to.be.equal(1, "Query entities should be len(1)")
        expect(queryEntities).toBe(entities)
        expect(queryEntities[0]).toBe(entities[0])

        queryEntities = man.queries[key1].entities
        entities = sys.systems[1].entities
        expect(queryEntities.length).to.be.equal(1, "Query entities should be len(1)")
        expect(queryEntities).toBe(entities)
        expect(queryEntities[0]).toBe(entities[0])

        queryEntities = man.queries[key2].entities
        entities = sys.systems[2].entities
        expect(queryEntities.length).to.be.equal(1, "Query entities should be len(1)")
        expect(queryEntities).toBe(entities)
        expect(queryEntities[0]).toBe(entities[0])
    })

    it("multi system, multi entity query should update", () => {
        // Arrange
        const world = new World()
        const man = world.ecManager
        const sys = world.sysManager
        const data = { real: 555, draw: 5.5 }
        const data2 = { rot: 180 }

        sys.registerSystem(RadiusMultSystem)
        sys.registerSystem(RotSystem)
        sys.registerSystem(RotRadSystem)

        const key0 = RadiusMultSystem.typeID    // n = 2
        const key1 = RotSystem.typeID           // n = 1
        const key2 = RotRadSystem.typeID        // n = 1

        // Act
        man.createEntity()
        .addComponent(RadiusComponent, data)

        man.createEntity()
        .addComponent(RadiusComponent, data)
        .addComponent(RotComponent, data2)

        // Assert
        let queryEntities = man.queries[key0].entities
        let entities = sys.systems[0].entities
        expect(queryEntities.length).to.be.equal(2, "Query entities should be len(2)")
        expect(queryEntities).toBe(entities)

        queryEntities = man.queries[key1].entities
        entities = sys.systems[1].entities
        expect(queryEntities.length).to.be.equal(1, "Query entities should be len(1)")
        expect(queryEntities).toBe(entities)

        queryEntities = man.queries[key2].entities
        entities = sys.systems[2].entities
        expect(queryEntities.length).to.be.equal(1, "Query entities should be len(1)")
        expect(queryEntities).toBe(entities)
    })
})