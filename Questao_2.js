function isPrime(num) { // Função para verificar se é primo ou não
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
const numeroTeste = 13; //Altere para o número que deseja
if (isPrime(numeroTeste)) {
    console.log(`${numeroTeste} é primo.`);
} else {
    console.log(`${numeroTeste} não é primo.`);
}

c