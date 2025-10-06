const productos = [{
    id: 1, 
    nombre: "Auriculares",
    precio: 100,
    categoriaID: 1 
},
{
    id: 2 ,
    nombre: "Computadora",
    precio: 100,
    categoriaID: 1
},
{
    id: 3,
    nombre: "Cafe",
    precio: 100,
    categoriaID: 2
},
{
    id: 4,
    nombre: "Campera",
    precio: 100,
    categoriaID: 3
},
{
    id: 5,
    nombre: "Buzo",
    precio: 100,
    categoriaID: 3
},
{
    id: 6,
    nombre: "Chocolatada",
    precio: 100,
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

console.log(BuscarPromedio(productos))


const unificarArrays = (productos, categorias) => {
    return productos.map((a)=> {
        const cate = categorias.find((c)=>c.id == a.categoriaID);
        if (cate){
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
    }
);
}
console.log(unificarArrays(productos, Categorias))
