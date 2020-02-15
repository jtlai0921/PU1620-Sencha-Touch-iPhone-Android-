Ext.define('FirstApp.controller.Form', {
    extend: 'Ext.app.Controller',

    config: {
      
        control: {
            "button[text=setValues]": {
                tap: 'onSetValues'
            },
            "button[text=getValues]": {
                tap: 'onGetValues'
            },
            "button[text=setRecord]": {
                tap: 'onSetRecord'
            },
            "button[text=getRecord]": {
                tap: 'onGetRecord'
            },
            "button[text=submit]": {
                tap: 'onSubmit'
            },
            "button[text=reset]": {
                tap: 'onReset'
            }
        }
        
    },
    

    launch: function () {
    },

    onSetValues: function(cmp , e , eOpts){
    	cmp.up('myform').setValues({ProductId:1,ProductName:"主板",Price:700.00,Stock:10});
    },
    
    onGetValues: function(cmp , e , eOpts){
    	console.log(cmp.up('myform').getValues())
    },
    
    onSetRecord: function(cmp, e, eOpts){
		FirstApp.model.Product.load(1,{
			scope: cmp,
		    success: function(product, operation) {
		        this.up('myform').setRecord(product);
		    }
		})
    	
    },
    
    onGetRecord: function(cmp , e, eOpts){
    	var form=cmp.up('myform'),
    		record= form.getRecord();
    	form.updateRecord(record);
    	console.log(record);
    },
    
    onSubmit: function(cmp , e, eOpts){
    	cmp.up('myform').submit({
    		url: 'data/product.asp' ,
    		success: function(){
    			console.log(arguments);
    		},
    		failure: Ext.tux.Failure.Form
    	});
    },
    
    onReset: function(cmp , e, eOpts){
    	cmp.up('myform').reset();
    }

});
