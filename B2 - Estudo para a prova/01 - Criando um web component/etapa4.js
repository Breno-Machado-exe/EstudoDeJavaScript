

// (ciclo de vida do componente)

export default class StarRating extends HTMLElement
{
    #stars
    constructor()
    {
        super()
        console.log("Star Rating created!")
        this.stars = 1
    }
    get stars()
    {
        return this.#stars
    }
    set stars(novo)
    {
        if (1 <= novo && novo <=6)
        {
            this.#stars = novo
            this.textContent = " "
            for (let i=0 ; i< this.#stars; i++)
            {
                this.textContent += "⭐️"
            }

        }
    }
    //------------------------------------------------------------------

    //vamos adidionar novos métodos conhecidos como ciclo de vida

    //são chamados pelo próprio navegador quando alguns eventos acontecem

    // 1 - método estático observedAttributes()
    //informa quais atributos devem disparar notificações ao serem alterados

    static get observedAttributes()
    {
        return ["stars"]
    }

    // 2 - método connectedCallback() 
    // quando adicionado, sobrescreve o método da superclasse.
    // Permite adicionar lógica. Não vamos usar por agora

    connectedCallback()
    {
        console.log('Star Rating Connected!')
    }

    // 3 - attributeChangedCallback()
    //chamdo sempre que um atributo do elemento é alterado
    //Melhor lugar para alterar o valor de nosso componente

    attributeChangedCallback(chave,antigo,novo)
    {
        if(antigo === novo) return;
        if(chave === "stars")
        {
            this.stars = novo
        }
    }
}

customElements.define("star-rating", StarRating)