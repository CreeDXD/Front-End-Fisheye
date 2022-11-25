class App {
    constructor() {
        this.$photographerWrapper = document.querySelector('.photographer_section')
        this.$mediaWrapper = document.querySelector('#main')
        this.$photographerheaderWrapper = document.querySelector('.photograph-header')
        this._idPhotographer = location.search.substring(4);
        this.photographersApi = new PhotographerApi('/data/photographers.json')
    }

    async main() {
        const mediasData = await this.photographersApi.getMedias()
        const photographersData = await this.photographersApi.getPhotographers()

        console.log(photographersData
            .map(photographer => new Photographer(photographer)))
        photographersData
        .map(photographer => new Photographer(photographer))
        .forEach(photographer => {
            const Template = new PhotographerCard(photographer)
            this.$photographerWrapper.appendChild(Template.createPhotographerCard())        
        })   
         
    }

    async pagePhotographer() {
        const mediasData = await this.photographersApi.getMedias()
        const photographersData = await this.photographersApi.getPhotographers()
        let test;
        photographersData.forEach(
            element => {
                if(element.id == this._idPhotographer){
                    console.log(element)
                    test = element
                }   
            }
        )
        const selectedPhotographe = new SelectedIdPhotographer(test)

        const Template = new HeaderPhotographerCard(selectedPhotographe)
        this.$photographerheaderWrapper.appendChild(Template.createHeaderPhotographerCard())        

        // photographersData
        // .map(photographer => new Photographer(photographer))
        // .forEach(photographer => {
        //     const Template = new HeaderPhotographerCard(photographer)
        //     this.$photographerheaderWrapper.appendChild(Template.createHeaderPhotographerCard())        
        // })   
        
        mediasData
        .map(media => new OldMovie(media))
        .forEach(media => {
            const Template = new MovieCard(media)
            this.$photographerWrapper.appendChild(Template.createMovieCard())        
        })   
    }
}

const app = new App()
