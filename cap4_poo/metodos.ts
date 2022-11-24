class ContaMetodos {
    numeroDaConta: number;
    titular: string;
    saldo: number;

    constructor(numeroDaConta: number, titular: string, saldo: number) {
        this.numeroDaConta = numeroDaConta;
        this.titular = titular;
        this.saldo = saldo;
    }

    // Declaraçã do método
    consultaSaldo(): string {
        return `O seu saldo atual é ${this.saldo}`;
    }

    adicionaSaldo(saldo: number): void{
        this.saldo += saldo;
    }

    sacarDoSaldo(valor: number): void {
        this.saldo -= valor;
    }
}