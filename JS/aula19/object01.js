let amigo = {
    nome:'José',
    sexo:'M',
    peso:50.5,
    engordar(p=0){
        this.peso += p
    }
}
amigo.engordar(2)
console.log(amigo.nome)
console.log(amigo.peso)