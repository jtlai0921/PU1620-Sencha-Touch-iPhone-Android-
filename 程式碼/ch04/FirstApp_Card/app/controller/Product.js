Ext.define('FirstApp.controller.Product', {
    extend: 'Ext.app.Controller',

    config: {
      
        control: {
            "button[text=檢視產品]": {
                tap: 'onButtonTap'
            }
        }
        
    },
    

    launch: function () {
    },

    onButtonTap: function (cm,e,opts) {
    	Ext.Msg.alert("檢視產品");
    }

});
