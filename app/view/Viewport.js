Ext.define('YM.view.Viewport', {
    extend: 'Ext.Container',
    id: 'viewport',
    config: {
        fullscreen: true,
        layout: {
            type: 'card',
            animation: {
                type: 'slide',
                direction: 'left'
            }
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
    },
    
    goBack: function(activeItem) {
        var animation = this.getLayout().getAnimation();
            
        animation.setReverse(true);
        this.setActiveItem(activeItem);
        animation.setReverse(false);
    }
});