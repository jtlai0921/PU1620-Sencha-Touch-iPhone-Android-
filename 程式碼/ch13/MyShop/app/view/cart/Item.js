Ext.define('MyShop.view.cart.Item', {
    extend: 'Ext.Container',
 	xtype : 'cartitemview',
    requires: [
    	'Ext.Button',
    	'Ext.field.Spinner'
    ],

    config: {
    	layout: 'hbox',
       	style: 'border-bottom: 1px solid #fff;',
    	items:[
    		{
    			width: 80,
    			items:[
       				{xtype: 'button' , centered: true, iconCls: 'delete', ui: 'decline'}
       			]
       		},
       		{
       			flex:1,
       			layout: 'vbox',
       			height:100,
       			items:[
       				{
       					flex: 1,
       					layout: 'hbox',
       					items:[
				       		{
				       			flex: 1,
				       			items:[
				       				{style: 'line-height:20px;', padding: '2px', isTitle: true},
				       				{style: 'font-size:12px;color:#C0C0C0;' , padding: '2px', isProductId: true}
				       			]
				       		},
							{
								width: 50,
								items:{xtype: 'image', centered: true, mode: '',src: 'resources/images/arrow.png'}
							}
						]
					},
					{
						height: 60,
						layout: {type: 'hbox', align:'center', pack: 'center'},
						style: 'font-size:12px;line-height:40px;',
						items:[
							{html:'數量：', width: 40},
							{xtype: 'button', text: '-', ui: 'action'},
							{xtype: 'spacer', width:10},
							{xtype: 'numberfield', width: 40, clearIcon: false},							
							{xtype: 'spacer', width:10},
							{xtype: 'button', text: '+', ui: 'action'},
							{xtype: 'spacer', flex:1},
							{html: '0.00', width: 80, style:'color:red;', isPrice: true}
						]
					}
				]
			}
    	]
    },

	initialize : function() {
		var me=this
			items = me.down('container[flex=1]').getItems();
		me.callParent();
		me.deleteButton = me.down('button[iconCls=delete]');
		me.title=me.down('container[isTitle=true]');
		me.productId=me.down('container[isProductId=true]');
		me.quantity= me.down('numberfield');
		me.price =me.down('container[isPrice=true]');
		me.plusButton = me.down('button[text=+]');
		me.minusButton = me.down('button[text=-]');
	},
    
    setProductId: function(value){
    	this.productId.setHtml('編號：'+value);
    },
    
    setTitle: function(value){
    	this.title.setHtml(value);
    },
    
    setQuantity: function(value){
    	this.quantity.setValue(value);
    },
    
    setPrice: function(value){
    	this.price.setHtml('￥'+Ext.Number.toFixed(value,2));
    }
  
});
