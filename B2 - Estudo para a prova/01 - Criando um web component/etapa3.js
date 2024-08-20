

//              (usando getters e setters)

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
}

customElements.define("star-rating", StarRating)