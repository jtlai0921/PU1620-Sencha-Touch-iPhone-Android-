Ext.define('FirstApp.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.dataview.DataView',
        'Ext.tux.dataview.PhoneItem',
        'FirstApp.view.ProvincePickerTest',
        'FirstApp.view.ProvinceList'
    ],
    config: {
        tabBarPosition: 'bottom',
        activeItem: 4,

        items: [
            {
                title: '範本',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,


                html: '<div id="mainDiv"></div>',
                
				listeners:{
					painted:"onPainted"
				},
				
				onPainted:function(cmp, eOpts){
					var tpl= new Ext.Template(
						'<p>{ProductName}</p>',
						'<p>價格：{Price}</p>',
						'<p>庫存：{Stock}</p>',
						{
							compiled: true
						}
					);
					tpl.overwrite('mainDiv', {ProductId:1, ProductName:"主板", Price:700.00, Stock:10})
				}
				
            },
            {
                title: '進階範本',
                iconCls: 'action',

                styleHtmlContent: true,
                scrollable: true,
                html: '<div id="mainDiv1"></div>',
                
				listeners:{
					painted:"onPainted"
				},
				
				onPainted:function(cmp, eOpts){
					var store = Ext.StoreManager.get("Products");
					//store.on('refresh',this.onRefresh,this,{single:true});
					//store.load();
				},
				
				onRefresh: function(Store,data,eopts){
					var subtpl= new Ext.XTemplate(
						'<tpl for=".">',
							'<div>評論{#}.{data.Title}<div>',
							'<div>{data.User}發表於{data.Posttime:date("Y-m-d H:i:s")}<div>',
							'<div>{data.Content}<div>',
						'</tpl>',
						{
							compiled: true
						}
					);
					
					var tpl= new Ext.XTemplate(
						'<tpl for=".">',
						'<p>{data.ProductName}</p>',
							'<tpl if="data.Price &gt;= 2000"',
								'<p>價格：<span style="color:red;">{data.Price}</span></p>',
							'<tpl elseif="data.Price &gt;= 1000">',
								'<p>價格：<span style="color:green;">{data.Price}</span></p>',
							'<tpl else>',
								'<p>價格：<span style="color:blue;">{data.Price}</span></p>',
							'</tpl>',
						'<p>庫存：{data.Stock}</p>',
						'<h3>評論</h3>',
						'{[this.writeComents(values)]}',
						'<hr>',
						'</tpl>',
						{
							compiled: true,
							writeComents: function(data){
								return subtpl.apply(data.comments().getData().items);
							}
						}
					);
					tpl.overwrite('mainDiv1', data.items);
				}
				
            },
            {
				title:"資料檢視",            	
				
				xtype:"dataview",
				store:"Products",
				selectedCls: 'my-item-selected',
				//mode: 'MULTI',
				itemTpl:[
					'<p>{ProductName}</p>',
						'<tpl if="Price &gt;= 2000"',
							'<p>價格：<span style="color:red;">{Price}</span></p>',
						'<tpl elseif="Price &gt;= 1000">',
							'<p>價格：<span style="color:green;">{Price}</span></p>',
						'<tpl else>',
							'<p>價格：<span style="color:blue;">{Price}</span></p>',
						'</tpl>',
					'<p>庫存：{Stock}</p>',
					'<hr>'
				]
			},
			{
				title:"元件",            	
				
				xtype:"dataview",
			    useComponents: true,
			    defaultType: 'phoneitem',
			    store: {
			        fields: ['type', 'number'],
			        data: [
						{type:'公司',number:"1888888888"},
						{type:'家庭',number:"1388888888"}
			        ]
			    }
			},
			{
				title: '選取器',
				xtype: 'provincepickertest'
			},
			{
				title: '清單',
				xtype: 'provincelist'
			},
			{
				title: '翻頁外掛',
				
				xtype: 'list',
				itemTpl: '{text}',
			    plugins: [
			        {
			            xclass: 'Ext.plugin.ListPaging',
			            loadMoreText: '更多...',
			            noMoreRecordsText: '沒有更多記錄了',
			            autoPaging: true
			        }
			    ],
				store:{
					pageSize: 10,
					fields:[
						{name:'text', type: 'int'}
					],
					autoLoad: true,
					proxy:{
						type:'format',
						url:'data/page.asp'
					}
				}
			}
        ]
    }
});
