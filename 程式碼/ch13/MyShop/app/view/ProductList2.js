Ext.define('MyShop.view.ProductList2', {
    extend: 'Ext.dataview.DataView',
 	xtype : 'productlist2view',
   	requires: [
   		'Ext.plugin.ListPaging'
    ],

    config: {
    	style: 'background:#42414a;',
    	inline: true,
    	itemTpl:[
    		'<div style="padding:5px;font-size:12px;line-height:16px;color:#fff;">',
    		'<div style="background:#424552">',
    		'<img width="140" height="140" src="{image}">',
    		'<p style="width:140px;text-overflow:ellipsis; white-space:nowrap; overflow:hidden;">{title}</p>',
    		'<p style="color:#deb629">{price:this.toFixed}</p>',
    		'</div>',
    		'</div>',
    		{
    			toFixed: function(v){
    				return Ext.Number.toFixed(v,2);
    			}
    		}
    	],
	    store: {
	        fields: [ 
	        	'productid', 'image', 'title','info', 'price'
	        ],
			proxy:{
				type: 'format',
				api:{
					read: "data/Products.asp",
				}
			}
	    },
	    plugins: [
	        {
	            xclass: 'Ext.plugin.ListPaging',
	            autoPaging: true
	        }
	    ]
    },

    updateRecord:function(record){
    	if(!record){
    		return;
    	}
    	var me =this,
    		store=me.getStore();
    	store.getProxy().setExtraParams({promotionsid:record.data.promotionsid});
    	store.load();
    }

   
});
