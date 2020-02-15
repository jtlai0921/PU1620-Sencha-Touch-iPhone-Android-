Ext.define('MyShop.view.ProductItem', {
    extend: 'Ext.Container',
 	xtype : 'productitemview',
    requires: [
    	'Ext.Img'
    ],

    config: {
    	layout: 'hbox',
    	padding: '5px',
    	items:[
    		{
    			width: 100,
    			height: 150,
    			items:[
       				{xtype: 'image' , centered: true, mode: ''}
       			]
       		},
       		{
       			flex: 1,
       			items:[
       				{style: 'font-size:12px;line-height:14px;', padding: '2px'},
       				{style: 'font-size:12px;color:red;' , padding: '2px'},
       				{style: 'font-size:18px;color:red;' , padding: '2px' }
       			]
       		}
    	]
    },

	initialize : function() {
		var me=this
			items = me.down('container[flex=1]').getItems();
		me.callParent();
		me.image = me.down('image');
		me.title=items.items[0];
		me.info=items.items[1];
		me.price=items.items[2];
	},
    
    setProductImage: function(value){
    	this.image.setSrc(value);
    },
    
    setProductTitle: function(value){
    	this.title.setHtml(value);
    },
    
    setProductInfo: function(value){
    	this.info.setHtml(value);
    },

    setProductPrice: function(value){
    	this.price.setHtml('￥'+Ext.Number.toFixed(value,2));
    }
    
});
