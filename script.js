let order =[];
let clickedOrder =[]
let score = 0


// 0 = verde, 1 = Vermelho, 2 = Amarelo, 3 = Azul

const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const green = document.querySelector('.green')
const yellow = document.querySelector('.yellow')

//Makes random order of colors
let shuffleOrder = () =>{
    let colorOrder = Math.floor(Math.random() * 4)
    order[order.length] = colorOrder;
    clickedOrder = []


    for(let i in order ){
        let elementColor = createColorElement(order[i])
        ligthColor(elementColor, Number(i) + 1) 
    }
}

//light up the next color
let ligthColor = (element, number) =>{
    number = number * 500
    setTimeout(()=> {
        elemen
    }, number - 250 ) 

    setTimeout(()=>{
        Element.prototype.classList.remove('selected')
    })
}

let checkedOrder =() => {
    for(let i in clickedOrder){
        if( clickedOrder[i] != order[i]){
            gameOver()
            break
        }
    }

    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score} \n Você Acertou!`)
        nextLevel()
    }

}


//Functions user click

let click = (color) =>{
    colorOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');


    setTimeout(()=>{
        createColorElement(color).classList.remove('selected');
        checkedOrder();
    },250)

}

let createColorElement = (color) =>{
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

let nextLevel = () =>{
    score++
    shuffleOrder()
}


//Functiom Game-over
let gameOver = () =>{
    window.alert(`pontuação:${score}. \n Você Perdeu o Jogo!\n Clique em "OK" Para iniciar o jogo novamente.`)
    order =[]
    clickedOrder = []


    playGame();
}


let playGame = () => {
    score = 0;
    alert('O jogo ira inicar')

    nextLevel()
}


green = () => click(0)
red = () => click(1)
yellow = () => click(2)
blue = () => click(3)

green.on

playGame();
