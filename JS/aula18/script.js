function addnum() {
    let mostrarlista = document.getElementById("lista1")
    var numero = document.getElementById("numer")
    let arraynumer = []
    arraynumer.push(numero.value)
    
    
    mostrarlista.innerHTML += `valor é ${arraynumer}`
    console.log(arraynumer)
}
