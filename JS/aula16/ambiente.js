let num = [5, 4, 3, 2, 1, 6]
num.sort()
//num.push(8) // ele cria por si só uma chave e coloca no ultimo lugar do array
//num.sort() // coloca os números em ordem crescente 
console.log(num.length) // vai mostrar quantas posições tem nesse array

console.log(num)

//console.log(num[0]) //mostra somente o valor que está na chave 0 do array

for (let pos = 0;pos < num.length;pos++){
    console.log(num[pos])
}