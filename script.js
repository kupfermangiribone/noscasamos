document.addEventListener("DOMContentLoaded", function() {
    // Establece la fecha de la boda: 1 de Noviembre, 2025, a las 17:00 hs.
    const weddingDate = new Date("November 1, 2025 17:00:00").getTime();

    // Actualiza el contador cada segundo
    const countdownInterval = setInterval(function() {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        // Calcula días, horas, minutos y segundos
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Muestra el resultado en el elemento con id="countdown"
        const countdownElement = document.getElementById("countdown");
        if (countdownElement) {
            countdownElement.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
        }

        // Cuando la cuenta regresiva termina
        if (distance < 0) {
            clearInterval(countdownInterval);
            if (countdownElement) {
                countdownElement.innerHTML = "¡Ya nos casamos!";
            }
        }
    }, 1000);
});