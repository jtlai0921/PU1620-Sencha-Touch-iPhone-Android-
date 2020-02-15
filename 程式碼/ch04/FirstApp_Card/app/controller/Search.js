Ext.define('FirstApp.controller.Search', {
    extend: 'Ext.app.Controller',

    config: {
      
        control: {
            "toolbar > button[text=搜尋]": {
                tap: 'onButtonTap'
            }
        }
        
    },
    

    launch: function () {
    },

    onButtonTap: function (cm,e,opts) {
    	var me=this,
    		value = cm.up().down("textfield").getValue();
    	if(value){
    		Ext.Msg.alert(value);
    	}else{
    		Ext.Msg.alert("請輸入搜尋關鍵字。");
    	}
    }

});
