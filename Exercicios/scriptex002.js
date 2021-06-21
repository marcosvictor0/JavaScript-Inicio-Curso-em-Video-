function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if( fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert("Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 10 ) {
                //criança
                img.setAttribute('src', 'foto-bebe-m.png');
            } else if ( idade < 25) {
                //jovem
                img.setAttribute('src', 'foto-jovem-m.png');
            } else if (idade < 50 ) {
                //adulto
                img.setAttribute('src', 'foto-adulto-m.png');
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-m.png');
            }
        } else if (fsex[1].checked) {
            genero = "Mulher"
            if (idade >= 0 && idade < 10 ) {
                //criança
                img.setAttribute('src', 'foto-bebe-f.png');
            } else if ( idade < 25) {
                //jovem
                img.setAttribute('src', 'foto-jovem-f.png');
            } else if (idade < 50 ) {
                //adulto
                img.setAttribute('src', 'foto-adulto-f.png');
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-f.png');
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Seu gênero é: ${genero} e tem ${idade} anos.`
        //res.innerHTML = `idade calculada: ${idade}` 
        res.appendChild(img) //vai adc o elemento img
    }
}