Ext.define('YM.view.release.Details', {
    extend: 'Ext.form.Panel',
    alias: 'widget.releasedetails',
    
    title: 'New Release Details',
    config: {
        defaultType: 'textfield',
        defaults: {
            readOnly: true,
            clearIcon: false
        },
        items: [{
            fieldLabel: 'Artist',
            name: 'artist_name'
        },{
            fieldLabel: 'Title',
            name: 'title'
        },{
            fieldLabel: 'Date',
            name: 'releaseDate',
            setValue: function(v) {
                if(Ext.isDate(v)){
                    v = Ext.Date.format(v, 'M Y');
                }
                Ext.field.Text.prototype.setValue.call(this, v);
            }
        },{
            xtype: 'component',
            html: 'Track List',
            style: 'margin-top:10px;',
            autoEl: {tag: 'h1'}
        },{
            xtype: 'dataview',
            store: 'ReleaseTracks',
            itemTpl: '{trackNumber} - {title}',
            scrollable: false            
        }]
    }
});