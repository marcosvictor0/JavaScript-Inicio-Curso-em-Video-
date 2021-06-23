function calcular() {

var numInicial = document.getElementById("in")
var numFinal = document.getElementById("fim")
var passo = document.getElementById("pass")
var result = document.getElementById("res")

    if (numInicial.value.length == 0 || numFinal.value.length == 0 || passo.value.length == 0) {
        window.alert("Erro, faltam dados!")
    }  else {
        let ini = Number(numInicial.value)
        let fim = Number(numFinal.value)
        let pas = Number(passo.value)
        if ( pas == 0) {
            alert("erro, não tem como contar de 0 em 0")
            pas = 1
        }
        if ( ini < fim) {
            for(let c = ini; c <= fim; c += pas) { //contagem crescente
                result.innerHTML += `${c} \u{1F449}`
            }
            
        } else {
            for(let c = ini; c >= fim; c -= pas) { //contagem decrescente
                result.innerHTML += `${c} \u{1F449}` 
            }
        }
        result.innerHTML += `\u{1F3C1}`
    }
}