var search = {
    addLastSearch: function(value) {
        app.selector.searchInput.value = "";
        storage.addStorage(app.selector.lastSearchKey, value);
    },

    getLastSearch: function() {
        if(sessionStorage.getItem(app.selector.lastSearchKey)) {
            app.selector.lastSearchList.parentElement.classList.remove('hidden');

            ui.sendLastSearchList(JSON.parse(sessionStorage.getItem(app.selector.lastSearchKey)));
        }
    }
}