//creation des fonctions pour trier pars likes et pars titles

function trisMediaFonctionByLikes(data){
    data.sort(function(a,b){
        return b.likes - a.likes
    })
    return data
}

function trisMediaFonctionByTitles(data){
    data.sort(function(a,b){
        if ( a.title < b.title ){
            return -1;
          }
          if ( a.title > b.title ){
            return 1;
          }        

    })
    return data
}
