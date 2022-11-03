function photographerFactory(data) {
    const { name, portrait,city,country,price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const villePays = document.createElement('p');
        villePays.textContent = city +','+country;
        const prix = document.createElement('p');
        prix.textContent = price;
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(villePays);
        article.appendChild(prix);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}