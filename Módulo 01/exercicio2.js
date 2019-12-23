function pares(x, y) {
    var numerosPares = ""
    for (var i = x; i <= y; i++) {
        if ((i % 2) === 0) {
            numerosPares += String(i) + " "
        }
    }
    console.log(numerosPares)
}

pares(32, 120)