let animals = ["bear", "tiger", "lion", "crocodile"]

// beforeAll(() => {
//     animals = ["bear", "tiger", "lion", "crocodile"]
// })

beforeEach(() => {
    animals = ["bear", "tiger", "lion", "crocodile"]
})

// afterEach(() => {
//     animals = ["bear", "tiger", "lion", "crocodile"]
// })

describe("animals array", () => {
    it("should add animal to end of array", () => {
        animals.push("flamingo");
        expect(animals[animals.length - 1]).toBe("flamingo")
    })

    it("should add animal to beginning of array", () => {
        animals.unshift("snake");
        expect(animals[0]).toBe("snake");
    })

    it("should have initial length of 4", () => {
        expect(animals.length).toBe(4);
    })
});


//Run only one test in the file use "only"
describe("testing something else", () => {
    it.only("true should be truthy", () => {
        expect(true).toBeTruthy()
    })
})