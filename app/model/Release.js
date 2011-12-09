Ext.define('YM.model.Release', {
    extend: 'Ext.data.Model',
    fields: [
        'id', 
        'title',
        {name: 'releaseDate', type: 'date', dateFormat: 'Y-m-d\\TH:i:s\\Z'},
        {name: 'artist_name', mapping: 'Artist.name'}
    ]
});


