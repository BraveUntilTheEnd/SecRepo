const {Bicicleta, MorralBici, Canasto, Farolito} = require("./Bicis")
const f1 = new Farolito()
const bici1 = new Bicicleta(28, 150, "Olmo", [f1])
const c2 = new Canasto(8)
const m2 = new MorralBici(21, true)
const bici2 = new Bicicleta(26, 110, "Legnano", [f1, c2, m2])
const m3 = new MorralBici(6, false)
const bici3 = new Bicicleta(20, 90, "Legnano", [m3])

describe("Probamos los objetos bici1, bici2 y bici3", () => {
    describe("Test Bici1", () => {
        const bici = bici1

        test("La altura debe ser 85 cm", () => {
            expect(bici.altura).toBe(85)
        })

        test("La velocidad de crucero debe ser 34", () => {
            expect(bici.velocidadDeCrucero).toBe(34)
        })

        test("El peso total debe ser 14.5 kg", () => {
            expect(bici.peso).toBeCloseTo(14.5)
        })

        test("La carga debe ser 0", () => {
            expect(bici.carga).toBe(0)
        })
        
        test("Debe tener luz y 1 accesorio liviano", () => {
            expect(bici.tieneLuz).toBe(true)
            expect(bici.cantidadAccesoriosLivianos()).toBe(1)
        })
    })

    describe("Test Bici2", () => {
        const bici = bici2

        test('2.1. La altura debe ser 80 cm', () => {
            expect(bici.altura).toBe(80)
        })

        test("La velocidad de crucero debe ser 28", () => {
            expect(bici.velocidadDeCrucero).toBe(28)
        })

        test("El peso total debe ser 15.5 kg", () => {
            expect(bici.peso).toBeCloseTo(15.5)
        })
        
        test("La carga total debe ser 23", () => {
            expect(bici.carga).toBe(23);
        })
        
        test("Debe tener luz y 2 accesorios livianos", () => {
            expect(bici.tieneLuz).toBe(true)
            expect(bici.cantidadAccesoriosLivianos()).toBe(2)
        })
    })

    describe("Test Bici3", () => {
        const bici = bici3

        test("La altura debe ser 65 cm", () => {
            expect(bici.altura).toBe(65)
        })

        test("La velocidad de crucero debe ser 22", () => {
            expect(bici.velocidadDeCrucero).toBe(22)
        })

        test("El peso total debe ser 11.2 kg", () => {
            expect(bici.peso).toBeCloseTo(11.2)
        })
        
        test("La carga debe ser 2", () => {
            expect(bici.carga).toBe(2)
        })
        
        test("No debe tener luz y debe tener 0 accesorios livianos", () => {
            expect(bici.tieneLuz).toBe(false)
            expect(bici.cantidadAccesoriosLivianos()).toBe(0)
        })
    })
})