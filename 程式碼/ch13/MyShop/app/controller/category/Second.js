Ext.define('MyShop.controller.category.Second', {
    extend: 'Ext.app.Controller',
    requires:[
    ],
    
    config: {
		refs: {
			main : 'container[title=分類別]',
		    categoryMain: 'categorymain',
			categorySecondView: 'categorysecond'
		},

		control: {
			'categorysecond button[text=傳回]':{
				tap: 'onBackButtonTap'
			},
			categorySecondView: {
				initialize: 'onCategorySenondViewInitialize'
			},
			'#secondcategorylistview': {
				itemtap : 'onSecondCategoryListViewItemTap'
			}
		},
		
		views: [
			'category.Second' , 'category.Promotions' , 'category.Third', 'search.Result'
		]
    
    },
    
    launch: function () {
    },
    
    onBackButtonTap: function(){
    	this.getMain().setActiveItem(this.getCategoryMain());
    },
    
    onCategorySenondViewInitialize: function(cmp){
    	cmp.down('promotionsitemview').element.on('tap', this.onPromotionsItemViewTap, this);
    },
    
    onPromotionsItemViewTap: function(){
    	var me = this,
    		secondview = me.getCategorySecondView(),
    		view = me.promotionsview,
    		store = null;
    	if(!view){
    		view = Ext.create('MyShop.view.category.Promotions');
    		me.promotionsview = view;
    		me.getMain().add(view);
    		view.down('button[text=傳回]').on('tap', me.onCategoryPromotionsViewBackButtonTap,me);
    	}
    	view.down('titlebar').setTitle(secondview.down('titlebar').getTitle()+'促銷專場');
    	store = view.down('promotionslist2view').getStore();
    	store.getProxy().setExtraParams({id:secondview.promotionsid});
    	store.load();
    	this.getMain().setActiveItem(view);
    },
    
    onCategoryPromotionsViewBackButtonTap: function(){
    	this.getMain().setActiveItem(this.getCategorySecondView());
    },
    
    onSecondCategoryListViewItemTap: function(cmp, index, target, record, e, eOpts){
    	var me =this,
    		view = me.thirdview,
    		dataview = null,
    		store = null,
    		list = null,
    		liststore = null;
    	if(!view){
    		view = Ext.create('MyShop.view.category.Third');
    		me.thirdview = view;
    		me.getMain().add(view);
    		view.down('button[text=傳回]').on('tap', me.onThirdViewBackButtonTap,me);
    		view.getItems().items[2].on('itemtap',me.onThirdViewDataViewItemTap,me)
    	}
	    dataview = view.getItems().items[2];
    	store = dataview.getStore();
    	store.removeAll();
    	store.add(record.data.children);
    	list = view.down('productimagelistview');
    	liststore = list.getStore();
    	liststore.getProxy().setExtraParams({hotid:record.data.categoryid});
    	liststore.load();
    	view.setRecord(record);
    	view.down('titlebar').setTitle(record.data.title);
    	this.getMain().setActiveItem(view);
    },
    
    onThirdViewBackButtonTap: function(){
    	this.getMain().setActiveItem(this.getCategorySecondView());
    },
    
    onThirdViewDataViewItemTap: function(cmp, index, target, record, e, eOpts){
    	var me = this,
    		view = Ext.Viewport.down('searchresult'),
    		list = null,
    		store = null;
    	if(!view){
    		view = Ext.create('MyShop.view.search.Result');
    		Ext.Viewport.add(view);
    	}
    	view.setKey(null);
    	view.setCategoryId(record.data.categoryid);
    	view.down('titlebar').setTitle(record.data.title);
    	list = view.down('productlistview');
    	store = list.getStore();
    	store.getProxy().setExtraParams({categoryid: record.data.categoryid});
    	store.load();
    	view.show();
    }
    

});
