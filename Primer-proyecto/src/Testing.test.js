const { AlienSaga, Pelis } = require("./index.js")
const {Persona} = require("./Clase.js")

describe("Testeo Index.js", ()=> {
test("Probar Pelis",()=> {
    expect(AlienSaga(Pelis)).toBe(1)
})
})

describe("Probando Clase", ()=>{
    test("Testeo la edad de una persona", ()=>{
        const testPersona = new Persona("Adrian", 25)
        expect(testPersona.getEdad()).toBe(25);
    });

    test("Testeo la edad de una persona luego de cumplir años", ()=>{
        const testPersona = new Persona("Ana", 23)
        expect(testPersona.cumplirAnios()).toBe(24);
    });
    });
