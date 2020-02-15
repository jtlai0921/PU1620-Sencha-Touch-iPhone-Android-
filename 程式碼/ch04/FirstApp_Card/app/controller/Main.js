Ext.define('FirstApp.controller.Main', {
    extend: 'Ext.app.Controller',
    
    config: {
		refs: {
		    main: "#mainContent",
		},

		control: {
		    "segmentedbutton": {
		        toggle: 'onButtonToggle'
		    }
		},
		
		views: [
			'Product','More'
		]
    
    },
    
	cacheContent:{
	},

	mapClass:{
		"搜尋" : "FirstApp.view.Search",
		"更多" : "FirstApp.view.More"
	},

    launch: function () {
		var me=this,
			items=me.getMain().getItems();
		me.cacheContent["首頁"]=items.getAt(0);
		me.cacheContent["產品"]=items.getAt(1);
    },

	onButtonToggle: function (container, button, pressed) {
		var me=this;
		if(pressed == true){
			var key= button.getText(),
				main= me.getMain(),
				item= me.cacheContent[key];
			if(item){
				main.setActiveItem(item);
			}else{				
				var classname=me.mapClass[key];
				if(classname){
					var view= Ext.create(classname);
					me.cacheContent[key]=view;
					main.add(view);
					main.setActiveItem(view);
				}else{
					Ext.Msg.alert("要載入的檢視不存在。");
				}
			}
		}
	}

});
