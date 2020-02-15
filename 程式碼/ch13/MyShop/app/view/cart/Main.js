Ext.define('MyShop.view.cart.Main', {
    extend: 'Ext.Container',
    xtype: 'cartmain',
    requires: [
    	'Ext.TitleBar',
    	'MyShop.view.cart.List',
    	'Ext.Label'
    ],
    config: {
    	layout:'fit',
    	items:[
    		{
    			xtype: 'titlebar',
    			docked: 'top',
		    	title: '購物車'
    		},
    		{
    			height: 40,
    			docked: 'top',
    			style: 'background:#fff',
    			layout: {type: 'hbox', align:'center', pack: 'center'},
    			items:[
    				{xtype: 'label', padding:'0px 0 0 5px', flex: 1, html: '總計：<em style="color:red;">￥0.00</em>'},
    				{width:100, xtype: 'button', text: '去結算', ui: 'decline'}
    			]
    		},
    		{
    			xtype: 'cartlistview'
    		}
    	]
    }
    
});
