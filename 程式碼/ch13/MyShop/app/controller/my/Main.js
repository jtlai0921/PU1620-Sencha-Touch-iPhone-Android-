Ext.define('MyShop.controller.my.Main', {
    extend: 'Ext.app.Controller',
    requires:[
    ],
    
    config: {
		refs: {
			mymain: 'mymainview',
			username: 'mymainview container[isUsername=true]',
			balance: 'mymainview container[isBalance=true]',
			points: 'mymainview container[isPoints=true]'
		},

		control: {
			mymain : {
				show: 'onMyMainViewShow'
			}
		},
		
		views: [
		]
    
    },
    
    launch: function () {
    },
    
    onMyMainViewShow: function(cmp){
    	if(MyShop.user && MyShop.user.hasLogin){
    		var me =this;
    		me.getUsername().setHtml(MyShop.user.username);
    		me.getBalance().setHtml('余額：<em style="color:red;">'+ Ext.Number.toFixed(MyShop.user.balance,2)+"</em>");
    		me.getPoints().setHtml('積分：'+MyShop.user.points);
    	}
    }    

});
