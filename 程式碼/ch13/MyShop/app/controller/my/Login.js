Ext.define('MyShop.controller.my.Login', {
    extend: 'Ext.app.Controller',
    requires:[
    ],
    
    config: {
		refs: {
			form: 'loginview'
		},

		control: {
			'loginview button[text=登入]' : {
				tap: 'onLoginFormSubmit'
			}
		},
		
		views: [
		]
    
    },
    
    launch: function () {
    },
    
    onLoginFormSubmit: function(cmp){
    	var form = this.getForm();
    	form.submit({
    		url: 'data/login.asp' ,
    		scope: this,
    		success: function(form, obj, responseText){
    			if(obj.success){
    				MyShop.user = obj.data;
		        	var view = Ext.Viewport.down('mymainview');
		        	if(view){
			    		view.getParent().setActiveItem(view);
		        	}		        	
    			}
    		},
    		failure: Ext.tux.Failure.Form
    	});
    }    

});
