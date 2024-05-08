// Función para generar el ticket de compra
function generarTicket() {
    const ticket = document.getElementById('ticket');
    ticket.innerHTML = '<h2>GRACIAS POR TU COMPRA</h2>';
    const carrito = JSON.parse(localStorage.getItem('carrito'));
    if (!carrito || carrito.length === 0) {
        ticket.innerHTML += '<p>NO TIENES NADA EN EL CARRITO</p>';
        return;
    }
    let total = 0;
    carrito.forEach(item => {
        const subtotal = item.precio * item.cantidad;
        total += subtotal;
        const li = document.createElement('li');
        li.textContent = `${item.nombre} x ${item.cantidad} = $${subtotal}`;
        ticket.appendChild(li);
    });
    const totalElement = document.createElement('p');
    totalElement.textContent = `Total: $${total}`;
    ticket.appendChild(totalElement);

    // Limpiar el carrito después de generar el ticket
    localStorage.removeItem('carrito');
}

// Generar el ticket al cargar la página
document.addEventListener('DOMContentLoaded', generarTicket);


function goBack() {
    window.history.back();
}


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