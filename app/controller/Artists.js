Ext.define('YM.controller.Artists', {
    extend: 'Ext.app.Controller',
    stores: ['Artists'],
    views: ['artist.List'],
    
    init: function() {
        var me = this;
        
        me.control({
            'artistlist > toolbar > textfield': {
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