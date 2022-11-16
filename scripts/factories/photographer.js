function photographerFactory(data) {
    const { name, portrait,city,country,price,id } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const lien = document.createElement('a');

        lien.setAttribute("href","photographer.html?id="+id );
        const article = document.createElement( 'article' );
        article.setAttribute('arial-label',"carte de "+name);

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", 'portrait de '+name);
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const villePays = document.createElement('p');
        villePays.textContent = city +','+country;
        const prix = document.createElement('p');
        prix.textContent = price;
        article.appendChild(lien);

        lien.appendChild(img);
        lien.appendChild(h2);
        article.appendChild(villePays);
        article.appendChild(prix);
        console.log(name, portrait,city,country,price,id);
        return (article);
    }
    return { getUserCardDOM }
}