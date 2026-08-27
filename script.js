/* =========================================
   ABRIR CARTA
========================================= */

function abrirCarta() {

    const carta =
        document.getElementById("carta");

    carta.scrollIntoView({

        behavior: "smooth"

    });

}



/* =========================================
   IR PARA OS CORAÇÕES
========================================= */

function irParaCoracoes() {

    const elogios =
        document.getElementById("elogios");


    /*
       Primeiro ativamos a animação
       da seção.
    */

    iniciarElogios();


    /*
       Depois descemos suavemente
       até ela.
    */

    setTimeout(() => {

        elogios.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    }, 100);

}



/* =========================================
   VOLTAR PARA A CARTA
========================================= */

function voltarCarta() {

    const carta =
        document.getElementById("carta");


    carta.scrollIntoView({

        behavior: "smooth",

        block: "start"

    });

}



/* =========================================
   PRÓXIMA PARTE
========================================= */

function proximaParte() {

    /*
       Por enquanto não existe
       uma Parte 2.

       Quando criarmos a próxima seção,
       colocaremos o código aqui.
    */

    console.log(
        "A próxima parte ainda está sendo criada ❤️"
    );

}



/* =========================================
   INICIAR TELA "VOCÊ É..."
========================================= */

let elogiosIniciados = false;

let intervaloCoracoes;

let intervaloPalavras;



function iniciarElogios() {

    /*
       Evita criar várias chuvas
       se o botão for clicado novamente.
    */

    if (elogiosIniciados) {

        return;

    }


    elogiosIniciados = true;


    const coracoes =
        document.getElementById("coracoes");


    /*
       Palavras DENTRO dos corações
    */

    const palavrasCoracoes = [

        "incrível",
        "maravilhoso",
        "especial",
        "lindo",
        "único",
        "gentil",
        "admirável",
        "divertido",
        "fantástico",
        "inesquecível",
        "importante",
        "extraordinário",
        "brilhante",
        "talentoso",
        "querido",
        "surpreendente",
        "memorável",
        "criativo",
        "carinhoso",
        "encantador",
        "generoso",
        "inteligente",
        "autêntico",
        "inspirador"

    ];



    /*
       Palavras SOLTAS pela tela
    */

    const palavrasSoltas = [

        "luz",
        "alegria",
        "carinho",
        "amizade",
        "sorriso",
        "sonho",
        "felicidade",
        "paz",
        "coragem",
        "gentileza",
        "esperança",
        "brilho",
        "bondade",
        "força",
        "calma",
        "magia",
        "risadas",
        "memórias",
        "presença",
        "vida",
        "sonhos",
        "momentos",
        "afeto",
        "alegria"

    ];



    /*
       Primeiros corações
    */

    for (let i = 0; i < 18; i++) {

        criarCoracao(
            palavrasCoracoes
        );

    }



    /*
       CHUVA INFINITA
    */

    intervaloCoracoes =
        setInterval(() => {

            criarCoracao(
                palavrasCoracoes
            );

        }, 350);



    /*
       Primeiras palavras
    */

    for (let i = 0; i < 8; i++) {

        criarPalavraSolta(
            palavrasSoltas
        );

    }



    /*
       PALAVRAS INFINITAS
    */

    intervaloPalavras =
        setInterval(() => {

            criarPalavraSolta(
                palavrasSoltas
            );

        }, 900);

}



/* =========================================
   CRIAR CORAÇÃO
========================================= */

function criarCoracao(palavras) {

    const coracoes =
        document.getElementById("coracoes");


    const coracao =
        document.createElement("div");


    const texto =
        document.createElement("span");


    coracao.classList.add(
        "coracao"
    );


    /*
       Escolhe uma palavra
       aleatoriamente.
    */

    texto.innerText =
        palavras[
            Math.floor(
                Math.random() *
                palavras.length
            )
        ];


    coracao.appendChild(
        texto
    );


    /*
       Posição horizontal
       aleatória.
    */

    coracao.style.left =
        Math.random() * 100 + "%";


    /*
       Velocidade aleatória.
    */

    const velocidade =
        5 + Math.random() * 6;


    coracao.style.animationDuration =
        velocidade + "s";


    /*
       Pequeno atraso aleatório.
    */

    coracao.style.animationDelay =
        Math.random() * 1.5 + "s";


    /*
       Tamanho aleatório.
    */

    coracao.style.scale =
        0.55 + Math.random() * 0.65;


    coracoes.appendChild(
        coracao
    );


    /*
       Depois que o coração
       termina de cair,
       ele é apagado.

       Outro coração já estará
       sendo criado pelo intervalo.
    */

    setTimeout(() => {

        coracao.remove();

    }, 13000);

}



/* =========================================
   CRIAR PALAVRA SOLTA
========================================= */

function criarPalavraSolta(palavras) {

    const container =
        document.getElementById(
            "palavrasSoltas"
        );


    const palavra =
        document.createElement("div");


    palavra.classList.add(
        "palavra-solta"
    );


    /*
       Escolhe uma palavra.
    */

    palavra.innerText =
        palavras[
            Math.floor(
                Math.random() *
                palavras.length
            )
        ];


    /*
       Posição aleatória.
    */

    palavra.style.left =
        Math.random() * 88 + 6 + "%";


    palavra.style.top =
        Math.random() * 82 + 6 + "%";


    /*
       Algumas palavras ficam maiores.
    */

    if (
        Math.random() > 0.7
    ) {

        palavra.classList.add(
            "grande"
        );

    }


    /*
       Tempo aleatório.
    */

    palavra.style.animationDuration =
        3 + Math.random() * 3 + "s";


    container.appendChild(
        palavra
    );


    /*
       Remove depois que desaparecer.
    */

    setTimeout(() => {

        palavra.remove();

    }, 7000);

}
