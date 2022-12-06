class App {
    constructor() {
        this.$photographerWrapper = document.querySelector('.photographer_section')
        this.$mediaWrapper = document.querySelector('.photographe_main')
        this.$photographerheaderWrapper = document.querySelector('.photograph-header')
        this.$likePriceWrapper = document.querySelector('#main')
        this._idPhotographer = location.search.substring(4);
        this.photographersApi = new PhotographerApi('/data/photographers.json')
        this.addEventTrisPopularites = document.querySelector('.popularites')
        this.addEventTrisdates = document.querySelector('.dates')
        this.addEventTrisTitles = document.querySelector('.titles')

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

        // récupération du nombre totla de likes
        let totalLikes= 0
        let tabMedia = []
        let likeTabMedia = []
        let titleTabMedia = []
        let compte = 0

        mediasData.forEach((media) => {
            if(media.photographerId == this._idPhotographer){
                totalLikes += media.likes
                tabMedia[compte] = media
                likeTabMedia[compte] = media
                titleTabMedia[compte] = media
                compte++
            }
        })
        
        tabMedia.forEach(
            element => {
                // affichage des medias (image et vidéo)
                const selectedMedia = new Media(element,name)
                const Template = new MediaCard(selectedMedia)
                this.$mediaWrapper.appendChild(Template.createMediaCard())
            }
        )

        // affichage de prix et total like dans la section likesPirce
        const TemplateLikePrice = new LikePriceCard(totalLikes,price)
        this.$likePriceWrapper.appendChild(TemplateLikePrice.createLikePriceCard())
        

        function changeMediaOrderbyLikes(){
            // reset du nombre total de like dans la section infoTotalLikes
            let elementTotalLikes = document.querySelector('.infoTotalLikes').getAttribute('value')
            let totalLikes = document.querySelector('.infoTotalLikes')
            totalLikes.innerHTML = elementTotalLikes+'<i class="fa-sharp fa-solid fa-heart"></i>'

            const newLikeTabMedia = trisMediaFonctionByLikes(likeTabMedia)            
            let toutLesImages = document.querySelectorAll('.photos')

            for(const element of toutLesImages){
                element.remove()
            }

            newLikeTabMedia.forEach(
                element => {
                    // affichage des medias (image et vidéo)
                    const mediaWrappertest = document.querySelector('.photographe_main')
                    const selectedMedia = new Media(element,name)
                    const Template = new MediaCard(selectedMedia)
                    mediaWrappertest.appendChild(Template.createMediaCard())

                }
            )
            lightbox.init()
            incrementation.init()

        }

        function changeMediaOrderbyDates(){   

            // reset du nombre total de like dans la section infoTotalLikes
            let elementTotalLikes = document.querySelector('.infoTotalLikes').getAttribute('value')
            let totalLikes = document.querySelector('.infoTotalLikes')
            totalLikes.innerHTML = elementTotalLikes+'<i class="fa-sharp fa-solid fa-heart"></i>'

            let toutLesImages = document.querySelectorAll('.photos')
            for(const element of toutLesImages){
                element.remove()
            }
            tabMedia.forEach(
                element => {
                    // affichage des medias (image et vidéo)
                    const mediaWrappertest = document.querySelector('.photographe_main')
                    const selectedMedia = new Media(element,name)
                    const Template = new MediaCard(selectedMedia)
                    mediaWrappertest.appendChild(Template.createMediaCard())

                }
            )
            lightbox.init()
            incrementation.init()
        }

        function changeMediaOrderbyTitles(){

            // reset du nombre total de like dans la section infoTotalLikes
            let elementTotalLikes = document.querySelector('.infoTotalLikes').getAttribute('value')
            let totalLikes = document.querySelector('.infoTotalLikes')
            totalLikes.innerHTML = elementTotalLikes+'<i class="fa-sharp fa-solid fa-heart"></i>'
            
            let newTitleTabMedia = trisMediaFonctionByTitles(titleTabMedia)

            let toutLesImages = document.querySelectorAll('.photos')
            for(const element of toutLesImages){
                element.remove()
            }

            newTitleTabMedia.forEach(
                element => {
                    // affichage des medias (image et vidéo)
                    const mediaWrappertest = document.querySelector('.photographe_main')
                    const selectedMedia = new Media(element,name)
                    const Template = new MediaCard(selectedMedia)
                    mediaWrappertest.appendChild(Template.createMediaCard())

                }
            )
            lightbox.init()
            incrementation.init()


        }
        lightbox.init()
        incrementation.init()


        this.addEventTrisPopularites.addEventListener("click",changeMediaOrderbyLikes);
        this.addEventTrisdates.addEventListener("click", changeMediaOrderbyDates);
        this.addEventTrisTitles.addEventListener("click", changeMediaOrderbyTitles);
        // function lightbox(){
        //     let toutLesImages = document.querySelectorAll('.media')
        //     let lightbox_content = document.querySelector('#main')
        //     tabMedia.forEach(element => {
        //         const selectedMedia = new Media(element,name)
        //         const Templatelightbox = new LightboxCard(selectedMedia)
        //         lightbox_content.appendChild(Templatelightbox.createLighboxCard())

        //     })
        //     const closebutton = document.querySelector('.fa-xmark')

        //     function openLightbox(){
        //         const lightbox = document.querySelector(".lightbox_content");
        //         lightbox.style.display = "flex";
                
        //     }

        //     toutLesImages.forEach(element => {
        //         element.addEventListener("click",openLightbox)
        //     })

        //     function closeLightbox(){
        //         const lightbox = document.querySelector(".lightbox_content");
        //         lightbox.style.display = "none";
        //     }

        //     closebutton.addEventListener('click',closeLightbox)

            




            
        // }
        // lightbox()
    }


}

const app = new App()
