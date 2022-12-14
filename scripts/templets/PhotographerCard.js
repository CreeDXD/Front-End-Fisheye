//creation des Portraits de chaque Photographes dans l'index
class PhotographerCard {
    constructor(photographer) {
        this._photographer = photographer
    }

    createPhotographerCard() {
        const $wrapper = document.createElement('article')
        $wrapper.classList.add('photographe')

        const photographerCard = `
            
        <a href="photographer.html?id=${this._photographer.id}">
            <img
                alt=" portrait de ${this._photographer.name}"
                src="${this._photographer.portrait}"
                aria-label="portrait - Tapez entrée pour aller à la page du photographe"
            >
            <h2>${this._photographer.name}</h2>
        </a>
            
        <p>${this._photographer.city}${this._photographer.country}</p>
        <p>${this._photographer.price}€/jour</p>            
        `
        
        $wrapper.innerHTML = photographerCard
        return $wrapper
    }
}