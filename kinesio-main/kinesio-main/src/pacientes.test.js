const Paciente = require('./pacientes')
const { Magneto, Bicicleta, Minitramp } = require('./aparatos')

describe("Test de Pacientes", ()=>{
    test ("verifico que se crea bien los pacientes", ()=>{
        const leonardo = new Paciente(40, 10, 20)
        expect(leonardo.getDolor()).toBe(10)
        expect(leonardo.getMuscular()).toBe(20)
        expect(leonardo.getEdad()).toBe(40)
    })

    test ("verifico que Leonardo pueda realizar rutita", ()=>{
        const magneto = new Magneto()
        const bici = new Bicicleta()
        const mini = new Minitramp()
        const leonardo = new Paciente(40, 10, 20, [magneto, bici, mini, bici ])
        expect(leonardo.puedeRealizarRutina()).toBe(true)
    })
    test ("verifico que Milena no pueda realizar rutita", ()=>{
        const magneto = new Magneto()
        const bici = new Bicicleta()
        const mini = new Minitramp()
        const milena =  new Paciente(3, 30, 50, [magneto, bici, mini, bici ])
        expect(milena.puedeRealizarRutina()).toBe(false)
    })

    test ("verifico que Milena Si pueda realizar rutita", ()=>{
        const magneto = new Magneto()
        const bici = new Bicicleta()
        const mini = new Minitramp()
        const milena =  new Paciente(3, 30, 50, [magneto, magneto ])
        expect(milena.puedeRealizarRutina()).toBe(true)
    })

    test ("Leonardo realizar rutita", ()=>{
        const magneto = new Magneto()
        const bici = new Bicicleta()
        const mini = new Minitramp()
        const leonardo = new Paciente(40, 10, 20, [magneto, bici, mini, bici ])
        leonardo.realizarRutina()
        expect(leonardo.getDolor()).toBe(1)
        expect(leonardo.getMuscular()).toBe(30)   
    })

    test ("Milena realizar rutita", ()=>{
        const magneto = new Magneto()
        const bici = new Bicicleta()
        const mini = new Minitramp()
        const milena =  new Paciente(3, 30, 50, [ bici, mini, magneto, bici ])
        milena.realizarRutina()
        expect(milena.getDolor()).toBe(27)
        expect(milena.getMuscular()).toBe(50)  
    })

})