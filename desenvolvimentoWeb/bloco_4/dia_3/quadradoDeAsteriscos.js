function quadrado(altura) {
    var x = [];
    var y = [];

    //montando a tabela
    for (var i = 0; i < altura; i += 1) {
        x.push(`*`);
        y.push(x);

    }

    //imprimindo
    console.log(y);
}

quadrado(5);