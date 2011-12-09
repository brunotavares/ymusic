Ext.define('YM.view.list.Artists', {
    extend: 'Ext.Container',
    alias: 'widget.listartists',
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
            itemTpl: '{name}',
        }]
    }
});