
//script para o funcinamento do carrosel do html da galeria de fotos
var lista = [];
var listaTexto = [];
var i = 0;

lista.push("..//Projeto FInal/Imagens/rio-de-janeiro-hang-gliding.jpg");
lista.push("..//Projeto FInal/Imagens/projeto1.png");
lista.push("..//Projeto FInal/Imagens/landing-is-easy-they.jpg");
lista.push("..//Projeto FInal/Imagens/asa-delta-rio-de-janeiro-beto-rotor-pista-de-voo-livre-pedra-bonita.jpg");
lista.push("..//Projeto FInal/Imagens/still-fun.jpg");
lista.push("..//Projeto FInal/Imagens/G0025178-1.jpg");

listaTexto.push("Visual do Salto");
listaTexto.push("Voo e Felicidade");
listaTexto.push("Aterrissagem na Praia");
listaTexto.push("Saltos Sempre em Tempo Bom");
listaTexto.push("Você no Alto, Floresta da Tijuca Abaixo");
listaTexto.push("Pedra da Gavea ao Fundo");

function selecionarFotoManual(num) {

    i = num;
    document.getElementById("itelaP").src = lista[num];
    document.getElementById("itexto").innerHTML = listaTexto[num];
    //tornar todas as bordas brancas
    for (let j = 0; j < lista.length; j++) {
        document.getElementsByClassName("faixaFotos")[j].style.borderColor = "honeydew";
    }
    document.getElementById("foto" + num).style.borderColor = "darkblue";
}
function anterior() {
    let aux

    if (i == 0) {
        i = lista.length - 1;
    } else {
        i--;
    }
    document.getElementById("itelaP").src = lista[i];
    document.getElementById("itexto").innerHTML = listaTexto[i];
    //tornar todas as bordas brancas
    for (let j = 0; j < lista.length; j++) {
      document.getElementsByClassName("faixaFotos")[j].style.borderColor = "honeydew";
    }
    document.getElementById("foto" + i).style.borderColor = "darkblue";
}
function proximo() {

    if (i == lista.length - 1) {
        i = 0;
    } else {
        i++;
    }
    document.getElementById("itelaP").src = lista[i];
    document.getElementById("itexto").innerHTML = listaTexto[i];
    //tornar todas as bordas brancas
    for (let j = 0; j < lista.length; j++) {
        document.getElementsByClassName("faixaFotos")[j].style.borderColor = "honeydew";
    }
    document.getElementById("foto" + i).style.borderColor = "darkblue";
}