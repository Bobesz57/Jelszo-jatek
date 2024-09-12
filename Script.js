document.addEventListener("DOMContentLoaded", function() {
    let lastAttempt = "";  // Az előző próbálkozás (jelszó)
    const submitButton = document.getElementById("submitButton");
    const passwordInput = document.getElementById("passwordInput");
    const message = document.getElementById("message");

    submitButton.addEventListener("click", function() {
        const currentAttempt = passwordInput.value;
        
        if (currentAttempt === lastAttempt) {
            message.innerText = "Helyes jelszó!";
        } else {
            message.innerText = "Rossz jelszó! Próbáld újra!";
        }

        // Az aktuális próbálkozás lesz az új jelszó, de ezt a felhasználó nem tudja
        lastAttempt = currentAttempt;

        // Töröljük a beviteli mezőt
        passwordInput.value = "";
    });
});
