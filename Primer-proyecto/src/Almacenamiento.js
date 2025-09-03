const javaScrip = (n) => {n*3}; // crea una funcion que multiplica por 3 al valor ingresado

function compose(valuePar){ // crea una funcion que retorna otra funcion,
    return function myFuntion(mf) { // se llaman funciones de primer orden o
        return mf + valuePar(mf)} //ciudadanos de primer orden
} 
let resultado = compose(javaScrip)(3) // lo que termina haciendo la funcion es el "3" que se le pasa por parametro
console.log(resultado) // le aplica la funcion javascrip del principio multiplicandolo por 3, luego le suma el valor que se le dio a
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
console.log(resultado)

//-----------------------------------------------------------------------------------


const y = 1
const a = [3,4,12,5,8]
const f = (x) => x + y // almacena una funcion que suma 2 valores
const filtro = a.map(f) // aplica una transformacion en base a una funcion que se da por parametro
filtro.forEach((e,i) => console.log(e)) // recorre el array

//-----------------------------------------------------------------------------------------------

// pensar como utilizar un every(una funcion) como si fuera un some(una funcion) y viceversa
 
const numero = [2,4,6,8];
console.log(numero.every(x => x % 2 === 0)) // Todos cumplen la condicion

console.log(!numero.some(x => x % 2 !== 0)) // No hay ni uno que no cumpla la condicion

console.log(!numero.every(x => x % 2 !== 0)) // Ninguno no cumple la condicion

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
