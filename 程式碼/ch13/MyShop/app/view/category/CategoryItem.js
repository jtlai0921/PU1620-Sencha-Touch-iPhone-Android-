Ext.define('MyShop.view.category.CategoryItem', {
    extend: 'Ext.Container',
 	xtype : 'categoryitemview',
    requires: [
    	'Ext.Img'
    ],

    config: {
    	layout: 'hbox',
       	style: 'border-bottom: 1px dotted #C0C0C0;',
    	items:[
    		{
    			width: 100,
    			height: 100,
    			items:[
       				{xtype: 'image' , centered: true, mode: ''}
       			]
       		},
       		{
       			flex: 1,
       			items:[
       				{style: 'line-height:20px;', padding: '30px 2px 2px 2px'},
       				{style: 'font-size:12px;color:#C0C0C0;' , padding: '2px'}
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
	},
    
    setImage: function(value){
    	this.image.setSrc(value);
    },
    
    setTitle: function(value){
    	this.title.setHtml(value);
    },
    
    setInfo: function(value){
    	this.info.setHtml(value);
    }
  
});
