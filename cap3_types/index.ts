//função para deletar um registro //função para deletar mais de um registro
var arr: (number[] | string[]); var i: number; 
arr = [1, 2, 4] 
  
for (i = 0; i < arr.length; i++) { 
console.log(arr[i]);
} 
  
arr = ["A", "B", "C", "D"] 
  
for (i = 0; i < arr.length; i++) { 
console 
var arr: (number[] | string[]); var i: number;

arr = [1, 2, 4] 

for (i = 0; i < arr.length; i++) {
console.log(arr[i])
}
arr = ['A', 'B', 'C', 'D']

for (i = 0; i < arr.length; i++) {
console.log(arr[i]);
} 
 
function deleteTeste(usuario: string | string[]){
    
if (typeof usuario == "string") { 
        
console.log(usuario, "deletado"); 
} else { 
        
var i; 
}        
for (i = 0; i < usuario.length; i++) {             
    console.log(usuario[i], "deletado"); 
        } 
    }
};

/* Operador Ternario */

let perfil = "admin";
console.log(perfil == "superuser" ? "Super usuário" : "Administrador");

/* Switch */

let perfil1 = "admin";

switch(perfil1) {
    case "superuser":
        console.log("Super usuário");
        break;
    case "gerente":
        console.log("Gerente");
        break;
    case "admin":
        console.log("Administrador");
        break;
    case "user":
        console.log("Usuário comum");
        break;
    default:
        console.log("Sem perfil");
        break;
}

/* while */

let condicao = true;
while(condicao){
    console.log("Carregando...")
}

/* do while */

let condicao1 = false;
{
    console.log("Carregando...")
}
while(condicao1);

/* laço for */

var languages=["C#", "java", "javaScript", "Typescript"];

for(let i=0; languages.length; i++) {
    console.log(languages[i]);
    // Neste exemplo o for vai incrementar o valor de i (aumentar), enquanto i for menor
    // que o array languages.
}

/* forEach */

var languages1 = ["C#", "java", "javaScript", "Typescript"];

languages1.forEach(element => {
    console.log(element);
    /*
    O exemplo anterior deve retornar todos os elementos do array language sem a necessidade 
de informação de índices como no for. */
});

/*  */