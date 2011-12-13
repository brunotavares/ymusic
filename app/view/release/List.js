Ext.define('YM.view.release.List', {
    extend: 'Ext.dataview.List',
    alias: 'widget.releaselist',
    config: {
        title: 'Top Releases',
        store: 'Releases',
        cls: 'release-list',
        itemTpl: new Ext.XTemplate(
            '<article class="record">',
                '<img src="http://d.yimg.com/ec/image/v1/release/{id};size=80x80" />',
                '<h1>{[this.getAutoIndex()]}. {title}</h1>',
                '<h2>{artist_name}</h2>',
            '</article>',
            {
                getAutoIndex: function() {
                    this.autoIndex = this.autoIndex||1;
                    return this.autoIndex++;
                }
            }
        )
    }
});