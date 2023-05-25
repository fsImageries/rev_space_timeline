import { describe, it, expect } from 'vitest';

import {randFloatExcludes} from "../src/Models/Oort"



describe("randFloatExcludes(...) test", () => {
    it("Single value test", () => {
        // Arrange
        // Act
        const num = randFloatExcludes(-100, 100, -50, 50)
        // Assert
        expect(Math.abs(num), "The generated number is not in range 50-100.").to.be.within(50, 100)
    }),
    it("Multiple values test", () => {
        // Arrange
        // Act
        const nums = Array.from({length: 1000}, (_, i) => randFloatExcludes(-100, 100, -50, 50))
        // Assert
        nums.forEach((num) => {
            expect(Math.abs(num), "The generated number is not in range 50-100.").to.be.within(50, 100)
        })
    })
})