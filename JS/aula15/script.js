function calculartab() {
    var num = document.getElementById("numero")
    let tab = document.getElementById("seltab")
    var operador = document.getElementById("operador")
    

    if ( num.value.length == 0 ) {
        window.alert("Adicione algum número para a sua tabuada!")
    } else if(operador.value == "*") {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ""
        while ( c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    } else if(operador.value == "+") {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ""
        while ( c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} + ${c} = ${n+c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    } else if(operador.value == "-") {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ""
        while ( c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} - ${c} = ${n-c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    } else if(operador.value == "/") {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ""
        while ( c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} / ${c} = ${n/c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}