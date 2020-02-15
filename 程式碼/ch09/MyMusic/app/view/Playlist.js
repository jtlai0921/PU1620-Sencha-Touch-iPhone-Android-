Ext.define('MyMusic.view.Playlist', {
    extend: 'Ext.List',
    xtype: 'playlistview',
    requires: [
    	'Ext.tux.Failure'
    ],
    config: {
    	store: 'Playlist',
    	itemTpl: '{name}({artist})'
    }   

});
