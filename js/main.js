

function botao(){
    document.getElementById("agradecimento").innerHTML = "Obrigada por clicar";
    //console.log(document.getElementById("agradecimento"));
    
}

function redirecionar(){
    window.open("https://github.com/gabrielabarbare/aula_javascript");
    //window.location.href = "https://github.com/gabrielabarbare/aula_javascript";
}

function trocar (elemento){
    elemento.innerHTML = "Obrigada por passar o mouse."
    //document.getElementById("mousemove").innerHTML = "Obrigada por passar o mouse.";
    //alert("Trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui."
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui.";
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*
function soma (n1,n2){
    return n1 + n2;
}

function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }
    else {
        validar = false
    }
    return validar;
    
    
}
var idade = prompt ("Qual a sua idade?");
console.log(validaIdade(idade));
*/



/*
 var d = new Date();
 alert(d.getMonth()+1);
*/


/*
var count;
for (count=0; count <= 5; count++){
    alert(count);
}
*/


/*
var count = 0;
while (count <= 5){
    console.log(count);
        count++;
}
*/


/*
var idade = prompt ("Qual sua idade?")

if (idade >= 18){
    alert("maior de idade");
}
else{
    alert("menor de idade");
}
*/

/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
alert(frutas[1].nome);
*/


//var lista = ["maça", "pera", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista.length); //quantidade de itens da minha lista
//console.log(lista.reverse());
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" | "))


//var nome = "Gabriela Lira";
//var n1 = 3;
//var n2 = 5;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(n1 * n2);
//console.log(frase.toUpperCase());
//console.log(frase.replace("Japão","Brasil")); 