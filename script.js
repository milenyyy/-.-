/* =================================
   ABRIR CARTA
================================= */

function abrirCarta() {

    const carta =
        document.getElementById("carta");

    carta.scrollIntoView({
        behavior: "smooth"
    });

}


/* =================================
   MOSTRAR "VOCÊ É..."
================================= */

function mostrarMensagem() {

    const elogios =
        document.getElementById("elogios");

    const coracoes =
        document.getElementById("coracoes");


    /* mostra a tela */

    elogios.classList.add("ativo");


    /* palavras */

    const palavras = [

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
        "forte",
        "criativo",
        "carinhoso"

    ];


    /* cria os corações */

    for (let i = 0; i < 35; i++) {

        const coracao =
            document.createElement("div");

        const texto =
            document.createElement("span");


        coracao.classList.add("coracao");


        /* palavra aleatória */

        texto.innerText =
            palavras[
                Math.floor(
                    Math.random() *
                    palavras.length
                )
            ];


        coracao.appendChild(texto);


        /* posição horizontal */

        coracao.style.left =
            Math.random() * 100 + "%";


        /* velocidade */

        coracao.style.animationDuration =
            4 + Math.random() * 5 + "s";


        /* atraso */

        coracao.style.animationDelay =
            Math.random() * 2 + "s";


        /* tamanho */

        coracao.style.scale =
            0.65 + Math.random() * 0.6;


        coracoes.appendChild(coracao);


        /* remove depois */

        setTimeout(() => {

            coracao.remove();

        }, 9000);

    }

}
