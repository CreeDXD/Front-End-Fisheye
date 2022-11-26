class MediaCard{
    constructor(media) {
        this._media = media
    }

    createMediaCard() {
        // const $wrapper = document.createElement('article')
        // $wrapper.classList.add('photographe_main')

        // const mediaCard = `
        // <img
        //     alt="${this._media.title}"
        //     src="${this._media.image}"
        // />
        // <p>${this._media.title}</p>
        // <div>
        //     <p>${this._media.likes}€/jour</p>  
        // </div>                
        // `
        
        // $wrapper.innerHTML = mediaCard
        const vid = document.createElement( 'video' );
        vid.setAttribute("src", this._media.video);
        vid.setAttribute("controls","controls");

        const img = document.createElement( 'img' );
        img.setAttribute("src", this._media.image);

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
        
        // if(this._media.video.slice(-4) == '.mp4'){
        //     component.appendChild(vid);
        // }       
        // else{
        //     component.appendChild(img);
        // }
        component.appendChild(img);

        infoLikesTitles.appendChild(infoTitle);
        infoLikesTitles.appendChild(infoLikes);
        component.appendChild(infoLikesTitles);
        return component
    }
}