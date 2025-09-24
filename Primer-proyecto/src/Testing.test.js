const { AlienSaga, Pelis } = require("./index.js")

describe("Testeo Index.js", ()=> {
test("Probar Pelis",()=> {
    expect(AlienSaga(Pelis)).toBe(1)
})
})

