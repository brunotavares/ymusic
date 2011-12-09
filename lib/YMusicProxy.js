Ext.define('Ext.data.proxy.YMusic', {
    extend: 'Ext.data.proxy.JsonP',
    requires: ['Ext.XTemplate'],
    
    autoAppendParams: false,
    url: 'http://query.yahooapis.com/v1/public/yql',
    
    queries: {
        newReleases: Ext.create('Ext.XTemplate', [
            'select * from music.release.popular'
        ]),
        
        releaseTracks: Ext.create('Ext.XTemplate', [
            'select * from music.release.id where ids="{release_id}" and response="tracks"'
        ]),

        popular: Ext.create('Ext.XTemplate', [
            'select * from music.track.popular'
        ]),
        
        artists: Ext.create('Ext.XTemplate', [
            'select * from music.artist.search where keyword="{artist}"'
        ]),
    },
    
    buildRequest: function(operation) {
        var me = this,
            request = me.callParent(arguments),
            queryTpl = me.queries[me.query],
            filters = operation.filters || [],
            filterData = {};
        
        Ext.iterate(filters, function(filter) {
            filterData[filter.property] = filter.value;
        });
        
        delete request.params.filters;
        
        Ext.applyIf(request.params, {
            format: 'json',
            q: queryTpl.applyTemplate(filterData)
        });
        
        request.url = Ext.urlAppend(request.url, Ext.urlEncode(request.params));
        return request;
    }
});