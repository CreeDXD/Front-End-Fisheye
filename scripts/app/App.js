//coeur du site et implementation des differentes pages de code
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

    // recuperation des données et affichage des photographe dans index 
    async main() {
        const photographersData = await this.photographersApi.getPhotographers()

        photographersData
        .map(photographer => new Photographer(photographer))
        .forEach(photographer => {
            const Template = new PhotographerCard(photographer)
            this.$photographerWrapper.appendChild(Template.createPhotographerCard())        
        })   
         
    }

    // recuperation des données et affichage des photographe dans photographe 
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
        const selectedPhotographe = new Photographer(dataSelectedPhotographe)

        const Template = new HeaderPhotographerCard(selectedPhotographe)
        this.$photographerheaderWrapper.appendChild(Template.createHeaderPhotographerCard())
    }

    // recuperation des données et affichage da la section media,
    //de la section total likes et prix ainsi que l'implementation des fonction
    //lightbox,displaysort et incrementation 
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

        //ajout du nom photographer au modal
        const contacter_moi = document.querySelector('#contacter_moi')
        contacter_moi.innerHTML += '<br>'+name+'<br>'

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
        
        //fonction pour changer l'order par like
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

        //fonction pour changer l'order par Dates
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

        //fonction pour changer l'order par titles
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
        DisplaySort.init()

        //utilise les fonction de tris si l'utilisateurs 'click'
        this.addEventTrisPopularites.addEventListener("click",changeMediaOrderbyLikes);
        this.addEventTrisdates.addEventListener("click", changeMediaOrderbyDates);
        this.addEventTrisTitles.addEventListener("click", changeMediaOrderbyTitles);
        
        //utilise les fonction de tris si l'utilisateurs tape sur 'entrer'
        this.addEventTrisPopularites.addEventListener("keydown",
        e=>{
            if(e.keyCode === 13){
                changeMediaOrderbyLikes()
            }
        });
        
        this.addEventTrisdates.addEventListener("keydown",
        e=>{
            if(e.keyCode ===  13){
                changeMediaOrderbyDates()
            }
        });
        this.addEventTrisTitles.addEventListener("keydown",
        e=>{
            if(e.keyCode === 13){
                changeMediaOrderbyTitles()
            }
        });
    }


}

const app = new App()
