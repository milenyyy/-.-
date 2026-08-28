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


    mensagem.classList.remove(
        "aparecer"
    );


    void mensagem.offsetWidth;


    mensagem.classList.add(
        "aparecer"
    );


    mensagem.innerText =
        "E talvez essa seja a parte mais importante: algumas pessoas tornam os nossos dias mais especiais simplesmente por existirem. ♡";


    setTimeout(function () {

        document
            .getElementById("coracoes")
            .scrollIntoView({
                behavior: "smooth"
            });

    }, 1800);

}



/* ==================================================
   PALAVRAS
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
    "RARO",
    "GENIAL",
    "FODA"

];



/* ==================================================
   CORAÇÕES
================================================== */

function criarCoracao() {

    const container =
        document.getElementById(
            "coracoesFundo"
        );


    if (!container) return;


    const coracao =
        document.createElement("div");


    coracao.className =
        "coracao";


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


    coracao.style.left =
        Math.random() * 100 + "%";


    coracao.style.fontSize =
        Math.random() * 25 + 25 + "px";


    const duracao =
        Math.random() * 8 + 8;


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
   PALAVRAS FORA
================================================== */

function criarPalavra() {

    const container =
        document.getElementById(
            "palavrasFora"
        );


    if (!container) return;


    const palavra =
        document.createElement(
            "span"
        );


    palavra.className =
        "palavra-flutuante";


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
   INICIAR INVESTIGAÇÃO
================================================== */

function iniciarInvestigacao() {

    const introducao =
        document.getElementById(
            "investigacaoIntro"
        );


    const sala =
        document.getElementById(
            "sala"
        );


    if (!introducao || !sala) {

        console.error(
            "Erro: elementos da investigação não foram encontrados."
        );

        return;

    }


    introducao.style.display =
        "none";


    sala.style.display =
        "block";


    sala.classList.remove(
        "aparecer"
    );


    void sala.offsetWidth;


    sala.classList.add(
        "aparecer"
    );

}



/* ==================================================
   PISTAS
================================================== */

function mostrarPista(
    tipo,
    titulo,
    texto
) {

    const painel =
        document.getElementById(
            "painelPista"
        );


    document.getElementById(
        "pistaTipo"
    ).innerText =
        tipo;


    document.getElementById(
        "pistaTitulo"
    ).innerText =
        titulo;


    document.getElementById(
        "pistaTexto"
    ).innerText =
        texto;


    painel.style.display =
        "block";

}



/* ==================================================
   CADERNO
================================================== */

function clicarCaderno() {

    marcarPista(
        "pista1"
    );


    mostrarPista(

        "PISTA #01",

        "O CADERNO",

        "Entre algumas páginas existe uma anotação estranha: 03 — 17 — 09. Talvez esses números sejam importantes."

    );

}



/* ==================================================
   QUADRO
================================================== */

function clicarQuadro() {

    marcarPista(
        "pista2"
    );


    mostrarPista(

        "PISTA #02",

        "ATRÁS DO QUADRO",

        "Você encontrou um pequeno número escrito atrás do quadro: 17."

    );

}



/* ==================================================
   TV
================================================== */

let cliquesTv = 0;


function clicarTv() {

    cliquesTv++;


    marcarPista(
        "pista3"
    );


    if (cliquesTv >= 3) {

        mostrarPista(

            "SINAL INTERCEPTADO",

            "VOCÊ VIU ISSO?",

            "A televisão pisca. Por menos de um segundo, aparece uma sequência: 03 — 17 — 09."

        );

    }

    else {

        mostrarPista(

            "PISTA #03",

            "TELEVISÃO",

            "A televisão não tem sinal. Mas você sente que deveria tentar novamente."

        );

    }

}



/* ==================================================
   VELA
================================================== */

function clicarVela() {

    mostrarPista(

        "OBJETO",

        "A VELA",

        "A chama continua acesa. Não parece haver nenhuma pista aqui... por enquanto."

    );

}



/* ==================================================
   SEGREDO
================================================== */

function clicarSegredo() {

    marcarPista(
        "pista4"
    );


    mostrarPista(

        "PISTA ESCONDIDA",

        "VOCÊ ENCONTROU",

        "Um pequeno símbolo estava escondido no canto da sala. Talvez você esteja começando a enxergar coisas que não deveria."

    );

}



/* ==================================================
   MARCAR PISTA
================================================== */

function marcarPista(id) {

    const elemento =
        document.getElementById(
            id
        );


    if (!elemento) return;


    elemento.classList.add(
        "pista-encontrada"
    );


    const texto =
        elemento.innerText
            .replace("□", "")
            .replace("✓", "")
            .trim();


    elemento.innerText =
        "✓ " + texto;

}



/* ==================================================
   FECHAR PISTA
================================================== */

function fecharPista() {

    const painel =
        document.getElementById(
            "painelPista"
        );


    painel.style.display =
        "none";

}



/* ==================================================
   ABRIR CAIXA
================================================== */

function abrirCaixa() {

    const painel =
        document.getElementById(
            "caixaPainel"
        );


    painel.style.display =
        "block";


    document
        .getElementById("codigo")
        .focus();

}



/* ==================================================
   FECHAR CAIXA
================================================== */

function fecharCaixa() {

    document.getElementById(
        "caixaPainel"
    ).style.display =
        "none";

}



/* ==================================================
   VERIFICAR CÓDIGO
================================================== */

function verificarCodigo() {

    const campo =
        document.getElementById(
            "codigo"
        );


    const resultado =
        document.getElementById(
            "resultadoCodigo"
        );


    const codigo =
        campo.value
            .trim()
            .replace(/\s/g, "");


    if (codigo === "031709") {

        resultado.innerText =
            "✓ ACESSO CONCEDIDO.";


        resultado.style.color =
            "#d67a87";


        marcarPista(
            "pista5"
        );


        setTimeout(function () {

            fecharCaixa();


            const arquivo =
                document.getElementById(
                    "arquivoDesbloqueado"
                );


            arquivo.style.display =
                "block";


            arquivo.scrollIntoView({

                behavior: "smooth",

                block: "center"

            });

        }, 900);

    }

    else {

        resultado.innerText =
            "✕ Código incorreto.";


        resultado.style.color =
            "#b94b5b";

    }

}



/* ==================================================
   CONTINUAR INVESTIGAÇÃO
================================================== */

function continuarInvestigacao() {

    mostrarPista(

        "ARQUIVO #002",

        "AINDA NÃO TERMINOU",

        "Você encontrou a primeira resposta. Mas existem outras partes deste arquivo que ainda estão bloqueadas."

    );

}



/* ==================================================
   EVENTOS DOS BOTÕES
================================================== */

/*
   Aqui está uma parte importante da correção.

   O JavaScript procura cada botão pelo ID
   e conecta a função correspondente.
*/

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* BOTÃO DA INVESTIGAÇÃO */

        const botaoInvestigar =
            document.getElementById(
                "botaoInvestigar"
            );


        if (botaoInvestigar) {

            botaoInvestigar.addEventListener(
                "click",
                iniciarInvestigacao
            );

        }


        /* CADERNO */

        const caderno =
            document.getElementById(
                "objetoCaderno"
            );


        if (caderno) {

            caderno.addEventListener(
                "click",
                clicarCaderno
            );

        }


        /* QUADRO */

        const quadro =
            document.getElementById(
                "objetoQuadro"
            );


        if (quadro) {

            quadro.addEventListener(
                "click",
                clicarQuadro
            );

        }


        /* TV */

        const tv =
            document.getElementById(
                "objetoTv"
            );


        if (tv) {

            tv.addEventListener(
                "click",
                clicarTv
            );

        }


        /* VELA */

        const vela =
            document.getElementById(
                "objetoVela"
            );


        if (vela) {

            vela.addEventListener(
                "click",
                clicarVela
            );

        }


        /* CAIXA */

        const caixa =
            document.getElementById(
                "objetoCaixa"
            );


        if (caixa) {

            caixa.addEventListener(
                "click",
                abrirCaixa
            );

        }


        /* SEGREDO */

        const segredo =
            document.getElementById(
                "objetoSegredo"
            );


        if (segredo) {

            segredo.addEventListener(
                "click",
                clicarSegredo
            );

        }


        /* ENTER NO CÓDIGO */

        const campoCodigo =
            document.getElementById(
                "codigo"
            );


        if (campoCodigo) {

            campoCodigo.addEventListener(
                "keydown",
                function (evento) {

                    if (
                        evento.key === "Enter"
                    ) {

                        verificarCodigo();

                    }

                }
            );

        }

    }
);
