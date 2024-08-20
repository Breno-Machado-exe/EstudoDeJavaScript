

export default class StarRating extends HTMLElement
{
    #stars
    #shadow 
    constructor()
    {
        super()
        console.log("Star Rating created!")
        this.#shadow = this.attachShadow({mode: "open"})
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

    this.shadowRoot.innerHTML = `<style>
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