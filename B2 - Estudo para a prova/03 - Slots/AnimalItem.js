
export default class AnimalItem extends HTMLElement
{
    #shadow 
    constructor()
    {
        super()
    }
 
    connectedCallback()
    {
        this.#shadow = this.attachShadow({mode:closed})
        const animalTemplate = document.querySelector("#animal-tamplate").content 
        const animalElement = animalTemplate.cloneNode(true)

        animalElement.querySelector(".animal>div").textContent = "🐦"
        this.#shadow.append(animalElement)
    }
    
}

customElements.define("animal-item", AnimalItem)