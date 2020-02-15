Ext.define('FirstApp.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
        'Ext.Ajax',
        'Ext.data.Store',
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Ajax',
                iconCls: 'home',

                items: [
	                {
	                	xtype:'button',
						text: "載入資料",
						handler: function(){
							Ext.Ajax.request({
								url: "data/result.asp",
								params: {id:1},
								
								success: function(response,options){
									var result=eval("(" + response.responseText + ")"),
										msg="";
									if(result && result.success){
										//傳回資料正確，做後續處理
										msg= result.msg;
									}else {
										//服務處理錯誤，若果有錯誤訊息，顯示傳回的錯誤訊息
										//若果沒有傳回錯誤訊息，顯示“發生錯誤”
										msg= result.msg || "發生錯誤。"
									}
									Ext.Msg.alert("訊息",msg);
								},
								
								failure: Ext.tux.Failure.Ajax
							});
						}
	                },
					{
						xtype: "button",
						text: "新增產品模型案例",
						handler: function(){
							var product=Ext.create("FirstApp.model.Product");
							//console.log(product.data);
							console.log(product.validate().items);							
						}
					},
					{
						xtype: "button",
						text: "載入產品案例",
						handler: function(){
							FirstApp.model.Product.load(1,{
							    success: function(product, operation) {
							        console.log(product);
							        console.log(product.comments());
									product.erase({
										success:function(){
											console.log(arguments);
										}
									});
							    }
							})
						}
					},
					{
						xtype: "button",
						text: "Store的新增動作",
						handler: function(){
							var store = Ext.StoreManager.get("Products");
							store.add([{ProductName:"新增主板", Price:600.00, Stock:8},{ProductName:"新增手機", Price:1000.00, Stock:10}]);
							var newRecords = store.getNewRecords();
							for(i=newRecords.length-1;i>=0;i--){
								console.log(i,":",newRecords[i].getData())
							}
							console.log(store.sync());
							for(i=newRecords.length-1;i>=0;i--){
								newRecords[i].commit();
							}
							console.log(store.getNewRecords());
						}
					},
					{
						xtype: "button",
						text: "Store的編輯動作",
						handler: function(){
							var store = Ext.StoreManager.get("Products"),
								record = store.getAt(0);
							console.log("編輯前：",record.data);
							record.set("ProductName","新的產品名");
							record.set("Price", 2000);
							console.log("編輯後：",record.data);
							console.log(store.getUpdatedRecords());
							console.log(store.sync());
							console.log("同步後：",record.data);
							record.commit();
							console.log(store.getUpdatedRecords());
						}
					},
					{
						xtype: "button",
						text: "Store的移除動作",
						handler: function(){
							Ext.Ajax.request({
								url:"data/products.asp",
								params:{id: "1,5"},
								
								success: function(response,options){
									var result=eval("(" + response.responseText + ")"),
										msg="";
									if(result && result.success){
										//傳回資料正確，做後續處理
										var store= Ext.StoreManager.get("Products"),
											data=result.data;
										console.log("移除前：",store.getData());
										for(var i=data.length-1;i>=0;i--){
											var record=store.getById(data[i]);
											record.destroy();
										}
										console.log("移除後：",store.getData());
										msg = "記錄已成功移除。";
									}else {
										//服務處理錯誤，若果有錯誤訊息，顯示傳回的錯誤訊息
										//若果沒有傳回錯誤訊息，顯示“發生錯誤”
										msg= result.msg || "發生錯誤。"
									}
									Ext.Msg.alert("訊息",msg);
								},
								
								failure: Ext.tux.Failure.Ajax
							})
						}
					}
	           ]
            },
            {
                title: 'Get Started',
                iconCls: 'action',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Getting Started'
                    },
                    {
                        xtype: 'video',
                        url: 'http://av.vimeo.com/64284/137/87347327.mp4?token=1330978144_f9b698fea38cd408d52a2393240c896c',
                        posterUrl: 'http://b.vimeocdn.com/ts/261/062/261062119_640.jpg'
                    }
                ]
            }
        ]
    }
});
