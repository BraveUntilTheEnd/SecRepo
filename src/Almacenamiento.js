const javaScrip = (n) => (n*3);

console.log("Aqui Estoy")

function compose(valuePar){
    return function myFuntion(mf) {
        return mf + valuePar(mf)}
} 
let resultado = compose(javaScrip)(3)
console.log(resultado)

//--------------------------------------------------------------------------------------------------
const fn = function (n) { return n * 3 }

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
const f = (x) => x + y // almacena una funcion
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
