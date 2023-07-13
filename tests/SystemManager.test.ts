import { describe, expect, it } from 'vitest';
import { World } from '../src/ecs/World';
import { RadiusMultSystem } from './samples';


describe("SystemManager test", () => {
    it("instantiate subclass", () => {
        // Arrange
        // Act
        const act = () => new World()
        // Assert
        expect(act).not.toThrowError("Extended System couldn't be instantiated")
    })

    it("register component", () => {
        // Arrange
        const world = new World()
        const manager = world.sysManager
        // Act
        manager.registerSystem(RadiusMultSystem)
        // Assert
        expect(manager.systems.length).to.be.equal(1, `Manager systems should be len(1) after registering but is len(${manager.systems.length})`)
        expect(manager.getSystem(RadiusMultSystem)).not.be.undefined
    })

    it("unregister component", () => {
        // Arrange
        const world = new World()
        const manager = world.sysManager
        manager.registerSystem(RadiusMultSystem)
        // Act
        manager.unregisterSystem(RadiusMultSystem)
        // Assert
        expect(manager.systems.length).to.be.equal(0, `Manager systems should be len(0) after unregistering but is len(${manager.systems.length})`)
        expect(manager.getSystem(RadiusMultSystem)).be.undefined
    })
})