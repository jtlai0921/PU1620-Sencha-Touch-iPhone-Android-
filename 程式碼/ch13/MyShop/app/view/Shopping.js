Ext.define('MyShop.view.Shopping', {
    extend: 'Ext.Container',
 	xtype : 'shoppingview',
    requires: [
    	'Ext.dataview.DataView',
    	'MyShop.view.ProductImageList'
    ],

    config: {
    },

	initialize : function() {
        var store = Ext.create('Ext.data.Store', {
            autoDestroy: true,
            fields: ['title' , 'data'],
			proxy:{
				type: 'format',
				api:{
					read: "data/Shopping.asp"
				}
			}
        });
        store.on({
            scope: this,
            refresh: 'onStoreRefresh'
        });
        store.load();
	},
	
	onStoreRefresh: function(cmp, datas, eOpts){
		var me = this,
			data = datas.items;
		for(var i=0 ; ln=data.length,i < ln ;i++){
			var list = Ext.create('MyShop.view.ProductImageList');
			list.getStore().add(data[i].data.data);
			me.add([
				{
					html: data[i].data.title
				},
				list
			])
		}
	}
    
});
