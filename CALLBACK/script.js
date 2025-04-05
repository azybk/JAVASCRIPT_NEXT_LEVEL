$('.btn-search-movie').on('click', function() {

    $.ajax({
        url: '' + $('.text-search-movie').val(),
        success: results => {
            const movies = results.Search;
            let cards = '';
            
            movies.forEach(m => {
                cards += showMovie(m);
            })
    
            $('.movie-list').html(cards);
    
            $('.btn-movie-details').on('click', function() {
                const imdbID = $(this).attr("data-imdbid");
    
                $.ajax({
                    url: '' + imdbID,
                    success: detail => {
                        const modalDetail = showDetail(detail);
    
                        $('.modal-body').html(modalDetail);
                    },
                    error: e => {
                        console.log(e.responseText);
                    }
                })
            })
        },
        error: e => {
            console.log(e.responseText);
        }
    })
    
});

function showMovie(m) {
    return `<div class="col-md-3 my-3">
                <div class="card">
                    <img src=${m.Poster} class="card-img-top">

                    <div class="card-body">
                        <h5 class="card-title">${m.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>                                
                        
                        <a href="#" class="btn btn-primary btn-movie-details" data-bs-toggle="modal" data-bs-target="#movieModal" data-imdbID="${m.imdbID}">
                            Show Details
                        </a>
                    </div>
                </div>
            </div>`;
}

function showDetail(m) {
    return `<div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${m.Poster}" class="img-fluid">
                    </div>

                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item"><strong>${m.Title} (${m.Year})</strong></li>
                            <li class="list-group-item"><strong>Director : </strong>${m.Director}</li>                                   
                            <li class="list-group-item"><strong>Writer : </strong>${m.Writer}</li>                                   
                            <li class="list-group-item"><strong>Actors : </strong>${m.Actors}</li>                                   
                            <li class="list-group-item"><strong>Plot : </strong><br/>${m.Plot}</li>                                   
                        </ul>
                    </div>
                </div>
            </div>`;      
}
