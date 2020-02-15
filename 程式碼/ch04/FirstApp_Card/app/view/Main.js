Ext.define('FirstApp.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
    	'Ext.SegmentedButton',
    	'FirstApp.view.Search',
    	'FirstApp.view.More'
    ],

    
    config: {
		layout: "vbox",
		
		 items: [
			{
				height: 40,
		        items:[
					{
					    xtype: 'segmentedbutton',
						centered: true,
					    items: [
					        { text: '首頁', pressed: true },
					        { text: '產品' },
					        { text: '搜尋' },
					        { text: '更多'}
					    ]
					}
		        ]
		    },
		    {
		    	flex: 1,
		    	id: "mainContent",
		    	layout: "card",
		    	items:[
					{
						html: "首頁"
					},
					{xtype: "product"}
		    	]
		    }
		]
    }
});
