const formulario = document.getElementById("formulario");
const nome = document.getElementById("nome");
const error = document.getElementById("error");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    
    if (nome.value.trim() === "") {
        error.textContent = "O nome é obrigatório.";
        error.style.color = "red";
    } else {
        error.textContent = "Formulario enviado com sucesso!";
        error.style.backgroundColor = "green";
        error.style.color = "white";
    }
});
