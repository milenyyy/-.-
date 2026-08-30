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
   MOSTRAR MENSAGEM
===================================================== */

function mostrarMensagem() {

    const coracoes =
        document.getElementById("coracoes");

    criarCoracoes();

    criarPalavras();

    coracoes.scrollIntoView({
        behavior: "smooth"
    });

}


/* =====================================================
   CRIAR CORAÇÕES
===================================================== */

function criarCoracoes() {

    const container =
        document.getElementById("chuvaCoracoes");

    container.innerHTML = "";

    const simbolos = [
        "♡",
        "♥",
        "❤"
    ];

    for (let i = 0; i < 35; i++) {

        const coracao =
            document.createElement("div");

        coracao.classList.add(
            "coracao-caindo"
        );

        coracao.innerText =
            simbolos[
                Math.floor(
                    Math.random() *
                    simbolos.length
                )
            ];

        coracao.style.left =
            Math.random() * 100 + "%";

        coracao.style.animationDuration =
            (5 + Math.random() * 8) + "s";

        coracao.style.animationDelay =
            (-Math.random() * 10) + "s";

        coracao.style.fontSize =
            (18 + Math.random() * 30) + "px";

        container.appendChild(
            coracao
        );

    }

}


/* =====================================================
   PALAVRAS COMO ESTRELAS
===================================================== */

function criarPalavras() {

    const container =
        document.getElementById(
            "palavrasEstrelas"
        );

    container.innerHTML = "";

    const palavras = [

        "incrível",
        "maravilhoso",
        "lindo",
        "especial",
        "único",
        "encantador",
        "gentil",
        "extraordinário",
        "precioso",
        "brilhante",
        "admirável",
        "inesquecível",
        "fantástico",
        "importante",
        "raro"

    ];


    palavras.forEach(
        (palavra, index) => {

            const elemento =
                document.createElement("span");

            elemento.classList.add(
                "palavra-caindo"
            );

            elemento.innerText =
                "✦ " + palavra;


            elemento.style.left =
                (3 + Math.random() * 90)
                + "%";


            elemento.style.top =
                (8 + Math.random() * 75)
                + "%";


            elemento.style.animationDelay =
                (Math.random() * 5)
                + "s";


            elemento.style.fontSize =
                (13 + Math.random() * 8)
                + "px";


            container.appendChild(
                elemento
            );

        }
    );

}


/* =====================================================
   IR PARA PARTE 2
===================================================== */

function irParaParte2() {

    const investigacao =
        document.getElementById(
            "investigacao"
        );

    investigacao.scrollIntoView({
        behavior: "smooth"
    });

}


/* =====================================================
   PISTAS
===================================================== */

function abrirPista(numero) {

    const texto =
        document.getElementById(
            "textoPista"
        );


    if (numero === 1) {

        texto.innerText =
            "Talvez você devesse prestar atenção nas coisas que parecem estar fora do lugar...";

    }


    if (numero === 2) {

        texto.innerText =
            "Talvez a resposta esteja em algo que nós dois gostamos.";

    }


    if (numero === 3) {

        texto.innerText =
            "Talvez seja algum personagem... ou o nome do livro de um bobo da corte e sua princesa...";

    }

}


/* =====================================================
   SENHA
===================================================== */

function verificarSenha() {

    const campo =
        document.getElementById(
            "senha"
        );

    const resultado =
        document.getElementById(
            "resultadoSenha"
        );

    const senha =
        campo.value
            .trim()
            .toLowerCase();


    if (
        senha ===
        "borboletas em vidro"
    ) {

        resultado.innerText =
            "✓ ACESSO CONCEDIDO";

        resultado.style.color =
            "#f3a1b1";


        const final =
            document.getElementById(
                "investigacaoFinal"
            );

        final.style.display =
            "block";


        final.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    } else {

        resultado.innerText =
            "✕ Senha incorreta. Talvez você ainda precise investigar um pouco mais...";

        resultado.style.color =
            "#d98295";

    }

}


/* =====================================================
   IR PARA PARTE 3
===================================================== */

function irParaParte3() {

    const universo =
        document.getElementById(
            "universo"
        );

    universo.scrollIntoView({
        behavior: "smooth"
    });

}


/* =====================================================
   COMEÇAR UNIVERSO
===================================================== */

function comecarUniverso() {

    const intro =
        document.getElementById(
            "universoIntro"
        );

    const ceu =
        document.getElementById(
            "ceu"
        );

    intro.style.display =
        "none";

    ceu.style.display =
        "block";

}


/* =====================================================
   ESTRELAS
===================================================== */

const estrelasEncontradas =
    new Set();


