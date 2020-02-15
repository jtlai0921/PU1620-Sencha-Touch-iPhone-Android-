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
    'FirstApp': 'app'
});
//</debug>

Ext.application({
    name: 'FirstApp',

    requires: [
        'Ext.MessageBox'
    ],

	models: [
		'Setting'
	],
	
	stores: [
		"Settings"
	],

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
    
	    Ext.fly('appLoadingIndicator').destroy();

		if(isFirst=="yes"){
			Ext.Viewport.add({
				xtype: "carousel",
			    items: [
			        {
			            html: '歡迎',
			            style: "background-color:#5AB5F5"
			        },
			        {
			            html: '功能介紹',
			            style: "background-color:#5AB5F5"
			        },
			        {
			        	layout: 'vbox',			        	
			            style: "background-color:#5AB5F5;padding-bottom:10px;",
			            items: [
			            	{
			            		html: "套用程式的特性",
			            		flex: 1
			            	},
			            	{
			            		xtype: "button",
			            		text: "進入套用程式",
			            		height: 30,
			            		ui: 'action',
			            		handler: function(){
							    	Ext.Viewport.removeAt(0);
			            			Ext.Viewport.add(Ext.create('FirstApp.view.Main'));
			            		}
			            	}
			            ]
			        }
			    ]
			});
			FirstApp.model.Setting.create({key:"isFirst",value:"no"}).save();			
		}else {
			Ext.Viewport.add(Ext.create('FirstApp.view.Main'));			
		}
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "套用程式更新",
            "套用程式已經成功更新到最新版本，是否更新？",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
