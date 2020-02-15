/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

// DO NOT DELETE - this directive is required for Sencha Cmd packages to work.
//@require @packageOverrides

//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'MyShop': 'app',
    'Ext.tux': 'tux'
});
//</debug>

Ext.application({
    name: 'MyShop',

    requires: [
        'Ext.MessageBox',
        'Ext.tux.Failure',
        'Ext.tux.proxy.Format'
    ],
    
    models: ['Product', 'Setting' , 'Cart' , 'Filter' , 'FilterOption'],
    
    stores: ['AutoCarousel', 'Settings', 'Carts' , 'HotKey', 'Filters' , 'FilterOptions'],
    
    controllers: ['Home' , 'HomeFirst', 'search.Main', 'search.Result', 'search.Filter', 'category.Main', 'category.Second', 'cart.Main', 'Main','my.Main' , 'my.Login'],

    views: [
        'Main'        
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
		var me=this,
			setting=Ext.getStore("Settings"),
			isFirst= setting.getById("isFirst") || "yes";
		if(isFirst=="yes"){
			var rec = MyShop.model.Filter.create({text: '庫存' , value: '全部'});
			rec.save();
			MyShop.model.FilterOption.create({text: '全部' , 'filter_id': rec.data.id}).save();
			MyShop.model.FilterOption.create({text: '廣東' , 'filter_id': rec.data.id}).save();
			MyShop.model.FilterOption.create({text: '北京' , 'filter_id': rec.data.id}).save();
			MyShop.model.FilterOption.create({text: '山東' , 'filter_id': rec.data.id}).save();
			rec = MyShop.model.Filter.create({text: '配送方' , value: '全部'});
			rec.save();
			MyShop.model.FilterOption.create({text: '全部' , 'filter_id': rec.data.id}).save();
			MyShop.model.FilterOption.create({text: '本店配送' , 'filter_id': rec.data.id}).save();
			MyShop.model.FilterOption.create({text: '第三方配送' , 'filter_id': rec.data.id}).save();
			MyShop.model.Setting.create({key:"isFirst",value:"no"}).save();
		}
		
		Ext.Ajax.request({
		    url: 'data/user.asp',
		    failure: Ext.tux.Failure.Ajax,
		    success: function(response){
		        var text = response.responseText,
		        	result = eval('('+text+ ')');
		        if(result && result.success){
		        	MyShop.user = result.data;
		        	var view = Ext.Viewport.down('mymainview');
		        	if(view){
			    		view.down('container[isUsername=true]').setHtml(MyShop.user.username);
			    		view.down('container[isBalance=true]').setHtml('余額：<em style="color:red;">'+ Ext.Number.toFixed(MyShop.user.balance,2)+"</em>");
			    		view.down('container[isPoints=true]').setHtml('積分：'+MyShop.user.points);
		        	}
		        }
		    }
		});
		
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('MyShop.view.Main'));
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
