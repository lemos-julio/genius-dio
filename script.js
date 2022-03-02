let order = []
let clickedOrder = []
let score = 0;

const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const green = document.querySelector('.green')
const yellow = document.querySelector('.yellow')

//Cria Ordem Aleatória
let shuflleOrder  = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) +1);
    }

}


//Acende a proxima cor
let lightColor = (element, number )=>{
    number = number * 500
    
    setTimeout(() => {
        element.classList.add('selected')
    },number - 250)

    setTimeout(() => {
        element.classList.remove('selected')
    })

}

//checar 

let checkOrder = () =>{
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver();
            break
        }
    }

    if(clickedOrder.length == order.length){
        alert(`Pontuação:${score} \n VOcê foi para o proximo Nivel!`)
        nextLevel()
    }

}

//Função para Click
let click = (color) =>{
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected')
        checkOrder();
    }, 250)
}

//Funcção que retorna a cor
let createColorElement = (color) => {
    if(color == 0){
        return green;
    } else if(color == 1) {
        return red 
    } else if(color == 2){
        return yellow
    }   else if(color == 3){
        return blue;
    }
}


//Função Para o proximoNivel jogo
let nextLevel = () =>{
        score++
    shuflleOrder();
}


//Game Over
let gameOver = () => {
    alert(`Pontução: ${score} \n Você perdeeu o jogo \n Clique e OK para inicar um novo jogo`)
    order =[]
    clickedOrder = [];
    
    
    playGame();
}

//função de inicio de jogo
let playGame = () => {
    alert(`Bem vindo ao Genius`)
    score = 0

    nextLevel()
}


//eventos
green.onclick = () => click(0)
red.onclick = () => click(1)
yellow.onclick = () => click(2)
blue.onclick = () => click(3)

//Inicio do Jogo
playGame();