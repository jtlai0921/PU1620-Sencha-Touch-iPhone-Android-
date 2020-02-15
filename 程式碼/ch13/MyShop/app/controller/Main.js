Ext.define('MyShop.controller.Main', {
    extend: 'Ext.app.Controller',
    requires:[
    ],
    
    config: {
		refs: {
			mymain: 'container[title=我的商店]'
		},

		control: {
			mymain : {
				show: 'onMyMainShow'
			}
		},
		
		views: [
		]
    
    },
    
    launch: function () {
    },
    
    onMyMainShow: function(cmp){
    	var view =null;
    	if(MyShop.user.hasLogin){
    		view = cmp.getActiveItem();
    	}else{
    		view = cmp.down('loginview');
    	}
    	cmp.setActiveItem(view);
    }    

});
