Ext.define('Note.controller.phone.Menu', {
    extend: 'Ext.app.Controller',
    
    config: {
		refs: {
		    main: "main",
		},
		
		control: {
		    'menuview > list': {
		        itemtap: 'onItemTap'
		    }
		}
    },
    
    launch: function () {
    },
    
    onItemTap: function(cmp, index, target, record, e, eOpts){
    	var me=this,
    		main = me.getMain(),
    		view = cmp.up('menuview'),
    		rec=view.getRecord();
    	if(record.data.text=='編輯記事'){
    		var form= main.down('noteform');
    		if(!form){
				form = Ext.create("Note.view.phone.Form");
				main.add(form);
    		}
    		form.setRecord(rec);
    		main.setActiveItem(form);
    		view.hide();
    	}else if(record.data.text=='移除記事'){
    		view.hide();
    		Ext.Msg.confirm('移除','確定移除記事：'+ rec.data.title+'？', 
    			function(buttonId, value , opts){
    				var me = this;
    				if(buttonId=="yes"){
    					var record = me.getRecord();
    					record.erase();
    				}
    			},
    			view
    		)
    	}else{
    		return;
    	}
    }

});
