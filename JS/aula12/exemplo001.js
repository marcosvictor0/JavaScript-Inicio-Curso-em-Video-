var idade = 66
if (idade < 16) {
    console.log("Não vota")
} else if (idade < 18 || idade > 65) {
    console.log("Seu Voto é opcional")
} else if (idade >= 18){
    console.log("Seu Voto é obrigatorio")
} 



var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`);
if (hora < 12 ) {
    console.log("Bom dia")
} else if (hora <= 18) {
    console.log("Boa Tarde")
} else {
    console.log("Boa Noite")
}