Ext.define('YM.view.release.List', {
    extend: 'Ext.dataview.List',
    alias: 'widget.releaselist',
    config: {
        title: 'New Releases',
        store: 'Releases',
        itemTpl: new Ext.XTemplate(
            '<div class="release">{[this.getAutoIndex()]}. {artist} - {title}</div>', 
            {
                getAutoIndex: function() {
                    this.autoIndex = this.autoIndex||1;
                    return this.autoIndex++;
                }
            }
        )
    }
});