//creation de la section total likes et prix du photographe
class LikePriceCard {
    constructor(totalLikes,price) {
        this._totalLikes = totalLikes
        this._price = price
    }
    createLikePriceCard() {
        const componentLikePrice = document.createElement('section')
        componentLikePrice.setAttribute("class","likePrice")
        componentLikePrice.setAttribute("role","info")
        componentLikePrice.setAttribute("aria-label","total likes et price")

        const infoTotalLikes = document.createElement('p')
        infoTotalLikes.setAttribute('value',this._totalLikes)
        infoTotalLikes.setAttribute('class','infoTotalLikes')
        infoTotalLikes.textContent = this._totalLikes
        infoTotalLikes.innerHTML += '<i class="fa-sharp fa-solid fa-heart"></i>'


        const infoprice = document.createElement('p')
        infoprice.setAttribute('value',this._price)
        infoprice.textContent = this._price+'€ / jours'

        componentLikePrice.appendChild(infoTotalLikes)
        componentLikePrice.appendChild(infoprice)
        
        return componentLikePrice
    }
}