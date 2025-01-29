// Conversor
function conversorTemperatura() {
    let celsius = document.getElementById("celsius").value.trim();

    // Validamos que el dato sea un numero
    if (isNaN(celsius) || celsius === "") {
        alert("Error de dato, por favor ingresa un numero.");
        return;
    }

    // Convertimos a numero
    celsius = parseFloat(celsius);

    // Conversion
    let kelvin = celsius + 273.15;
    let fahrenheit = (celsius * 9) / 5 + 32;

    // DOM
    document.getElementById(
        "resultado"
    ).innerHTML = `Grados Kelvin: ${kelvin.toFixed(2)}K <br>
    Grados Fahrenheit: ${fahrenheit.toFixed(2)}°F`;

    // Mostrar en la consola
    console.log(`Grados Kelvin: ${kelvin.toFixed(2)}K`);
    console.log(`Grados Fahrenheit: ${fahrenheit.toFixed(2)}°F`);
}

function resetear() {
    document.getElementById("celsius").value = "";
    document.getElementById("resultado").innerHTML = "";
}

// Musica
document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("musica");

    // Intenta reproducir el audio
    audio.play().catch((error) => {
        console.log("Autoplay bloqueado, esperando interacción del usuario.");
    });

    // Opcional: Reproducir el audio con un clic en cualquier parte de la página
    document.addEventListener(
        "click",
        function () {
            audio.play();
        },
        { once: true }
    ); // Solo ejecuta una vez
});
