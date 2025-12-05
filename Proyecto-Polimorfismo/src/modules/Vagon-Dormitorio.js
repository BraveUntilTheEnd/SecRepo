const vagon = require("./Vagon");

class vagonDormitorio extends vagon{
    constructor(compartimientos, camas){
        super();
        this.compartimientos = compartimientos;
        this.camas = camas;
        
    }

    cargaMaxima(){
        return 1200;
    }

    CantidadDePasajeros(){
        return this.CantidadDePasajeros * this.camas; 
    }

    tieneBanio(){
        return true;
    }

    pesoMaximo(){
        return 4000 * (80+ this.CantidadDePasajeros()) + this.cargaMaxima();
    }

    recibirMantenimiento(){
        // No hace nada, los dormitorios no tienen mantenimiento.
    }
}