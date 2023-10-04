//DOM

const distancia = document.querySelector('#distancia')
const consumo = document.querySelector('#consumo')
const preco = document.querySelector('#preco')
const but = document.querySelector('#enviar') 
const resultado = document.querySelector('#att')

// EVENTO 

but.addEventListener('click',viagem)


//FUNÇÃO

function viagem(){
    
    let dis = distancia.value
    let cons = consumo.value 
    let pre = preco.value

    

    let calc = (dis/cons)*pre

    resultado.textContent = "O gasto da viagem foi de:" +calc.toFixed(2)+"R$"

}