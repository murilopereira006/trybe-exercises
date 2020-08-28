var porcentagem = 0;

function nota(porcentagem) {

    if (porcentagem >= 90) {
        return "A";
    }
    if (porcentagem >= 80 && porcentagem < 90) {
        return "B";
    } 
    
    if (porcentagem >= 70 && porcentagem < 80) {
        return "C";
    } 
    
    if (porcentagem >= 60 && porcentagem < 70) {
        return "D";
    } 
    
    if (porcentagem >= 50 && porcentagem < 60) {
        return "E";
    } 

    else { return "F";}
}