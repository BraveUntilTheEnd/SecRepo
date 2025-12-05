const vagon = require("./Vagon");

class vagonCarga extends vagon{
    constructor(cargaMaximaIdeal, maderasSueltas){
        super();
        this.cargaMaximaIdeal = cargaMaximaIdeal;
        this.maderasSueltas = maderasSueltas;

    }
     cargaMaxima(){
        return this.cargaMaximaIdeal - (400 * this.maderasSueltas)
     }

    CantidadDePasajeros(){
        return 0;}

    tieneBanio(){
        return false;
        }
    pesoMaximo(){
        return 1500 - this.cargaMaxima();
    }

    recibirMantenimiento(){
        this.maderasSueltas = Math.max(0,this.maderasSueltas -2); //Estas funcion devuelve 0 si llega a bajar de 0, nunca se pasa del primer valor otorgado
    }
}