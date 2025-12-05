const Vagon = require("./Vagon");

class vagonPasajeros extends Vagon{
    constructor(largo, ancho, tieneBanio, estaOrdenado){
        super();
        this.largo = largo;
        this.ancho = ancho;
        this.tieneBanio = tieneBanio;
        this.estaOrdenado = estaOrdenado;
        
    }

    cargaMaxima(){
        return this.tieneBanio ? 300 : 800;
    }

    CantidadDePasajeros(){
        let pasajeros = this.ancho <= 3 ? (8* this.largo) : (10*this.largo);
        if (this.estaOrdenado){pasajeros = pasajeros - 15} 
    }

    tieneBanio(){
        return this.tieneBanio
    }

    pesoMaximo(){
        return 2000 * (80+ this.CantidadDePasajeros()) + this.cargaMaxima();
    }

    recibirMantenimiento(){
        return this.estaOrdenado = true;
    }
}

module.exports = vagonPasajeros