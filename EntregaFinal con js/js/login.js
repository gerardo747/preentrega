document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("#loginForm");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let valid = true;

 let contraseña = ("Debes completar el campo Contraseña")
 let correo = ("Debes completar el campo Email")


        // Reset de mensajes
        document.querySelectorAll(".error-msg").forEach(msg => msg.textContent = "");

        if (email.value.trim() === "") {
            setError(email, "Campo obligatorio",alert(correo));
            valid = false;
        }

        if (password.value.trim() === "") {
            setError(password, "Contraseña  obligatoria",alert(contraseña));
            valid = false;
        }

        if (valid) {
            alert("Login exitoso (ejemplo)");
            form.reset();
        }
    });

    function setError(input, message) {
        const parent = input.parentElement;
        const small = parent.querySelector(".error-msg");
        small.textContent = message;
    }

});
