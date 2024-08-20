
const pessoa =
{
    nome: "nome da pessoa",
    sexo: "Sexo da pessoa",
    idade: "idade da pessoa",
    comida: banana ,
    comer: function()
    {
        this.banana--
    }
}

// Object.create()
//  cria um novo objeto e já faz a ligação com seu protótipo

const pessoa1 = Object.create(pessoa)

const pessoa2 = Object.create(pessoa)

//pessoa1 e pessoa2 não possuem o método comer, mas podemos usá-lo pelo 
//conceito de protótipo
//o mesmo vale para os outros atributos