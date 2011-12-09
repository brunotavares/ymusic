Ext.define('YM.view.list.TabPanel', {
    extend: 'Ext.TabPanel',
    alias: 'widget.listtabpanel',
    config: {
        items: [{
            xtype: 'releaselist'
        },{
            xtype: 'listpopulars'
        },{
            xtype: 'listartists'
        }]
    }
});