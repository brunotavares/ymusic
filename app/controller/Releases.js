Ext.define('YM.controller.Releases', {
    extend: 'Ext.app.Controller',
    stores: ['Releases', 'ReleaseTracks'],
    views: ['Viewport', 'release.List', 'release.Details'],
    
    init: function() {
        var me = this;
        
        me.control({
            'releaselist': {
                select: me.onReleaseListItemTap
            },
            'releasedetails button[ui=back]': {
                tap: me.onBackTap
            }
        });
        me.callParent(arguments);
    },
    
    onReleaseListItemTap: function(list, release) {
        var viewport = Ext.getCmp('viewport'),
            tracksStore= this.getReleaseTracksStore(),
            detailsView = Ext.create('YM.view.release.Details');
        
        detailsView.loadRecord(release);    
        viewport.add(detailsView);
        viewport.setActiveItem(detailsView);

        tracksStore.removeAll();
        tracksStore.filters.clear();
        tracksStore.filter('release_id', release.getId());
    },
    
    onBackTap: function() {
        Ext.getCmp('viewport').goBack(0);
    }
});