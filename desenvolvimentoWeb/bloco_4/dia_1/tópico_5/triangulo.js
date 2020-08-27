let a = 90;
let b = 45;
let c = 45;

function seraTriangulo (a, b, c) {
    if (a == 0 || b == 0 || c == 0) {
        return false;
    }
    if (a + b + c == 180) {
        return true;
    }
    else {return false;}
}

seraTriangulo();