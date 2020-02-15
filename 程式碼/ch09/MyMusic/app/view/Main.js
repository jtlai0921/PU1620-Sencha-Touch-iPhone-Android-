Ext.define('MyMusic.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.navigation.View',
        'Ext.dataview.List',
        'Ext.dataview.NestedList',
        'MyMusic.view.Playlist',
        'MyMusic.view.Play'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: '歌手',
                iconCls: 'singer',
                xtype: 'navigationview',

                items: [
                	{
                    	xtype: 'list',
                    	store: 'ArtistCategory',
                    	itemTpl: '{text}',
                    	title: '歌手類別別'
                	}
                ]
            },
            {
                title: '分類別',
                iconCls: 'music',
                
            	xtype: 'nestedlist',
            	store: 'Category',
            	detailCard: {xtype: 'songview'}
            },
            {
            	title: '播放清單',
            	iconCls: 'playlist',
            	
            	xtype: 'playlistview'
            },
            {
            	title: '播放',
            	iconCls: 'play',
            	
            	xtype: 'playview'
            }
        ]
    }
    
    
});
