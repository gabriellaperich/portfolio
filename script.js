const text = "<Olá, sou a\nGabi Perich/>";
const speed = 100; // Velocidade de digitação em milissegundos

let index = 0; // Para acompanhar a posição atual do texto
const titleElement = document.getElementById('animated-title');

// Função para animar a digitação do texto
function typeWriter() {
    if (index < text.length) {
        titleElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

// Inicia a animação
typeWriter();