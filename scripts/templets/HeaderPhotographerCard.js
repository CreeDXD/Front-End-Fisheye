//creation du profil détailé du photographe dans la page Photographe
class HeaderPhotographerCard {
    constructor(photographer) {
        this._photographer = photographer
    }

    createHeaderPhotographerCard() {
        const infoPhotographe = document.createElement('article');
        infoPhotographe.setAttribute("aria-label","information du photographe")


        const infoName = document.createElement('h2');
        infoName.textContent = this._photographer.name;

        const infoCityCountry = document.createElement('h3');
        infoCityCountry.textContent = this._photographer.city+' '+this._photographer.country;

        const infoTagline = document.createElement('p');
        infoTagline.textContent = this._photographer.tagline;

        const infoPortrait = document.createElement('img');
        infoPortrait.setAttribute("src", this._photographer.portrait);
        infoPortrait.setAttribute("alt","portrait de " + this._photographer.name)

        const componentHeader = document.createElement('div');
        componentHeader.setAttribute("class","componentHeader");
        const button = document.querySelector(".contact_button");


        infoPhotographe.appendChild(infoName);
        infoPhotographe.appendChild(infoCityCountry);
        infoPhotographe.appendChild(infoTagline);
        componentHeader.appendChild(infoPhotographe);
        componentHeader.appendChild(button);
        componentHeader.appendChild(infoPortrait);
        return componentHeader
    }
}