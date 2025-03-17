//Função tradicional
function caclFunction(x1, x2, operador){
    return eval(`${x1} ${operador} ${x2}`); //função que avalia a expressão que é passada e tenta executa-la de forma interpretativa pelo próprio Js.
}

//Arrow Function
calcArrowFunction = (x1, x2, operador) =>{
    return eval(`${x1} ${operador} ${x2}`); 
}


let resultado = caclFunction(1,2, "-");
console.log(resultado);
resultado = calcArrowFunction(10,10, "*");
console.log(resultado);

//Eventos com o DOM
window.addEventListener('focus', event =>{
    console.log('focus');
});

document.addEventListener('click', event =>{
    console.log('click');
});


//Datas
let dataMilisegundos1970 = Date.now(); //Esse método retorna o número de milissegundos decorridos desde 1º de janeiro de 1970.
console.log(dataMilisegundos1970);
let dateTimeAtualDescritivo = new Date();
console.log(dateTimeAtualDescritivo); //Data e Hora Atual 
console.log(dateTimeAtualDescritivo.toLocaleDateString("pt-BR")); //Data formatada para o Local descrito(pt-BR) 

//Array
let array = ["esse", "é", 1, "array", function o(){}, new Date()];
console.log(array); //Exibe o Array
console.log(array.length); //Exibe o tamanho do Array.
console.log(array[1]); //Exibe o elemento da posição 1(é).
console.log(array[5].getFullYear()); //Pega o ano a partir do Objeto Date que está na posição 5 do array "array". 

//Metodo Foreach que pertence ao array e recebe uma função anônima.
console.log("Entrando no foreach...")
array.forEach(function(valor, index){
    console.log(index, valor)
});

/*
    Orientação a Objetos
     Definição antiga e Definição Nova 
*/

//Classe - Definição Antiga
let celular = function(){

    //Atributos
    this.cor = "vermelho";
    //Métodos
    this.ligar = ()=>{
        console.log("ligando...")
    }
    this.desligar = function(){
        console.log("desligando");
    }
}
console.log(celular); //Exibe a estrutura da classe

//Objeto
let objeto = new celular();
console.log(objeto.cor);
objeto.ligar(); //Chamando a arrow function(nesse caso método) "ligar"
objeto.desligar();//Chamando a função anônima(nesse caso método) "desligar"



//Classe - Definição Nova
class Celular{
    //Método construtor
    constructor(){
        //Atributo
        this.cor = "prata";
    }
    //Métodos
    ligar(){
        console.log("ligando...");
    }
    desligar(){
        console.log("desligando...");
    }
}

let obj = new Celular(); 

console.log(obj.cor);
obj.ligar();
obj.desligar();