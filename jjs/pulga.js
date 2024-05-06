const gameSection = document.getElementById('game'); 
const msj = document.getElementById('msj');
const imgPlayer = document.getElementById('imgP');
const imgBot = document.getElementById('imgB');

const btnPiedra = document.getElementById("btn-piedra");
const btnPapel = document.getElementById("btn-papel");
const btnTijeras = document.getElementById("btn-tijera");
const btnLagarto = document.getElementById("btn-lagarto");
const btnSpock = document.getElementById("btn-spock");

let optionPlayer;
let optionBot;
let IMGP;
let IMGB;

//arreglo de objetos
const imagenes = [
    {
        name:"piedra",
        url: "img/piedra.png"
    },
    {
        name:"papel",
        url: "img/papel.png"
    },
    {
        name:"tijera",
        url: "img/tijera.png"
    },
    {
        name:"lagarto",
        url: "img/lagarto.png"
    },
    {
        name:"spock",
        url: "img/spock.png"
    }
];


function iniciar(){
    gameSection.style.display= 'null';
};


btnPiedra.addEventListener('click', function(){
    optionPlayer = "piedra";
    opBot();
});
btnPapel.addEventListener('click', function(){
    optionPlayer = "papel";
    opBot();
});
btnTijeras.addEventListener('click', function(){
    optionPlayer = "tijera";
    opBot();
});
btnLagarto.addEventListener('click', function(){
    optionPlayer = "lagarto";
    opBot();
});
btnSpock.addEventListener('click', function(){
    optionPlayer = "spock";
    opBot();
})


function opBot(){
    var aleatorio = nAleatorio();

    if (aleatorio == 0){
        optionBot = "piedra";
    }else if (aleatorio == 1){
        optionBot = "papel";
    }else if (aleatorio == 2){
        optionBot = "tijera";
    }else if (aleatorio == 3){
        optionBot = "lagarto";
    }else if (aleatorio == 4){
        optionBot = "spock";
    };

    gamee();
}

function gamee(){
    if(optionPlayer == optionBot){
        msj.innerHTML = "Empate";
    }else if(optionPlayer == "piedra" && optionBot == "lagarto"){
        msj.innerHTML = "Ganaste";
    }else if(optionPlayer == "piedra" && optionBot == "tijera"){
        msj.innerHTML = "Ganaste";
    }else if(optionPlayer == "papel" && optionBot == "piedra"){
        msj.innerHTML = "Ganaste";
    }else if(optionPlayer == "papel" && optionBot == "spock"){
        msj.innerHTML = "Ganaste";
    }else if(optionPlayer == "tijera" && optionBot == "papel"){
        msj.innerHTML = "Ganaste";
    }else if(optionPlayer == "tijera" && optionBot == "lagarto"){
        msj.innerHTML = "Ganaste";
    }else if(optionPlayer == "lagarto" && optionBot == "spock"){
        msj.innerHTML = "Ganaste";
    }else if(optionPlayer == "lagarto" && optionBot == "papel"){
        msj.innerHTML = "Ganaste";
    }else if(optionPlayer == "spock" && optionBot == "tijera"){
        msj.innerHTML = "Ganaste";
    }else if(optionPlayer == "spock" && optionBot == "piedra"){
        msj.innerHTML = "Ganaste";
    }else{
        msj.innerHTML = "Perdiste :(";
    }
    addImagenes();
}

function nAleatorio(){
    let n = Math.floor(Math.random() * 5);
    return n;
}

function addImagenes(){
    for(let i=0; i<imagenes.length; i++){
        if(optionPlayer == imagenes[i].name){
            imgP = imagenes[i].url;
            var inserta = `<img class="imgG" src=${imgP}>`;
            imgPlayer.innerHTML = inserta;
            imgPlayer.src = imgP;
        };

        if(optionBot == imagenes[i].name){
            imgB = imagenes[i].url;
            var inserta = `<img class="imgG" src=${imgB}>`;
            imgBot.innerHTML = inserta;
            imgBot.src = imgB;
        };
    };

    gameSection.style.display = 'flex';
};

window.addEventListener('load', iniciar);


const rules = document.getElementById('rules');
const modal = document.getElementById('modal');
const close = document.getElementsByClassName('close')[0];

rules.addEventListener('click', () => {
  modal.style.display = 'block';
});

close.addEventListener('click', () => {
  modal.style.display = 'none';
});