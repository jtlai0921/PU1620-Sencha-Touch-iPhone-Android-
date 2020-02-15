Ext.define('MyShop.view.Image', {
    extend: 'Ext.Panel',
    xtype: 'imageview',
    requires: [
    	'Ext.TitleBar',
    	'Ext.Img'
    ],
    config: {
    	layout: 'vbox',
    	fullscreen: true,
    	currentIndex:0,
    	style: 'z-index:10',
		items:[
			{
				xtype: 'titlebar',
				docked: 'top',
				items:[
					{text: '傳回'}
				]
			},
			{
				flex: 1,
				items:[
					{xtype: 'image', centered: true, mode: ''}
				]
			},
			{
	            xtype: 'dataview',
	            scrollable: 'horizontal',
	            height:110,
	            inline: {
	                wrap: false
	            },
	            itemTpl: '<div style="width:100px;height:100px;padding:5px;"><img border="1" src="{image}"></div>',
	            store: {
	            	fields:['image','bigImage']
	            }
			}
		]
    },
    
    initialize: function(){
    	var me = this,
    		items = me.getItems().items;
    	me.image=items[1].down('image');
    	items[0].down('button[text=傳回]').on('tap',me.onBackButtonTap, me);
    	items[2].on('itemtap',me.onImageItemTap,me);
    },
    
	updateRecord: function(record){
		if(!record){
			return;
		}
		var me = this,
			items = me.getItems().items;
			store = items[2].getStore(),
			images= record.data.images,
			currentIndex = me.getCurrentIndex();
		for(var i=0;ln=images.length,i < ln;i++){
			var bigimage = images[i].replace(/\.png/,"_big.png");
			store.add({image:images[i],bigImage: bigimage});
			if(i==currentIndex){
				me.image.setSrc(bigimage);
			}
		}
		items[0].setTitle(record.data.name);
	},
	
	onBackButtonTap: function(){
		this.hide();
	},
	
	onImageItemTap: function(cmp, index, target, record, e, eOpts){
		var me = this;
		me.image.setSrc(record.data.bigImage);
	}
	

});
