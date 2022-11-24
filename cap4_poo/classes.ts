// como declarar uma classe com TS
class Conta {
    // atributos
    numeroDaConta: number;
    titular: string;
    saldo: number;

    constructor(numeroDaConta: number, titular: string, saldo: number) {
        this.numeroDaConta = numeroDaConta;
        this.titular = titular;
        this.saldo = saldo;
    }
}

// instanciando e passando os argumentos da conta na ordem do construtor
const primeiraConta = new Conta(1, "Vinicius Justino", 1000);
