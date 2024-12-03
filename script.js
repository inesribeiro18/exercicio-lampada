const lampada = document.getElementById('lampada');
const botao = document.getElementById('botao');
const body = document.body;

let estadoLampada = false; // false = apagada, true = acesa

botao.addEventListener('click', () => {
    estadoLampada = !estadoLampada;

    if (estadoLampada) {
        lampada.src = "https://i.postimg.cc/6QyTynzr/bulb-on.png";
        botao.textContent = "Apagar";
        body.style.backgroundColor = "#FFFFA5"; // fundo amarelo claro
    } else {
        lampada.src = "https://i.postimg.cc/KjK1wL3c/bulb-off.png";
        botao.textContent = "Acender";
        body.style.backgroundColor = "#FFFFFF"; // fundo branco
    }
});



