import { describe, expect, it } from 'vitest';
import { World } from '../src/ecs/World';
import { RadiusMultSystem } from './samples';


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