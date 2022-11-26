class App {
    constructor() {
        this.$photographerWrapper = document.querySelector('.photographer_section')
        this.$mediaWrapper = document.querySelector('.photographe_main')
        this.$photographerheaderWrapper = document.querySelector('.photograph-header')
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
        
        let name
        photographersData.forEach((photographe) =>{
            if(photographe.id == this._idPhotographer){
                name = photographe.name;
            }       
        })

        mediasData.forEach(
            element => {
                if(element.photographerId == this._idPhotographer){
                    const selectedMedia = new Media(element,name)
                    const Template = new MediaCard(selectedMedia)
                    this.$mediaWrapper.appendChild(Template.createMediaCard())                    
                }
            }
        )

       

    }
}

const app = new App()
