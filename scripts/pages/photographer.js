//Mettre le code JavaScript lié à la page photographer.html
var parameters = location.search.substring(4);

async function displayDataPhotographe(Photographers) {    
    
    const photographersSection = document.querySelector(".photograph-header");
    // let photographe = Photographers[i].id recuperation du premier id pour 
    let name;
    let city;
    let id;
    let contente;
    let portrait;
    
Photographers.forEach((Photog) => {
    if(Photog.id == parameters){
        name = Photog.name;
        city = Photog.city;
        id = Photog.id;   
        country = Photog.country;
        tagline = Photog.tagline;
        portrait = Photog.portrait
        contente = name+' '+city+ ' '+id; 
    }
});
    const insidePhotosection = document.createElement('article');
    const infoName = document.createElement('h2');
    const infoCityCountry = document.createElement('h3');
    const infoTagline = document.createElement('p');
    const infoPortrait = document.createElement('img');

    const picture = `assets/photographers/${portrait}`;
    infoPortrait.setAttribute("src", picture);
    photographersSection.appendChild(infoPortrait);

    photographersSection.appendChild(insidePhotosection);

    infoName.textContent = name;
    insidePhotosection.appendChild(infoName);

    infoCityCountry.textContent = city+' '+country;
    insidePhotosection.appendChild(infoCityCountry);


    infoTagline.textContent = tagline;
    insidePhotosection.appendChild(infoTagline);

    const button = document.querySelector(".contact_button");

    photographersSection.insertBefore(insidePhotosection, button);
};
