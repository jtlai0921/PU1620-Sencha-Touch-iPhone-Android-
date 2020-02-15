Ext.define('MyShop.controller.search.Filter', {
    extend: 'Ext.app.Controller',
    requires:[
    	'Ext.Picker'
    ],
    
    config: {
		refs: {
		    searchFilter: "searchfilter"
		},

		control: {
			'searchfilter dataview': {
				itemtap: 'onFilterItemTap'
			},
			'searchfilter button[text=傳回]': {
				tap: 'onBackButtonTap',
			},
			'searchfilter button[text=完成]': {
				tap: 'onFinishedButtonTap',
			}			
		},
		
		views: [
		]
    
    },
    
    launch: function () {

    },
    
    onFilterItemTap : function(cmp, index, target, record, e, eOpts){
    	var me = this,
			picker = me.picker,
			store = null;
		if(!picker){
			picker = Ext.create('Ext.Picker',{
			    slots: [
			        {
						valueField: 'text',
			            name : 'filteroption',
			            title: record.data.text,
			            store: 'FilterOptions'
			        }
			    ]
			});
			picker.on('change',me.onPickerChange, me);
			me.picker = picker;
			Ext.Viewport.add(picker);
		}		
		store = picker.getItems().items[1].getStore();
		store.clearFilter(true);		
		store.filter('filter_id', record.data.id);
		picker.setValue({filteroption:record.data.value});
		picker.setRecord(record);
		picker.show();
    },
    
    onPickerChange: function(cmp, value, eOpts){
    	var record = cmp.getRecord();
    	record.set('value',value.filteroption);
    	record.save();
    },
    
    onBackButtonTap: function(){
    	this.getSearchFilter().hide();
    },
    
    onFinishedButtonTap: function(){
    	var me = this,
    		view = Ext.Viewport.down('searchresult'),
    		list = view.down('productlistview'),
    		store = list.getStore(),
    		records = Ext.getStore('Filters').getData().items,
    		filters = [];
    	for(var i =0 ; ln= records.length,i<ln;i++){
    		if(records[i].data.value !== '全部'){
    			filters.push({property: records[i].data.text, value: records[i].data.value});
    		}
    	}
    	if(filters.length>0){
	    	store.clearFilter(true);
	    	store.setRemoteFilter(true);
	    	store.filter(filters);
	    	store.load();
	    }
    	me.getSearchFilter().hide();
    }

});
