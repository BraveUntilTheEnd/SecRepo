class Persona{
    constructor(nombre, anios){
        this.nombre = nombre
        this.edad = anios
    }

    saludar (){
        return "hola soy " + this.nombre
    }

    esMayor (){
        return this.edad >= 18
    }

    cumplirAnios (){
        this.edad++
    }

    getEdad (){
        return this.edad
    }
}
module.exports = {Persona}