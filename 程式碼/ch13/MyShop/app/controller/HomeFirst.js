Ext.define('MyShop.controller.HomeFirst', {
    extend: 'Ext.app.Controller',
    requires:[
    	'Ext.util.DelayedTask',
    	'Ext.Img'
    ],
    
    config: {
		refs: {
		    home: "homeview",
		    autoCarousel : 'carousel[height=140]',
		},

		control: {
		    autoCarousel: {
		        initialize: 'onAutoCarouselInitialize'
		    },
		    'productlistview[isActivityProductListView=true]': {
		    	itemtap: 'onActivityProductListItemTap'
		    },
		    'button[text=促銷賣場]': {
		    	tap: 'onPromotionsButtonTap'
		    },
		    'promotionslistview[isPromotionsListView=true]':{
		    	itemtap: 'onPromotionsListViewItemTap'
		    },
		    'promotionslist2view[isPromotionsList2View=true]':{
		    	itemtap: 'onPromotionsListView2ItemTap'
		    }
		},
		
		views: [
			'ProductList', 'ProductInfor' , 'PromotionsList' , 'PromotionsList2', 'ProductList2'
		]
    
    },
    
    launch: function () {
    },

	onAutoCarouselInitialize: function (cmp) {
		var me = this,
			store = Ext.getStore('AutoCarousel');
		store.on('refresh', me.onAutoCarouselStoreRefresh,me);
		store.load();
        cmp.on({
            delegate: '> image',
            scope   : me,
            tap: 'onAutoCarouselItemTap'
        });
	},
	
	onAutoCarouselStoreRefresh: function(cmp , records, successful, operation, eOpts ){
		var me = this,
			view = me.getAutoCarousel(),
			ln = records.length,
			items = [];
		for(i=0;i < ln ;i++){
			items.push({xtype: 'image', src: records.items[i].data.image,
				record: records.items[i]
			});
		}
		view.add(items);
		var task = Ext.create('Ext.util.DelayedTask');
		task.setScope(me);
		task.setFn(function(){
				var me =this,
					carousel = me.getAutoCarousel(),
					currentItem = carousel.getActiveItem(),
					items = carousel.getItems(),
					index = items.indexOf(currentItem)+1,
					next =null;
				if(index >= items.length){
					index = 1
				}
				next = items.items[index];
				carousel.animateActiveItem(next,{
                	type: 'fade'
            	});
		});
		task.delay(3000);
	},
	
	onAutoCarouselItemTap: function(cmp){
		var me = this,
			record = cmp.getRecord();
			view = Ext.create('MyShop.view.ProductList', {isActivityProductListView: true}),
			button = me.activityButton,
			store= view.getStore(),
			home = me.getHome();		
		if(!button){
			button = Ext.create('Ext.Button',{text: '活動規則', align: 'right'});
			button.on('tap',me.onActivityButton,me);
			me.activityButton = button;
			home.getNavigationBar().add(button);
		}
		store.getProxy().setExtraParams({actid:record.data.id});
		store.load();
		button.setRecord(record);
		home.setNavigationBar({hidden: false})
		home.push(view);
		home.getNavigationBar().setTitle(record.data.title);
	},
	
	onActivityButton: function(cmp){
		var me = this,
			record = cmp.getRecord(),
			view = Ext.create('Ext.Container', {isActivityView: true}),
			home = me.getHome();
		view.setHtml(record.data.intro);
		home.push(view);
		home.getNavigationBar().setTitle(record.data.title);		
	},
	
	onActivityProductListItemTap: function(cmp, index, target, record, e, eOpts){
		var me = this,
			view = Ext.create('MyShop.view.ProductInfor',{isActivityProductInforView: true}),
			home= me.getHome();
		view.setRecord(record);
		home.push(view);
		home.getNavigationBar().setTitle(record.data.title);		
	},
	
	onPromotionsButtonTap: function(){
		var me = this,
			view = Ext.create('MyShop.view.PromotionsList', {isPromotionsListView: true}),
			home= me.getHome();
		home.setNavigationBar({hidden: false})
		home.push(view);
		home.getNavigationBar().setTitle('促銷賣場');
	},
	
	onPromotionsListViewItemTap: function(cmp, index, target, record, e, eOpts){
		var me = this,
			view = Ext.create('MyShop.view.PromotionsList2', {isPromotionsList2View: true}),
			home= me.getHome();
		view.setRecord(record);
		home.push(view);		
		home.getNavigationBar().setTitle(record.data.title);
	},
	
	onPromotionsListView2ItemTap: function(cmp, index, target, record, e, eOpts){
		var me = this,
			view = Ext.create('MyShop.view.ProductList2', {isProductList2View: true}),
			home= me.getHome();
		view.setRecord(record);
		home.push(view);		
		home.getNavigationBar().setTitle(record.data.title);
	}

});
