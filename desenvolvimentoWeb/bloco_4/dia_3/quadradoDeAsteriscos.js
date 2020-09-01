function quadrado(altura) {
    var x = [];
    var y = [];

    //montando a tabela
    for (var i = 0; i < altura; i += 1) {
        x.push(`*`);
        y.push(x);
    }
    for (let j = 0; j < altura; j += 1) {
        console.log(y[j]);
        
    }
}

quadrado();