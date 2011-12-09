Ext.define('YM.view.list.Populars', {
    extend: 'Ext.dataview.List',
    alias: 'widget.listpopulars',
    config: {
        title: 'Popular',
        store: 'Populars',
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