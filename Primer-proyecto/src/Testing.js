const a = [3,4,12,5,8,12]
const c = a.find(x => x >= 15)

const d = (c)=>{
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
  v=> {
    return {...v,nombre: clientes.find((c)=> c.id == v.id).nombre, descripcion:producto.find((p)=>p.id == v.id).descripcion  }
  }
)
//console.log(clienYprodu)

const arra = [1,3,5,7,9]
console.log(...arra)

// args funciona par asignar paramtros de forma indefinida e infinita, nunca se usa como primer elemento en una funcion
const fp = (f, ...args)=>{
return args.reduce((a,b) => a +b, 0)
}

// el spread (...) separa en elementos a los arrays [1,2,3] = 1 2 3. y a los objetos los toma por atributos


const agregarEle = (arr, e)=>{
  return [...arr, e]
}
console.log(agregarEle(arra, 10))
