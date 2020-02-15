Ext.define('MyShop.view.PromotionsItem', {
    extend: 'Ext.Container',
 	xtype : 'promotionsitemview',
    requires: [
    	'Ext.Img'
    ],

    config: {
    	padding: '10px 20px 20px 10px',
    	style: 'background:#fff;',
    	items:[
    		{
    			height: 80,
    			cls: 'promotionsItem',
    			layout: 'hbox',
    			items:[
    				{
    					width: 60,
    					padding: '0 0 0 5px',
    					items:{xtype:'image', centered: true, mode: ''}
    				},
    				{
    					flex:1,
    					style:'font-weight:bold;line-height:80px;'
    				},
    				{
    					width: 50,
    					style: 'border-radius: 0px 5px 5px 0px;',
    					items:{xtype: 'image', centered: true, mode: '',src: 'resources/images/arrow.png'}
    				}
    			]
    		}
    	]
    },

	initialize : function() {
		var me=this
			items = me.down('container[cls=promotionsItem]').getItems().items;
		me.callParent();
		me.image = items[0].getItems().items[0];
		me.title= items[1];
		me.arrow= items[2];
	},
    
    setImage: function(value){
    	this.image.setSrc(value);
    },
    
    setTitle: function(value){
    	this.title.setHtml(value);
    },
    
    setBackgroudColor: function(value){
    	this.arrow.setStyle('background:'+value+ ';');
    }
    
});
