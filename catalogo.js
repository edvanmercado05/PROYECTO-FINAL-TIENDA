document.addEventListener('DOMContentLoaded', function() {
    const productForm = document.getElementById('product-form');

    productForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe

        // Obtener los valores del formulario
        const nombre = document.getElementById('nombre').value;
        const descripcion = document.getElementById('descripcion').value;
        const imagen = document.getElementById('imagen').value;
        const precio = document.getElementById('precio').value;

        // Crear un nuevo objeto de producto
        const product = {
            nombre: nombre,
            descripcion: descripcion,
            imagen: imagen,
            precio: precio
        };

        // Obtener la lista de productos existentes del almacenamiento local o inicializarla si es la primera vez
        let products = JSON.parse(localStorage.getItem('products')) || [];

        // Agregar el nuevo producto a la lista
        products.push(product);

        // Guardar la lista actualizada en el almacenamiento local
        localStorage.setItem('products', JSON.stringify(products));

        // Limpiar el formulario después de enviarlo
        productForm.reset();

        // Redireccionar a la página tienda.html
        window.location.href = 'tienda.html';
    });
});
