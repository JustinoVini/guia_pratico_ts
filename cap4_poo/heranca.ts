import { Conta } from './modificadoresDeAcesso';
/* Primeira classe filha */
class ContaPF extends Conta {
    cpf: number;

    constructor(cpf: number, numeroDaConta: number, titular: string, saldo: number) {
        super();
        this.cpf = cpf;        
    }
}


/* Segunda Conta filha */
class ContaPj extends Conta {
    cnpj: number;

    constructor(cnpj: number, numeroDaConta: number, titular: string, saldo: number) {
        super();
        this.cnpj = cnpj;
    }
}

const pessoaJuridica = new ContaPj(46173051000116, 1, "Vinicius Justino", 1000);

/** Voltando a classe exportada */