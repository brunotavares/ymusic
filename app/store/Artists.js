Ext.define('YM.store.Artists', {
    extend: 'Ext.data.Store',
    model: 'YM.model.Artist',
    remoteFilter: true,
    proxy: {
        type: 'ymusic',
        query: 'artists',
        reader: {
            type: 'json',
            successProperty: 'success',
            root: function(data) {
                if (data.error || data.query.count === 0) {
                    return [];
                } else {
                    return data.query.results.Artist;
                }
            }
        }
    }
});