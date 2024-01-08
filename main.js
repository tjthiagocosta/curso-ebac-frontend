class Alunos {
  constructor(nome, nota) {
    this.nome = nome;
    this.nota = nota;
  }
}

const joao = new Alunos("Joao", 7);
const maria = new Alunos("Maria", 8);
const pedro = new Alunos("Pedro", 9);
const julio = new Alunos("Pulio", 6);
const armando = new Alunos("Armando", 4);
const cesar = new Alunos("Cesar", 0);

const todosOsAlunos = [];
todosOsAlunos.push(joao, maria, pedro, julio, armando, cesar);

const alunosAprovados = todosOsAlunos.filter(function (item) {
  return item.nota >= 6;
});

console.log(alunosAprovados);
