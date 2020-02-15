Ext.define('MyShop.view.PromotionsList2', {
    extend: 'Ext.dataview.DataView',
 	xtype : 'promotionslist2view',
   	requires: [
   		'Ext.plugin.ListPaging'
    ],

    config: {
    	style: 'background:#424139;',
    	itemTpl:[
    		'<div style="padding:10px 20px;">',
    		'<div class="promotionsItem2"  style="padding:5px;">',
    		'<img src="{image}">',
    		'<p style="height:20px;line-height:20px;font-size:12px;text-align:right;margin-right:10px;">截止日期：{enddate}</p>',
    		'</div>',
    		'</div>'
    	],
	    store: {
	        fields: [ 
	        	'promotionsid', 'image', 'title','enddate'
	        ],
			proxy:{
				type: 'format',
				api:{
					read: "data/Promotions2.asp",
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
    	store.getProxy().setExtraParams({id:record.data.promotionsid});
    	store.load();
    }

   
});
