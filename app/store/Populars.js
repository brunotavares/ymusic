Ext.define('YM.store.Populars', {
    extend: 'Ext.data.Store',
    model: 'YM.model.Track',
    proxy: {
        type: 'ymusic',
        query: 'popular',
        reader: {
            type: 'json',
            successProperty: 'success',
            root: function(data) {
                if (data.error || data.query.count === 0) {
                    return [];
                } else {
                    return data.query.results.Track;
                }
            }
        }
    }
});