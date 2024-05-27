function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= num/2; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}


function verificarPrimos() {
    const userInput = parseInt(prompt("Digite um número positivo:"));
    if (userInput <= 0) {
        console.log("Por favor, digite um número positivo válido.");
        return;
    }

    for (let i = 2; i <= userInput; i++) {
        if (isPrime(i)) {
            console.log(`${i} é um número primo.`);
        } else {
            console.log(`${i} não é um número primo.`);
        }
    }
}