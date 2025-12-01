document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("#registerForm");
    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const repeatPassword = document.querySelector("#repeatPassword");

 let nombre = ("Debes completar el campo Nombre")
 let correo = ("Debes completar el campo Email")

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let valid = true;

        // Reset mensajes de error
        document.querySelectorAll(".error-msg").forEach(msg => msg.textContent = "");

        // Validaciones
        if (name.value.trim() === "") {
            setError(name,"Obligatorio", alert(nombre));
            valid = false;
        }

        if (email.value.trim() === "") {
            setError(email, "Obligatorio",alert(correo));
            valid = false;
        } else if (!validateEmail(email.value)) {
            setError(email, "Correo no valido");
            valid = false;
        }

        if (password.value.trim() === "") {
            setError(password, "Obligatorio");
            valid = false;
        } else if (password.value.length < 6) {
            setError(password, "La contraseña debe tener al menos 6 caracteres");
            valid = false;
        }

        if (repeatPassword.value.trim() === "") {
            setError(repeatPassword, "Debes repetir la contraseña");
            valid = false;
        } else if (repeatPassword.value !== password.value) {
            setError(repeatPassword, "Las contraseñas no coinciden");
            valid = false;
        }

        if (valid) {
            alert("Usuario Registrado");
            form.reset();
        }
    });

    function setError(input, message) {
        const parent = input.parentElement;
        const small = parent.querySelector(".error-msg");
        small.textContent = message;
    }

    function validateEmail(email) {
        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});



