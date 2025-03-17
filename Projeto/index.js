/*
    Bloco de Comentário
*/

var OlaMundo = "Hello World"
let a = 10; 
const b = "10";

console.log('Olá, mundo!');
console.log(OlaMundo);
console.log(a==b); //Não considera o tipo e sim o conteúdo. A tem o conteúdo igual a B?(true)
console.log(a===b); //Considera o tipo(operador identico). A é identico a B?(false)
console.log(a!==b); //Considera o tipo. A não é identico a B?(true)
console.log(a!=b); //Não considera o tipo. A não tem o conteudo igual a B?(false)

console.log(a > b && typeof b == 'string'); //A é maior que B(false) e b é uma string?(true). Retorna False por causa do operador AND.
console.log(a > b || typeof b == 'string'); //A é maior que B(false) e b é uma string?(true). Retorna True por causa do  operador OR.

/*
    Estruturas condicionais
    if(condição){}else if(condição){} else{}
    isApproved = media >= 7 ? true : false 
    switch(variavel teste){case "possivel valor da variavel": break;}
*/

let cor = "verde"

if(cor === "verde")
    console.log('Siga');
else
    console.log('Pare');

let semaforo = "oi"

if(semaforo ==="verde"){
    console.log('Siga');
}else if(semaforo ==="amarelo"){
    console.log('Atenção');
}else if(semaforo ==="vermelho"){
    console.log('Pare');
}else{
    console.log('Semáforo apagado');
}

let semaforoComSwitch = "amarelo" //Variável minúscula

switch (semaforoComSwitch){
    
    case "Verde":
        console.log('Siga');
    break;
    
    case "Amarelo": //comparação maiuscula, então não é igual(Case Sensitive).
        console.log('Atenção');
    break;
    
    case "Vermelho":
        console.log('Siga');
    break;

    default:
        console.log('Semáforo apagado');
    break;

}

/*
    Estruturas de Repetição:

    for(valor inicial da variavel; valor limite da variavel; incremento ou decremento da variavel){}
    for(elemento in elementos){}
    do{}while(condição)
    while(condição){}
*/

let tabuadaDo = 8;
for(let i = 0; i<=10; i++){
    console.log(`${i} X ${tabuadaDo} = ${i * tabuadaDo}`); //Template String(melhor)
    //console.log(i + " X " + tabuadaDo + " = " + (i*tabuadaDo)); Concatenação
}