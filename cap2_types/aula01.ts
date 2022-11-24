/* variaveis de escopo, var */
var mensagemForaDoIf = "mensagem fora do if";

if (true) {
  var mensagemDentroDoIf = "mensagem dentro do if";
  console.log(mensagemDentroDoIf);
}

console.log(mensagemForaDoIf); 
console.log(mensagemDentroDoIf);

/* let mensagens de bloco */
let mensagemForaDoIf1 = "mensagem fora do if";

if (true) {
  let mensagemDentroDoIf2 = "mensagem dentro do if";
  console.log(mensagemDentroDoIf2);
}

console.log(mensagemForaDoIf1); 
console.log(mensagemDentroDoIf);

/* CONST são constantes, valores que não mudam */
const mensagem = "MSG 1" 
console.log(mensagem);

// mensagem = "MSG 2";

/* Boolean, vdd ou falso */
let ativo: boolean;

ativo = false;
ativo = true;

let ativo1 = true;
// podemos iniciar a variavel com o seu valor.

/* number, é para tipos numericos 
let octal: number = o

octal = 00745;

let binary: number = 0
b1111;

let decimal: number = 34;

let hex: number = oxf34d; */

/* String, tipo texto */

let cor: string = 'azul';

let nome: string = 'Anders Hejlsberg'; 
let idade: number = 58; 
let sentence: string = `Olá, meu nome é ${ nome }, eu tenho ${idade} anos`;

/* lenght, adicionando a palavra reservada lenght no final. */


let nome1: string = 'Anders Hejlsberg'; 
let idade1: number = 58; 
let sentence1: string = `Olá, meu nome é ${ nome }, eu tenho ${idade} anos`;
console.log(sentence.length);

/* Arrays */

let numeros: number[] = [1,2,3];

let textos: string[] = ["exemplo1", "exemplo2", "exemplo3"];

let numeros1: Array<number> = [1,2,3];

let textos1: Array<string> = ["ex1", "ex2", "ex3"];

numeros.push(4);
textos.push("exemplo4");

console.log(numeros)
console.log(textos)

/* ReadonlyArray array que permite somente a leitura
ele remove todos os métodos de alteração de um array, como push, pop */

let numerosDaMega: ReadonlyArray<number> = [8, 5, 5, 11, 4, 28];

//numerosDaMega.push(23) // Erro

//numeroDaMega.pop();
//numeroDaMega.lenght = 100;

export function parseAsync<T> 
( 
    data: Readonly<T> | ReadonlyArray<T> | Readable, 
    opts?: json2csv.Options<T>, 
    transformOpts?: TransformOptions 
):
Promise<string>;