const palavrasEstrelas = {

    1: "especial",

    2: "incrível",

    3: "único",

    4: "brilhante",

    5: "maravilhoso",

    6: "gentil",

    7: "precioso",

    8: "encantador",

    9: "admirável",

    10: "inesquecível"

};


/* =====================================================
   CLICAR NAS ESTRELAS
===================================================== */

function clicarEstrela(numero) {

    const estrela =
        document.querySelector(
            ".estrela-" + numero
        );


    if (
        estrelasEncontradas.has(numero)
    ) {

        return;

    }


    estrelasEncontradas.add(
        numero
    );


    estrela.classList.add(
        "encontrada"
    );


    const palavra =
        document.getElementById(
            "palavraEstrela"
        );


    palavra.innerText =
        palavrasEstrelas[numero];


    palavra.style.opacity =
        "1";


    setTimeout(
        () => {

            palavra.style.opacity =
                "0";

        },
        1800
    );


    /*
     * Quando as 10 estrelas
     * forem encontradas
     */

    if (
        estrelasEncontradas.size === 10
    ) {

        setTimeout(
            () => {

                mostrarMensagemUniverso();

            },
            1200
        );

    }

}


/* =====================================================
   MOSTRAR MENSAGEM APÓS AS ESTRELAS
===================================================== */

function mostrarMensagemUniverso() {

    const mensagem =
        document.getElementById(
            "mensagemUniverso"
        );


    mensagem.classList.add(
        "mostrar"
    );


    mensagem.scrollIntoView({
        behavior: "smooth"
    });

}


/* =====================================================
   IR PARA O LÍRIO
===================================================== */

function irParaLirio() {

    const lirio =
        document.getElementById(
            "lirio"
        );


    lirio.scrollIntoView({
        behavior: "smooth"
    });

}


/* =====================================================
   VERIFICAR LOCALIZAÇÃO
===================================================== */

function verificarLocalizacao() {

    const resultado =
        document.getElementById(
            "resultadoLocalizacao"
        );


    const cartaFinal =
        document.getElementById(
            "cartaLocalizacao"
        );


    if (
        !navigator.geolocation
    ) {

        resultado.innerText =
            "Seu navegador não permite verificar a localização.";

        return;

    }


    resultado.innerText =
        "📍 Verificando sua localização...";


    navigator.geolocation.getCurrentPosition(

        function(posicao) {

            const latitude =
                posicao.coords.latitude;


            const longitude =
                posicao.coords.longitude;


            /*
             * Umuarama - Paraná
             *
             * Coordenadas aproximadas:
             *
             * Latitude:  -23.7658
             * Longitude: -53.3250
             */

            const latitudeUmuarama =
                -23.7658;


            const longitudeUmuarama =
                -53.3250;


            /*
             * Área aproximada de desbloqueio.
             *
             * Não precisa estar exatamente
             * no centro da cidade.
             */

            const distanciaLatitude =
                Math.abs(
                    latitude -
                    latitudeUmuarama
                );


            const distanciaLongitude =
                Math.abs(
                    longitude -
                    longitudeUmuarama
                );


            /*
             * Área de aproximadamente
             * alguns quilômetros.
             */

            if (

                distanciaLatitude < 0.15 &&

                distanciaLongitude < 0.15

            ) {

                resultado.innerText =
                    "♡ Localização confirmada. Você encontrou o último arquivo.";


                cartaFinal.style.display =
                    "block";


                cartaFinal.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });


            } else {

                resultado.innerText =
                    "✦ Ainda não... parece que você precisa chegar um pouco mais perto do lugar certo.";

            }

        },


        function(erro) {

            if (
                erro.code ===
                1
            ) {

                resultado.innerText =
                    "📍 Você precisa permitir o acesso à localização para continuar.";

            } else {

                resultado.innerText =
                    "Não foi possível verificar sua localização. Tente novamente.";

            }

        },

        {

            enableHighAccuracy: true,

            timeout: 10000,

            maximumAge: 0

        }

    );

}


/* =====================================================
   ANIMAÇÃO DE ENTRADA
===================================================== */

const observador =
    new IntersectionObserver(

        (entradas) => {

            entradas.forEach(
                (entrada) => {

                    if (
                        entrada.isIntersecting
                    ) {

                        entrada.target.classList.add(
                            "aparecer"
                        );

                    }

                }
            );

        },

        {
            threshold: 0.15
        }

    );


document
    .querySelectorAll(
        ".papel, .carta-lirio, .arquivo-aberto"
    )
    .forEach(
        elemento => {

            observador.observe(
                elemento
            );

        }
    );
