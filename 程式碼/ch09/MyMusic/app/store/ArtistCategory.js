Ext.define("MyMusic.store.ArtistCategory", {
    extend: "Ext.data.Store",    
    config: {
    	model: 'MyMusic.model.ArtistCategory',
    	data:[
    		{id: 0 , text: '全部歌手'},
    		{id: 1 , text: '華語男歌手'},
    		{id: 2 , text: '華語女歌手'},
    		{id: 3 , text: '華語樂隊群組合'},
    		{id: 4 , text: '歐美男歌手'},
    		{id: 5 , text: '歐美女歌手'},
    		{id: 6 , text: '歐美樂隊群組合'},
    		{id: 7 , text: '日韓男歌手'},
    		{id: 8 , text: '日韓女歌手'},
    		{id: 9 , text: '日韓樂隊群組合'},
    		{id: 10 , text: '其他歌手'}
    	]
    }
 });