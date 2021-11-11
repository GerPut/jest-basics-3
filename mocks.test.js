const axios = require("axios")

const fetchData = async (id) => {
    const results = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    return results.data
}

const forEach = (items, callback) => {
    for (i = 0; i < items.length; i++) {
        callback(items[i])
    }
}

it("mock callback", () => {
    const mockedCallback = jest.fn(x => 42 + x);
    forEach([0, 1], mockedCallback)

    expect(mockedCallback.mock.calls.length).toBe(2)

    expect(mockedCallback.mock.calls[0][0]).toBe(0)

    expect(mockedCallback.mock.calls[1][0]).toBe(1)

    expect(mockedCallback.mock.results[0].value).toBe(42)

    expect(mockedCallback.mock.results[1].value).toBe(43)
})

it("mock return", () => {
    const mock = jest.fn();

    mock.mockReturnValueOnce(true);

    const results = mock();

    expect(results).toBe(true)
});

it("mock axios", async () => {
    jest.spyOn(axios, "get").mockReturnValueOnce({
        data: {
            id: 1,
            todo: "Get 1 sub"
        }
    })
    const results = await fetchData(1)
    expect(results.todo).toBe("Get 1 sub")
})