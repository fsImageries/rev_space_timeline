import { describe, expect, it } from 'vitest';
import { RadiusComponent } from './samples';


describe("Component test", () => {
    it("instantiate subclass", () => {
        // Arrange
        const data = { real: 555, draw: 5.5 }
        // Act
        const act = () => { new RadiusComponent(data); };
        // Assert
        expect(act).not.toThrowError("Extended Component couldn't be instantiated")
    })

    it("data should be the same", () => {
        // Arrange
        const data = { real: 555, draw: 5.5 }
        const comp = new RadiusComponent(data)
        // Act
        // Assert
        expect(comp.data).to.equal(data, "Data on component should be the same a the given data")
    })
})