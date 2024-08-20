

// (Extraindo o desenho)

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
// alterando set stars
// vai chamar um médodo privado #render()
    set stars(novo)
    {
        //foi embora todo o código que ele tinha
        //novo:
        const novoValor = Math.max(Math.min(novo*1,5),1)
        this.#stars = novoValor
        this.#render()
    }
//-------------------------------------------------------------------

#render()
{
    this.innerHTML = `<style>
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
    this.appendChild(container)
}
// Esse método vai ser responsável por desenhar o componente, limpando a estrutura 
// do documento com um texto com o estilo

// Depois cria uma nova hierarquia de componentes com um div da classe conteiner
// e cada estrela com seu proprio div da classe star

//funcional, mas tem 1 problema: O que acontece se inserirmos em uma página
// que usa o mesmo nome de classes para conteiner e star

//por isso vamos usar o shadow DOM


//-------------------------------------------------------------------
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