/* =====================================================
   CONFIGURAÇÕES
===================================================== */

const palavrasCoracoes = [
    "Incrível",
    "Maravilhoso",
    "Lindo",
    "Especial",
    "Encantador",
    "Único",
    "Fantástico",
    "Brilhante",
    "Admirável",
    "Gentil",
    "Carinhoso",
    "Precioso",
    "Surpreendente",
    "Extraordinário",
    "Importante",
    "Inesquecível"
];


/* =====================================================
   ABRIR CARTA
===================================================== */

function abrirCarta() {

    const carta =
        document.getElementById("carta");

    carta.scrollIntoView({
        behavior: "smooth"
    });

}


/* =====================================================
   BOTÃO "TEM MAIS UMA COISA"
===================================================== */

function mostrarMensagem() {

    const coracoes =
        document.getElementById("coracoes");

    coracoes.scrollIntoView({
        behavior: "smooth"
    });

}


/* =====================================================
   CRIAR CORAÇÕES INFINITOS
===================================================== */

function criarCoracao() {

    const container =
        document.getElementById("chuvaCoracoes");

    const coracao =
        document.createElement("div");

    coracao.className =
        "coracao-caindo";

    const palavra =
        palavrasCoracoes[
            Math.floor(
                Math.random() *
                palavrasCoracoes.length
            )
        ];

    coracao.innerHTML =
        `♥ <span>${palavra}</span>`;

    const tamanho =
        Math.random() * 35 + 35;

    const esquerda =
        Math.random() * 100;

    const duracao =
        Math.random() * 7 + 6;

    coracao.style.left =
        esquerda + "%";

    coracao.style.fontSize =
        tamanho + "px";

    coracao.style.animationDuration =
        duracao + "s";

    container.appendChild(coracao);


    setTimeout(() => {

        coracao.remove();

    }, duracao * 1000);

}


/* =====================================================
   PALAVRAS FORA DOS CORAÇÕES
===================================================== */

function criarPalavraEstrela() {

    const container =
        document.getElementById("palavrasEstrelas");

    const palavra =
        document.createElement("div");

    palavra.className =
        "palavra-flutuante";

    palavra.innerText =
        palavrasCoracoes[
            Math.floor(
                Math.random() *
                palavrasCoracoes.length
            )
        ];

    palavra.style.left =
        Math.random() * 90 + "%";

    palavra.style.top =
        Math.random() * 90 + "%";

    palavra.style.animationDelay =
        Math.random() * 3 + "s";

    container.appendChild(palavra);


    setTimeout(() => {

        palavra.remove();

    }, 5000);

}


/* =====================================================
   INICIAR CHUVA
===================================================== */

setInterval(
    criarCoracao,
    350
);

setInterval(
    criarPalavraEstrela,
    900
);


/* =====================================================
   IR PARA PARTE 2
===================================================== */

function irParaParte2() {

    const investigacao =
        document.getElementById("investigacao");

    investigacao.scrollIntoView({
        behavior: "smooth"
    });

}


/* =====================================================
   PISTAS
===================================================== */

function abrirPista(numero) {

    const texto =
        document.getElementById("textoPista");

    texto.classList.remove("aparecer");

    void texto.offsetWidth;

    texto.classList.add("aparecer");


    if (numero === 1) {

        texto.innerHTML =
            `
            > PISTA 01 ENCONTRADA...<br><br>
            "Nem tudo que está escondido
            está realmente longe."
            `;

    }


    if (numero === 2) {

        texto.innerHTML =
            `
            > PISTA 02 ENCONTRADA...<br><br>
            "Talvez a resposta esteja em algo
            que nós dois gostamos."
            `;

    }


    if (numero === 3) {

        texto.innerHTML =
            `
            > PISTA 03 ENCONTRADA...<br><br>
            "Talvez seja algum personagem...
            ou o nome do livro de um bobo da corte
            e sua princesa..."
            `;

    }

}


/* =====================================================
   VERIFICAR SENHA
===================================================== */

function verificarSenha() {

    const campo =
        document.getElementById("senha");

    const resultado =
        document.getElementById("resultadoSenha");

    const final =
        document.getElementById("investigacaoFinal");

    const senha =
        campo.value.trim().toLowerCase();


    if (senha === "borboletas em vidro") {

        resultado.innerHTML =
            "✓ SENHA CORRETA. ARQUIVO DESBLOQUEADO.";

        resultado.style.color =
            "#e87889";

        final.style.display =
            "block";

    } else {

        resultado.innerHTML =
            "✕ Senha incorreta. Talvez você ainda não tenha encontrado todas as respostas.";

        resultado.style.color =
            "#b85d6c";

    }

}


/* =====================================================
   IR PARA O LÍRIO
===================================================== */

function irParaLirio() {

    const lirio =
        document.getElementById("lirio");

    lirio.scrollIntoView({
        behavior: "smooth"
    });

}


/* =====================================================
   IR PARA PARTE 3
===================================================== */

function irParaParte3() {

    const universo =
        document.getElementById("universo");

    universo.scrollIntoView({
        behavior: "smooth"
    });

}


/* =====================================================
   COMEÇAR UNIVERSO
===================================================== */

function comecarUniverso() {

    const intro =
        document.getElementById("universoIntro");

    const ceu =
        document.getElementById("ceu");

    const musica =
        document.getElementById("musicaUniverso");


    intro.style.display =
        "none";

    ceu.style.display =
        "block";


    musica.play()
        .catch(() => {

            console.log(
                "O navegador bloqueou a reprodução."
            );

        });

}


/* =====================================================
   ESTRELAS
===================================================== */

const palavrasEstrelas = {

    1: "luz",
    2: "sonho",
    3: "carinho",
    4: "amizade",
    5: "riso",
    6: "calma",
    7: "brilho",
    8: "magia",
    9: "universo",
    10: "especial"

};


let estrelasEncontradas = [];


function clicarEstrela(numero) {

    const palavra =
        document.getElementById("palavraEstrela");

    palavra.innerText =
        palavrasEstrelas[numero];

    palavra.style.opacity =
        "1";


    if (!estrelasEncontradas.includes(numero)) {

        estrelasEncontradas.push(numero);

    }


    if (estrelasEncontradas.length >= 10) {

        const constelacao =
            document.getElementById("constelacao");

        constelacao.style.opacity =
            "1";

        palavra.innerText =
            "Você encontrou todas as estrelas. ✦";

    }


    setTimeout(() => {

        palavra.style.opacity =
            "0";

    }, 2500);

}


/* =====================================================
   CONTINUAR SITE
===================================================== */

function continuarSite() {

    const proxima =
        document.getElementById("proximaParte");

    proxima.scrollIntoView({
        behavior: "smooth"
    });

}
