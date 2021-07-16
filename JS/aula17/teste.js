 /*
 function parOimpar( n ) {
    if (n % 2 == 0 ) {
        return 'Par'
        //console.log(`O numero ${n} é Par`)
    } else {
        //console.log(`O número ${n} é Impar`)
        return 'Impar'
    }
 }

 let result = parOimpar(5)

 console.log(result)
*/

function soma(n1=0, n2=0){
    return n1 + n2
}

let res = soma(2, 5)
console.log(res)
console.log(soma(2, 10))




let v = function(x) {
    return x*2
}
console.log(v(10))


function fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--){
        fat *= c
    }
    return fat
}
console.log(fatorial(5))

//Recursividade = função chamando ela mesma
function fatorial(n) {
    if ( n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))
/*

5! =  5 x 4 x 3 x 2 x 1
5! = 5 x 4!

n! = n x (n-1)!
1! = 1
*/