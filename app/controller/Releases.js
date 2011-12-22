Ext.define('YM.controller.Releases', {
    extend: 'Ext.app.Controller',
    stores: ['Releases', 'ReleaseTracks'],
    views: ['Viewport', 'release.List', 'release.Details'],
    
    init: function() {
        var me = this;
        
        me.control({
            'releaselist': {
                select: me.onListItemTap
            }
        });
        me.callParent(arguments);
    },
    
    onListItemTap: function(list, release) {
        var viewport = Ext.getCmp('viewport'),
            tracksStore= this.getReleaseTracksStore(),
            detailsView = Ext.create('YM.view.release.Details');
        
        if(viewport.push(detailsView)) {
            detailsView.loadRecord(release);
            tracksStore.removeAll();
            tracksStore.filters.clear();
            tracksStore.filter('release_id', release.getId());
        }
        
        return false;
    }
});