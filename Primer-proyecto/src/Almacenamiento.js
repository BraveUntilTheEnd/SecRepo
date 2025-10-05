//Seccion Comentarios Personales

// Es La Forma De Hacer Un Print por Consola
console.log("HolaMuchachos")

// Es Como Se Define Una Constante
const i = 1;

// Es Como Se Define Una Variable
let b = 2;

// Es Como Se Define Una Función
function suma (a,b){
    return console.log(a+b)
};

// Es Como Una Función Esta Contenida y Lo Imprime
const o = function (a){
    return a
};
console.log(o(2))

// Otra Forma De Implementar Una Función (Arrow Funtion o Función Flecha)
const mf = (a,b) => a + b ;
const javaScrip = (n) => {n*3}; // crea una funcion que multiplica por 3 al valor ingresado

function compose(valuePar){ // crea una funcion que retorna otra funcion,
    return function myFuntion(mf) { // se llaman funciones de primer orden o
        return mf + valuePar(mf)} //ciudadanos de primer orden
} 
let resultado = compose(javaScrip)(3) // lo que termina haciendo la funcion es el "3" que se le pasa por parametro
//console.log(resultado) // le aplica la funcion javascrip del principio multiplicandolo por 3, luego le suma el valor que se le dio a
// al siguiente parametro de javascrip que lo almacena en mf, por ultimo imprime el valor de javascrip(3*3=9) + mf (3)
// dando por consola el valor 12

//--------------------------------------------------------------------------------------------------
const fn = function (n) { n * 3 }

function compose(paramFn) {
  return function(paramValue) {
    return paramValue + paramFn(paramValue)
  } 
}

resultado = compose(fn)(3)
//console.log(resultado)

//-----------------------------------------------------------------------------------


const y = 1
const a = [3,4,12,5,8]
const f = (x) => x + y // almacena una funcion que suma 2 valores
const filtro = a.map(f) // aplica una transformacion en base a una funcion que se da por parametro
filtro.forEach((e,i) => console.log(e)) // recorre el array

//-----------------------------------------------------------------------------------------------

// pensar como utilizar un every(una funcion) como si fuera un some(una funcion) y viceversa
 
const numero = [2,4,6,8];
//console.log(numero.every(x => x % 2 === 0)) // Todos cumplen la condicion

//console.log(!numero.some(x => x % 2 !== 0)) // No hay ni uno que no cumpla la condicion

//console.log(!numero.every(x => x % 2 !== 0)) // Ninguno no cumple la condicion

//-----------------------------------------------------------------------------------------------

// reduce() utiliza una funcion con 2 parametros, el segundo es opcional

const d = [3,4,12,5,8,12]
console.log( 
  d.reduce((a,b) => {
    if (!a.includes(b)){
      a.push(b)
    }
    return a
  }, [])// Almacena en un array los elementos repetidos
)

// ----------------------------------------------------------------------------------------------------

const aa = [3,4,12,5,8,12]
const c = a.find(x => x >= 15)

const da = (c)=>{
  if (c == undefined){
    return "No Se Ha Encontrado El Numero Mayor A 15"
  } else{
    return c
  }
}
//console.log(d(c))

let val ;
const t = (val = () => {})

//operador spread

const persona = {
  nombre: 'Andy',
  edad: 61,
  genero: 'M'
}

const profesion ={
  titulo: "Ingeniero",
  matriculado: false
}

const combinado = {
  ...persona,...profesion
}
const persona2 = {
  nombre: "Pablo",
  titulo: "Ing"
  }

const personas = [{
  persona,
  persona2
}]

  //agregando un elemento nuevo al objeto, funciona con arrays
const newPersona = {
  ...persona, nacionalidad: "Argentina"
}

const agregarElemArray = personas.map(
  (pers) =>{
    return {...pers, Alumno: "Si"}
  }
)
//console.log(combinado)
//console.log(newPersona)
//console.log(agregarElemArray)

const producto =[
  {id: 1, descripcion: "Monopatin" },
  {id: 2, descripcion: "Ropa"}
]

const clientes = [
  {id: 1, nombre: "Nadia"},
  {id: 2, nombre: "Milagros"},
  {id: 3, nombre: "Pablo"}
]

const ventas = [ // en este caso estoy asignando a la const ventas un array [] de objetos {}
  {id: 1, producto: 2}, // cuando se asignan llaves con clave (id:) y valor (1), se esta hablando de un objeto y se 
  {id: 2, producto: 1}, // separa cada atributo con una coma (,), en este caso id y producto son claves, 1 y 2 son sus valores
  {id: 1, producto: 1} // cada {} son objetos diferentes,
]

//agrega el nombre de cliente que compro y la descripcion del producto comprado
const clienYprodu = ventas.map(
  (v)=> {
    return {...v,nombre: clientes.find((c)=> c.id == v.id).nombre, descripcion:producto.find((p)=>p.id == v.id).descripcion  }
  }
)
//console.log(clienYprodu)

const arra = [1,3,5,7,9]
//console.log(...arra)

// args funciona par asignar paramtros de forma indefinida e infinita, nunca se usa como primer elemento en una funcion
const fp = (f, ...args)=>{
return args.reduce((a,b) => a +b, 0)
}

// el spread (...) separa en elementos a los arrays [1,2,3] = 1 2 3. y a los objetos los toma por atributos


const agregarEle = (arr, e)=>{
  return [...arr, e]
}
//console.log(agregarEle(arra, 10))

// Module.exports = {}
// nos sive para exportar metodos, arrays y objetos a otros archivos donde podamos necesitarlos

