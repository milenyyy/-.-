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
   CRIAR CORAÇÕES INFINITOS
===================================================== */

function criarCoracoes() {

    const container =
        document.getElementById("chuvaCoracoes");

    const simbolos = ["♡", "♥", "❤"];

    for (let i = 0; i < 35; i++) {

        const coracao =
            document.createElement("div");

        coracao.classList.add("coracao-caindo");

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
   PALAVRAS APARECENDO COMO ESTRELAS
===================================================== */

function criarPalavras() {

    const container =
        document.getElementById("palavrasEstrelas");

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

    palavras.forEach((palavra, index) => {

        const elemento =
            document.createElement("span");

        elemento.classList.add(
            "palavra-caindo"
        );

        elemento.innerText = palavra;

        elemento.style.left =
            (5 + Math.random() * 90) + "%";

        elemento.style.top =
            (5 + Math.random() * 85) + "%";

        elemento.style.animationDelay =
            (index * 0.5) + "s";

        container.appendChild(elemento);

    });

}


/* =====================================================
   IR PARA INVESTIGAÇÃO
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
        document.getElementById("resultadoSenha");

    const senha =
        campo.value.trim().toLowerCase();

    if (senha === "borboletas em vidro") {

        resultado.innerText =
            "✓ ACESSO CONCEDIDO";

        resultado.style.color =
            "#f3a1b1";

        const final =
            document.getElementById(
                "investigacaoFinal"
            );

        final.style.display = "block";

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

    intro.style.display = "none";

    ceu.style.display = "block";

}


/* =====================================================
   ESTRELAS ENCONTRADAS
===================================================== */

const estrelasEncontradas = new Set();


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

    if (!estrela) {
        return;
    }

    /* Evita clicar duas vezes */

    if (estrelasEncontradas.has(numero)) {
        return;
    }

    estrelasEncontradas.add(numero);

    estrela.classList.add("encontrada");


    /* Mostrar palavra */

    const palavra =
        document.getElementById(
            "palavraEstrela"
        );

    if (palavra) {

        palavra.innerText =
            palavrasEstrelas[numero];

        palavra.style.opacity = "1";

        setTimeout(() => {

            palavra.style.opacity = "0";

        }, 1800);

    }


    /* Atualiza contador, caso exista */

    const contador =
        document.getElementById(
            "contadorEstrelas"
        );

    if (contador) {

        contador.innerText =
            estrelasEncontradas.size + " / 10 estrelas encontradas";

    }


    /* Verificar se encontrou TODAS */

    if (estrelasEncontradas.size === 10) {

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

    if (!mensagem) {
        return;
    }

    mensagem.style.display = "flex";

}


/* =====================================================
   IR PARA CARTA DO LÍRIO
===================================================== */

function irParaLirio() {

    const lirio =
        document.getElementById("lirio");

    if (!lirio) {
        return;
    }

    lirio.scrollIntoView({
        behavior: "smooth"
    });

}


/* =====================================================
   CONTINUAR DEPOIS DO LÍRIO
===================================================== */

function continuarDepoisDoLirio() {

    const proxima =
        document.getElementById(
            "proximaParte"
        );

    if (!proxima) {
        return;
    }

    proxima.scrollIntoView({
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

    if (!cartaFinal) {
        return;
    }

    cartaFinal.scrollIntoView({
        behavior: "smooth"
    });

}


/* =====================================================
   LOCALIZAÇÃO — UMUARAMA / PARANÁ
===================================================== */

/*
   Coordenadas aproximadas do centro de Umuarama.

   Latitude:
   -23.766

   Longitude:
   -53.325
*/

const UMUARAMA =
    {
        latitude: -23.766,
        longitude: -53.325
    };


/*
   Raio permitido.

   Usamos 35 km para evitar que pequenas
   diferenças do GPS impeçam o desbloqueio.
*/

const RAIO_PERMITIDO =
    35;


/* =====================================================
   CALCULAR DISTÂNCIA
===================================================== */

function calcularDistancia(
    latitude1,
    longitude1,
    latitude2,
    longitude2
) {

    const raioTerra = 6371;

    const diferencaLatitude =
        (latitude2 - latitude1)
        * Math.PI / 180;

    const diferencaLongitude =
        (longitude2 - longitude1)
        * Math.PI / 180;


    const a =
        Math.sin(
            diferencaLatitude / 2
        ) *
        Math.sin(
            diferencaLatitude / 2
        ) +

        Math.cos(
            latitude1 * Math.PI / 180
        ) *

        Math.cos(
            latitude2 * Math.PI / 180
        ) *

        Math.sin(
            diferencaLongitude / 2
        ) *
        Math.sin(
            diferencaLongitude / 2
        );


    const c =
        2 *
        Math.atan2(
            Math.sqrt(a),
            Math.sqrt(1 - a)
        );


    return raioTerra * c;

}


/* =====================================================
   VERIFICAR LOCALIZAÇÃO
===================================================== */

function verificarLocalizacao() {

    const resultado =
        document.getElementById(
            "resultadoLocalizacao"
        );

    const carta =
        document.getElementById(
            "cartaFinalConteudo"
        );


    if (!navigator.geolocation) {

        if (resultado) {

            resultado.innerText =
                "Seu navegador não permite verificar a localização.";

        }

        return;

    }


    if (resultado) {

        resultado.innerText =
            "📍 Procurando sua localização...";

    }


    navigator.geolocation.getCurrentPosition(

        function(posicao) {

            const latitude =
                posicao.coords.latitude;

            const longitude =
                posicao.coords.longitude;


            const distancia =
                calcularDistancia(
                    latitude,
                    longitude,
                    UMUARAMA.latitude,
                    UMUARAMA.longitude
                );


            /* =========================================
               ESTÁ EM UMUARAMA
            ========================================= */

            if (
                distancia <=
                RAIO_PERMITIDO
            ) {

                if (resultado) {

                    resultado.innerText =
                        "✓ LOCALIZAÇÃO CONFIRMADA — UMUARAMA, PR";

                    resultado.classList.add(
                        "localizacao-sucesso"
                    );

                }


                if (carta) {

                    carta.style.display =
                        "block";

                    setTimeout(() => {

                        carta.classList.add(
                            "aparecer"
                        );

                    }, 100);

                }

            }


            /* =========================================
               ESTÁ FORA DE UMUARAMA
            ========================================= */

            else {

                if (resultado) {

                    resultado.innerText =
                        "♡ Ainda não... esta carta está esperando pelo lugar certo.";

                    resultado.classList.remove(
                        "localizacao-sucesso"
                    );

                }

                if (carta) {

                    carta.style.display =
                        "none";

                }

            }

        },


        function(erro) {

            if (!resultado) {
                return;
            }


            if (erro.code === 1) {

                resultado.innerText =
                    "📍 Você precisa permitir o acesso à localização para abrir a carta.";

            }

            else if (erro.code === 2) {

                resultado.innerText =
                    "Não foi possível encontrar sua localização. Tente novamente.";

            }

            else if (erro.code === 3) {

                resultado.innerText =
                    "A localização demorou muito para responder. Tente novamente.";

            }

            else {

                resultado.innerText =
                    "Não foi possível verificar a localização.";

            }

        },


        {
            enableHighAccuracy: true,
            timeout: 15000,
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


/* =====================================================
   OBSERVAR ELEMENTOS
===================================================== */

document
    .querySelectorAll(
        ".papel, .carta-lirio, .arquivo-aberto, .carta-final"
    )
    .forEach(
        elemento =>
            observador.observe(elemento)
    );
