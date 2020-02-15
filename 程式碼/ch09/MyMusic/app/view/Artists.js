Ext.define('MyMusic.view.Artists', {
    extend: 'Ext.List',
    xtype: 'artistsview',
    requires: [
    	'Ext.plugin.ListPaging'
    ],
    config: {
    	store: 'Artists',
    	itemTpl: '{name}',
    	indexBar: true,
    	grouped:true,
	    plugins: [
	        {
	            xclass: 'Ext.plugin.ListPaging',
	            autoPaging: true
	        }
	    ]
    }
});
