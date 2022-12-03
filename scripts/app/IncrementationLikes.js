class incrementation{
    static init(){


        const containerlikes = document.querySelectorAll('.fa-heart')

        containerlikes.forEach(element => 
            element.addEventListener('click', e => {
                let elementTotalLikes = document.querySelector('.infoTotalLikes')
                let totalLikes = document.querySelector('.infoTotalLikes').textContent

                let nbLikes = element.parentElement.textContent
                let containerElementLikes = element.parentElement
                let elementLikes = containerElementLikes.querySelector('.numLikes')
                new incrementation(totalLikes,nbLikes,elementLikes,elementTotalLikes)
            })
        )
    }

    constructor(totalLikes,nbLikes,elementLikes,elementTotalLikes){
        this.elementTotalLikes = 
        elementTotalLikes.innerHTML = ++totalLikes+'<i class="fa-sharp fa-solid fa-heart"></i>'
        elementLikes.textContent = ++nbLikes
}

}
