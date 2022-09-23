

// *** O parametro idElementoAudio é uma ````referencia´´´´´´´ para o id do HTML que será chamado não função [for] mais abaixo ***
// ** Quando o idAudio receber o nome do #id do HTML será substitudo e irá passar a tocar o som do #id **

function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}


// ** Nessa constante a listaDeTeclas recebera todas as classes e será armazenada em varios indices **
const listaDeTeclas = document.querySelectorAll('.tecla');




// aqui se declara um contador para ter controle, logo o .lenght conta quantos indices tem na listra de tecla 

// PARA MELHOR ENTENDIMENTO, NESSE FOR É FEITO UM ARRAY
// NO QUAL AS CONSTANTES tecla SERA ARMAZENADO CONTEUDO DO HTML
// E PARA CADA ARRAY TEM CLASSE COM 2 INDICES
// DEPOIS VAI COLOCAR O SEGUNDO INDICE EM OUTRO ARRAY QUE SE CHAMA instrumento
// DEPOIS VAI ARMAZENAR EM OUTRO ARRAY UMA STRING QUE SERÁ PARA SER CHAMADO A FUNÇAO P/ REPRODUZIR O AUDIO
// CONCLUINDO QUE PARA CADA ARRAY DO idAudio TERA UM AUDIO PRÉ DEFINIDO

for (var contador = 0; contador < listaDeTeclas.length; contador++) {

    // aqui a const tecla recebe a lista de tecla do contador atual 0, 1, 2, 3, 4...
    const tecla = listaDeTeclas[contador];

    // olhar no dev_tools
    console.log(tecla)


    //  ** Detalhe importante: classList[indice] é analisado no HTML **
    //  ** classe do html tem dois indices, muito importante para chamar na função abaixo **

    // aqui o instrumento recebe o segundo indice da classe
    const instrumento = tecla.classList[1]


    // ** aqui a const recebe uma string com nome #som_ + instrumento
    //template string se usa com CRASE
    const idAudio = `#som_${instrumento}`

    // olhar no dev_tools
    console.log(idAudio)



    // aqui o onclick da const tecla que foi declarado mais acima
    // SOBRE A FUNÇÃO
    // a função declarada sem nome é uma função não pre-definida,
    // se usa apenas para o certo momento que vai ser chamada
    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    // olhar no dev_tools
    console.log(contador);

}