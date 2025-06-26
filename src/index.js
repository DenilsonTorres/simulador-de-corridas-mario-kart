// Personagens
const player1 = {
  PERSONAGEM: "Mario",
  VELOCIDADE: 4,
  MANOBRABILIDADE: 3,
  PODER: 3,
  PONTOS: 0,
};
const player2 = {
  PERSONAGEM: "Luigi",
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 4,
  PONTOS: 0,
};

// Rolar dados:
async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// Iniciar corrida

(async function main() {
  // Função auto-invocavel
  console.log(
    `🏁🚨 Corrida entre ${player1.PERSONAGEM} e ${player2.PERSONAGEM} começando... \n`
  );
})();
// main();
