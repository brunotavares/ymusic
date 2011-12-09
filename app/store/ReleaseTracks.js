Ext.define('YM.store.ReleaseTracks', {
    extend: 'Ext.data.Store',
    model: 'YM.model.ReleaseTrack',
    remoteFilter: true,
    proxy: {
        type: 'ymusic',
        query: 'releaseTracks',
        reader: {
            type: 'json',
            successProperty: 'success',
            root: function(data) {
                if (data.error || data.query.count === 0) {
                    return [];
                } else {
                    return data.query.results.Release.Track;
                }
            }
        }
    }
});