var template = {
    modal: function(content){
        return '<div class="fixed z-10 inset-0 overflow-y-auto" onclick="app.closeModal(this);">' +
            '<div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">' +
                '<div class="fixed inset-0 transition-opacity" aria-hidden="true">' +
                '<div class="absolute inset-0 bg-gray-500 opacity-75"></div>' +
            '</div>' +
            '<span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>' +
            '<div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-full md:w-2/4" role="dialog" aria-modal="true" aria-labelledby="modal-headline">' +
                    '<div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">' +
                        content +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>';
    },

    card: function(movie) {
        return '<div class="xl:w-1/4 lg:w-1/3 md:w-2/4 md:px-3 mb-5">' +
            '<div class="border rounded shadow">' +
                '<a href="javascript:void(0);" class="block" imdb-id="'+ movie.imdbID +'" onclick="omdb.getMovieById(this);">' +
                    '<img src="'+ (movie.Poster === "N/A" ? "https://mersan.store/wp-content/uploads/2020/01/placeholder-images-image_large.png" : movie.Poster) + '" alt="'+ movie.Title + '" class="max-w-full block mx-auto">' +
                '</a>' +
                '<div class="p-3">'+
                    '<h4 class="font-semibold text-xl mb-2">'+ movie.Title +'</h4>' +
                    '<ul class="mb-3">' +
                        '<li><strong>Tarih: </strong>'+ movie.Year +'</li>'+
                        '<li><strong>Türü: </strong>'+ movie.Type +'</li>' +
                    '</ul>' +
                '</div>' +
            '</div>' +
        '</div>';
    },

    detail: function(movie) {
        return '<div class="md:flex md:flex-wrap">' +
            '<div class="md:w-96"><img class="w-full" src="'+ movie.Poster +'" /></div>' +
            '<div class="md:flex-1 p-5">' +
                '<h1 class="text-3xl font-semibold mb-4">'+ movie.Title +'</h1>' +
                '<p class="text-lg mb-3">'+ movie.Plot +'</p>'+
                '<strong>'+ movie.Year +'</strong>' + '<span> / </span>' + '<strong>'+ movie.Country +'</strong>' + '<span> / </span>' +
                '<strong>'+ movie.Language +'</strong>' + '<span> / </span>' + '<strong>'+ movie.Director +'</strong>' + 
            '</div>' +
        '</div>';
    }
};