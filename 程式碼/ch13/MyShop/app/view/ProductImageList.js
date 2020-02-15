Ext.define('MyShop.view.ProductImageList', {
    extend: 'Ext.dataview.DataView',
    xtype: 'productimagelistview',
    requires: [
    ],
    config: {
        scrollable: {
        	direction: 'horizontal',
        	directionLock: true
        },
        height:130,
        inline: {
            wrap: false
        },
        itemTpl: [
        	'<div style="width:100px;height:100px;padding:5px;">',
        	'<div style="background:#F9F9F9">',
        	'<img border="1" src="{image}">',
        	'<p style="font-size:12px;line-height:14px;color:red;">&nbsp;&nbsp;{price:this.toFixed}</p>',
        	'</div>',
        	'</div>',
        	{
        		toFixed: function(v){
        			return '￥'+Ext.Number.toFixed(v,2);
        		}
        	}
        ],
        store: {
        	fields:['productid','image','title' , 'price'],
			proxy:{
				type: 'format',
				api:{
					read: "data/Products.asp"
				}
			}
        }
    }
    
});
