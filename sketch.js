function setup() {
  createCanvas(400, 400);
}
let xJogador = [0, 0, 0, 0];
let yJogador = [80, 160, 240, 320];
let jogador = ["😎", "🤖", "👽", "🤠"];
let teclas = ["a", "s", "d", "f"];
let quantidade = jogador.length;

function draw() {
  ativaJogo();
  criaPersonagem();
  desenhaChegada();
  quemGanhou();
}

function ativaJogo() {
  if (focused == true) {
    background("#D2EBB5");
  } else {
    background("rgb(228,178,178)");
  }
}

function criaPersonagem() {
  textSize(40);
  for (let i = 0; i < quantidade; i++) {
    text(jogador[i], xJogador[i], yJogador[i]);
  }
}

function desenhaChegada() {
  fill(250);
  rect(350, 0, 20, 400);
  fill(0);
  for (let yAtual = 0; yAtual < 400; yAtual += 20) {
   rect(350, yAtual, 10, 10);
  }
  for (let yAtual = 10; yAtual < 400; yAtual += 20) {
    rect(360, yAtual, 10, 10);
  }
}
function quemGanhou() {
  for (let i = 0; i < quantidade; i++) {
    if (xJogador[i] > 350) {
      background(250);
      fill("red");
      textSize(50);
      textStyle(BOLD);
      textAlign(CENTER, CENTER);
      text(jogador[i] + " venceu!", 200, 200);
      noLoop();
    }
  }
}

function keyReleased() {
  for (let i = 0; i < quantidade; i++) {
    if (key == teclas[i]) {
      xJogador[i] += random(20);
    }
  }
}
