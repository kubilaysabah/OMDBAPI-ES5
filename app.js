"use strict";

var app = {
    selector: {
        endpoint: "http://www.omdbapi.com/?apikey=[YOUR_KEY]&",
        lastSearchKey: 'last-search',
        searchInput: document.querySelector('[search-input]'),
        searchButton: document.querySelector('[search-button]'),
        searchMovies: document.querySelector('[search-movies]'),
        lastSearchList: document.querySelector('[last-search-list]'),
        clearLastSearchButton: document.querySelector('[clear-last-search]'),
        lastSearchMovies: document.querySelector('[last-search-movies]')
    },

    init: function() {
        this.afterInit();
        this.eventListeners();
    },

    afterInit: function() {
        search.getLastSearch();
        omdb.getLastSearchMovies();
    },

    ajaxRequest: function(options, callback) {
        var XHR = new XMLHttpRequest();
        var endpoint;

        XHR.onreadystatechange = function() {
            if(XHR.readyState === 4 && XHR.status === 200) {
                callback(JSON.parse(XHR.responseText));
            }
        };

        if(typeof options.search === 'undefined') {
            endpoint = app.selector.endpoint + 'i=' + options.id
        } else {
            endpoint = app.selector.endpoint + 's=' + encodeURI(options.search)
        }

        XHR.open('GET', endpoint, false);
        XHR.send();
    },

    closeModal: function(element) {
        element.remove();
    },

    eventListeners: function() {
        app.selector.searchButton.addEventListener('click', function(){
            omdb.searchMovie(app.selector.searchInput.value.trim());
            search.addLastSearch(app.selector.searchInput.value.trim());
        });

        app.selector.clearLastSearchButton.addEventListener('click', function(){
            storage.clearStorage(app.selector.lastSearchKey);
            window.location.reload();
        });
    }
};

window.addEventListener('load', app.init());