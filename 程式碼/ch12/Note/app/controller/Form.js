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
    		values= form.getValues(),
    		parent = cmp.up('main');
    	if(values.title==""){
    		Ext.Msg.alert('訊息','請輸入標題。');
    	}else{
    		if(values.id==""){
	    		var note =  Ext.create('Note.model.Note', values);
	    		note.save();
				Ext.getStore('Notes').load();
				if(parent){
		    		main.setActiveItem(main.down('list'));
		    	}else{
		    		cmp.up('noteform').hide();
		    	}
		    }else{
				record= form.getRecord();
				form.updateRecord(record);
				record.save();
	    		if(parent){
		    		main.setActiveItem(main.down('list'));
		    	}else{
		    		view = this.getMain().down('container[flex=1]');
					view.down('titlebar').setTitle(record.data.title);
					view.setHtml(record.data.content);
		    		cmp.up('noteform').hide();
		    	}
		    }
    	}
    },
    
    onCancel: function(cmp){
    	var me=this,
    		main = me.getMain(),
    		parent = cmp.up('main');
    		if(parent){
	    		main.setActiveItem(main.down('list'));
	    	}else{
	    		cmp.up('noteform').hide();
	    	}
    }

});
