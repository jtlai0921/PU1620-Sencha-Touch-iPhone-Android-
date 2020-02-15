Ext.define('MyShop.controller.search.Main', {
    extend: 'Ext.app.Controller',
    requires:[
    ],
    
    config: {
		refs: {
		    searchMain: "searchmain",
		    field: 'searchmain textfield'
		},

		control: {
			searchMain: {
				show: 'onSearchMainShow',
				initialize: 'onSearchMainInitialize'
			},
			'searchmain button[text=傳回]': {
				tap: 'onBackButtonTap',
			},
			'searchmain button[iconCls=search]': {
				tap: 'onSearchButtonTap',
			}			
		},
		
		views: [
			'search.Result'
		]
    
    },
    
    launch: function () {
    	var me =this,
    		store = Ext.getStore('HotKey');
    	store.on('refresh', me.onStoreRefresh, me);
    	me.store = store;

    },
    
    onSearchMainShow: function(){
    	this.store.load();
    },
    
    onStoreRefresh: function(store, records, successful, operation, eOpts){
    	var me = this
    		view = me.getSearchMain().getItems().items[1],
    		ln = records.length,
    		rows=[],
    		temp = null,
    		total = 0,
    		items= [],
    		index = 0,
    		buttons= null;
    	view.removeAll();
 		do{  
            var temp = Math.floor(Math.random() * 3 + 1);  
            total += temp;
            rows.push(temp);
        }while(total<ln);
    	for(var i=0 ; ln1 = rows.length, i< ln1; i++){
    		var col = [];
    		for(j=0 ;j < rows[i] ; j++){
    			var record= records.items[index];
    			col.push({
					text: record.data.key, 
					showAnimation:{
			            type: 'slide',
			            direction: ( j > 0 ? 'left' : 'right' ),
			            duration: 1000
					}
    			});
    			index++;
    			if(index == ln){
    				break;
    			}
    		}
    		items.push({
    			xtype: 'container',
    			layout: {type: 'hbox' ,algin: 'middle'},
    			defaults:{
    				xtype: 'button',
					ui: 'confirm-small', 
					hidden: true,
					flex: 1,
					margin: 10
    			},
				items: col
    		})
    	}
    	view.add(items);
    	buttons = view.query('button');
    	if(buttons.length>0){
    		for(var i=0;ln = buttons.length, i<ln;i++){
    			buttons[i].show();
    		}
    	}
    },
    
    onBackButtonTap: function(){
    	this.getSearchMain().hide();
    },
    
    onSearchButtonTap: function(){
    	var me = this,
    		key = me.getField().getValue();
    	if(Ext.isEmpty(key)){
    		Ext.Msg.alert('請輸入搜尋關鍵字。');
    	}else{
    		me.doSearch(key);
    	}
    },

    onSearchMainInitialize: function(){
    	var me=this,
    		view = me.getSearchMain().getItems().items[1];
    	view.on({
    		delegate: 'button',
    		scope: me,
    		tap: me.onHotKeyButtonTap
    	})
    },

    
    onHotKeyButtonTap: function(cmp){
    	this.doSearch(cmp.getText());
    },
    
    doSearch: function(key){
    	var me = this,
    		view = me.resultview,
    		list = null,
    		store = null;
    	if(!view){
    		view = Ext.create('MyShop.view.search.Result');
    		me.resultview = view;
    		Ext.Viewport.add(view);
    	}
    	view.setKey(key);
    	view.setCategoryId(null);
    	view.down('titlebar').setTitle('“'+key+'”的搜尋結果');
    	list = view.down('productlistview');
    	store = list.getStore();
    	store.getProxy().setExtraParams({key: key});
    	store.load();
    	me.getSearchMain().hide();    	
    	view.show();
    }

});
