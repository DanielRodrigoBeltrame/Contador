const data=document.getElementById("data")
let number=parseInt(data.innerText)


function somar() {
    number++
    data.innerText = number
    console.log(p.innerText)
}

function diminuir(){
    data.innerText = --number
}

function reset(){
    number = 0
    data.innerText = number
}

function incluir(){
    let number = parseInt(data.innerText)

    lista1.innerText=number
    data.innerText = 0
}

function novo (){
    let lista = parseInt(lista1.innerText)

    lista1.innerText= "-"
    data.innerText = 0
}

