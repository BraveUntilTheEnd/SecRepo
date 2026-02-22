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
filtro.forEach((e) => console.log(e)) // recorre el array

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
    return {...v, nombre: clientes.find((c)=> c.id == v.id).nombre, descripcion:producto.find((p)=>p.id == v.id).descripcion  }
  }
)
//console.log(clienYprodu)

const arra = [1,3,5,7,9]
//console.log(...arra)

// args funciona par asignar paramtros de forma indefinida e infinita, nunca se usa como primer elemento en una funcion
const fp = (f, ...args)=>{
return args.reduce((a,b) => a + b, 0)
}

// el spread (...) separa en elementos a los arrays [1,2,3] = 1 2 3. y a los objetos los toma por atributos


const agregarEle = (arr, e)=>{
  return [...arr, e]
}
//console.log(agregarEle(arra, 10))

// Module.exports = {}
// nos sive para exportar metodos, arrays y objetos a otros archivos donde podamos necesitarlos

const productos = [{
    id: 1, 
    nombre: "Auriculares",
    precio: 10000,
    categoriaID: 1 
},
{
    id: 2 ,
    nombre: "Computadora",
    precio: 310000,
    categoriaID: 1
},
{
    id: 3,
    nombre: "Cafe",
    precio: 500,
    categoriaID: 2
},
{
    id: 4,
    nombre: "Campera",
    precio: 3200,
    categoriaID: 3
},
{
    id: 5,
    nombre: "Buzo",
    precio: 2400,
    categoriaID: 3
},
{
    id: 6,
    nombre: "Chocolatada",
    precio: 400,
    categoriaID: 2
}]

const Categorias = [{
    id: 1,
    descripcion: "Electrónica",
    esImportada: true
  },
  {
    id: 2,
    descripcion: "Alimentos",
    esImportada: false
},
{
    id: 3,
    descripcion: "Indumentaria",
    esImportada: true
}]
const bucarProductoPorNombreConError = (valor) => {
  const productoEncontrado = productos.find((p) => p.nombre == valor);
  if (productoEncontrado) return productoEncontrado;
  else throw Error("Produto no encontrado.");
};
//console.log(bucarProductoPorNombreConError("Auriculares"))

const buscarCategoriaconid = (valor)=>{
    const cateEncontrada = Categorias.find((c)=> c.id == valor);
    if(cateEncontrada) 
        return cateEncontrada
    else throw Error("La categoria solicitada no es valida")
}
//console.log(buscarCategoriaconid(2))

const BuscarPromedio = (arrayObjeto)=>{
    const acumulador = arrayObjeto.reduce((a,b) => a + b.precio, 0)
    const promedio = acumulador / arrayObjeto.length
    return promedio
}
//console.log(BuscarPromedio(productos))

//Mostrar productos unidos a tu descripcion de categoria
const unificarArrays = (productos, categorias) => {
    return productos.map((a)=> {
        const cate = categorias.find((c)=>c.id == a.categoriaID);
            return{
                nombre: a.nombre,
                precio: a.precio,
                categorias:{
                    id: cate.id,
                    descripcion: cate.descripcion,
                    esImportada: cate.esImportada
                }
            }
        }    
    )
}
//console.log(unificarArrays(productos, Categorias))

// Mostrar los productos de una categoria especifica

const MostarProductosxCategoria = (producto, buscado) => {
    const busqueda = producto.filter((p)=> p.categoriaID == buscado)
    if (busqueda.length == 0){ // JS hace comparaciones a nivel de referencia, por eso aqui comparo el contenido y no con otro array vacio
        return console.log("No se ha encontrado la categoria que busca")    
    } else {
        return busqueda
    }
}
//console.log(MostarProductosxCategoria(productos, 3))

// Escriba una función que reciba por parámetro un nombre y retorne el producto que coincida exactamente con ese nombre utilizando.
const imprimirProductoxNombre = (n)=>{
    const busqueda2 = productos.filter((p)=> p.nombre == n)
    return (busqueda2.length == 0) ? ("No se encontro el producto: " + n) :  busqueda2
}
//console.log(imprimirProductoxNombre("Amor"))

// Escriba una función que no reciba parámetros y retorne el producto con menor precio

