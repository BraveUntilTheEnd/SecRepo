const javaScrip = (n) => (n*3);

function compose(valuePar){
    return function myFuntion(mf) {
        return mf + valuePar(mf)}
} 
let resultado = compose(javaScrip)(3)
console.log(resultado)
/*
const fn = function (n) { return n * 3 }

function compose(paramFn) {
  return function(paramValue) {
    return paramValue + paramFn(paramValue)
  } 
}

resultado = compose(fn)(3)
console.log(resultado)
*/

// pensar como utilizar un every(una funcion) como si fuera un some(una funcion) y viceversa

// reduce() utiliza una funcion con 2 parametros, el segundo es opcional

const a = [3,4,12,5,8];
const f = (x) => x + y; // almacena una funcion
const filtro = a.map(f) // aplica una transformacion en base a una funcion que se da por parametro
filtro.forEach((e,i) => console.log(e(i))) // recorre el array

console.log(
  a.reduce((a,b) => {
    if (a.include(b)){
      a.push(b)
    }
    return a
  })
)