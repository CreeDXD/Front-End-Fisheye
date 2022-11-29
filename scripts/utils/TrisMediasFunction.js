function trisMediaFonctionByLikes(data){
    data.sort(function(a,b){
        console.log(a.title)
        return b.likes - a.likes
    })
    return data
}

// function trisMediaFonctionByDates(data){
//     data.sort(function(a,b){
//         return b.date - a.date
//     })

//     return data
// }

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
