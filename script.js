const data=document.getElementById("data")

function somar() {
    let number=parseInt(data.innerText)
    number++
    data.innerText = number
}

function diminuir(){
    let number = parseInt(data.innerText)
    number--
    data.innerText = number
}

function reset(){
    let number = parseInt(data.innerText)
    number = 0
    data.innerText = number
}

function incluir(){
    let number = parseInt(data.innerText)

    lista1.innerText=number
    data.innerText = 0
}

