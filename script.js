/* =====================================================
   PARTE 1 — ABRIR CARTA
===================================================== */

function abrirCarta() {

    document.getElementById("carta")
        .scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

}


/* =====================================================
   IR PARA CORAÇÕES
===================================================== */

let elogiosIniciados = false;


function irParaCoracoes() {

    iniciarElogios();

    document.getElementById("elogios")
        .scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

}


/* =====================================================
   VOLTAR PARA CARTA
===================================================== */

function voltarCarta() {

    document.getElementById("carta")
        .scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

}


/* =====================================================
   CORAÇÕES INFINITOS
===================================================== */

function iniciarElogios() {

    if (elogiosIniciados) {

        return;

    }

    elogiosIniciados = true;


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

        "afeto"

    ];


    for (let i = 0; i < 18; i++) {

        criarCoracao(palavrasCoracoes);

    }


    setInterval(() => {

        criarCoracao(palavrasCoracoes);

    }, 350);


    for (let i = 0; i < 8; i++) {

        criarPalavraSolta(palavrasSoltas);

    }


    setInterval(() => {

        criarPalavraSolta(palavrasSoltas);

    }, 900);

}


/* =====================================================
   CRIAR CORAÇÃO
===================================================== */

function criarCoracao(palavras) {

    const container =
        document.getElementById("coracoes");


    const coracao =
        document.createElement("div");


    const texto =
        document.createElement("span");


    coracao.classList.add("coracao");


    texto.innerText =
        palavras[
            Math.floor(
                Math.random() *
                palavras.length
            )
        ];


    coracao.appendChild(texto);


    coracao.style.left =
        Math.random() * 100 + "%";


    const velocidade =
        5 + Math.random() * 6;


    coracao.style.animationDuration =
        velocidade + "s";


    coracao.style.animationDelay =
        Math.random() * 1.5 + "s";


    coracao.style.scale =
        0.55 + Math.random() * 0.65;


    container.appendChild(coracao);


    setTimeout(() => {

        coracao.remove();

    }, 13000);

}


/* =====================================================
   PALAVRAS FORA DOS CORAÇÕES
===================================================== */

function criarPalavraSolta(palavras) {

    const container =
        document.getElementById("palavrasSoltas");


    const palavra =
        document.createElement("div");


    palavra.classList.add(
        "palavra-solta"
    );


    palavra.innerText =
        palavras[
            Math.floor(
                Math.random() *
                palavras.length
            )
        ];


    palavra.style.left =
        (Math.random() * 88 + 6) + "%";


    palavra.style.top =
        (Math.random() * 82 + 6) + "%";


    if (Math.random() > 0.7) {

        palavra.classList.add(
            "grande"
        );

    }


    palavra.style.animationDuration =

        (3 + Math.random() * 3) +
        "s";


    container.appendChild(palavra);


    setTimeout(() => {

        palavra.remove();

    }, 7000);

}


/* =====================================================
   PARTE 2
===================================================== */

function irParaParte2() {

    document.getElementById("arquivo")
        .scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

}


function voltarParte1() {

    document.getElementById("elogios")
        .scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

}


function iniciarInvestigacao() {

    document.getElementById("investigacao")
        .scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

}


/* =====================================================
   ARQUIVOS DA INVESTIGAÇÃO
===================================================== */

function abrirArquivo(numero) {

    const resultado =
        document.getElementById(
            "resultadoArquivo"
        );


    if (numero === 1) {

        resultado.innerHTML = `

            <strong>
                📼 TAPE_01
            </strong>

            <br><br>

            Parece que esta fita contém
            uma mensagem escondida.

            <br>

            Talvez seja melhor procurar
            outro arquivo primeiro...

        `;

    }


    if (numero === 2) {

        resultado.innerHTML = `

            <strong>
                📷 PHOTO_01
            </strong>

            <br><br>

            ARQUIVO BLOQUEADO.

            <br>

            É necessário encontrar
            a senha para visualizar.

        `;

    }


    if (numero === 3) {

        resultado.innerHTML = `

            <strong>
                📄 NOTE_01
            </strong>

            <br><br>

            "Nem tudo que está escondido
            realmente quer continuar escondido."

            <br><br>

            — arquivo desconhecido

        `;

    }

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


    /*
       SENHA PROVISÓRIA.

       Depois podemos trocar por uma
       senha que tenha significado para vocês.
    */

    const senhaCorreta = "noah";


    if (senha === senhaCorreta) {

        mensagem.innerHTML =
            "✓ ACESSO CONCEDIDO. O arquivo foi desbloqueado.";


        mensagem.style.color =
            "#86b99a";


    } else {

        mensagem.innerHTML =
            "✕ ACESSO NEGADO. Essa não parece ser a senha.";


        mensagem.style.color =
            "#c4878d";

    }

}
