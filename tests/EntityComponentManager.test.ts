import { describe, expect, it } from 'vitest';
import { World } from '../src/ecs/World';
import { RadiusComponent, RadiusMultSystem, RenderSystem, RotAndRadSystem, RotComponent, RotRadSystem, RotSystem } from './samples';


describe("EntityComponentManager test", () => {
    it("instantiate subclass", () => {
        // Arrange
        // Act
        const act = () => new World()
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
        expect(Object.keys(man.entities[0].components).length).to.be.equal(1, `Components of entry should be len(1) after adding but they are len(${man.entities.length})`)
        expect(man.entities[0].components[RadiusComponent.typeID]).to.be.instanceOf(RadiusComponent, `Should be instance of ${RadiusComponent.name}`)
        expect(man.entities[0].components[RadiusComponent.typeID].data).to.be.equal(data, "Data should be equal to source data")
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
        expect(Object.keys(man.entities[0].components).length).to.be.equal(2, `Components of entry should be len(2) after adding but they are len(${man.entities.length})`)
        expect(man.entities[0].components[RadiusComponent.typeID]).to.be.instanceOf(RadiusComponent, `Should be instance of ${RadiusComponent.name}`)
        expect(man.entities[0].components[RotComponent.typeID]).to.be.instanceOf(RotComponent, `Should be instance of ${RotComponent.name}`)
        expect(man.entities[0].components[RadiusComponent.typeID].data).to.be.equal(data, "Data should be equal to source data")
        expect(man.entities[0].components[RotComponent.typeID].data).to.be.equal(data2, "Data should be equal to source data")
    })

    it("system with empty query should have no entites", () => {
        // Arrange
        const world = new World()
        const qu = world.queryManager
        const man = world.ecManager
        const sys = world.sysManager
        const data = { real: 555, draw: 5.5 }
        
        sys.registerSystem(RenderSystem)
        const key = RenderSystem.typeID

        // Act
        man.createEntity()
        .addComponent(RadiusComponent, data)

        // Assert
        const query = qu.sysQueries[key]
        const sysquery = sys.systems[0].queries

        expect(qu.sysQueries[key]).not.be.equal(undefined, "Query should return the query object for the added system's key")
        expect(query.length).to.be.equal(0, "Query should be len(0)")
        expect(query).toBe(sysquery)
        expect(query[0]).toBe(sysquery[0])
    })

    it("query should update", () => {
        // Arrange
        const world = new World()
        const qu = world.queryManager
        const man = world.ecManager
        const sys = world.sysManager
        const data = { real: 555, draw: 5.5 }
        
        sys.registerSystem(RadiusMultSystem)
        const key = RadiusMultSystem.typeID

        // Act
        man.createEntity()
        .addComponent(RadiusComponent, data)

        // Assert
        const queryEntities = qu.sysQueries[key][0].entities
        const entities = sys.systems[0].queries[0].entities

        expect(qu.sysQueries[key]).not.be.equal(undefined, "Query should return the query object for the added system's key")
        expect(queryEntities.length).to.be.equal(1, "Query entities should be len(1)")
        expect(queryEntities).toBe(entities)
        expect(queryEntities[0]).toBe(entities[0])
    })

    it("multi system query should update", () => {
        // Arrange
        const world = new World()
        const qu = world.queryManager
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
        
        expect(qu.sysQueries[key0]).not.be.equal(undefined, "Query should return the query object for the added system's key")
        expect(qu.sysQueries[key1]).not.be.equal(undefined, "Query should return the query object for the added system's key")
        expect(qu.sysQueries[key2]).not.be.equal(undefined, "Query should return the query object for the added system's key")
        
        
        let queryEntities = qu.sysQueries[key0][0].entities
        let entities = sys.systems[0].queries[0].entities
        expect(queryEntities.length).to.be.equal(1, "Query entities should be len(1)")
        expect(queryEntities).toBe(entities)
        expect(queryEntities[0]).toBe(entities[0])

        queryEntities = qu.sysQueries[key1][0].entities
        entities = sys.systems[1].queries[0].entities
        expect(queryEntities.length).to.be.equal(1, "Query entities should be len(1)")
        expect(queryEntities).toBe(entities)
        expect(queryEntities[0]).toBe(entities[0])

        queryEntities = qu.sysQueries[key2][0].entities
        entities = sys.systems[2].queries[0].entities
        expect(queryEntities.length).to.be.equal(1, "Query entities should be len(1)")
        expect(queryEntities).toBe(entities)
        expect(queryEntities[0]).toBe(entities[0])
    })

    it("multi system, multi entity query should update", () => {
        // Arrange
        const world = new World()
        const qu = world.queryManager
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
        let queryEntities = qu.sysQueries[key0][0].entities
        let entities = sys.systems[0].queries[0].entities
        expect(queryEntities.length).to.be.equal(2, "Query entities should be len(2)")
        expect(queryEntities).toBe(entities)

        queryEntities = qu.sysQueries[key1][0].entities
        entities = sys.systems[1].queries[0].entities
        expect(queryEntities.length).to.be.equal(1, "Query entities should be len(1)")
        expect(queryEntities).toBe(entities)

        queryEntities = qu.sysQueries[key2][0].entities
        entities = sys.systems[2].queries[0].entities
        expect(queryEntities.length).to.be.equal(1, "Query entities should be len(1)")
        expect(queryEntities).toBe(entities)
    })

    it("multi entity query should update", () => {
        // Arrange
        const world = new World()
        const qu = world.queryManager
        const man = world.ecManager
        const sys = world.sysManager
        const data = { real: 555, draw: 5.5 }
        const data2 = { rot: 180 }
        
        sys.registerSystem(RotAndRadSystem)
        const key0 = RotAndRadSystem.typeID

        // Act
        man.createEntity()
        .addComponent(RadiusComponent, data)

        man.createEntity()
        .addComponent(RotComponent, data2)

        // Assert
        const query0 = qu.sysQueries[key0]
        const entities = sys.systems[0].queries

        expect(qu.sysQueries[key0]).not.be.equal(undefined, "Query should return the query object for the added system's key")
        expect(query0.length).to.be.equal(2, "Query entities should be len(2)")
        expect(query0).toBe(entities)
        expect(query0[0].entities[0]).not.toBe(entities[0].entities[1])
    })
})