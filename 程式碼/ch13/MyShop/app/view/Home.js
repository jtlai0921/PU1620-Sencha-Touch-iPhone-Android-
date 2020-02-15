Ext.define('MyShop.view.Home', {
    extend: 'Ext.navigation.View',
    xtype: 'homeview',
    requires: [
    	'Ext.carousel.Carousel',
    	'MyShop.view.HomeFirst',
    	'MyShop.view.HomeSecond'
    ],
    config: {
    	navigationBar: {hidden: true},
		items:{
			xtype: 'carousel',
			items:[
				{
					xtype: 'homefirst',
				},
				{xtype:'homesecond'},
				{html: '檢視3'},
				{html: '檢視4'},
				{html: '檢視5'},
				{html: '檢視6'}
			]
		}
    }
});
