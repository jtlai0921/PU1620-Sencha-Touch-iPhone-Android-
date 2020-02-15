Ext.define('MyShop.controller.category.Main', {
    extend: 'Ext.app.Controller',
    requires:[
    ],
    
    config: {
		refs: {
			main : 'container[title=分類別]',
		    firstList: '#firstcategorylistview'
		},

		control: {
			firstList : {
				initialize: 'onFistListInitialize',
				itemtap: 'onFirstListItemTap'
			}
		},
		
		views: [
			'category.Second'
		]
    
    },
    
    launch: function () {
    },
    
    onFistListInitialize: function(){
    	this.getFirstList().getStore().load();
    },
    
    onFirstListItemTap: function(cmp, index, target, record, e, eOpts){
    	var me =this;
    		view = me.secondview,
    		store = null,
    		items = null,
    		item = null;
    	if(!view){
    		view = Ext.create('MyShop.view.category.Second');
    		me.secondview = view;
    		me.getMain().add(view);
    	}
    	items = view.getItems().items;
    	items[0].setTitle(record.data.title);
	   	item = items[1];
    	if(record.data.promotions){
    		var d = record.data.promotions;
    		view.promotionsid = d.promotionsid;
    		item.setImage(d.image);
    		item.setTitle(d.title);
    		item.setBackgroudColor(d.color);
    		item.show();
    	}else{
    		item.hide();
    	}
    	store = items[2].getStore();
    	store.removeAll();
    	store.add(record.data.children);
    	me.getMain().setActiveItem(view);
    }
    

});
