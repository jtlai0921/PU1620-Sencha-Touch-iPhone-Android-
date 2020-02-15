Ext.define('FirstApp.controller.More', {
    extend: 'Ext.app.Controller',

    config: {
    	refs: {
    		main: "#mainContent"
    	},
     
        control: {
            "button[text=設定]": {
                tap: 'onButtonSettingTap'
            },
            "button[text=關於]": {
                tap: 'onButtonAboutTap'
            }
        },
        
        views:[
        	"FirstApp.view.more.About",
        	"FirstApp.view.more.Setting"
        ]
        
        
    },
    

    launch: function () {
    },

    onButtonSettingTap: function (cm,e,opts) {
    	var me=this,
    		main=me.getMain(),
    		view=main.down("settingview");
    	if(!view){
    		view=Ext.create("FirstApp.view.more.Setting");
    	}
    	main.down("moreview").push(view);
    },
    
    onButtonAboutTap: function (cm,e,opts) {
    	var me=this,
    		view=Ext.create("FirstApp.view.more.About");
    	this.getMain().down("moreview").push(view);
    }
    

});
