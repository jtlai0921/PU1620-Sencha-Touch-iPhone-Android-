Ext.define('MyShop.controller.search.Result', {
    extend: 'Ext.app.Controller',
    requires:[
    ],
    
    config: {
		refs: {
		    searchResult: "searchresult"
		},

		control: {
			searchResult: {
				initialize: 'onSearchResultInitialize'
			},
			'searchresult button[text=傳回]': {
				tap: 'onBackButtonTap',
			},
			'searchresult button[text=篩選]': {
				tap: 'onFilterButtonTap',
			}			
		},
		
		views: [
			'search.Filter'
		]
    
    },
    
    launch: function () {

    },
    
    onSearchResultInitialize: function(cmp){
    	cmp.down('segmentedbutton').on({
    		delegate: 'button',
    		scope: this,
    		tap : this.onSegmentedbuttonTap
    	});
    },
    
    onSegmentedbuttonTap : function(cmp){
    	var text = cmp.getText(),
			field='',
			dir = 'ASC',
			store = this.getSearchResult().down('productlistview').getStore();
		if(text == '價格'){
			var iconCls = cmp.getIconCls();
			if(iconCls=='uparrow'){
				dir = 'DESC';
				cmp.setIconCls('downarrow')
			}else{
				dir = 'ASC';
				cmp.setIconCls('uparrow')
			}
			field = 'price';
		}else if(text == '銷量'){
			field = 'sales';
		}else{
			field = 'rel';
		}
		store.setRemoteSort(true);
		store.sort(field,dir);
		store.load();
    },
    
    onBackButtonTap: function(){
    	this.getSearchResult().hide();
    },
    
    onFilterButtonTap: function(){
    	var me = this,
    		view = me.filterview;
    	if(!view){
    		view = Ext.create('MyShop.view.search.Filter'),
    		me.filterview = view;
    		Ext.Viewport.add(view);
    	}
    	view.down('titlebar').setTitle(me.getSearchResult().getKey()+'-'+'篩選')
    	view.show();
    }

});
