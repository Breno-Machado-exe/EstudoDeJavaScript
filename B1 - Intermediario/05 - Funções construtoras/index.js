//--------------------------------------------------------------

//função construtora:
function Pessoa (nome, idade, bananas)
{
    this.nome = nome
    this.idade = idade 
    this.bananas = bananas
}

//como adicionar métodos e propriedades:
Pessoa.prototype.comer = function()
{
    this.bananas--
}

//criação de objetos usando a função:
const pessoa1 = new Pessoa("Maria", 12, 2)
const pessoa2 = new Pessoa("Joaão", 14, 4)


//--------------------------------------------------------------