//creation de la lightbox
class lightbox {
    static init(){

        const links = document.querySelectorAll('.photos')
        const gallerys = Array.from(document.querySelectorAll('.media')) 
        const titles = Array.from(document.querySelectorAll('.infoTitle'))

        //recupere la 'source/src' de tout les elements qui ont la class .media
        const galleryAdresses = gallerys.map(gal => gal.getAttribute('src'))

        //recupere la 'value' de tout les elements qui ont la class .infoTitle
        const titlesValue = titles.map(gal => gal.getAttribute('value'))
        links.forEach((element) => {
            const media = element.querySelector('.media')

            media.addEventListener('click', e=> {
                e.preventDefault()
                let infoTitleValue = element.querySelector('.infoTitle').getAttribute('value')
                let imageSrc = element.querySelector('.media').getAttribute('src')
                new lightbox(infoTitleValue,imageSrc,galleryAdresses,titlesValue)
            })

            media.addEventListener('keydown', e=> {
                if(e.keyCode === 13){
                    e.preventDefault()
                    let infoTitleValue = element.querySelector('.infoTitle').getAttribute('value')
                    let imageSrc = element.querySelector('.media').getAttribute('src')
                    new lightbox(infoTitleValue,imageSrc,galleryAdresses,titlesValue)
                }
                
            })
        })  
        

    }
    constructor(title,src,galleryAdresses,titlesValue){
        this.galleryAdresses = galleryAdresses
        this.titlesValue = titlesValue
        this.src = src
        this.element = this.createLighboxCard(title,src)
        this.onKeyDown = this.onKeyDown.bind(this)
        const main = document.querySelector('#main')
        main.appendChild(this.element)
        document.addEventListener('keydown',this.onKeyDown)
    }

    //pour la fermeture et le deplacement clavier
    onKeyDown(e){
        if(e.keyCode === 27){
            this.closeLightbox()
        }else if(e.keyCode === 37){
            this.prev()
        }else if(e.keyCode === 39){
            this.next()
        }
    }

    //fonction pour fermer la lightbox
    closeLightbox(){
        this.element.remove()
        document.removeEventListener('keydown',this.onKeyDown)
    }

    //fonction pour afficher le prochain element dans lightbox
    next(){

        let med = this.element.querySelector('.media')
        let title = this.element.querySelector('.infoTilteLightbox')
        let container = this.element.querySelector('article')
        let videoLightbox = document.createElement('video')
        let imageLightbox = document.createElement('img')
        let src = med.getAttribute('src')
        let i = this.galleryAdresses.findIndex(image => image == src)

        if(i == this.galleryAdresses.length -1){
            i = -1
        }

        title.textContent = this.titlesValue[i+1]

        if(this.galleryAdresses[i+1].slice(-4) == '.mp4'){
            container.replaceChild(videoLightbox, this.element.querySelector('.media'))
            videoLightbox.setAttribute('src',this.galleryAdresses[i+1])   
            videoLightbox.setAttribute('controls','controls') 
            videoLightbox.setAttribute('class','media')
        }
        else{
            container.replaceChild(imageLightbox, this.element.querySelector('.media'))
            imageLightbox.setAttribute('src',this.galleryAdresses[i+1])
            imageLightbox.setAttribute('class','media') 
        }

    }

    //fonction pour afficher l'element davant dans lightbox
    prev(){
        let title = this.element.querySelector('.infoTilteLightbox')
        let med = this.element.querySelector('.media')
        let container = this.element.querySelector('article')
        let videoLightbox = document.createElement('video')
        let imageLightbox = document.createElement('img')
        let src = med.getAttribute('src')
        let i = this.galleryAdresses.findIndex(image => image == src)

        if(i == 0){
            i = this.galleryAdresses.length
        }

        title.textContent = this.titlesValue[i-1]

        if(this.galleryAdresses[i-1].slice(-4) == '.mp4'){
            container.replaceChild(videoLightbox, this.element.querySelector('.media'))
            videoLightbox.setAttribute('src',this.galleryAdresses[i-1])   
            videoLightbox.setAttribute('controls','controls') 
            videoLightbox.setAttribute('class','media')
        }
        else{
            container.replaceChild(imageLightbox, this.element.querySelector('.media'))
            imageLightbox.setAttribute('src',this.galleryAdresses[i-1])
            imageLightbox.setAttribute('class','media') 
        }        
    }

    //creation de la lightbox et ses éléments
    createLighboxCard(title,src) {
        
        let med;

        if(src.slice(-4) == '.mp4'){
            med = document.createElement( 'video' );
            med.setAttribute("controls","controls");
        }       
        else{
            med = document.createElement( 'img' );
        }  
        med.setAttribute("src", src);
        med.setAttribute('class','media')       

        const warpperLightbox = document.createElement('section')  
        warpperLightbox.setAttribute('class','lightbox_content')

        const contentLightbox = document.createElement('article')
        contentLightbox.setAttribute('class','lightbox')
        
        const chevronGauche = document.createElement('i')
        chevronGauche.setAttribute('class','fa-sharp fa-solid fa-chevron-left fa-2xl')

        const chevronDroit = document.createElement('i')
        chevronDroit.setAttribute('class','fa-sharp fa-solid fa-chevron-right fa-2xl')

        const closeButton = document.createElement('i')
        closeButton.setAttribute('class','fa-sharp fa-solid fa-xmark fa-2xl')
        
        const infoTitle = document.createElement('p');
        infoTitle.setAttribute('class', 'infoTilteLightbox')
        infoTitle.textContent = title;
        
        contentLightbox.appendChild(chevronGauche)
        contentLightbox.appendChild(med)
        contentLightbox.appendChild(chevronDroit)
        contentLightbox.appendChild(closeButton)
        warpperLightbox.appendChild(contentLightbox)
        warpperLightbox.appendChild(infoTitle)

        closeButton.addEventListener('click',this.closeLightbox.bind(this))
        chevronDroit.addEventListener('click',this.next.bind(this))
        chevronGauche.addEventListener('click',this.prev.bind(this))
        
        return warpperLightbox
    }
}
