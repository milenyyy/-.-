/* =========================
   ABRIR CARTA
========================= */

function abrirCarta() {

    const carta = document.getElementById("carta");

    carta.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================
   MOSTRAR MENSAGEM
========================= */

function mostrarMensagem() {

    const mensagem =
        document.getElementById("mensagem");

    mensagem.style.display = "block";

    mensagem.classList.add("aparecer");

    mensagem.innerText =
        "E talvez essa seja a parte mais importante: algumas pessoas tornam os nossos dias mais especiais simplesmente por existirem. ♡";

}


/* =========================
   SURPRESA
========================= */

function surpresa() {

    const texto =
        document.getElementById("surpresaTexto");

    texto.classList.add("aparecer");

    texto.innerHTML =
        "✨ Você chegou até o final! ✨<br><br>" +
        "Talvez esta página seja só um pequeno site..." +
        "<br>" +
        "mas foi feita pensando em você. 💌";

}
