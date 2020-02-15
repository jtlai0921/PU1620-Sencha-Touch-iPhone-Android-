Ext.define('Note.controller.phone.Main', {
    extend: 'Note.controller.Main',
    
    config: {
		control: {
		    'list': {
		    	disclose: 'onDisclose',
		    	itemtaphold: 'onItemTapHold'
		    }
		},
		
		views: [
			'Form' , 'phone.Details' , 'phone.Menu'
		]
    
    },
    
    launch: function () {
    },

	onAdd: function () {
		var me=this,
			main= me.getMain(),
			noteform = main.down('noteform');
		if(!noteform){
			noteform = Ext.create("Note.view.Form");
			main.add(noteform);
		}
		noteform.setValues({id:'', title:'', content:''});
		noteform.down('titlebar').setTitle('新增記事');
		main.setActiveItem(noteform);
	},
	
	onDisclose: function(cmp, record, target, index, e, eOpts){
		var me=this,
			main= me.getMain(),
			view = main.down('detailsview');
		if(!view){
			view = Ext.create("Note.view.phone.Details");
			main.add(view);
		}
		view.down('titlebar').setTitle(record.data.title);
		view.setHtml(record.data.content);
		main.setActiveItem(view);
	},
	
	onItemTapHold: function(cmp, index, target, record, e, eOpts ){
		var menu = Ext.getCmp('menu');
		if(!menu){
			menu = Ext.create('Note.view.phone.Menu',{id: 'menu'});
			Ext.Viewport.add(menu);
		}
		menu.setRecord(record);
		menu.down('titlebar').setTitle(record.data.title);
		menu.show();
	}

});
