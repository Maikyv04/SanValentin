// Obtener elementos
const openCardBtn = document.getElementById("openCard");
const introScreen = document.querySelector(".intro");
const questionContainer = document.querySelector(".container");
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const messageScreen = document.querySelector(".message");

// Evento para mostrar la pregunta cuando se haga clic en "Ver carta"
openCardBtn.addEventListener("click", function() {
    introScreen.style.display = "none"; // Oculta la intro
    questionContainer.classList.remove("hidden"); // Muestra la pregunta
    questionContainer.style.display = "block"; // Asegura que sea visible
});

// Evento para mostrar mensaje final cuando se presiona "Sí"
yesBtn.addEventListener("click", function() {
    questionContainer.style.opacity = "0"; // Desaparece con transición
    setTimeout(() => {
        questionContainer.style.display = "none"; // Oculta la pregunta
        messageScreen.classList.remove("hidden"); // Muestra el mensaje final
        messageScreen.style.display = "block"; // Asegura que se vea
    }, 500);
});

// Hacer que el botón "No" se mueva
noBtn.addEventListener("mouseover", function() {
    let x = Math.random() * (window.innerWidth - this.clientWidth);
    let y = Math.random() * (window.innerHeight - this.clientHeight);
    this.style.position = "absolute";
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});

// Mensaje divertido si intentan presionar "No"
noBtn.addEventListener("click", function() {
    alert("¡No puedes decir que no! 💘");
});
