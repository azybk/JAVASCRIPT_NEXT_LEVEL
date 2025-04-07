const btnSearch = document.querySelector('.btn-search-movie');
btnSearch.addEventListener('click', function() {
    
    const keyword = document.querySelector('.text-search-movie');
    fetch('' + keyword.value)
        .then(response => response.json())
        .then(results => {
            const movies = results.Search;
            let cards = '';
        
            movies.forEach(m => cards += showMovie(m));  
            
            const movieList = document.querySelector('.movie-list');
            movieList.innerHTML = cards;

            const btnMovieDetail = document.querySelectorAll('.btn-movie-details')
            btnMovieDetail.forEach(btn => {
                btn.addEventListener('click', function() {
                    const imdbID = this.dataset.imdbid;
                    
                    fetch('' + imdbID)
                        .then(response => response.json())
                        .then(detail => {
                            const modalDetail = showDetail(detail);
                            const modalBody = document.querySelector('.modal-body');
                            modalBody.innerHTML = modalDetail
                        })
                })
            })
        });

})

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
