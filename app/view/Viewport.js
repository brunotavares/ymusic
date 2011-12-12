Ext.define('YM.view.Viewport', {
    extend: 'Ext.navigation.View',
    alternateClassName: 'YM.Viewport',
    
    config: {
        fullscreen: true,
        navigationBar: {
            hidden: true,
            docked: 'top'
        },
        items: [{
            xtype: 'tabpanel',
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