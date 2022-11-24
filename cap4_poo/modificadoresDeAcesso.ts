/* Classe a ser exportada para outras classes usarem */

export class Conta {
    /* atributos com modificadores(encapsulamento) */
    private saldo: number;
    private numeroDaConta: number;
    /* Voltando a classe exportada  */
    constructor (titular: string, saldo: number) {
        // A linha abaixo mostra uma ilustração teorica de como criar um 
        // numero aleatorio para a conta
        this.numeroDaConta = Math.floor(Math.random() * 1000) + 1;
    }
}