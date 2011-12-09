Ext.Loader.setConfig({enabled: true});
Ext.Loader.setPath('Ext.data.proxy.YMusic', 'lib/YMusicProxy.js');
Ext.ClassManager.setAlias('Ext.data.proxy.YMusic', 'proxy.ymusic');

Ext.require([
    'Ext.data.proxy.YMusic',
    'Ext.XTemplate',
    'Ext.field.Text'
]);

Ext.application({
    name: 'YM',
    controllers: ['Releases','Lists'],
    models: ['Artist', 'Release', 'ReleaseTrack', 'Track'],
    launch: function() {
        Ext.create('YM.view.Viewport');
    }
});