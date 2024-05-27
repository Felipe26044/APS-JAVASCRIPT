function isPrime(num) { // Função para verificar se é primo
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

const numeroTeste = 13; // Altere para o número que deseja
if (isPrime(numeroTeste)) {
    console.log(`${numeroTeste} é primo.`);
} else {
    console.log(`${numeroTeste} não é primo.`);
}

// Função para encontrar os 10 maiores números primos a partir de um número fornecido
function findLargestPrimes() {
    let num = prompt("Digite um número:");
    let primes = [];
    for (let i = num; primes.length < 10; i--) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    console.log("Os 10 maiores números primos a partir de " + num + " são:");
    console.log(primes);
}

// Chamada da função
findLargestPrimes();

