const nome = prompt("Digite o seu nome");
let cidades = " ";
let contagem = 0;

let continuar = prompt("Você já visitou alguma cidade? (sim/não)");

while (continuar.toLocaleLowerCase() == "sim") {
  let cidade = prompt("Qual o nome da cidade visitada?");
  cidades += " - " + cidade + "\n";
  contagem++;
  continuar = prompt("Você já visitou mais alguma cidade?");
}

alert(
  "Turista: " +
    nome +
    "\nNúmero de cidades visitadas: " +
    contagem +
    "\nCidades Visitadas:\n" +
    cidades
);
