function fetchApi(){
    $('form#add_systemgoal .error').remove();
    var formdata = $('form#add_systemgoal').serialize();
    $.ajax({
        type: 'GET',
        url: 'https://api.movie.com.uy/api/shows/rss/data',
        crossDomain: true,
        data: formdata}
    ).done(function(data) {
        displayFilms(data.contentCinemaShows);
    }).fail(function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus);
    });
}

function displayFilms(data){
    var found = false;
    var output = '';
    for(movie of data){
        console.log(movie);
        if(filterCinema(movie)){
            output += `
                <div class="movie">
                    <img src= '${movie.posterURL}'>
                </div>
            `;
        }
    }
    document.getElementById("movies").innerHTML = output;
}

function filterCinema(movie){
    for(contentCinemaShows of movie.cinemaShows){
        if (contentCinemaShows.cinema === document.getElementById("cinemaSelect").value || document.getElementById("cinemaSelect").value == ''){
            return true;
        }
       
    }
    return false;
}