Ext.define('MyShop.view.ProductInfor', {
    extend: 'Ext.Container',
    xtype: 'productinforview',
    requires: [
    	'MyShop.view.Image',
    	'Ext.field.Select'
    ],
    config: {
		scrollable: {
		    direction: 'vertical',
		    directionLock: true
		},
		style: 'background:#fff',
		defaults:{
			padding: '5px',
			style: 'border-bottom: 1px solid #e7e7e7',
		},
		items:[
			{
	            xtype: 'dataview',
	            scrollable: 'horizontal',
	            height:110,
	            inline: {
	                wrap: false
	            },
	            itemTpl: '<div style="width:100px;height:100px;padding:5px;background:#f7f7f7;"><img border="1" src="{image}"></div>',
	            store: {
	            	fields:['image']
	            }
			},
			{
				height: 100,				
				items:[				
					{style:'font-size:14px;', html:''},
					{style:'font-size:12px;', html:''},
					{style:'font-size:14px;', html:''},
					{style:'font-size:12px;', html:''},
					{
						style: 'line-height:100px;',
						width:20,
						docked:'right',
						html:'&gt;'
					}
				]
			},
			{
				layout: {type: 'hbox', align:'center', pack: 'center'},				
				items:[
					{style: 'line-height:55px;',html: '庫存：', width: 80},
					{xtype: 'selectfield', valueField: 'text', flex:1,name: 'province',
			            store:{
			            	fields: ['text'],
			            	sorters:"text",
			            	data: [
								{"text": "北京"},{"text": "天津"},{"text": "河北"},{"text": "山西"},
								{"text": "內蒙古"},{"text": "遼寧"},{"text": "吉林"},{"text": "黑龍江"},
								{"text": "上海"},{"text": "江蘇"},{"text": "浙江"},{"text": "安徽"},
								{"text": "福建"},{"text": "江西"},{"text": "山東"},{"text": "河南"},
								{"text": "湖北"},{"text": "湖南"},{"text": "廣東"},{"text": "海南"},
								{"text": "廣西"},{"text": "甘肅"},{"text": "陝西"},{"text": "新疆"},
								{"text": "青海"},{"text": "寧夏"},{"text": "重慶"},{"text": "四川"},
								{"text": "貴州"},{"text": "雲南"},{"text": "西藏"},{"text": "台灣"},{"text": "澳門"},{"text": "香港"}
			            	]
			            }
					},
					{style: 'line-height:45px;', html: '&nbsp;現貨', width: 80}
				]
			},
			{
				layout: 'hbox',
				height: 60,
				items:[
					{xtype: 'button', text: '加入購物車' ,ui: 'decline'},
					{xtype: 'spacer', width: 100},
					{xtype: 'button', iconCls: 'star', ui: 'action'}
				]
			},
			{
				height:40,
				items:[
					{html:'', style: 'line-height:30px;'},
					{
						style: 'line-height:50px;',
						docked: 'right',
						width:20,
						html:'&gt;'
					}
				]
			},
			{
				height:40,
				items:[
					{html:'', style: 'line-height:30px;'},
					{
						style: 'line-height:50px;',
						docked: 'right',
						width:20,
						html:'&gt;'
					}
				]
			},
			{
				height:40,
				items:[
					{html:'', style: 'line-height:30px;'},
					{
						style: 'line-height:50px;',
						docked: 'right',
						width:20,
						html:'&gt;'
					}
				]
			},
		],
        settingsStore: null,
        
		currentArea: null
    },
 
      updateCurrentArea: function(value){
    	var store = this.getSettingsStore(),
    		record = store.getById('CurrentArea');
    	if(!record){
    		store.add({key:'CurrentArea', value: value});
    	}else{
			record.set('value', value);
			record.commit();
    	}
    },
   
	updateRecord: function(record){
		if(!record){
			return;
		}
		MyShop.model.Product.load(record.data.productid,{
			scope: this,
			success: this.onDataUpdate
		})
	},
	
	onDataUpdate: function(product){
		var me = this,
			items = me.getItems().items;
			store = items[0].getStore(),
			images= product.data.images,
			currentArea = me.getCurrentArea(),
			c1= items[1].getItems().items,
			c2= items[2].getItems().items,
			c4= items[4].getItems().items,
			c5= items[5].getItems().items
			c6= items[6].getItems().items;
		me.product = product;
		for(var i=0;ln=images.length,i < ln;i++){
			store.add({image:images[i]});
		}
		c1[0].setHtml(Ext.String.format('<p>{0}</p>',product.data.name));
		c1[1].setHtml(Ext.String.format('<p>服務：{0}</p>',product.data.services));
		c1[2].setHtml(Ext.String.format('<p>價格：<em style:"color:red;">￥{0}</em>&nbsp;&nbsp;&nbsp;&nbsp;<em style="color:#c0c0c0;">參考價：￥{1}</em></p>',
			Ext.Number.toFixed(product.data.price,2),Ext.Number.toFixed(product.data.refsprice,2)));
		if(!Ext.isEmpty(product.data.promotions)){
			c1[3].setHtml(Ext.String.format('<p>促銷訊息：<em style="color:red">{0}</em></p>',product.data.promotions));
		}
		c2[1].setValue(currentArea);
		if(product.data.stock[currentArea]){
			if(product.data.stock[currentArea]>0){
				c2[2].setHtml('現貨');
			}else{
				c2[2].setHtml('無貨');
			}
		}else{
			c2[2].setHtml('無貨');
		}
		c4[0].setHtml(Ext.String.format('<p>好評<em style="color:red;">（{0}）</em>&nbsp;&nbsp;&nbsp;&nbsp;中評<em style="color:red;">（{1}）</em>&nbsp;&nbsp;&nbsp;&nbsp;差評<em style="color:red;">（{2}）</em></p>',
			product.data.bestrate,
			product.data.mediumrate,
			product.data.poorrate
		))
		if(product.data.comment>0){
			c5[0].setHtml(Ext.String.format('<p>曬單評論<em style="color:red;">（{0}）</em></p>',product.data.comment))
		}else{
			c5[0].setHtml('<p>暫無曬單評論<p>');
		}
		c6[0].setHtml(Ext.String.format('<p>購買仔細<em style="color:red;">（{0}）</em></p>',product.data.consulting))
	},
	
	initialize: function(){
		var me = this,
			items = me.getItems().items,
			settingStore = null;
    	me.setSettingsStore(Ext.getStore('Settings'));
    	settingStore= me.getSettingsStore(),
    	currentArea = settingStore.getById('CurrentArea');
    	if(!currentArea){
    		me.setCurrentArea('廣東');
    	}
		items[0].on('itemtap',me.onImageItemTap, me);
		items[1].element.on({
			delegate: '> *',
			'tap':me.onContentTap,
			scope: me
		});
		items[4].element.on({
			delegate: '> *',
			'tap':me.onRateTap,
			scope: me
		});
		items[5].element.on({
			delegate: '> *',
			'tap':me.onCommentTap,
			scope: me
		});
		items[6].element.on({
			delegate: '> *',
			'tap':me.onConsultingTap,
			scope: me
		});
		me.down('selectfield').on('change', me.onAreaChange , me);
		me.down('button[text=加入購物車]').on('tap', me.onAddCart , me);
	},
	
	onImageItemTap:function(cmp, index, target, record, e, eOpts){
		var me =this,
			view = me.imagepanel;
		if(!view){
			view = Ext.create('MyShop.view.Image');
			me .imagepanel = view;
			Ext.Viewport.add(view);
		}
		view.setCurrentIndex(index);
		view.setRecord(me.product);
		view.show();
	},
	
	onContentTap: function(){
		console.log(this,arguments);
	},
	
	onRateTap: function(){
		console.log('rate')
	},
	
	onCommentTap: function(){
		console.log('coment')
	},
	
	onConsultingTap: function(){
		console.log('consulting')
	},
	
	onAreaChange: function(cmp, newValue, oldValue, eOpts ){
		if(newValue!= oldValue){
			var me = this,
				stock = me.product.data.stock,
			item = me.getItems().items[2].getItems().items[2];
			me.setCurrentArea(newValue);
			if(stock[newValue]){
				if(stock[newValue]>0){
					item.setHtml('現貨');
				}else{
					item.setHtml('無貨');
				}
			}else{
				item.setHtml('無貨');
			}
		}
	},
	
	onAddCart: function(){
		var me = this,
			product = me.product.data,
			store = Ext.getStore('Carts');
		store.add({ 
			productid: product.productid , 
			productname: product.name,
			price: product.price,
			quantity: 1,			
			subtotal: product.price
		})
	}

});
