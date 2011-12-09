Ext.define('YM.view.artist.List', {
    extend: 'Ext.Container',
    alias: 'widget.artistlist',
    config: {
        layout: 'fit',
        title: 'Artists',
        items: [{
            xtype: 'toolbar',
            docked: 'top',
            ui: 'light',
            layout: 'fit',
            items: [{
                xtype: 'textfield',
                placeHolder: 'Search...'
            }]
        },{
            xtype: 'list',
            store: 'Artists',
            itemTpl: '{name}'
        }]
    }
});