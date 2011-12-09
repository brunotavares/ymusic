Ext.define('YM.store.Releases', {
    extend: 'Ext.data.Store',
    model: 'YM.model.Release',
    autoLoad: true,
    proxy: {
        type: 'ymusic',
        query: 'newReleases',
        reader: {
            type: 'json',
            successProperty: 'success',
            root: function(data) {
                if (data.error || data.query.count === 0) {
                    return [];
                } else {
                    return data.query.results.Release;
                }
            }
        }
    }
});