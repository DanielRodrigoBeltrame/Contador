
//estado da aplicação
const data=document.getElementById("data")
let number=parseInt(data.innerText)


//alteradores de estado da aplicação
function somar() {
    number++
    render()
    
}

function diminuir(){
    --number
    render()
}

function reset(){
    number = 0
    data.innerText = number
}

function incluir(){
   
    lista1.innerText = number
    number = 0
    data.innerText = number
}

function novo (){
    let lista = parseInt(lista1.innerText)

    lista1.innerText= "-"
    number = 0
    data.innerText = number
}

//jogar o testo da aplicação na tela

function render(){

    data.innerText = number 
}

render ()
