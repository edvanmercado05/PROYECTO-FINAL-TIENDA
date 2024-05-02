// Obtener los productos en el carrito del localStorage y convertirlos a un objeto
let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);

// Seleccionar los elementos del carrito en el DOM
const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

// Función para cargar los productos en el carrito
function cargarProductosCarrito() {
    let total = 0;

    if (productosEnCarrito && productosEnCarrito.length > 0) {
        // Si hay productos en el carrito, mostrar los elementos correspondientes y ocultar otros elementos
        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");

        // Limpiar el contenedor de productos en el carrito
        contenedorCarritoProductos.innerHTML = "";

        // Iterar sobre los productos en el carrito y crear elementos HTML para mostrarlos
        productosEnCarrito.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
                <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="carrito-producto-titulo">
                    <small>Título</small>
                    <h3>${producto.titulo}</h3>
                </div>
                <div class="carrito-producto-cantidad">
                    <small>Cantidad</small>
                    <p>${producto.cantidad}</p>
                </div>
                <div class="carrito-producto-precio">
                    <small>Precio</small>
                    <p>$${producto.precio}</p>
                </div>
                <div class="carrito-producto-subtotal">
                    <small>Subtotal</small>
                    <p>$${producto.precio * producto.cantidad}</p>
                </div>
                <button class="carrito-producto-eliminar" id="${producto.id}"> <i class="bi bi-trash-fill"></i> </button>
            `;
            total += producto.precio * producto.cantidad;
            contenedorCarritoProductos.append(div);
        });

        // Mostrar el total de la compra
        document.getElementById("total").innerText = total.toFixed(2);
    } else {
        // Si no hay productos en el carrito, mostrar el mensaje de carrito vacío y ocultar otros elementos
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    }
    // Actualizar los botones de eliminar producto en el carrito
    actualizarBotonesEliminar();
}

// Llamar a la función para cargar los productos en el carrito
cargarProductosCarrito();

// Función para actualizar los botones de eliminar producto en el carrito
function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(e) {
    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto =>  producto.id === idBoton);
    productosEnCarrito.splice(index, 1);
    cargarProductosCarrito();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

// Evento al hacer clic en el botón de comprar
document.querySelector(".carrito-acciones-comprar").addEventListener("click", function() {
    // Vaciar el arreglo productosEnCarrito
    productosEnCarrito = [];
    // Actualizar el carrito
    cargarProductosCarrito();
    // Guardar el carrito vacío en el localStorage
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    // Mostrar un mensaje de agradecimiento
    alert("¡Gracias por su compra!");
});

// Evento al hacer clic en el botón de vaciar carrito
document.querySelector(".carrito-acciones-vaciar").addEventListener("click", function() {
    // Vaciar el arreglo productosEnCarrito
    productosEnCarrito = [];
    // Actualizar el carrito
    cargarProductosCarrito();
    // Guardar el carrito vacío en el localStorage
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
});

// Evento al hacer clic en el botón de la calculadora
document.getElementById("calculadora").addEventListener("click", function() {
    window.location.href = "CALCULADORA.html";
});

 
}

