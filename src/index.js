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

async function getRandomBlock() {
  let random = Math.random();
  let result;

  switch (true) {
    case random < 0.33:
      result = "RETA";
      break;
    case random < 0.66:
      result = "CURVA";
      break;
    default:
      result = "CONFRONTO";
  }

  return result;
}

// Motor Principal
async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁 Rodada ${round} `);

    // Sortear Bloco
    let block = await getRandomBlock();
    console.log(`Bloco: ${block}`);
  }

  // Rolar os dados
  let diceResult1 = await rollDice();
  let diceResult2 = await rollDice();

  // Teste de Habilidades
  let totalTesteSkill1 = 0;
  let totalTesteSkill2 = 0;
}

// Iniciar corrida
(async function main() {
  console.log(
    `🏁🚨 Corrida entre ${player1.PERSONAGEM} e ${player2.PERSONAGEM} começando... \n`
  );
  await playRaceEngine(player1, player2);
})();
// main();
