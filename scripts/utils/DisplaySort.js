//creation de la section de tri pour afficher les medias 
//avec les fonctions de deroulement/enroulement

class DisplaySort {
    static init(){
        const titles = document.querySelector('.tris_photo nav ul li:nth-of-type(3)')
        const dates = document.querySelector('.tris_photo nav ul li:nth-of-type(2)')
        const chevronBas = document.querySelector('.fa-chevron-down')
        const chevronHaut = document.querySelector('.fa-chevron-up')
        chevronHaut.style.display = "none";

        chevronBas.addEventListener('click',e => {
            //e.stopPropagation permet de ne pas propager le click 
            //sur les elements derriere l'element cliké
            e.stopPropagation();
            new DisplaySort(titles,dates,chevronBas,chevronHaut)
        })
        chevronBas.addEventListener('keydown',e => {
            if(e.keyCode === 13) {
                e.stopPropagation();
            new DisplaySort(titles,dates,chevronBas,chevronHaut)
            }
        })
    }

    constructor(titles,dates,chevronBas,chevronHaut){
        titles.style.display = "flex";
        dates.style.display = "flex";
        chevronBas.style.display = "none";
        chevronHaut.style.display = "flex";
        chevronHaut.addEventListener('click',e => {
            e.stopPropagation();
            titles.style.display = "none";
            dates.style.display = "none";
            chevronBas.style.display = "flex";
            chevronHaut.style.display = "none";
        })
        chevronHaut.addEventListener('keydown',e =>
        {
            if(e.keyCode === 13){
                e.stopPropagation();
                titles.style.display = "none";
                dates.style.display = "none";
                chevronBas.style.display = "flex";
                chevronHaut.style.display = "none";
            }
        })
    }
}