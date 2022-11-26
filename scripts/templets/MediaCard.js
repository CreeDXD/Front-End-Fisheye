class MediaCard{
    constructor(media) {
        this._media = media
    }

    createMediaCard() {
        let med
        if(this._media.video.slice(-4) == '.mp4'){
            med = document.createElement( 'video' );
            med.setAttribute("src", this._media.video);
            med.setAttribute("controls","controls");        
        }       
        else{
            med = document.createElement( 'img' );
            med.setAttribute("src", this._media.image);
        }               
        
        const infoTitle = document.createElement('p');
        infoTitle.textContent = this._media.title;
        
        const infoLikes = document.createElement('div');
        infoLikes.setAttribute("class","infoLikes");

        const numLikes = document.createElement('p');
        numLikes.textContent = this._media.likes;   
        
        const infoLikesTitles = document.createElement('div');
        infoLikesTitles.setAttribute("class","infoLikesTitles");

        const component = document.createElement('article');
        component.setAttribute("class", "photos");      

        infoLikes.appendChild(numLikes);
        infoLikes.innerHTML += '<i class="fa-sharp fa-solid fa-heart"></i>';
        
        component.appendChild(med);

        infoLikesTitles.appendChild(infoTitle);
        infoLikesTitles.appendChild(infoLikes);
        component.appendChild(infoLikesTitles);
        return component
    }
}