/* =====================================================
   NAVEGAÇÃO
===================================================== */

function irPara(id) {

    const elemento =
        document.getElementById(id);

    if (!elemento) return;

    elemento.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/* =====================================================
   ABRIR CARTA
===================================================== */

function abrirCarta() {

    irPara("carta");

}


/* =====================================================
   CORAÇÕES
===================================================== */

let coracoesAtivos = false;


function irParaCoracoes() {

    irPara("elogios");

    iniciarCoracoes();

}


function iniciarCoracoes() {

    if (coracoesAtivos) return;

    coracoesAtivos = true;


    const palavras = [

        "incrível",
        "maravilhoso",
        "especial",
        "lindo",
        "único",
        "admirável",
        "inesquecível",
        "talentoso",
        "brilhante",
        "gentil",
        "querido",
        "extraordinário",
        "divertido",
        "inteligente",
        "autêntico",
        "fantástico",
        "importante",
        "memorável",
        "criativo",
        "inspirador",
        "surpreendente",
        "encantador"

    ];


    const palavrasSoltas = [

        "luz",
        "alegria",
        "carinho",
        "amizade",
        "sorriso",
        "sonho",
        "felicidade",
        "gentileza",
        "coragem",
        "brilho",
        "bondade",
        "força",
        "magia",
        "risadas",
        "memórias",
        "presença",
        "afeto",
        "calma",
        "esperança",
        "vida"

    ];


    /* cria alguns imediatamente */

    for (let i = 0; i < 20; i++) {

        setTimeout(() => {

            criarCoracao(palavras);

        }, i * 180);

    }


    /* chuva infinita */

    setInterval(() => {

        criarCoracao(palavras);

    }, 330);


    /* estrelas/palavras */

    for (let i = 0; i < 10; i++) {

        setTimeout(() => {

            criarPalavra(palavrasSoltas);

        }, i * 300);

    }


    setInterval(() => {

        criarPalavra(palavrasSoltas);

    }, 750);

}


/* =====================================================
   CRIAR CORAÇÃO
===================================================== */

function criarCoracao(palavras) {

    const container =
        document.getElementById("coracoes");

    if (!container) return;


    const coracao =
        document.createElement("div");


    const texto =
        document.createElement("span");


    coracao.className =
        "coracao";


    texto.innerText =
        palavras[
            Math.floor(
                Math.random() *
                palavras.length
            )
        ];


    coracao.appendChild(texto);


    coracao.style.left =
        Math.random() * 105 - 3 + "%";


    const tamanho =
        .55 + Math.random() * .65;


    coracao.style.transform =
        `scale(${tamanho})`;


    const duracao =
        5 + Math.random() * 7;


    coracao.style.animationDuration =
        duracao + "s";


    coracao.style.animationDelay =
        Math.random() * 1.5 + "s";


    container.appendChild(coracao);


    setTimeout(() => {

        coracao.remove();

    }, (duracao + 2) * 1000);

}


/* =====================================================
   PALAVRAS QUE APARECEM E SOMEM
===================================================== */

function criarPalavra(palavras) {

    const container =
        document.getElementById(
            "palavrasSoltas"
        );

    if (!container) return;


    const palavra =
        document.createElement("span");


    palavra.className =
        "palavra-solta";


    palavra.innerText =
        palavras[
            Math.floor(
                Math.random() *
                palavras.length
            )
        ];


    palavra.style.left =
        (5 + Math.random() * 88) + "%";


    palavra.style.top =
        (8 + Math.random() * 82) + "%";


    if (Math.random() > .7) {

        palavra.classList.add("grande");

    }


    container.appendChild(palavra);


    setTimeout(() => {

        palavra.remove();

    }, 4500);

}


/* =====================================================
   VOLTAR PARA CARTA
===================================================== */

function voltarCarta() {

    irPara("carta");

}


/* =====================================================
   PARTE 2
===================================================== */

function irParaParte2() {

    irPara("arquivo");

}


function voltarParte1() {

    irPara("elogios");

}


function iniciarInvestigacao() {

    irPara("investigacao");

}


/* =====================================================
   ARQUIVOS
===================================================== */

function abrirArquivo(numero) {

    const resultado =
        document.getElementById(
            "resultadoArquivo"
        );


    if (numero === 1) {

        resultado.innerHTML = `

            <strong>TAPE_01 // AUDIO</strong>

            <br><br>

            Arquivo de áudio encontrado.

            <br>

            Duração: 00:03:17

            <br><br>

            <em>
            "Algumas pessoas deixam marcas
            mesmo sem perceber."
            </em>

        `;

    }


    if (numero === 2) {

        resultado.innerHTML = `

            <strong>PHOTO_01 // LOCKED</strong>

            <br><br>

            Esta fotografia está protegida.

            <br>

            Talvez exista uma chave
            escondida em algum lugar.

        `;

    }


    if (numero === 3) {

        resultado.innerHTML = `

            <strong>NOTE_01 // UNKNOWN</strong>

            <br><br>

            "Nem tudo que está escondido
            quer permanecer escondido."

            <br><br>

            — arquivo sem identificação

        `;

    }

}


/* =====================================================
   IR PARA SENHA
===================================================== */

function irParaSenha() {

    irPara("senha");

}


/* =====================================================
   SENHA
===================================================== */

function verificarSenha() {

    const input =
        document.getElementById(
            "senhaInput"
        );


    const mensagem =
        document.getElementById(
            "mensagemSenha"
        );


    const senha =
        input.value
            .trim()
            .toLowerCase();


    const senhaCorreta =
        "borboletas em vidro";


    if (senha === senhaCorreta) {

        mensagem.innerHTML =
            "✦ ACESSO CONCEDIDO ✦";


        mensagem.style.color =
            "#d99aa3";


        criarBorboletas();


    } else {

        mensagem.innerHTML =
            "ACESSO NEGADO — tente novamente.";


        mensagem.style.color =
            "#9b5962";

    }

}


/* =====================================================
   BORBOLETAS APÓS A SENHA
===================================================== */

function criarBorboletas() {

    const container =
        document.getElementById(
            "borboletas"
        );


    for (let i = 0; i < 12; i++) {

        const borboleta =
            document.createElement("span");


        borboleta.className =
            "borboleta";


        borboleta.innerHTML =
            "🦋";


        borboleta.style.left =
            Math.random() * 100 + "%";


        borboleta.style.top =
            (50 + Math.random() * 40) + "%";


        borboleta.style.animationDelay =
            Math.random() * 1.5 + "s";


        container.appendChild(
            borboleta
        );


        setTimeout(() => {

            borboleta.remove();

        }, 5500);

    }

}


/* =====================================================
   ENTER NA SENHA
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const input =
            document.getElementById(
                "senhaInput"
            );


        if (!input) return;


        input.addEventListener(
            "keydown",
            (event) => {

                if (
                    event.key === "Enter"
                ) {

                    verificarSenha();

                }

            }
        );

    }
);
