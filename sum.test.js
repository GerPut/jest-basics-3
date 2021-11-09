const sum = require("./sum")

describe("example tests", () => {
    it("should add 1 + 2 = 3", () => {
        const result = sum(1, 2);
        expect(result).toBe(3)
    })

    it("object assignment", () => {
        const obj = {};
        expect(obj).toEqual({})
    })


})

//Truthy or Falsy Values

describe("truthy or falsy", () => {
    it("null", () => {
        const n = null;
        expect(n).toBeFalsy()
        expect(n).not.toBeTruthy()
        // expect(n).toBeNull()
        // expect(n).not.toBeUndefined()
    })
})

// Numbers

describe("numbers", () => {
    it("two plus two", () => {
        const value = 2 + 2;
        expect(value).toBe(4)
        expect(value).toBeGreaterThan(3)
        expect(value).toBeLessThan(5)
        expect(value).toBeGreaterThanOrEqual(4)
        expect(value).toBeLessThanOrEqual(4)
    })
})