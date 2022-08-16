class Producto {
    constructor(id, nombre, marca, precio, stock, ) {
        this.id = id
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.stock = stock
        
    }
}

const idForm = document.getElementById("idForm")
const botonproduc = document.getElementById("botonproduc")
const divProductos = document.getElementById("divProductos")

const productos = []

idForm.addEventListener('submit', (evento) => {
    evento.preventDefault()

    const id = document.getElementById("Id_Producto").value
    const nombre = document.getElementById("Nombre_Producto").value
    const marca = document.getElementById("Marca_Producto").value
    const precio = document.getElementById("Precio_Producto").value
    const stock = document.getElementById("Stock_Producto").value

    const producto = new Producto(id, nombre, marca, precio, stock, )

    productos.push(producto)

    idForm.reset()
    console.log(producto)
})


botonproduc.addEventListener('click', () => {
    divProductos.innerHTML = ""
    productos.forEach((productoArray) => {
        divProductos.innerHTML += `
        <div class="card productos">
            <div class="card-body">
                <h5 class="card-title">${productoArray.nombre}</h5>
                <p class="card-text">Marca: ${productoArray.marca}</p>
                <p class="card-text">Precio: $${productoArray.precio}</p>
                <p class="card-text">Stock: ${productoArray.stock}</p>
                
        </div>
      </div>
        `
    }) 
}) 
