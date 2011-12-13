Ext.define('YM.controller.Artists', {
    extend: 'Ext.app.Controller',
    stores: ['Artists'],
    views: ['artist.List'],
    
    init: function() {
        var me = this;
        
        me.control({
            'artistlist > toolbar > textfield': {
                change: me.onSearchChange,
                clearicontap: me.onSearchChange
            }
        });
        me.callParent(arguments);
    },
    
    onSearchChange: function(textfield) {
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