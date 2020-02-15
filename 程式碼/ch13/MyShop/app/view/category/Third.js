Ext.define('MyShop.view.category.Third', {
    extend: 'Ext.Container',
    xtype: 'categorythird',
    requires: [
    	'Ext.TitleBar',
    	'Ext.dataview.DataView',
    	'MyShop.view.ProductImageList'
    ],
    config: {
    	layout: 'fit',
    	items:[
    		{
    			xtype: 'titlebar',
    			docked: 'top',
		    	title: '',
		    	items:[
		    		{text: '傳回', ui: 'back'}
		    	]
    		},
    		{
    			xtype: 'productimagelistview',
    			docked: 'top'
    		},
    		{
    			xtype: 'dataview',
    			padding: 5,
    			style: 'background:#fff;',
    			itemTpl: [
    				'<p style="border-bottom:1px dotted #C0C0C0;line-height:50px;">',
    				'<em>{title}</em><em style="width:20px;float:right;">&gt;</em>',
    				'</p>'
    			],
    			store:{
    				fields:['categoryid', 'title']
    			}
    		}
    	]
    }
    
});
