var omdb = {
    getMovie: function(options, callback) {
        app.ajaxRequest(options, function(response){
            if(typeof (options.search) !== "undefined") {
                if(response.Response === "True") {
                    callback(response.Search);
                } else {
                    alert(response.Error);
                }
            } else {
                callback(response);
            }
        });
    },

    getMovieById: function(element){
        omdb.getMovie({
            id: element.getAttribute('imdb-id')
        }, function(data){
            ui.showDetail(data);
        });
    },

    searchMovie: function(keyword) {
        omdb.getMovie({
            search: keyword
        }, function(data){
            ui.sendMovie(data);
        });
    },

    getLastSearchMovies: function() {
        var lastSearch = sessionStorage.getItem(app.selector.lastSearchKey);
        
        if(lastSearch) {

            lastSearch = JSON.parse(lastSearch);

            app.selector.lastSearchMovies.classList.remove('hidden');

            for(var i = 0; i < lastSearch.length; i++) {
                omdb.getMovie({
                    search: lastSearch[i]
                },function(data){
                    ui.sendLastSearchMovies(data, lastSearch[i]);
                });
            }
        }
    }
};