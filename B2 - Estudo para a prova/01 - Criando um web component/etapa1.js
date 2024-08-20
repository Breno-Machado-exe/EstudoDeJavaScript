
//              (Criação)

//Criamos a classe StarRating que é uma especialização de HTMLElement
//ele herda todos os métodos e propriedades do DOM

export default class StarRating extends HTMLElement
{
    //essa classe define um método construtor
    //Como não há nada dentro, no momento ele só chama o construtor da superclassse e imprime uma mensagem
    constructor()
    {
        super()
        console.log("Star Rating created!")
    }
}

customElements.define("star-rating", StarRating)

//utilizando a api do Custom Elements registramos o nome de um novo elemento e classe
//convenção é ter um - para diferenciar dos elementos HTML