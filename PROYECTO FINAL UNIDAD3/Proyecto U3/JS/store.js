// Verificar si el usuario está en el almacenamiento local al cargar la página
window.onload = function() {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
        const userData = JSON.parse(storedUserData);
        if (userData.username === 'admin' && userData.password === '12345' || userData.username !== 'admin') {
            // Si el usuario está autenticado, permitirle acceder a la tienda
            generarTarjetas();
            generarTarjetasDesdeLocalStorage();
            return;
        }
    }else{
        window.location.href = '../login.html';
    }

    // Si el usuario no está en el almacenamiento local o los credenciales no coinciden, redirigirlo a otro HTML

};

// Función para limpiar el almacenamiento local
function limpiarAlmacenamientoLocal() {
    localStorage.removeItem('userData');
    window.location.href = 'login.html';
}

// Obtener el botón con el ID "cerrar"
const botonCerrar = document.getElementById('cerrar');

// Agregar evento al botón "cerrar" para limpiar el almacenamiento local al hacer clic
botonCerrar.addEventListener('click', function() {
    // Limpiar el almacenamiento local
    limpiarAlmacenamientoLocal();
});



// Datos de ejemplo para los productos
const productos =   [
    { id: 1, nombre: 'RELOJ X', precio: 30, imagen: 'https://emwa.com.mx/wp-content/uploads/m126234-0051_collection_upright_landscape.jpg' },
    { id: 2, nombre: 'RELOJ X-1', precio: 25, imagen: 'https://emwa.com.mx/wp-content/uploads/2024/03/Rolex-Day-Date-M128238-0008-en-EMWA.jpg' },
    { id: 3, nombre: 'RELOJ X-3', precio: 45, imagen: 'https://torresjoyas.com.mx/images/coleccion/watch_assets_upright/landscape_assets/m128239-0005_collection_upright_landscape.jpg' },
    { id: 4, nombre: 'RELOJ X-4', precio: 90, imagen: 'https://emwa.com.mx/wp-content/uploads/m126234-0051_collection_upright_landscape.jpg' },
    { id: 5, nombre: 'RELOJ X-5', precio: 40, imagen: 'https://emwa.com.mx/wp-content/uploads/m126234-0051_collection_upright_landscape.jpg' },
    { id: 6, nombre: 'RELOJ X-6', precio: 75, imagen: 'https://emwa.com.mx/wp-content/uploads/m126234-0051_collection_upright_landscape.jpg' },

];



// Carrito de compras
let carrito = [];

function generarTarjetas() {
    const catalogo = document.getElementById('catalogo');
    catalogo.innerHTML = '';
    productos.forEach(producto => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h3>${producto.nombre}</h3>
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <p>Precio: $${producto.precio}</p>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
        `;
        catalogo.appendChild(card);
    });
}

function generarTarjetasDesdeLocalStorage() {
    let productosLocalStorage = JSON.parse(localStorage.getItem('articles')) || []; // Obtener los productos del Local Storage o usar un array vacío si no hay productos almacenados
    productosLocalStorage.forEach((producto, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h3>${producto.name}</h3>
            <img src="${producto.image}" alt="${producto.name}">
            <p>Precio: $${producto.price}</p>
            <button onclick="agregarAlCarrito(${index})">Agregar al Carrito</button>
        `;
        document.getElementById('catalogo').appendChild(card); // Agregar la tarjeta al catálogo
    });
}



// Función para agregar un producto al carrito
function agregarAlCarrito(id) {
    const productoExistente = carrito.find(item => item.id === id);
    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        const producto = productos.find(item => item.id === id);
        carrito.push({ id: producto.id, nombre: producto.nombre, precio: producto.precio, cantidad: 1 });
    }
    actualizarResumenCompra();
}

// Función para actualizar el resumen de la compra
function actualizarResumenCompra() {
    const listaResumen = document.getElementById('lista-resumen');
    listaResumen.innerHTML = '';
    let total = 0;
    carrito.forEach(item => {
        const subtotal = item.precio * item.cantidad;
        total += subtotal;
        const li = document.createElement('li');
        li.innerHTML = `${item.nombre} x ${item.cantidad} = $${subtotal}`;
        listaResumen.appendChild(li);
    });
    document.getElementById('total').textContent = total;
}

// Inicializar la tienda
generarTarjetas();

//Función para finalizar la compra
function finalizarCompra() {
    // Guardar el carrito en el almacenamiento local
    localStorage.setItem('carrito', JSON.stringify(carrito));
    // Redirigir a la página de tickets
    window.location.href = 'tickets.html';
}

// Agregar evento al botón "Finalizar Compra"
document.getElementById('finalizar-compra').addEventListener('click', finalizarCompra);


// Función para abrir la ventana emergente
function abrirVentana() {
    // Abre una nueva ventana
    
    var nuevaVentana = window.open("calculadora.html", "_blank", "width=400, height=500");

}


function goBack() {
    window.history.back();
}