Ext.define('MyShop.view.HomeFirst', {
    extend: 'Ext.Container',
    xtype: 'homefirst',
    requires: [
    	'Ext.Toolbar',
    	'Ext.carousel.Carousel',
    	'Ext.Img',
    	'MyShop.view.Shopping'
    ],
    config: {
		scrollable: {
		    direction: 'vertical',
		    directionLock: true
		},
		items:[
			{
				xtype : 'toolbar',
				items:[
					{xtype: 'container', style: 'color:#fff', html: '我的商店'},
					{xtype: 'spacer', flex: 1},
					{text: '搜尋', width: 100}
				]
			},
			{
				xtype: 'carousel',
				height: 140
			},
			{
				height: 80,
				xtype: 'productitemview'
			},
			{
				height: 60,
				layout:{type:'hbox', align: 'center', pack: 'center'},
				defaultType: 'button',
				defaults:{
					iconAlign: 'top',
					ui: 'plain',
					width: 80,
					height: 60,
					style:'font-size:12px'
				},
				items:[
					{text: '促銷賣場', iconCls: 'b1'},
					{text: '手機充值', iconCls: 'b2'},
					{text: '團購', iconCls: 'b3'},
					{text: '彩券', iconCls: 'b4'}
				]
			},
			{
				height: 60,
				layout:{type:'hbox', align: 'center', pack: 'center'},
				defaultType: 'button',
				defaults:{
					iconAlign: 'top',
					ui: 'plain',
					width: 80,
					height: 60,
					style:'font-size:12px'
				},
				items:[
					{text: '訂單狀態', iconCls: 'b5'},
					{text: '瀏覽歷史', iconCls: 'b6'},
					{text: '我的收藏', iconCls: 'b7'},
					{text: '生活旅行', iconCls: 'b8'}
				]
			},
			{
				height: 40,
				style: 'text-align:center;vertical-align:middle;',
				html: '← 向左滑，更多優惠等你搶'
			},
			{
				height: 280,
				xtype: 'shoppingview'
			}
		]
    }
});
