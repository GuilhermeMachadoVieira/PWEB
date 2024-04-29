let funcionario1 = {
    Matricula: '123',
    Nome: 'Guilherme',
    Funcao: 'Analista'
};
document.getElementById('forma1').innerText = `Matrícula: ${funcionario1.Matricula}, Nome: ${funcionario1.Nome}, Função: ${funcionario1.Funcao}`;

let funcionario2 = new Object();
funcionario2.Matricula = '456';
funcionario2.Nome = 'Gabriel';
funcionario2.Funcao = 'Desenvolvedor';
document.getElementById('forma2').innerText = `Matrícula: ${funcionario2.Matricula}, Nome: ${funcionario2.Nome}, Função: ${funcionario2.Funcao}`;

function Funcionario(Matricula, Nome, Funcao) {
    this.Matricula = Matricula;
    this.Nome = Nome;
    this.Funcao = Funcao;
}

let funcionario3 = new Funcionario('789', 'Pedro', 'Gerente');
document.getElementById('forma3').innerText = `Matrícula: ${funcionario3.Matricula}, Nome: ${funcionario3.Nome}, Função: ${funcionario3.Funcao}`;
