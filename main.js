// Classe de abstracao
function Veiculo(nome, velocidade, uso) {
  this.nome = nome;
  this.velocidade = velocidade;
  this.uso = uso;
}

// Classes herdeiras
function Carro(marca) {
  this.marca = marca;
  Veiculo.call(this, "Carro", "média", "terrestre");
}

function Aviao(companhiaAerea) {
  this.companhiaAerea = companhiaAerea;
  Veiculo.call(this, "Avião", "alta", "aereo");
}

// Instâncias
const veiculo1 = new Aviao("azul");
const veiculo2 = new Carro("toyota");
const veiculo3 = new Carro("chevrolet");

console.log(veiculo1);
console.log(veiculo2);
console.log(veiculo3);
