import { describe, it, expect } from 'vitest';
import { SystemManager } from "../src/ecs/SystemManager"


describe("System test", () => {
    it("instantiate subclass", () => {
        // Arrange
        // Act
        const act = () => new SystemManager("")
        // Assert
        expect(act).not.toThrowError("Extended System couldn't be instantiated")
    })
})