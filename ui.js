var ui = {
    sendMovie: function(data){
        for(var i = 0; i < data.length; i++) {
            app.selector.searchMovies.innerHTML += template.card(data[i]);
        }
    },

    showDetail: function(movie) {
        document.body.innerHTML += template.modal(template.detail(movie));
    },

    sendLastSearchMovies: function(movies, key){
        app.selector.lastSearchMovies.innerHTML += '<h4 class="text-2xl mb-3">'+ key +'</h4>' +
        '<div class="md:flex md:flex-wrap mb-5" search-text="'+ key +'"></div>';

        for(var i = 0; i < movies.length; i++) {
            var movie = movies[i];

            document.querySelector('[search-text="'+ key +'"]').innerHTML += template.card(movie);
        }
    },

    sendLastSearchList: function(data) {
        for(var i = 0; i < data.length; i++) {
            var key = data[i];

            app.selector.lastSearchList.innerHTML += '<li class="border-b">' +
                '<a href="javascript:void(0);" onclick="omdb.searchMovie(this.textContent);" class="text-lg block text-center font-semibold py-2 text-green-400">'+ key +'</a>' +
            '</li>';
        }
    }
};