Ext.define('Note.controller.Form', {
    extend: 'Ext.app.Controller',
    
    config: {
		refs: {
		    main: "main",
		},
		
		control: {
		    'button[text=儲存]': {
		        tap: 'onSave'
		    },
		    'button[text=取消]': {
		        tap: 'onCancel'
		    }
		}
    },
    
    launch: function () {
    },
    
    onSave: function(cmp){
    	var form=cmp.up('formpanel'),
    		values= form.getValues();
    	if(values.title==""){
    		Ext.Msg.alert('訊息','請輸入標題。');
    	}else{
    		if(values.id==""){
	    		var note =  Ext.create('Note.model.Note', values);
	    		note.save();    		    		
	    		var main = this.getMain();
	    		main.down('list').getStore().load();
		    	main.setActiveItem(main.down('list'));
		    }else{
				record= form.getRecord();
				form.updateRecord(record);
				record.save();
	    		var main = this.getMain();
		    	main.setActiveItem(main.down('list'));
		    }
    	}
    },
    
    onCancel: function(){
    	var me=this,
    		main = me.getMain();
    	main.setActiveItem(main.down('list'));
    	
    }

});
