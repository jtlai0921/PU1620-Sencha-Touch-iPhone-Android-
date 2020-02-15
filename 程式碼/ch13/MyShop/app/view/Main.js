Ext.define('MyShop.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
    	'MyShop.view.Home',
    	'MyShop.view.category.Main',
    	'MyShop.view.cart.Main',
    	'MyShop.view.my.Login',
    	'MyShop.view.my.Main'
    ],
    config: {
        tabBarPosition: 'bottom',
		tabBar:{
			scrollable: 'horizontal'
		},
        items: [
            {
                title: '首頁',
                iconCls: 'home',
                xtype: 'homeview'
            },
            {
                title: '搜尋',
                iconCls: 'search'
            },
            {
                title: '分類別',
                iconCls: 'category',
                layout: 'card',
                items:[
                	{xtype: 'categorymain'}
                ]
            },
            {
                title: '購物車',
                iconCls: 'cart',
                xtype: 'cartmain'
            },
            {
            	title: '我的商店',
            	iconCls: 'user',
            	layout: 'card',
            	items:[
            		{xtype: 'mymainview'},
            		{xtype: 'loginview'}
            	]
            },
            {
                title: '更多',
                iconCls: 'more'
            }
        ]
    }


});
