class App {
    constructor() {
        this.$photographerWrapper = document.querySelector('.photographer_section')
        this.$mediaWrapper = document.querySelector('.photographe_main')
        this.$photographerheaderWrapper = document.querySelector('.photograph-header')
        this.$likePriceWrapper = document.querySelector('.likePrice')
        this._idPhotographer = location.search.substring(4);
        this.photographersApi = new PhotographerApi('/data/photographers.json')
    }

    async main() {
        const photographersData = await this.photographersApi.getPhotographers()

        photographersData
        .map(photographer => new Photographer(photographer))
        .forEach(photographer => {
            const Template = new PhotographerCard(photographer)
            this.$photographerWrapper.appendChild(Template.createPhotographerCard())        
        })   
         
    }

    async pagePhotographerHeader() {
        const photographersData = await this.photographersApi.getPhotographers()
        
        let dataSelectedPhotographe

        photographersData.forEach(
            element => {
                if(element.id == this._idPhotographer){
                    dataSelectedPhotographe = element
                }   
            }
        )
        const selectedPhotographe = new SelectedIdPhotographer(dataSelectedPhotographe)

        const Template = new HeaderPhotographerCard(selectedPhotographe)
        this.$photographerheaderWrapper.appendChild(Template.createHeaderPhotographerCard()) 
    }

    async pagePhotographerMedia() {
        const mediasData = await this.photographersApi.getMedias()
        const photographersData = await this.photographersApi.getPhotographers()
        
        // récupération du nom pour le chemin de l'image et de la vidéo
        let name
        let price
        photographersData.forEach((photographe) =>{
            if(photographe.id == this._idPhotographer){
                name = photographe.name;
                price = photographe.price;
            }       
        })

        let totalLikes= 0
        mediasData.forEach((media) => {
            if(media.photographerId == this._idPhotographer){
                totalLikes += media.likes
            }
        })

        mediasData.forEach(
            element => {
                if(element.photographerId == this._idPhotographer){

                    // affichage des medias (image et vidéo)
                    const selectedMedia = new Media(element,name)
                    const Template = new MediaCard(selectedMedia)
                    this.$mediaWrapper.appendChild(Template.createMediaCard())                    
                }
            }
        )
        // affichage de prix et total like dans la section likesPirce
        const TemplateLikePrice = new LikePriceCard(totalLikes,price)
        this.$likePriceWrapper.appendChild(TemplateLikePrice.createLikePriceCard())
    }

}

const app = new App()
