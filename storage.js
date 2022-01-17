var storage = {
    getStorage: function(key) {
        var list;

        if(sessionStorage.getItem(key)) {
            list = JSON.parse(sessionStorage.getItem(key));
        } else {
            list = [];
        }

        return list;
    },

    addStorage: function(key, value) {
        var list = storage.getStorage(key);

        list.push(value);
        sessionStorage.setItem(key, JSON.stringify(list));
    },

    clearStorage: function(key) {
        sessionStorage.removeItem(key);
    }
};