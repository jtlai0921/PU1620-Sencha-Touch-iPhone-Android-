Ext.define('MyShop.view.my.Main', {
    extend: 'Ext.Container',
    xtype: 'mymainview',
    requires: [
    	'Ext.TitleBar',
    	'Ext.Img',
    	'Ext.Label',
    	'Ext.dataview.List',
    	'MyShop.view.action.dataview.Item'
    ],
    config: {
    	layout:'vbox',
    	padding:10,
	    scrollable: {
	        direction: 'vertical',
	        directionLock: true
	    },
        items:[
    		{
    			xtype: 'titlebar',
    			docked: 'top',
		    	title: '我的商店'
    		},
    		{
    			height: 100,
    			layout: 'hbox',
    			items:[
    				{
    					width:100,
    					items:[
    						{xtype: 'image', centered: true, mode: '', src: 'resources/images/user.png'}
    					]
    				},
    				{
    					flex:1, 
    					layout: 'vbox',
    					items:[
    						{html: '', isUsername: true},
    						{html: '', isBalance: true},
    						{html: '', isPoints: true}
    					]
    				}
    			]
    		},
    		{
    			height:40,
    			style: 'line-height:40px;',
    			html: '訂單中心'
    		},
    		{
    			height: 179,
    			cls:'mylist',
    			xtype: 'dataview',
    			scrollable: false,
			    useComponents: true,
			    defaultType: 'actionitem',
				data:[
					{title: '訂單狀態速查', icon: 'resources/images/action/order_1.png'},
					{title: '待付款訂單', icon: 'resources/images/action/order_2.png'},
					{title: '全部訂單', icon: 'resources/images/action/order_3.png'}
				]
    		},
    		{
    			height:40,
    			style: 'line-height:40px;',
    			html: '帳戶中心'
    		},
    		{
    			height: 299,
    			cls:'mylist',
    			scrollable: false,
    			xtype: 'dataview',
			    useComponents: true,
			    defaultType: 'actionitem',
				data:[
					{title: '我的關心', icon: 'resources/images/action/star.png'},
					{title: '商品評價/曬單', icon: 'resources/images/action/comment.png'},
					{title: '訊息中心', icon: 'resources/images/action/infor.png'},
					{title: '輕松購', icon: 'resources/images/action/easy.png'},
					{title: '賬戶安全', icon: 'resources/images/action/lock.png'}
				]
    		}
    	]
    }
   
});
