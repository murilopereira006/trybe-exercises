let a = 15;
let b = 30;
let c = 23;

function comparando (a, b, c) {
    if (a > b & a > c) {
        return a;
    }
    if (b > a & b > c) {
        return b;
    }
    else {
        return c;
    }
}

comparando ();