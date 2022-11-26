class LikePriceCard {
    constructor(totalLikes,price) {
        this._totalLikes = totalLikes
        this._price = price
    }
    createLikePriceCard() {
        const componentLikePrice = document.querySelector('.likePrice')

        const infoTotalLikes = document.createElement('p')
        infoTotalLikes.textContent = this._totalLikes
        infoTotalLikes.innerHTML += '<i class="fa-sharp fa-solid fa-heart"></i>'


        const infoprice = document.createElement('p')
        infoprice.textContent = this._price+'€ / jours'

        componentLikePrice.appendChild(infoTotalLikes)
        componentLikePrice.appendChild(infoprice)
        
        return componentLikePrice
    }
}