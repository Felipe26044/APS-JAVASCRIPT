function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

const numeroTeste = 16; 
if (isPrime(numeroTeste)) {
    console.log(`${numeroTeste} é primo.`);
} else {
    console.log(`${numeroTeste} não é primo.`);
}