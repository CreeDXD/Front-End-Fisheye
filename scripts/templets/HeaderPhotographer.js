class PhotographerCard {
    constructor(photographer) {
        this._photographer = photographer
    }

    createHeaderPhotographerCard() {
        const $wrapper = document.createElement('article')
        $wrapper.classList.add('photographe')

        const photographerCard = `
            
        <a href="photographer.html?id=${this._photographer.id}">
            <img
                alt="${this._photographer.name}"
                src="${this._photographer.portrait}"
            />
            <h2>${this._photographer.name}</h2>
        </a>
            
        <p>${this._photographer.city}${this._photographer.country}</p>
        <p>${this._photographer.price}€/jour</p>            
        `
        
        $wrapper.innerHTML = photographerCard
        return $wrapper
    }
}