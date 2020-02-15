Ext.define('MyShop.view.action.Item', {
    extend: 'Ext.Container',
 	xtype : 'actionitemview',
    requires: [
    	'Ext.Img'
    ],

    config: {
    	layout: 'hbox',
    	style: 'border-bottom: 1px solid #cccccc;',
    	height: 60,
    	items:[
    		{
    			width: 40,
    			items:[
       				{xtype: 'image' , centered: true, mode: ''}
       			]
       		},
       		{
       			flex: 1,
       			style: 'line-height:60px;',
       			html: ''
			},
			{
    			width: 30,
    			items:[
       				{xtype: 'image' , centered: true, mode: '', src: 'resources/images/action/arrow.png'}
       			]
			}
    	]
    },

	initialize : function() {
		var me=this
			items = me.getItems().items;
		me.callParent();
		me.icon = items[0].down('image');
		me.title= items[1];
	},
    
    setIcon: function(value){
    	this.icon.setSrc(value);
    },
    
    setTitle: function(value){
    	this.title.setHtml(value);
    }
  
});
