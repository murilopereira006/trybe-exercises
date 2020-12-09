function crescente(altura) {
    let x = [];
    let y = [];
    let n = 0;

    x.length == altura;

    //agora o Y
    for (let j = 0; j < altura; j += 1) {

        //primeiro o X
        for (let i = 0; i < altura; i += 1) {
            if (x.length >= (altura - n)) { x[i] = (`*`); }
            else { x[i] = (` `); }

            console.log(x);
        }

        y[j] = x;
        n += 1;
    }
    console.log(`Y -> ` + y);
}

crescente(3);
