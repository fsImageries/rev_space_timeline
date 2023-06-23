import { describe, expect, it } from 'vitest';
import { RadiusMultSystem } from './samples';


describe("System test", () => {
    it("instantiate subclass", () => {
        // Arrange
        // Act
        const act = () => { new RadiusMultSystem(""); };
        // Assert
        expect(act).not.toThrowError("Extended System couldn't be instantiated")
    })
})