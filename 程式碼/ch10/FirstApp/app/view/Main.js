//@charset UTF-8

Ext.define('FirstApp.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.device.Connection',
        'Ext.device.Device',
        'Ext.device.Camera',
        'Ext.Img'
    ],
    config: {
        tabBarPosition: 'bottom',
        activeItem: 1,

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome to Sencha Touch 2'
                },
                html: [
					'連線狀態：'+ ( Ext.device.Connection.isOnline() ? '線上' : '離線'),
					'連線型態：' + Ext.device.Connection.getType(),
		            '裝置名稱: ' + Ext.device.Device.name,
		            '裝置平台: ' + Ext.device.Device.platform,
		            '裝置的UUID: ' + Ext.device.Device.uuid
                ].join("</br>"),
            },
            {
            	title: '相機',
            	
            	scrollable: true,
            	items:[
            		{
            			xtype: 'toolbar' , 
            			docked: 'top',
            			items:[
            				{
            					text: 'album+data',
            					handler: function(cmp){
									Ext.device.Camera.capture({
									    success: function(image) {
									    	Ext.getCmp('mytextarea').setValue(image);
									        Ext.getCmp('myimage').setSrc('data:image/png;base64,'+image);
									    },
									    failure: function(){
									    	Ext.getCmp('mytextarea').setValue(arguments.toString());
									    },
									    quality: 75,
									    source: 'album',
									    destination: 'data',
									    width:200,
									    height: 200,
									    encoding: 'png'
									});
            					}
            				},
            				{
            					text: 'camera+data',
            					handler: function(cmp){
									Ext.device.Camera.capture({
									    success: function(image) {
									    	Ext.getCmp('mytextarea').setValue(image);
									        Ext.getCmp('myimage').setSrc('data:image/jpeg;base64,'+image);
									    },
									    failure: function(){
									    	Ext.getCmp('mytextarea').setValue(arguments.toString());
									    },
									    quality: 75,
									    source: 'camera',
									    destination: 'data',
									    width:200,
									    height: 200,
									    encoding: 'jpg'
									});
            					}
            				},
            				{
            					text: 'library+file',
            					handler: function(cmp){
									Ext.device.Camera.capture({
									    success: function(image) {
									    	Ext.getCmp('mytextarea').setValue(image);
									        Ext.getCmp('myimage').setSrc(image);
									    },
									    failure: function(){
									    	Ext.getCmp('mytextarea').setValue(arguments.toString());
									    },
									    quality: 75,
									    source: 'library',
									    destination: 'file',
									    width:200,
									    height: 200
									});
            					}
            				},
            				{
            					text: '上傳圖片',
            					handler: function(cmp){
									Ext.device.Camera.capture({
									    success: function(image) {
									    	Ext.Ajax.request({
									    		url: 'http://192.168.0.100:8080/data/upload.asp',
									    		params:{data: image},
									    		success:function(response, opts){
											    	try{
											    		var obj = Ext.decode(response.responseText);
											    		if(obj.success){
											    			Ext.getCmp('mytextarea').setValue(obj.data);
											        		Ext.getCmp('myimage').setSrc('http://192.168.0.100:8080/'+obj.data);
											        	}else{
											        		Ext.getCmp('mytextarea').setValue(obj.msg);
											        	}
											        }catch(err){
											        	Ext.getCmp('mytextarea').setValue(response.responseText);
											        }
									    		},
									    		failure:function(response, opts){
											        Ext.getCmp('mytextarea').setValue(response.responseText);
									    		}
									    	});
									    },
									    failure: function(){
									    	Ext.getCmp('mytextarea').setValue(arguments.toString());
									    },
									    quality: 75,
									    source: 'library',
									    destination: 'data',
									    width:200,
									    height: 200									    
									});
            					}            					
            				}
            			]
            		},
    				{
    					xtype: 'image',
    					id: 'myimage',
	            		width:200,
	            		height:200,
	            		margin:'10px auto',
	            		src: 'resources/icons/no-photo.jpg',
    				},
    				{
    					xtype: 'textareafield',
    					id: 'mytextarea',
    					label: '傳回值'
    				}
            	]
            }
        ]
    }
});
