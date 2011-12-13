Ext.define('YM.view.Viewport', {
    extend: 'Ext.navigation.View',
    alternateClassName: 'YM.Viewport',
    id: 'viewport',
    
    config: {
        fullscreen: true,
        items: [{
            xtype: 'tabpanel',
            title: 'Y!Music',
            items: [{
                xtype: 'releaselist'
            },{
                xtype: 'popularlist'
            },{
                xtype: 'artistlist'
            }]
        }]
    }
});