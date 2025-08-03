document.addEventListener('DOMContentLoaded', () => {
    console.log("La página de Valle Grande se ha cargado correctamente.");

    // Puedes agregar más funcionalidad aquí si lo deseas.
    // Por ejemplo, para un botón de "Leer Más" que muestre más texto.
    const leerMasBtn = document.querySelector('button');
    leerMasBtn.addEventListener('click', () => {
        // En este ejemplo, el alert ya está en el HTML, pero aquí
        // podrías hacer algo más complejo como mostrar/ocultar un párrafo.
        // Por ejemplo:
        // const parrafoOculto = document.createElement('p');
        // parrafoOculto.textContent = "Aquí va el texto adicional.";
        // document.getElementById('historia').appendChild(parrafoOculto);
    });
});