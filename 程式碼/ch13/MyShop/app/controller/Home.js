Ext.define('MyShop.controller.Home', {
    extend: 'Ext.app.Controller',
    requires:[
    ],
    
    config: {
		refs: {
		    home: "homeview",
		    main: "main"
		},

		control: {
			home: {
				push: 'onHomePush',
				pop: 'onHomePop'
			},
			main: {
				activeitemchange: 'onTabChange'
			}
		},
		
		views: [
			'search.Main'
		]
    
    },
    
    launch: function () {
    },
    
    onHomePush: function(cmp, view){
    	if(view.isActivityView || view.isActivityProductInforView){
    		cmp.getNavigationBar().down('button[text=活動規則]').hide();
    	}
    },
    
    onHomePop: function(cmp, view){
    	if(view.isActivityView || view.isActivityProductInforView){
    		cmp.getNavigationBar().down('button[text=活動規則]').show();
    	}
    	if(view.isActivityProductListView || view.isPromotionsListView){
    		cmp.getNavigationBar().hide();
    	}
	},
	
	onTabChange: function( cmp, value, oldValue, eOpts ){
		var me = this,
			view = me.searchmain;
		if(value.title == '搜尋'){
			if(!view){
				view = Ext.create('MyShop.view.search.Main');
				me.searchmain = view;
				Ext.Viewport.add(view);
			}
			view.show();
			return false;
		}
	}

});
