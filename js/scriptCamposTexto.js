// para pagina reserva
function verificarCampoVazio() {
    //capturando os valores das inputs
    let nome = document.getElementById("iNome").value;
    let email = document.getElementById("iEmail").value;
    let cpf = document.getElementById("iCpf").value;
    let celular = document.getElementById("iCelular").value;
    let dataNasc = document.getElementById("iDataNasc").value;
    let cep = document.getElementById("iCep").value;
    let cidade = document.getElementById("iCidade").value;
    let rua = document.getElementById("iRua").value;
    let complemento = document.getElementById("iComplemento").value;
    let bairro = document.getElementById("iBairro").value;
    let dataVoo = document.getElementById("iDataVoo").value;

    //Carregando a variavel genero com a opção escolhida pelo usuario
    let genero = verificarGenero();

    //capturando o valor do select UF de estado
    let selecionado = document.getElementById('iUf');
    let uf = selecionado.options[selecionado.selectedIndex].text;

    //capturando o valor do select opcao de hora de voo
    let selecionadoVoo = document.getElementById('iOpcaoVoo');
    let timeVoo = selecionadoVoo.options[selecionadoVoo.selectedIndex].text;
    //console.log(timeVoo);

    //trim nos valores
    nome = nome.trim();
    email = email.trim();
    cpf = cpf.trim();
    celular = celular.trim();
    dataVoo = dataVoo.trim();
    dataNasc = dataNasc.trim();
    cep = cep.trim();
    cidade = cidade.trim();
    rua = rua.trim();
    complemento = complemento.trim();
    bairro = bairro.trim();

    //Mensagem de erro no "p" correspondente de cada input
    if (nome == "") {
        document.getElementById("ierroNome").innerHTML = "Campo vazio";
        document.getElementById("ierroNome").style.color = "red";
    } else {
        document.getElementById("ierroNome").innerHTML = "";
    }
    if (email == "") {
        document.getElementById("ierroEmail").innerHTML = "Campo vazio";
        document.getElementById("ierroEmail").style.color = "red";
    } else {
        document.getElementById("ierroEmail").innerHTML = "";
    }
    if (cpf == "") {
        document.getElementById("ierroCpf").innerHTML = "Campo vazio";
        document.getElementById("ierroCpf").style.color = "red";
    } else {
        document.getElementById("ierroCpf").innerHTML = "";
    }
    if (celular == "") {
        document.getElementById("ierroCelular").innerHTML = "Campo vazio";
        document.getElementById("ierroCelular").style.color = "red";
    } else {
        document.getElementById("ierroCelular").innerHTML = "";
    }
    if (genero == null) {
        document.getElementById("ierroGenero").innerHTML = "Opção não selecionada";
        document.getElementById("ierroGenero").style.color = "red";
        document.getElementById("iFieldGenero").style.borderColor = "red";

    } else {
        document.getElementById("ierroGenero").innerHTML = "";
        document.getElementById("iFieldGenero").style.borderColor = "white";
    }
    if (dataVoo == "") {
        document.getElementById("ierroDataVoo").innerHTML = "Campo vazio";
        document.getElementById("ierroDataVoo").style.color = "red";
    } else {
        document.getElementById("ierroDataVoo").innerHTML = "";
    }
    if (dataNasc == "") {
        document.getElementById("ierroDataNasc").innerHTML = "Campo vazio";
        document.getElementById("ierroDataNasc").style.color = "red";
    } else {
        document.getElementById("ierroDataNasc").innerHTML = "";
    }
    if (cep == "") {
        document.getElementById("ierroCep").innerHTML = "Campo vazio";
        document.getElementById("ierroCep").style.color = "red";
    } else {
        document.getElementById("ierroCep").innerHTML = "";
    }
    if (cidade == "") {
        document.getElementById("ierroCidade").innerHTML = "Campo vazio";
        document.getElementById("ierroCidade").style.color = "red";
    } else {
        document.getElementById("ierroCidade").innerHTML = "";
    }
    if (rua == "") {
        document.getElementById("ierroRua").innerHTML = "Campo vazio";
        document.getElementById("ierroRua").style.color = "red";
    } else {
        document.getElementById("ierroRua").innerHTML = "";
    }
    if (complemento == "") {
        document.getElementById("ierroComplemento").innerHTML = "Campo vazio";
        document.getElementById("ierroComplemento").style.color = "red";
    } else {
        document.getElementById("ierroComplemento").innerHTML = "";
    }
    if (bairro == "") {
        document.getElementById("ierroBairro").innerHTML = "Campo vazio";
        document.getElementById("ierroBairro").style.color = "red";
    } else {
        document.getElementById("ierroBairro").innerHTML = "";
    }
    if (uf == "") {
        document.getElementById("ierroUf").innerHTML = "Campo vazio";
        document.getElementById("ierroUf").style.color = "red";
    } else {
        document.getElementById("ierroUf").innerHTML = "";
    }
    if (timeVoo == "") {
        document.getElementById("ierroOpcaoVoo").innerHTML = "Campo vazio";
        document.getElementById("ierroOpcaoVoo").style.color = "red";
    } else {
        document.getElementById("ierroOpcaoVoo").innerHTML = "";
    }
}
//função que funciona na pagina "Fale Conosco"
function verificarCampoVazioFaleConosco() {
    //capturando os valores das inputs
    let nome = document.getElementById("iNome").value;
    let email = document.getElementById("iEmail").value;
    let cpf = document.getElementById("iCpf").value;
    let assunto = document.getElementById("iAssunto").value;
    let mensagem = document.getElementById("iMensagem").value;

    //trim nos valores
    nome = nome.trim();
    email = email.trim();
    cpf = cpf.trim();
    assunto = assunto.trim();
    mensagem = mensagem.trim();

    //Mensagem de erro no "p" correspondente de cada input
    if (nome == "") {
        document.getElementById("ierroNome").innerHTML = "Campo vazio";
        document.getElementById("ierroNome").style.color = "red";
    } else {
        document.getElementById("ierroNome").innerHTML = "";
    }
    if (email == "") {
        document.getElementById("ierroEmail").innerHTML = "Campo vazio";
        document.getElementById("ierroEmail").style.color = "red";
    } else {
        document.getElementById("ierroEmail").innerHTML = "";
    }
    if (cpf == "") {
        document.getElementById("ierroCpf").innerHTML = "Campo vazio";
        document.getElementById("ierroCpf").style.color = "red";
    } else {
        document.getElementById("ierroCpf").innerHTML = "";
    }
    if (assunto == "") {
        document.getElementById("ierroAssunto").innerHTML = "Campo vazio";
        document.getElementById("ierroAssunto").style.color = "red";
    } else {
        document.getElementById("ierroAssunto").innerHTML = "";
    }
    if (mensagem == "") {
        document.getElementById("ierroMensagem").innerHTML = "Campo vazio";
        document.getElementById("ierroMensagem").style.color = "red";
    } else {
        document.getElementById("ierroMensagem").innerHTML = "";
    }
}
function verificarGenero() {
    let genero = null;

    if (document.getElementById("iHomem").checked) {
        genero = "homem";

    } else if (document.getElementById("iMulher").checked) {
        genero = "mulher";

    }
    return genero;
}
//Objetivo de retirar a bordar vermelho sem precisar apertar o botão
function verificarGenero2() {
    let genero = verificarGenero();

    if (genero == null) {
        document.getElementById("ierroGenero").innerHTML = "Opção não selecionada";
        document.getElementById("ierroGenero").style.color = "red";
        document.getElementById("iFieldGenero").style.borderColor = "red";

    } else {
        document.getElementById("ierroGenero").innerHTML = "";
        document.getElementById("iFieldGenero").style.borderColor = "white";
    }
}
// função apra retirar o texto da P(ierro) das inputs apos a função de indicação de campo vazio
//for utilizada, função essa que deixa bordas e Ps com avisos em vermelho 
function campoVazio(campo) {
    let selecionado = null;
    let aux = null;

    if (campo == 'Uf' || campo == 'OpcaoVoo') {
        selecionado = document.getElementById('i' + campo);
        aux = selecionado.options[selecionado.selectedIndex].text;

    } else {
        aux = document.getElementById("i" + campo).value;
        aux = aux.trim();
    }
    if (aux != "" || aux != null) {
        document.getElementById("ierro" + campo).innerHTML = "";
    }
}
function verificarEmail(valor, campo) {
    //trim no valor recebido e deixar tudo minusculo
    valor = valor.trim();
    valor = valor.toLowerCase();

    campoVazio(campo);

    //caracter especial
    let especial = 'ç&*$#%!: ;?/\|+-,{}[]()';

    //contador de caracter especial tirando o @
    let cont1 = 0;

    //contador de @
    let cont2 = 0;

    for (let i = 0; i < valor.length; i++) {
        for (let j = 0; j < especial.length; j++) {
            //conta quantidade de caracteres especiais, se cont1 > 0 operação é finalizada
            if (valor.charAt(i) == especial.charAt(j)) {
                cont1++;
                break;
            }
        }
        //conta quantidade de @
        if (valor.charAt(i) == "@") {
            cont2++;
        }
    }
    //console.log(valor);
    //console.log(valor.substring(valor.length - 4));
    //console.log(valor.substring(valor.length - 7));
    if (valor.substring(valor.length - 4) == ".com" || valor.substring(valor.length - 7) == ".com.br") {
        if (cont2 != 1 || cont1 > 0) {
            document.getElementById("ierroEmail2").innerHTML = "Verificar os caracteres digitados no campo";
            document.getElementById("ierroEmail2").style.color = "red";
            document.getElementById("iEmail").style.borderColor = "red";

        } else {
            if (cont2 == 1) {
                document.getElementById("ierroEmail2").innerHTML = "";
                document.getElementById("iEmail").style.borderColor = "green";

            } else {
                document.getElementById("ierroEmail2").innerHTML = "O campo e-mail exige conter @ e .com";
                document.getElementById("ierroEmail2").style.color = "red";
                document.getElementById("iEmail").style.borderColor = "red";
            }
        }
    } else {
        document.getElementById("ierroEmail2").innerHTML = "Verificar os caracteres digitados no campo";
        document.getElementById("ierroEmail2").style.color = "red";
        document.getElementById("iEmail").style.borderColor = "red";
    }
}
function styleEmail() {

    //para o caso da input voltar a ficar vazia
    let email = document.getElementById("iEmail").value;

    email = email.trim();

    if (email == null || email == "") {
        document.getElementById("ierroEmail2").innerHTML = "";
        document.getElementById("iEmail").style.borderColor = "white";
    }
}

