

//              (Adicionando conteúdo ao star rating)

export default class StarRating extends HTMLElement
{

    constructor()
    {
        super()
        console.log("Star Rating created!")
        let stars = 3
        this.textContent = " "
        for (let i = 0 ; i<stars ;i++)
        {
            this.textContent += "⭐️"
        }
    }
}

customElements.define("star-rating", StarRating)