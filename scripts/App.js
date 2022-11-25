class App {
    constructor() {
        this.$photographerWrapper = document.querySelector('.photographer_section')
        this.photographersApi = new PhotographerApi('/data/photographers.json')
    }

    async main() {
        const mediasData = await this.photographersApi.getMedias()
        const photographersData = await this.photographersApi.getPhotographers()

        photographersData
        .map(photographer => new Photographer(photographer))
        .forEach(photographer => {
            const Template = new PhotographerCard(photographer)
            this.$photographerWrapper.appendChild(Template.createPhotographerCard())        
        })   
        
        // mediasData
        // .map(media => new OldMovie(media))
        // .forEach(media => {
        //     const Template = new MovieCard(media)
        //     this.$photographerWrapper.appendChild(Template.createMovieCard())        
        // })   
    }
}

const app = new App()
app.main()
