


//com o shadow dom, vamos isolar os estilos do resto do documento
//garantindo que não hajam conflitos de nomenclatura ou propriedades
//alteradas por engano


export default class StarRating extends HTMLElement
{
    #stars
    #shadow //criamos uma propriedade privada shadow
    //para termos acesso nos outros métodos
    constructor()
    {
        super()
        console.log("Star Rating created!")
        this.#shadow = this.attachShadow({mode: "closed"})
        //associamos um shadow DOM ao componente
        // quando anexamos o shadow dom ao componente, temos a opção de especificar se o modo 
        // será aberto ou fechado
        //o mode: closed faz com que qualquer referência à propriedade shadowRoot retorne undefined

        //com o mode: open , o js da página consegue fazer acesso aos elementos internos através da
        // propriedade shadowRoot
        this.stars = 1
    }
    get stars()
    {
        return this.#stars
    }
    set stars(novo)
    {
        const novoValor = Math.max(Math.min(novo*1,5),1)
        this.#stars = novoValor
        this.#render()
    }
//-------------------------------------------------------------------

#render()
{
    //prendemos o estilo ao shadow DOM
    this.#shadow.innerHTML = `<style>
    .container 
    {
        display: grid;
        grid-template-columns: repeat(5,1.2em);
        place-itens: center;
    }
    .star: hover
    {
        filter: brightless(120%);
        cursor: pointer;
    }
    </style>`
    const container = document.createElement("div")
    container.classList.add("container")
    for(let i = 0 ; i<this.#stars ; i++)
    {
        const star = document.createElement("div")
        star.classList.add("star")
        star.textContent= "⭐️" 
        container.appendChild(star)
    }
    this.#shadow.appendChild(container)
    //prendemos o estilo ao shadow DOM
}

    static get observedAttributes()
    {
        return ["stars"]
    }
    connectedCallback()
    {
        console.log('Star Rating Connected!')
    }
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