let num = [5, 4, 3, 2, 6 , 1, 7]
//num.sort()
//num.push(8) // ele cria por si só uma chave e coloca no ultimo lugar do array
//num.sort() // coloca os números em ordem crescente 
//console.log(num.length) // vai mostrar quantas posições tem nesse array

//console.log(num)

//console.log(num[0]) //mostra somente o valor que está na chave 0 do array

//for (let pos = 0;pos < num.length;pos++){
//    console.log(num[pos])
//}
/*
for ( let pos in num) {
    console.log(num[pos])
}
*/
num.indexOf(5) // ele vai procurar no vetor, onde está o número 6
console.log(num)
console.log(num.indexOf(6))
let pos = num.indexOf(6)

if ( pos == -1 ){
    console.log("O valor não foi encontrado.")
} else {
    console.log(`o valor está na posição ${pos}`)
}