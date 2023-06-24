import { describe, expect, it } from 'vitest';
import { RadiusMultSystem } from './samples';
import { World } from '../src/ecs/World';


describe("System test", () => {
    it("instantiate subclass", () => {
        // Arrange
        const world = new World()
        // Act
        const act = () => { new RadiusMultSystem(world) };
        // Assert
        expect(act).not.toThrowError("Extended System couldn't be instantiated")
    })
})