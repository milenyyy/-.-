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
   MOSTRAR PARTE DOS CORAÇÕES
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

    /* Evita duplicar os corações */

    if (container.children.length > 0) {
        return;
    }

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

        container.appendChild(coracao);

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

    if (container.children.length > 0) {
        return;
    }

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
                palavra;

            elemento.style.left =
                (5 + Math.random() * 90) + "%";

            elemento.style.top =
                (5 + Math.random() * 85) + "%";

            elemento.style.animationDelay =
                (index * 0.5) + "s";

            container.appendChild(
                elemento
            );

        }
    );

}


/* =====================================================
   IR PARA INVESTIGAÇÃO
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


    /*
       SENHA ATUAL
       --------------------------------
       borboletas em vidro
    */

    if (
        senha ===
        "borboletas em vidro"
    ) {

        resultado.innerText =
            "✓ ACESSO CONCEDIDO";

        resultado.style.color =
            "#a3475b";


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
            "#9b304b";

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


    /*
       Evita clicar duas vezes
    */

    if (
        estrelasEncontradas
            .has(numero)
    ) {

        return;

    }


    estrelasEncontradas
        .add(numero);


    estrela.classList
        .add("encontrada");


    /*
       Mostrar palavra
    */

    const palavra =
        document.getElementById(
            "palavraEstrela"
        );


    palavra.innerText =
        palavrasEstrelas[numero];


    palavra.style.opacity =
        "1";


    setTimeout(() => {

        palavra.style.opacity =
            "0";

    }, 1800);


    /*
       Quando encontrar as 10
    */

    if (
        estrelasEncontradas.size ===
        10
    ) {

        setTimeout(() => {

            mostrarMensagemUniverso();

        }, 1200);

    }

}


/* =====================================================
   MOSTRAR MENSAGEM DO UNIVERSO
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
   IR PARA LOCALIZAÇÃO
===================================================== */

function irParaLocalizacao() {

    const localizacao =
        document.getElementById(
            "proximaParte"
        );

    localizacao.scrollIntoView({
        behavior: "smooth"
    });

}


/* =====================================================
   LOCALIZAÇÃO — UMUARAMA
===================================================== */


/*
   Coordenadas aproximadas do centro
   de Umuarama - Paraná.

   O raio deixa uma margem para que
   a localização não precise estar
   exatamente no centro da cidade.
*/

const UMUARAMA_LAT =
    -23.7658;

const UMUARAMA_LON =
    -53.3250;


/*
   Raio permitido:

   aproximadamente 15 km.
*/

const RAIO_PERMITIDO =
    15;


/* =====================================================
   CALCULAR DISTÂNCIA
===================================================== */

function calcularDistancia(
    lat1,
    lon1,
    lat2,
    lon2
) {

    const R = 6371;

    const dLat =
        (lat2 - lat1) *
        Math.PI / 180;

    const dLon =
        (lon2 - lon1) *
        Math.PI / 180;

    const a =
        Math.sin(dLat / 2) *
        Math.sin(dLat / 2) +

        Math.cos(
            lat1 * Math.PI / 180
        ) *

        Math.cos(
            lat2 * Math.PI / 180
        ) *

        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c =
        2 *
        Math.atan2(
            Math.sqrt(a),
            Math.sqrt(1 - a)
        );

    return R * c;

}


/* =====================================================
   VERIFICAR LOCALIZAÇÃO
===================================================== */

function verificarLocalizacao() {

    const status =
        document.getElementById(
            "statusLocalizacao"
        );


    /*
       Verifica se o navegador
       possui geolocalização.
    */

    if (
        !navigator.geolocation
    ) {

        status.innerText =
            "Seu navegador não permite verificar a localização.";

        status.style.color =
            "#a83250";

        return;

    }


    status.innerText =
        "📍 procurando sua localização...";


    status.style.color =
        "#8b5361";


    navigator.geolocation.getCurrentPosition(

        function (posicao) {

            const latitude =
                posicao.coords.latitude;

            const longitude =
                posicao.coords.longitude;


            const distancia =
                calcularDistancia(

                    latitude,
                    longitude,

                    UMUARAMA_LAT,
                    UMUARAMA_LON

                );


            if (
                distancia <=
                RAIO_PERMITIDO
            ) {

                desbloquearCarta();

            } else {

                status.innerText =
                    "🔒 Ainda não... a última carta só pode ser aberta em Umuarama.";

                status.style.color =
                    "#9b304b";

            }

        },


        function () {

            status.innerText =
                "Não consegui acessar sua localização. Verifique a permissão do navegador e tente novamente.";

            status.style.color =
                "#9b304b";

        },

        {

            enableHighAccuracy:
                true,

            timeout:
                10000,

            maximumAge:
                0

        }

    );

}


/* =====================================================
   DESBLOQUEAR CARTA
===================================================== */

function desbloquearCarta() {

    const carta =
        document.getElementById(
            "cartaSecreta"
        );

    const status =
        document.getElementById(
            "statusLocalizacao"
        );


    status.innerText =
        "✓ LOCALIZAÇÃO CONFIRMADA — UMUARAMA";

    status.style.color =
        "#9a3d54";


    carta.style.display =
        "block";


    setTimeout(() => {

        carta.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 500);

}


/* =====================================================
   ANIMAÇÃO AO ENTRAR NA TELA
===================================================== */

const observador =
    new IntersectionObserver(

        (entradas) => {

            entradas.forEach(
                (entrada) => {

                    if (
                        entrada.isIntersecting
                    ) {

                        entrada.target
                            .classList
                            .add("aparecer");

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
        ".papel, .carta-lirio, .arquivo, .carta-localizacao"
    )
    .forEach(
        elemento =>
            observador.observe(elemento)
    );
