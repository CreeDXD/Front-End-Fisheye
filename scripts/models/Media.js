class Media {
    constructor(data,name){
        this._name = name
        this._id = data.id
        this._photographerId = data.photographerId
        this._title = data.title
        this._image = data.image
        this._likes = data.likes
        this._date = data.date
        this._price = data.price
        this._video = data.video

    }
    get video(){ 
        return `/assets/photographers/${this._name}/${this._video}`
    }
    get name(){
        return this._name
    }
    get id(){
        return this._id
    }

    get photographerId(){
        return this._photographerId
    }
    
    get title(){
        return this._title
    }
    
    get image(){
        return `/assets/photographers/${this._name}/${this._image}`
    }
    get likes(){
        return this._likes
    }
    get date(){
        return this._tagline
    }
    get price(){
        return this._price
    }
}
    