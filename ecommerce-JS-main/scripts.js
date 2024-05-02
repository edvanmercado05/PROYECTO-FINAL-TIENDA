const pantalla = document.querySelector(".pantalla"); // Selecciona el elemento con la clase "pantalla" y lo asigna a la variable pantalla
const botones = document.querySelectorAll(".btn"); // Selecciona todos los elementos con la clase "btn" y los asigna a la variable botones

botones.forEach(boton => { // Itera sobre cada botón en la lista de botones
    boton.addEventListener("click", () => { // Añade un evento de click a cada botón
        const botonApretado = boton.textContent; // Obtiene el texto del botón presionado

        if (boton.id === "c") { // Si el botón tiene un ID de "c" (botón de limpiar)
            pantalla.textContent = "0"; // Establece el contenido de la pantalla a "0"
            return; // Sale de la función
        }

        if (boton.id === "borrar") { // Si el botón tiene un ID de "borrar" (botón de borrar)
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") { // Si la pantalla tiene un solo carácter o muestra "Error!"
                pantalla.textContent = "0"; // Establece el contenido de la pantalla a "0"
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1); // Borra el último carácter de la pantalla
            }
            return; // Sale de la función
        }

        if (boton.id === "igual") { // Si el botón tiene un ID de "igual" (botón de igual)
            try {
                pantalla.textContent = eval(pantalla.textContent); // Evalúa la expresión en la pantalla y muestra el resultado
            } catch {
                pantalla.textContent = "Error!"; // Si hay un error al evaluar la expresión, muestra "Error!"
            }
            return; // Sale de la función
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") { // Si la pantalla muestra "0" o "Error!"
            pantalla.textContent = botonApretado; // Establece el contenido de la pantalla al texto del botón presionado
        } else {
            pantalla.textContent += botonApretado; // Agrega el texto del botón presionado al contenido actual de la pantalla
        }
    })
})
