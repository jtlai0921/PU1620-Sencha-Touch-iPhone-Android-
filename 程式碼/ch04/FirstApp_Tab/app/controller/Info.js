Ext.define('FirstApp.controller.Info', {
    extend: 'Ext.app.Controller',    

    config: {
    	
    	refs: {
    		infoTab : "tab[title=訊息]"
    	},
    	
      
        control: {
            "button[text=更新提示]": {
                tap: 'onButtonTap'
            },
            "button[text=清理]": {
                tap: 'onEmpty'
            }
        }
        
    },
    

    launch: function () {
    },

    onButtonTap: function (cm,e,opts) {
    	var me=this,
    		tab = me.getInfoTab(),
    		old = tab.getBadgeText();
    	if(old){
    		tab.setBadgeText(parseInt(old)+5);
    	}else{
    		tab.setBadgeText(5);
    	}
    	
    },
    
    onEmpty: function (cm,e,opts) {
    	var me=this,
    		tab = me.getInfoTab();
    	tab.setBadgeText("");    	
    }

});
