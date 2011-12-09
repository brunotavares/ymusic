Ext.define('YM.controller.Lists', {
    extend: 'Ext.app.Controller',
    stores: ['Populars', 'Artists'],
    views: ['Viewport', 'list.TabPanel', 'list.Populars', 'list.Artists'],
    
    init: function() {
        var me = this;
        
        me.control({
            'listartists > toolbar > textfield': {
                change: me.onArtistSearchChange,
                clearicontap: me.onArtistSearchChange
            }
        });
        me.callParent(arguments);
    },
    
    onArtistSearchChange: function(textfield) {
        var store = this.getArtistsStore(),
            value = Ext.String.trim(textfield.getValue());
            
        if(Ext.isEmpty(value)) {
            store.removeAll();
        } else {
            store.filters.clear();
            store.filter('artist', value);
        }
    }
});

