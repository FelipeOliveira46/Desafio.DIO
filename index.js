// variaveis com nome e experieencia do heroi
let nome = "Arthas";
let xp = 8450;
let nivel = "";

// Estrutura de decisao para redefinir o novel com base na xp
if ( xp < 1000) {
  nivel = "Ferro";
} else if (xp <= 2000) {
    nivel = "Bronze";
} else if ( xp <= 5000) {
    nivel = "prata";
} else if ( xp <= 7000) {
    nivel = "ouro"
} else if (xp <= 8000) {
    nivel = "platina";
} else if (xp <= 9000) {
    nivel = "ascendente";
} else if (xp <= 8000) {
    nivel = "imortal";
} else {
    nivel = "radiante";
}
    
// exibindo a mensagem final 
console.log 