//função para acertar a input no caso de ter sido digitada corretamente não só com numeros.
function caracterExcessoCorreto(valor, campo) {
    switch (campo) {
        case "Celular":
            valor = valor.replace("(", "").replace(")", "").replace("-", "");
            return valor;

        case "Cpf":
            valor = valor.replace(".", "").replace(".", "").replace("-", "");
            return valor;

        case "Cep":
            valor = valor.replace("-", "");
            return valor;
    }
}
function removerEspaco(valor) {
    while (valor.includes(" ")) {
        valor = valor.replace(" ", "");
    }
    return valor;
}
function checkNumero(valor, campo) {
    let aux = valor.trim();
    let numero = "0123456789";

    switch (campo) {
        case "Celular":
            if (aux.includes(" ")) {
                aux = removerEspaco(aux);
            }
            if ((aux.charAt(0) == "(") && (aux.charAt(3) == ")") && (aux.charAt(9) == "-")) {
                valor = caracterExcessoCorreto(aux, campo);
                console.log(valor);
                aux = valor;
            }
            break;
        case "Cpf":
            if (aux.includes(" ")) {
                aux = removerEspaco(aux);
            }
            if ((aux.charAt(3) == ".") && (aux.charAt(7) == ".") && (aux.charAt(11) == "-")) {
                valor = caracterExcessoCorreto(aux, campo);
                console.log(valor);
                aux = valor;
            }
            break;
        case "Cep":
            if (aux.includes(" ")) {
                aux = removerEspaco(aux);
            }
            if (aux.charAt(5) == "-") {
                valor = caracterExcessoCorreto(aux, campo);
                console.log(valor);
                aux = valor;
            }
            break;
        default:
            break;
    }
    for (let i = 0; i < numero.length; i++) {
        while (aux.includes(numero.charAt(i))) {
            aux = aux.replace(numero.charAt(i), "");
        }
    }
    if (aux != "") {
        document.getElementById("ierro" + campo).innerHTML = "Somente números";
        document.getElementById("ierro" + campo).style.color = "red";
        document.getElementById("i" + campo).style.borderColor = "red";

    } else {
        document.getElementById("ierro" + campo).innerHTML = "";
        document.getElementById("i" + campo).style.borderColor = "white";
        verificarQuantidadeCaracteres(valor, campo);
    }
}
function verificarQuantidadeCaracteres(valor2, campo2) {
    let quantidade = 0;
    
    // quantidade de caracteres do cep, cpf e celular
    if (campo2 == 'Cep') {
        quantidade = 8;

    } else {
        quantidade = 11;

    }
    if (valor2.length != quantidade) {
        // mensagem de erro que será disparada, ela é determinada 
        //pelo campo e a varial quantidade do campo referenciado
        document.getElementById("ierro" + campo2 + "2").innerHTML = campo2 + " exige " + quantidade + " caracteres";
        document.getElementById("ierro" + campo2 + "2").style.color = "red";
        document.getElementById("i" + campo2).style.borderColor = "red";

    } else {
        document.getElementById("ierro" + campo2 + "2").innerHTML = "";
        document.getElementById("i" + campo2).style.borderColor = "white";

        let cpfFormat;
        let celFormat;
        let cepFormat;

        //determina o formato do texto que será impresso na input
        switch (campo2) {
            case "Cpf":
                cpfFormat = valor2.substring(0, 3) + "." + valor2.substring(3, 6) + "." +
                    valor2.substring(6, 9) + "-" + valor2.substring(9);
                document.getElementById("i" + campo2).value = cpfFormat;
                document.getElementById("i" + campo2).style.borderColor = "green";
                break;

            case "Celular":
                celFormat = "(" + valor2.substring(0, 2) + ") " + valor2.substring(2, 7) + "-" +
                    valor2.substring(7);
                document.getElementById("i" + campo2).value = celFormat;
                document.getElementById("i" + campo2).style.borderColor = "green";
                break;

            case "Cep":
                cepFormat = valor2.substring(0, 5) + "-" + valor2.substring(5, 8);
                document.getElementById("i" + campo2).value = cepFormat;
                document.getElementById("i" + campo2).style.borderColor = "white";
                break;
        }
    }
}