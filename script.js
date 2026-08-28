/* ==================================================
   ABRIR CARTA
================================================== */

function abrirCarta() {

    document
        .getElementById("carta")
        .scrollIntoView({
            behavior: "smooth"
        });

}



/* ==================================================
   MOSTRAR MENSAGEM
================================================== */

function mostrarMensagem() {

    const mensagem =
        document.getElementById("mensagem");


    mensagem.style.display = "block";


    mensagem.classList.remove("aparecer");


    void mensagem.offsetWidth;


    mensagem.classList.add("aparecer");


    mensagem.innerText =
        "E talvez essa seja a parte mais importante: algumas pessoas tornam os nossos dias mais especiais simplesmente por existirem. ♡";


    setTimeout(function () {

        document
            .getElementById("coracoes")
            .scrollIntoView({
                behavior: "smooth"
            });

    }, 1500);

}



/* ==================================================
   PALAVRAS DOS CORAÇÕES
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
   CORAÇÃO
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

    document
        .getElementById("parte2")
        .scrollIntoView({
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


    introducao.style.display =
        "none";


    sala.style.display =
        "block";


    sala.classList.add(
        "aparecer"
    );

}



/* ==================================================
   MOSTRAR PISTA
================================================== */

function mostrarPista(
    tipo,
    titulo,
    texto
) {

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


    document.getElementById(
        "painelPista"
    ).style.display =
        "block";

}



/* ==================================================
   CADERNO
================================================== */

function clicarCaderno() {

    marcarPista("pista1");


    mostrarPista(

        "PISTA #01",

        "UMA ANOTAÇÃO",

        "Na última página existe uma frase: 'O começo não está no primeiro número. Procure aquilo que se repete.'"

    );

}



/* ==================================================
   QUADRO
================================================== */

function clicarQuadro() {

    marcarPista("pista2");


    mostrarPista(

        "PISTA #02",

        "ATRÁS DO QUADRO",

        "Há três números escritos: 17, 09 e 03. Ao lado deles existe uma pequena frase: 'Nem tudo deve ser lido na ordem em que aparece.'"

    );

}



/* ==================================================
   TV
================================================== */

let cliquesTv = 0;


function clicarTv() {

    cliquesTv++;


    if (cliquesTv < 3) {

        mostrarPista(

            "SINAL FRACO",

            "A TELEVISÃO",

            "A tela pisca. Talvez seja necessário insistir."

        );

        return;

    }


    marcarPista("pista3");


    mostrarPista(

        "PISTA #03",

        "SINAL INTERCEPTADO",

        "Por alguns segundos aparece uma sequência: 03 — 17 — 09. A mensagem desaparece antes que você consiga descobrir o motivo."

    );

}



/* ==================================================
   VELA
================================================== */

function clicarVela() {

    mostrarPista(

        "OBJETO",

        "A VELA",

        "A chama ilumina alguma coisa por baixo da mesa. Você percebe um pequeno símbolo, mas não consegue alcançá-lo."

    );

}



/* ==================================================
   SEGREDO
================================================== */

function clicarSegredo() {

    marcarPista("pista4");


    mostrarPista(

        "PISTA #04",

        "UMA FRASE",

        "Você encontrou a última mensagem: 'O passado vem antes do presente, mas o que nasceu primeiro nem sempre deve ser colocado primeiro.'"

    );

}



/* ==================================================
   MARCAR PISTA
================================================== */

function marcarPista(id) {

    const elemento =
        document.getElementById(id);


    if (!elemento) return;


    if (
        elemento.classList.contains(
            "pista-encontrada"
        )
    ) {

        return;

    }


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

    document.getElementById(
        "painelPista"
    ).style.display =
        "none";

}



/* ==================================================
   ABRIR CAIXA
================================================== */

function abrirCaixa() {

    document.getElementById(
        "caixaPainel"
    ).style.display =
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


    /*
       A sequência correta precisa ser
       descoberta pelas pistas.

       Código:
       031709
    */


    if (codigo === "031709") {

        resultado.innerText =
            "✓ ACESSO CONCEDIDO.";


        resultado.style.color =
            "#d67a87";


        marcarPista("pista5");


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
            "✕ Código incorreto. As pistas ainda escondem alguma coisa.";


        resultado.style.color =
            "#b94b5b";

    }

}



/* ==================================================
   MOSTRAR CARTA DO LÍRIO
================================================== */

function mostrarCartaLirio() {

    const carta =
        document.getElementById(
            "cartaLirio"
        );


    carta.style.display =
        "flex";


    carta.classList.add(
        "aparecer"
    );


    carta.scrollIntoView({

        behavior: "smooth"

    });


    escreverTextoLirio();

}



/* ==================================================
   TEXTO DA CARTA
================================================== */

function escreverTextoLirio() {

    const elemento =
        document.getElementById(
            "textoLirio"
        );


    if (
        elemento.dataset.escrito === "true"
    ) {

        return;

    }


    elemento.dataset.escrito =
        "true";


    const texto =

        "Eu poderia dizer que você é a rosa mais linda que já vi, mas, na verdade, você é o lírio mais encantador que já apareceu para mim. A flor mais bela do meu jardim, a flor mais preciosa do meu buquê.\n\n" +

        "Você é a típica flor que não arrancamos, porque gostamos dela. Você é a flor que cuidamos, regamos e deixamos crescer.\n\n" +

        "Você é tão belo quanto um lírio em meio a um buquê cheio de rosas.";


    let indice = 0;


    function escrever() {

        if (
            indice >= texto.length
        ) {

            return;

        }


        if (
            texto[indice] === "\n"
        ) {

            elemento.innerHTML +=
                "<br><br>";

        }

        else {

            elemento.innerHTML +=
                texto[indice];

        }


        indice++;


        setTimeout(
            escrever,
            28
        );

    }


    escrever();

}



/* ==================================================
   EVENTOS
================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {


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
