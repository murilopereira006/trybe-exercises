function salarioLiquido (salarioBruto){
    if(salarioBruto < 1556.94){
        var salarioBase = salarioBruto - (salarioBruto * 0.08);
    }
    if(salarioBruto < 2594.92 && salarioBruto > 1556.94){
        var salarioBase = salarioBruto - (salarioBruto * 0.09);
    }
    if(salarioBruto < 5189.82 && salarioBruto > 2594.92){
        var salarioBase = salarioBruto - (salarioBruto * 0.11);
    }
    if(salarioBruto > 5189.82){
        var salarioBase = 570.88;
    }

    if(salarioBase < 1903.98){
        var salarioFinal = salarioBase;
    }
    if(salarioBase > 1903.98 && salarioBase < 2826.65){
        var salarioFinal = (salarioBase * 0.075) - 142.80;
    }
    if(salarioBase > 2826.65 && salarioBase < 3751.05){
        var salarioFinal = (salarioBase * 0.15) - 354.80;
    }
    if(salarioBase > 3751.05 && salarioBase < 4664.68){
        var salarioFinal = (salarioBase * 0.225) - 636.13;
    }
    if(salarioBase > 4664.68){
        var salarioFinal = (salarioBase * 0.278) - 869.36;
    }
    return salarioFinal;
}