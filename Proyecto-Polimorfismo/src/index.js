
// importar las clases
const vagonPasajeros = require("./modules/Vagon-Pasajeros");
const vagonDormitorio = require("./modules/Vagon-Dormitorio");
const vagonCarga = require("./modules/Vagon-Carga");
const tren = require("./modules/tren");

// crear vagones
const v1 = new vagonPasajeros(10, 4, true, true);
const v2 = new vagonPasajeros(7, 2, false, false);
const v3 = new vagonCarga(6800, 5);
const v4 = new vagonDormitorio(8, 3);

// crear tren
const t1 = new tren()

// agregar vagones
t1.agregarVagones(v1);
t1.agregarVagones(v2);
t1.agregarVagones(v3);
t1.agregarVagones(v4);

console.log(
    t1.vagones.map((v, i)=>{
        return {
            "Vagon: " : i+1,
            "Cantidad Pasajeros: ": v.cantidadPasajeros(),
            "Carga Maxima: " : v.cargaMaxima(),
            "Peso Maximo: " : v.pesoMaximo(),
            "Con Baño: " : v.conBanio()
    }
    }
    )



)