const imprimirSinParametrosReduce = ()=> {    
    const acumulador = productos.reduce((a,b) => (a.precio <= b.precio)? a : b) 
    return acumulador
}

//console.log (`Menor Precio:`)
//console.log(imprimirSinParametrosReduce())

/*
--------------------- dia 3 adventJS ---------------------------------------
dibuja cuadrados con un simbolo y tamaño otorgados
function drawGift(size, symbol) {
  let inicio = ""
  let medio = ""
  let fin = ""
  let resultado = "" 
  if (!(size < 2)){
      for (let i = 0; i <= size; i++ ) {
        if (i >= 1 && i != size && size != 2){
          medio = symbol + " ".repeat(size-2) + symbol + "\n"
        }else {
          if (i == size){
          inicio = symbol.repeat(size)+ "\n"
        }else {
          fin = symbol.repeat(size)
        }}
}
    }else{
      return ""
    }
    if(size > 2){
      resultado = inicio + medio.repeat(size - 2) + fin
    } else{
      resultado = inicio + medio + fin
    }
  return resultado
}
console.log(drawGift(2, "%"))
console.log(drawGift(3, "%"))
console.log(drawGift(5, "%"))
--------------------- dia 4 adventjs --------------------------------------
function decodeSantaPin(code) {
  let codigoFinal = "";
  const primerFiltro = code.split("]");
  const primerVerif = primerFiltro.filter(e => e != "");
  for (let i = 0; i < primerVerif.length; i++) {
    let segFiltro = primerVerif[i].split("[");
    let digito = segFiltro[1]; 
    if (digito == "<") {
       if (codigoFinal.length > 0) {
          codigoFinal = codigoFinal + codigoFinal[codigoFinal.length - 1];
       }
    } 
    else {
       let numBase = parseInt(digito[0]); 
       for (let j = 1; j < digito.length; j++) {
          if (digito[j] == "+") numBase++;
          if (digito[j] == "-") numBase--;
       }
       let digitoResuelto = ((numBase % 10) + 10) % 10;
       codigoFinal = codigoFinal + digitoResuelto;
    }
  }
  if (codigoFinal.length < 4) {
    return null;
  }
  return codigoFinal;
}
const codeo = "[1--][1-+][8++][7++]"
console.log(decodeSantaPin(codeo))

------------------ Resolucion dia 5 adventJS ---------------------

function timeUntilTakeOff(fromTime, takeOffTime) {
  function tomandoValores(valor) {
    const filtro = /(\d+)\*(\d+)\*(\d+)@(\d+)\|(\d+)\|(\d+)/
    const valoresFijos = valor.match(filtro);
    if (!valoresFijos) {
        return 0
    }
    const [datoInutil, anio, mes, dia, hora, minuto, segundo] = valoresFijos
    return Date.UTC(anio, mes - 1, dia, hora, minuto, segundo)
  }
  const tiempoDesde = tomandoValores(fromTime)
  const tiempoHasta = tomandoValores(takeOffTime)
  const diferenciaSeg = tiempoHasta - tiempoDesde
  return Math.floor(diferenciaSeg / 1000)
}
const takeoff = '2025*12*25@00|00|00 NP'
console.log(timeUntilTakeOff('2025*12*24@23|59|30 NP', takeoff))

------------------ dia 6 Resuelto adventJS -----------------------------------
unction matchGloves(gloves) {
  let totalGuantesPares = []
  let usados = new Array(gloves.length).fill(false); 
  for (let i = 1; i < gloves.length; i++){
    if (usados[i]) continue
    for (let j = 0 ; j < i; j++){
       if (usados[j]) continue
       if (gloves[i].color == gloves[j].color && gloves[i].hand !== gloves[j].hand) {
          totalGuantesPares.push(gloves[i].color)
          usados[i] = true
          usados[j] = true
          break
       }
    }
  }
  return totalGuantesPares
}
const guantes = [
  {hand: "L", color: "red"},
  {hand: "L", color: "blue"},
  {hand: "R", color: "blue"},
  {hand: "R", color: "red"},
  {hand: "L", color: "red"},
  {hand: "R", color: "red"},
  {hand: "L", color: "red"},
  {hand: "R", color: "red"}
]
console.log(matchGloves(guantes))
*/

