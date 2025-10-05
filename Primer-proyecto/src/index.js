const productos = [{
    id: 1, 
    nombre: "Auriculares",
    precio: 15000,
    categoriaID: 1 
},
{
    id: 2 ,
    nombre: "Computadora",
    precio: 380000,
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
    precio: 3000,
    categoriaID: 3
},
{
    id: 5,
    nombre: "Buzo",
    precio: 4500,
    categoriaID: 3
},
{
    id: 6,
    nombre: "Chocolatada",
    precio: 400,
    categoriaID: 2
}
]

const Categorias = [
{
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
}
]
const bucarProductoPorNombreConError = (valor) => {
  const productoEncontrado = productos.find((p) => p.nombre == valor);
  if (productoEncontrado) return productoEncontrado;
  else throw Error("Produto no encontrado.");
};
console.log(bucarProductoPorNombreConError("Auriculares"))

const x = 1;