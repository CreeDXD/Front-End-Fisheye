class SelectedIdPhotographer {
    constructor(element){        
        this._name = element.name
        this._city = element.city
        this._country = element.country
        this._tagline = element.tagline
        this._price = element.price
        this._portrait = element.portrait
        this._id = element.id
        
    }
    
    get id(){
        return this._id
    }

    get name(){
        return this._name
    }
    
    get portrait(){
        return `/assets/photographers/Photographers_ID_Photos/${this._portrait}`
    }
    
    get city(){
        return this._city
    }
    get country(){
        return this._country
    }
    get tagline(){
        return this._tagline
    }
    get price(){
        return this._price
    }  
}
    