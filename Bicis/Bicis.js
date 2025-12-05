class Bicicleta {
    constructor(rodado, largo, marca, accesorios = []) {
        this.rodado = rodado
        this.largo = largo
        this.marca = marca
        this.accesorios = accesorios
    }

    get altura() {
        return this.rodado * 2.5 + 15
    }

    get velocidadDeCrucero() {
        if (this.largo > 120) {
            return this.rodado + 6
        } else {
            return this.rodado + 2
        }
    }

    get carga() {
        return this.accesorios.reduce((total, accesorio) => total + accesorio.getCarga(), 0)
    }

    get peso() {
        const pesoBase = this.rodado / 2
        
        const pesoAccesorios = this.accesorios.reduce((total, accesorio) => total + accesorio.getPeso(), 0);

        return pesoBase + pesoAccesorios
    }

    get tieneLuz() {
        return this.accesorios.some(accesorio => accesorio.esLuminoso());
    }

    cantidadAccesoriosLivianos() {
        return this.accesorios.filter(accesorio => accesorio.getPeso() < 1).length;
    }
}

class Accesorio {
    constructor() {
        
    }

    getPeso() {
    }

    getCarga() {
    }

    esLuminoso() {
    }
}

class Farolito extends Accesorio {
    getPeso() {
        return 0.5
    }

    getCarga() {
        return 0
    }

    esLuminoso() {
        return true
    }
}

class Canasto extends Accesorio {
    constructor(volumen) {
        super()
        this.volumen = volumen
    }

    getPeso() {
        return this.volumen / 10
    }

    getCarga() {
        return this.volumen * 2
    }

    esLuminoso() {
        return false
    }
}


class MorralBici extends Accesorio {
    constructor(largo, tieneOjoDeGato) {
        super()
        this.largo = largo
        this.tieneOjoDeGato = tieneOjoDeGato
    }

    getPeso() {
        return 1.2
    }

    getCarga() {
        return this.largo / 3
    }

    esLuminoso() {
        return this.tieneOjoDeGato
    }
}


module.exports = {Bicicleta, MorralBici, Canasto, Farolito}
