Ext.define('Note.controller.Main', {
    extend: 'Ext.app.Controller',
    
    config: {
		refs: {
		    main: "main",
		},

		control: {
		    'button[iconCls=add]': {
		        tap: 'onAdd'
		    },
		    'list': {
		    	disclose: 'onDisclose',
		    	//itemtaphold: 'onItemTapHold',
		    	itemtap: 'onItemTap'
		    }
		},
		
		views: [
			'Form' , 'Details' , 'Menu'
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
			view = Ext.create("Note.view.Details");
			main.add(view);
		}
		view.down('titlebar').setTitle(record.data.title);
		view.setHtml(record.data.content);
		main.setActiveItem(view);
	},
	
	onItemTapHold: function(cmp, index, target, record, e, eOpts ){
		var menu = Ext.getCmp('menu');
		if(!menu){
			menu = Ext.create('Note.view.Menu',{id: 'menu'});
			Ext.Viewport.add(menu);
		}
		menu.setRecord(record);
		menu.down('titlebar').setTitle(record.data.title);
		menu.show();
	},
	
	onItemTap: function(cmp, index, target, record, e, eOpts){
		/*
		//以下是8.1節要使用到的程式碼
		var tips = Ext.getCmp('tips');
		if(!tips){
			tips = Ext.create('Ext.Panel',{
				id: 'tips', 
				styleHtmlContent: true, 
				scrollable: true , 
		        width: Ext.os.is.Phone ? '12em' : '16em',
		        height: (Ext.os.is.BlackBerry && Ext.os.version.getMajor() === 10) ? '12em' : (Ext.os.is.Phone ? '12.5em' : '16em'),
		        items: [
			    	{
			            docked: 'top',
			            xtype: 'titlebar',
			            items:{
			            	xtype: 'button',
			            	iconCls: 'delete',
			            	align: 'right',
			            	handler: function(cmp){
			            		cmp.up('panel').hide();
			            	}
			        	}
					}
				]
			});
			Ext.Viewport.add(tips);
		}
		tips.setHtml(record.data.content);
		tips.showBy(target);
		*/
		
		var me=this,
			actionsheet = Ext.getCmp('noteActionSheet');
		if(!actionsheet){
			actionsheet = Ext.create('Ext.ActionSheet',{
				id: 'noteActionSheet',
				items:[
					{text: '編輯記事', ui: 'action', handler: me.onEditNote, scope: me},
					{text: '移除記事', ui: 'decline', handler: me.onDeleteNote, scope: me},
					{text: '取消' , ui: 'confirm', handler: me.onCancel, scope: me}
				]
			});
			Ext.Viewport.add(actionsheet);
		}
		actionsheet.setRecord(record);
		actionsheet.show();
		
	},
	
	onEditNote: function(cmp){
		var me = this,
    		main = me.getMain(),
    		form= main.down('noteform'),
    		actionsheet = cmp.up('actionsheet');
		if(!form){
			form = Ext.create("Note.view.Form");
			main.add(form);
		}
		form.setRecord(actionsheet.getRecord());
		main.setActiveItem(form);
		actionsheet.hide();
	},
	
	onDeleteNote: function(cmp){
		var me = this,
    		main = me.getMain(),
    		actionsheet = cmp.up('actionsheet'),
    		rec= actionsheet.getRecord();    		
    	actionsheet.hide();
		Ext.Msg.confirm('移除','確定移除記事：'+ rec.data.title+'？', 
			function(buttonId, value , opts){
				var me = this;
				if(buttonId=="yes"){
					var record = me.getRecord();
					record.erase();
				}
			},
			actionsheet
		)
	},
	
	onCancel: function(cmp){
		cmp.up('actionsheet').hide();
	}

});
