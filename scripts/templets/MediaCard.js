//creation des photos et video de la page photogrphe
class MediaCard{
    constructor(media) {
        this._media = media
    }

    createMediaCard() {
        let med
        // condition pour verifier si le media est une photo ou une video
        //slice(-4) recupère les 4 derniers caractère de this._media et compare avec '.mp4'
        
        if(this._media.video.slice(-4) == '.mp4'){
            med = document.createElement( 'video' );
            med.setAttribute("src", this._media.video);
            med.setAttribute("controls","controls");
            med.setAttribute('class','media')  
            med.setAttribute('alt','video de '+ this._media.title)
            med.setAttribute('aria-label','video - tapez entre pour ouvrir la lightbox')

        }       
        else{
            med = document.createElement( 'img' );
            med.setAttribute("src", this._media.image);
            med.setAttribute('class','media')   
            med.setAttribute('alt','photo de ' + this._media.title)
            med.setAttribute('aria-label','image - tapez entre pour ouvrir la lightbox')
    

        }               
        med.setAttribute('tabindex','1')


        const infoTitle = document.createElement('p');
        infoTitle.setAttribute('class','infoTitle')
        infoTitle.setAttribute('value', this._media.title);
        infoTitle.textContent = this._media.title;
        
        const infoLikes = document.createElement('div');
        infoLikes.setAttribute("class","infoLikes");

        const numLikes = document.createElement('p');
        numLikes.setAttribute('class','numLikes')
        numLikes.textContent = this._media.likes;   
        
        const infoLikesTitles = document.createElement('div');
        infoLikesTitles.setAttribute("class","infoLikesTitles");

        const component = document.createElement('article');
        component.setAttribute("class", "photos");      
        component.setAttribute("role", "content");      

        infoLikes.appendChild(numLikes);
        infoLikes.innerHTML += '<i tabindex ="1" class="fa-sharp fa-solid fa-heart"></i>';
        
        component.appendChild(med);

        infoLikesTitles.appendChild(infoTitle);
        infoLikesTitles.appendChild(infoLikes);
        component.appendChild(infoLikesTitles);

        return component
    }
}