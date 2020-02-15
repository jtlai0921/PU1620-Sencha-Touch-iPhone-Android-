Ext.define('FirstApp.view.ProvinceList', {
    extend: 'Ext.dataview.List',
    xtype: 'provincelist',
    requires: [
    ],
    
    config: {
    	indexBar:true,
    	grouped:true,
    	onItemDisclosure: true,
		disclose:function(cmp, record,target,index, e, eOpts){
			console.log("disclose：選取的是："+record.data.text);
		},    	
		store:{
		    fields:[
		    	{name:"id", type:"int"},
		    	"text",
				{
					name:"pinyin", 
					convert:function(v,record){
						return Ext.Pinyin.getCamelChars(record.data.text);
					}
				}
		    ],
		    sorters:"text",
			grouper:{
				groupFn: function(record) {
			   		return record.data.pinyin[0];
				}	    	
			},			
        	data: [
			  {
			    "id": 1,
			    "text": "北京市"
			  },
			  {
			    "id": 2,
			    "text": "天津市"
			  },
			  {
			    "id": 3,
			    "text": "河北省"
			  },
			  {
			    "id": 4,
			    "text": "山西省"
			  },
			  {
			    "id": 5,
			    "text": "內蒙古自治區"
			  },
			  {
			    "id": 6,
			    "text": "遼寧省"
			  },
			  {
			    "id": 7,
			    "text": "吉林省"
			  },
			  {
			    "id": 8,
			    "text": "黑龍江省"
			  },
			  {
			    "id": 9,
			    "text": "上海市"
			  },
			  {
			    "id": 10,
			    "text": "江蘇省"
			  },
			  {
			    "id": 11,
			    "text": "浙江省"
			  },
			  {
			    "id": 12,
			    "text": "安徽省"
			  },
			  {
			    "id": 13,
			    "text": "福建省"
			  },
			  {
			    "id": 14,
			    "text": "江西省"
			  },
			  {
			    "id": 15,
			    "text": "山東省"
			  },
			  {
			    "id": 16,
			    "text": "河南省"
			  },
			  {
			    "id": 17,
			    "text": "湖北省"
			  },
			  {
			    "id": 18,
			    "text": "湖南省"
			  },
			  {
			    "id": 19,
			    "text": "廣東省"
			  },
			  {
			    "id": 20,
			    "text": "海南省"
			  },
			  {
			    "id": 21,
			    "text": "廣西壯族自治區"
			  },
			  {
			    "id": 22,
			    "text": "甘肅省"
			  },
			  {
			    "id": 23,
			    "text": "陝西省"
			  },
			  {
			    "id": 24,
			    "text": "新疆維吾爾自治區"
			  },
			  {
			    "id": 25,
			    "text": "青海省"
			  },
			  {
			    "id": 26,
			    "text": "寧夏回族自治區"
			  },
			  {
			    "id": 27,
			    "text": "重慶市"
			  },
			  {
			    "id": 28,
			    "text": "四川省"
			  },
			  {
			    "id": 29,
			    "text": "貴州省"
			  },
			  {
			    "id": 30,
			    "text": "雲南省"
			  },
			  {
			    "id": 31,
			    "text": "西藏自治區"
			  },
			  {
			    "id": 32,
			    "text": "台灣省"
			  },
			  {
			    "id": 33,
			    "text": "澳門特別行政區"
			  },
			  {
			    "id": 34,
			    "text": "香港特別行政區"
			  }
			]
		    
		},
		itemTpl: '{text}'
    },

	initialize: function() {
		var me=this;
	    me.callParent(arguments);
	    me.on({
	    	scope:me,
	    	itemtap: 'onMyItemTap',
	    	select: 'onMySelect',
	    	selectionchange: 'onMySelectionChange'
	    });
	},
	
	onMyItemTap: function(cmp,index, target, record, e,eOpts){
		console.log(Ext.String.format("觸碰的是：第{0}個項目{1}",index,record.data.text));
	},
	
	onMySelect: function(view,record,eOpts){
		console.log("select：選取的是："+ record.data.text);
	},
	
	onMySelectionChange: function(cm,records,eOpts){
		console.log("selectionchange：選取的是："+ records[0].data.text);
	}
});
