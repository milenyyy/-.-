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
   MENSAGEM DA CARTA
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
   CORAÇÕES
===================================================== */

let coracoesCriados = false;

function criarCoracoes() {

    if (coracoesCriados) {
        return;
    }

    coracoesCriados = true;

    const container =
        document.getElementById("chuvaCoracoes");

    const simbolos = [
        "♡",
        "♡",
        "♥",
        "❤"
    ];

    for (let i = 0; i < 35; i++) {

        const coracao =
            document.createElement("div");

        coracao.className =
            "coracao-caindo";

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
            (6 + Math.random() * 8) + "s";

        coracao.style.animationDelay =
            (-Math.random() * 10) + "s";

        coracao.style.fontSize =
            (16 + Math.random() * 20) + "px";

        container.appendChild(coracao);

    }

}


/* =====================================================
   PALAVRAS
===================================================== */

let palavrasCriadas = false;

function criarPalavras() {

    if (palavrasCriadas) {
        return;
    }

    palavrasCriadas = true;

    const container =
        document.getElementById(
            "palavrasEstrelas"
        );

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

            elemento.className =
                "palavra-caindo";

            elemento.innerText =
                palavra;

            elemento.style.left =
                (5 + Math.random() * 85) + "%";

            elemento.style.top =
                (8 + Math.random() * 80) + "%";

            elemento.style.animationDelay =
                (index * .4) + "s";

            container.appendChild(
                elemento
            );

        }
    );

}


/* =====================================================
   PARTE 2
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
        document.getElementById("senha");

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
            "#c9576d";


        const final =
            document.getElementById(
                "investigacaoFinal"
            );

        final.style.display =
            "block";


    } else {

        resultado.innerText =
            "✕ Senha incorreta. Talvez você ainda precise investigar um pouco mais...";

        resultado.style.color =
            "#a83e56";

    }

}


/* =====================================================
   PARTE 3
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


const palavrasDasEstrelas = {

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
   CLICAR NA ESTRELA
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


    estrelasEncontradas.add(numero);


    estrela.classList.add(
        "encontrada"
    );


    /* PALAVRA */

    const palavra =
        document.getElementById(
            "palavraEstrela"
        );


    palavra.innerText =
        palavrasDasEstrelas[
            numero
        ];


    palavra.style.opacity =
        "1";


    setTimeout(
        () => {

            palavra.style.opacity =
                "0";

        },
        1800
    );


    /* CONTADOR */

    const contador =
        document.getElementById(
            "contadorEstrelas"
        );


    contador.innerText =
        estrelasEncontradas.size +
        " / 10 encontradas";


    /* TODAS ENCONTRADAS */

    if (
        estrelasEncontradas.size === 10
    ) {

        setTimeout(
            () => {

                mostrarMensagemUniverso();

            },
            1000
        );

    }

}


/* =====================================================
   MENSAGEM DO UNIVERSO
===================================================== */

function mostrarMensagemUniverso() {

    const mensagem =
        document.getElementById(
            "mensagemUniverso"
        );

    mensagem.style.display =
        "flex";

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
   IR PARA CARTA FINAL
===================================================== */

function irParaCartaFinal() {

    const cartaFinal =
        document.getElementById(
            "cartaFinal"
        );

    cartaFinal.scrollIntoView({
        behavior: "smooth"
    });

}


/* =====================================================
   LOCALIZAÇÃO
===================================================== */

function verificarLocalizacao() {

    const resultado =
        document.getElementById(
            "resultadoLocalizacao"
        );


    if (!navigator.geolocation) {

        resultado.innerText =
            "Seu navegador não permite verificar a localização.";

        resultado.style.color =
            "#a83e56";

        return;

    }


    resultado.innerText =
        "📍 Procurando sua localização...";


    navigator.geolocation.getCurrentPosition(

        function(posicao) {

            const latitude =
                posicao.coords.latitude;

            const longitude =
                posicao.coords.longitude;


            /*
             * Coordenadas aproximadas do centro
             * de Umuarama - Paraná.
             */

            const umuaramaLatitude =
                -23.7658;

            const umuaramaLongitude =
                -53.3250;


            const distancia =
                calcularDistancia(

                    latitude,
                    longitude,

                    umuaramaLatitude,
                    umuaramaLongitude

                );


            /*
             * Aproximadamente 20 km.
             */

            if (distancia <= 20) {

                resultado.innerText =
                    "✓ LOCALIZAÇÃO CONFIRMADA. A carta é sua.";

                resultado.style.color =
                    "#c9576d";


                const carta =
                    document.getElementById(
                        "cartaFinalConteudo"
                    );

                carta.style.display =
                    "block";


                setTimeout(
                    () => {

                        carta.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    },
                    700
                );


            } else {

                resultado.innerText =
                    "✕ Parece que você ainda não está em Umuarama...";

                resultado.style.color =
                    "#a83e56";

            }

        },


        function(erro) {

            resultado.innerText =
                "Não consegui acessar sua localização. Verifique se você permitiu o acesso à localização.";

            resultado.style.color =
                "#a83e56";

        },

        {

            enableHighAccuracy: true,

            timeout: 10000,

            maximumAge: 0

        }

    );

}


/* =====================================================
   CALCULAR DISTÂNCIA
===================================================== */

function calcularDistancia(
    latitude1,
    longitude1,
    latitude2,
    longitude2
) {

    const raioTerra =
        6371;


    const diferencaLatitude =
        grausParaRadianos(
            latitude2 - latitude1
        );


    const diferencaLongitude =
        grausParaRadianos(
            longitude2 - longitude1
        );


    const a =
        Math.sin(
            diferencaLatitude / 2
        ) ** 2 +

        Math.cos(
            grausParaRadianos(
                latitude1
            )
        ) *

        Math.cos(
            grausParaRadianos(
                latitude2
            )
        ) *

        Math.sin(
            diferencaLongitude / 2
        ) ** 2;


    const c =
        2 *
        Math.atan2(
            Math.sqrt(a),
            Math.sqrt(1 - a)
        );


    return raioTerra * c;

}


/* =====================================================
   GRAUS → RADIANOS
===================================================== */

function grausParaRadianos(graus) {

    return graus *
        (Math.PI / 180);

}
