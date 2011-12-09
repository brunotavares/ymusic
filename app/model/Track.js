Ext.define('YM.model.Track', {
    extend: 'Ext.data.Model',
    fields: [
        'id', 
        'title',
        'url',
        {name: 'artist', mapping: 'Artist.name'}
    ]
});
