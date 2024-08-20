//-------------------------------------------------------------------

// classes controlam a geração de protótipos

// Uma classe representa um tipo de objetos.
// Nela podemos definir uma função construtora
// A função construtora traz o código necessário para criar instancias
// As instancias são os objetos criados 
// Os métodos são adicionados logo no corpo da classe e também estão
//disponíveis para todas as instancias
// Novas instâncias ainda são criadas com o operador new 
// Mas agora é new + nome da classe

class Pessoa 
{
    tipo = humano
    #macas = 0;
    constructor(nome, idade , bananas)
    {
        this.nome = nome
        this.idade = idade
        this.bananas = bananas
    }
    get macas()
    {
        return this.#macas
    }
    set macas(valor)
    {
        if( valor >= 0)
        {
            this.#macas = valor            
        }
    }
    comer () {
        banana--
    }
    static quemTemMais(a, b)
    {
        if(a.macas > b.macas)
        {
            return a.nome
        } else if ( a.macas < b.macas )
        {
            return b.macas
        }else
        {
            return "ambos"
        }
    }
}

const pessoa1 = new Pessoa('Breno', 20, 6)
const pessoa2 = new Pessoa('Camilo', 18, 3)

// podemos passar atributos com valores padrões
// se o construtor não os mudar, só da pra fazer com uma atribuição

console.log(pessoa1.tipo)
console.log(pessoa1.idade)

pessoa1.tipo = 'gatinho'
console.log(pessoa1.tipo)


//-------------------------------------------------------------------



//-------------------------------------------------------------------


//              (propriedades privadas)
//propriedades criadas com um # no identificador é considerada privada 
//campos privados só podem ser acessados dentro da propria classe
//qualquer tentativa externa gera erro


//              (métodos de acesso)
//o acesso a propriedades privadas é gerenciado criando métodos públicos
//que as manipulam

//metodo marcado por get é um método de leitura
//  Getter, permite ler a propriedade fora da classe


//método marcado por set é um método de escrita
//  Setter, permite que a propriedade seja alterada por fora

//              (interface)
//classes com métodos get e set ganham uma interface para 
//manipulação de suas propriedades.
//as propriedades privadas que podem ser acessadas por uma interface
//são ditas como encapsuladas

//              (métodos estáticos)
//são métodos que não operam diretamente as inatancias
//são utilizados para representar alguma operação 
//é possível guardar o método ou propriedade diretamente no construtor
//ou na classe
//esses são os métodos estáticos
//dentro da classe, ao usar a palavra-chave static , método será da
//classe e não das instâncias

//esses métodos são chamados pela classe
Pessoa.quemTemMais(pessoa1,pessoa2)