/* ==================================================
   ABRIR CARTA
================================================== */

function abrirCarta() {

    const carta =
        document.getElementById("carta");

    carta.scrollIntoView({

        behavior: "smooth"

    });

}


/* ==================================================
   MOSTRAR MENSAGEM
================================================== */

function mostrarMensagem() {

    const mensagem =
        document.getElementById("mensagem");

    mensagem.style.display =
        "block";

    mensagem.classList.add(
        "aparecer"
    );

    mensagem.innerText =
        "E talvez essa seja a parte mais importante: algumas pessoas tornam os nossos dias mais especiais simplesmente por existirem. ♡";

    setTimeout(function () {

        document.getElementById("coracoes")
            .scrollIntoView({
                behavior: "smooth"
            });

    }, 1800);

}


/* ==================================================
   LISTA DE PALAVRAS
================================================== */

const palavras = [

    "INCRÍVEL",

    "MARAVILHOSO",

    "LINDO",

    "ESPECIAL",

    "ÚNICO",

    "ADMIRÁVEL",

    "GENTIL",

    "FORTE",

    "INTELIGENTE",

    "ENGRAÇADO",

    "IMPORTANTE",

    "AUTÊNTICO",

    "BRILHANTE",

    "EXTRAORDINÁRIO",

    "LEGAL",

    "CARISMÁTICO",

    "MEMORÁVEL",

    "FODA",

    "INSUBSTITUÍVEL"

];


/* ==================================================
   CRIAR CORAÇÕES
================================================== */

function criarCoracao() {

    const container =
        document.getElementById(
            "coracoesFundo"
        );

    if (!container) return;


    const coracao =
        document.createElement("div");

    coracao.classList.add(
        "coracao"
    );


    const palavra =
        palavras[
            Math.floor(
                Math.random() *
                palavras.length
            )
        ];


    coracao.innerHTML =
        "♥<span>" +
        palavra +
        "</span>";


    const tamanho =
        Math.random() * 25 + 25;


    const esquerda =
        Math.random() * 100;


    const duracao =
        Math.random() * 8 + 8;


    coracao.style.left =
        esquerda + "%";


    coracao.style.fontSize =
        tamanho + "px";


    coracao.style.animationDuration =
        duracao + "s";


    container.appendChild(
        coracao
    );


    setTimeout(function () {

        coracao.remove();

    }, duracao * 1000);

}


/* ==================================================
   CORAÇÕES INFINITOS
================================================== */

setInterval(
    criarCoracao,
    450
);


/* ==================================================
   PALAVRAS FORA DOS CORAÇÕES
================================================== */

function criarPalavra() {

    const container =
        document.getElementById(
            "palavrasFora"
        );

    if (!container) return;


    const palavra =
        document.createElement("span");

    palavra.classList.add(
        "palavra-flutuante"
    );


    palavra.innerText =
        palavras[
            Math.floor(
                Math.random() *
                palavras.length
            )
        ];


    palavra.style.left =
        Math.random() * 85 + "%";


    palavra.style.top =
        Math.random() * 85 + "%";


    palavra.style.animationDelay =
        Math.random() * 2 + "s";


    container.appendChild(
        palavra
    );


    setTimeout(function () {

        palavra.remove();

    }, 4000);

}


setInterval(
    criarPalavra,
    900
);


/* ==================================================
   IR PARA PARTE 2
================================================== */

function irParaParte2() {

    const parte2 =
        document.getElementById(
            "parte2"
        );

    parte2.scrollIntoView({

        behavior: "smooth"

    });

}


/* ==================================================
   PRÓXIMO REGISTRO
================================================== */

function proximoRegistro() {

    const registro =
        document.getElementById(
            "registroExtra"
        );

    registro.style.display =
        "block";


    registro.classList.add(
        "aparecer"
    );


    registro.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });

}


/* ==================================================
   VOLTAR PARA CORAÇÕES
================================================== */

function voltarCoracoes() {

    const coracoes =
        document.getElementById(
            "coracoes"
        );

    coracoes.scrollIntoView({

        behavior: "smooth"

    });

}
