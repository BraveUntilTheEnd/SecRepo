const tren = require("../modules/tren");
const vagonPasajeros = require("../modules/Vagon-Pasajeros")
const vagonDormitorio = require("../modules/Vagon-Dormitorio")
const vagonCarga = require("../modules/Vagon-Carga")

describe("Test General", ()=>{
    const p1 = new vagonPasajeros(10, 4, true, true);
    test(()=>{
        expect(p1.cantidadDePasajeros()).toBe(100);
        expect(p1.pesoMaximo()).toBe(10300);
        expect(p1.cargaMaxima()).toBe(300);
        expect(p1.conBanio()).toBe(true);

    })

    



})