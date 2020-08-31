function lucro(custo, venda) {

    let imposto = custo * 0.2;
    if (custo < 0 || venda < 0) {
        return console.log("inválido!");
    }
    else {
        let lucroLiquido = venda - (custo + imposto);
        return `Seu lucro após a venda de 1000 unidades será de R$` + lucroLiquido * 1000;
    }
}

lucro();