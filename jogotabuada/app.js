//VARIAVEIS jogo tabuada
let min =1;
let max =10;
let valor1;
let valor2;
let respostaUsuario;
let respostaCorreta;
let campoErro;
let acertos=0;
let erros=0;

const numero1=document.querySelector('#numero1');
const numero2=document.querySelector('#numero2');
const campoRespostaUsuario=document.querySelector('#campoRespostaUsuario');
const campoAcertos=document.querySelector('#campoAcertos');
const campoErros=document.querySelector('#campoErros');


///Variaveis do timer

let segundos = 20;
let timer;
const exibeTimer = document.querySelector('#exibeTimer');
const btIniciar = document.querySelector('#btIniciar');
const btParar = document.querySelector('#btParar');
const btReiniciar = document.querySelector('#btReiniciar');
//////


// DEFININDO FUNÇÃO
function iniciar (){
    valor1 = Math.floor(Math.random() * (max - min + 1)) + min;
    valor2 = Math.floor(Math.random() * (max - min + 1)) + min;
    numero1.value = valor1;
    numero2.value = valor2;
    campoRespostaUsuario.focus();   
} 
//////////////////

// EXECUÇÃO DA TABUADA
document.addEventListener('keypress', (e)=>{

    if (e.key == "Enter"){
        respostaCorreta = valor1 * valor2;
        respostaUsuario = campoRespostaUsuario.value;

        if (respostaCorreta == respostaUsuario){ 
            // caso resposta correta
            acertos++; 
            console.log(acertos);
         } else {
                // caso resposta errada
                erros++;
                console.log; 
            }

            campoAcertos.innerHTML = "Acertos:" + acertos;
            campoErros.innerHTML = "Erros:" + erros;
            campoRespostaUsuario.value = "";
            iniciar();
    }
});
///////////////////

iniciar();

function startTimer(){
    btIniciar.disabled = true;
    timer = setInterval(()=>{
        segundos--;
        exibeTimer.innerHTML = segundos;
        
        if(segundos<=10){
            document.getElementById("exibeTimer").style.color= "red";

            console.log(segundos);
        }else{

        }
        if(segundos<=0){
            let mensagem = alert("o tempo acabou!!");
            stop();
        }
    },1000)
           
  
}
function stop(){
    clearInterval(timer);
    btIniciar.disabled = false;
}


btIniciar.addEventListener('click',()=>{
    startTimer();
});
btParar.addEventListener('click',()=>{
    stop();
});
btReiniciar.addEventListener('click',()=>{
    stop();
    segundos = 20;
    exibeTimer.innerHTML = segundos;
    window.location.reload();
});








































