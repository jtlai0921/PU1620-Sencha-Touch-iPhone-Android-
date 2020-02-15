Ext.define('FirstApp.controller.more.Setting', {
    extend: 'Ext.app.Controller',

    config: {
    	refs: {
    		main: "#mainContent"
    	},
     
        control: {
            "button[text=賬號設定]": {
                tap: 'onButtonAccountTap'
            },
            "button[text=主旨設定]": {
                tap: 'onButtonThemeTap'
            }
        },
        
        views:[
        	"FirstApp.view.more.Account",
        	"FirstApp.view.more.Theme"
        ]
        
    },
    

    launch: function () {
    },

    onButtonAccountTap: function (cm,e,opts) {
    	var me=this,
    		view=Ext.create("FirstApp.view.more.Account");
    	this.getMain().down("moreview").push(view);
    },

    onButtonThemeTap: function (cm,e,opts) {
    	var me=this,
    		view=Ext.create("FirstApp.view.more.Theme");
    	this.getMain().down("moreview").push(view);
    }
    
});
