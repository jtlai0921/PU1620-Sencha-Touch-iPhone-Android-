Ext.define('Ext.tux.picker.Province', {
	extend : 'Ext.picker.Picker',
	xtype : 'Provincepicker',

	config : {
		doneButton:"選取",
		cancelButton:"取消",		
		slots:[
	        {
	            name : 'province',
	            valueField: "id",
	            store:{
	            	fields: [
	            		{name:'id',type:"int"}, 
	            		'text'
	            	],
	            	sorters:"text",
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
	            }
	        },
	        {
	            name : 'city',
	            valueField: "id",
	            store:{
	            	sorters:"text",
	            	fields: [
	            		{name:'id',type:"int"}, 
	            		'text'
	            	]
	            }
	        },
	        {
	            name : 'district',
	            valueField: "id",	            
	            store:{
	            	sorters:"text",
	            	fields: [
	            		{name:'id',type:"int"}, 
	            		'text'
	            	]
	            }
	        }
		]
		
	},

	initialize: function() {
		var me=this,
	    	innerItems = me.getInnerItems();
	    me.callParent();
	    me.ProvinceSlot = innerItems[0];
	    me.CitySlot = innerItems[1];
	    me.DistrictSlot = innerItems[2];
	    me.ProvinceSlot.on("selectionchange",me.onProvinceSelect,me);
	    me.CitySlot.on("selectionchange",me.onCitySelect,me);
	    me.setValue({province: 12, city: 94, district: 906});
	},

	onProvinceSelect:function(cmp ,records, eOpts){
		var me = this,
			record = records[0],
			data=me.cityData[record.data.id],    		
			value=me.getValue(true);
		me.CitySlot.getStore().setData(data);
		city=data[0].id;
		data=me.districtData[city];
		if(data.length==0){
			me.DistrictSlot.getStore().removeAll();
		}else{
			me.DistrictSlot.getStore().setData(data);
		}
	},

	onCitySelect:function(cmp ,records, eOpts){
		var me = this,
			record = records[0],
			data=me.districtData[record.data.id];
		if(data.length==0){
			me.DistrictSlot.getStore().removeAll();
		}else{
			me.DistrictSlot.getStore().setData(data);
		}
	},

	setValue: function(value, animated) {
		var me =this,
			cdata = me.cityData[value.province],
			ddata = me.districtData[value.city];
		me.CitySlot.getStore().setData(cdata);
		me.DistrictSlot.getStore().setData(ddata);
	    me.callParent([value, animated]);
	},

	onDoneButtonTap: function() {
	    var me =this,
	    	oldValue = me._value,
	        newValue = me.getValue(true),
	        change = false;
	    for( key in newValue){
	    	if(newValue[key]!= oldValue[key]){
	    		change = true;
	    		break;
	    	}
	    }
	    
	    if (change) {
	        me.fireEvent('change', me, newValue);            
	    }
	    this.hide();
	},

	getRawValue: function(){
	    var me = this,
	    	values = {
	    		province: "",
	    		city : "",
	    		district : ""
	    	},
	        value = me.getValues(true);

	    if(Ext.isNumber(value.province)){
	    	values.province = me.ProvinceSlot.getStore().getById(value.province).raw.text;
	    }

	    if(Ext.isNumber(value.city)){
	    	values.city = me.CitySlot.getStore().getById(value.city).raw.text;
	    }
	    if(Ext.isNumber(value.district)){
	    	values.district = me.DistrictSlot.getStore().getById(value.district).data.text;
	    }
	    

		return values;
	},


    cityData: {
	  "1": [
	    {
	      "id": 1,
	      "text": "北京市"
	    }
	  ],
	  "2": [
	    {
	      "id": 2,
	      "text": "天津市"
	    }
	  ],
	  "3": [
	    {
	      "id": 5,
	      "text": "邯鄲市"
	    },
	    {
	      "id": 6,
	      "text": "石家莊市"
	    },
	    {
	      "id": 7,
	      "text": "保定市"
	    },
	    {
	      "id": 8,
	      "text": "張家口市"
	    },
	    {
	      "id": 9,
	      "text": "承德市"
	    },
	    {
	      "id": 10,
	      "text": "唐山市"
	    },
	    {
	      "id": 11,
	      "text": "廊坊市"
	    },
	    {
	      "id": 12,
	      "text": "滄州市"
	    },
	    {
	      "id": 13,
	      "text": "衡水市"
	    },
	    {
	      "id": 14,
	      "text": "邢台市"
	    },
	    {
	      "id": 15,
	      "text": "秦皇島市"
	    }
	  ],
	  "4": [
	    {
	      "id": 16,
	      "text": "朔州市"
	    },
	    {
	      "id": 17,
	      "text": "忻州市"
	    },
	    {
	      "id": 18,
	      "text": "太原市"
	    },
	    {
	      "id": 19,
	      "text": "大同市"
	    },
	    {
	      "id": 20,
	      "text": "陽泉市"
	    },
	    {
	      "id": 21,
	      "text": "晉中市"
	    },
	    {
	      "id": 22,
	      "text": "長治市"
	    },
	    {
	      "id": 23,
	      "text": "晉城市"
	    },
	    {
	      "id": 24,
	      "text": "臨汾市"
	    },
	    {
	      "id": 25,
	      "text": "呂梁市"
	    },
	    {
	      "id": 26,
	      "text": "運城市"
	    }
	  ],
	  "5": [
	    {
	      "id": 351,
	      "text": "呼倫貝爾市"
	    },
	    {
	      "id": 352,
	      "text": "呼和浩特市"
	    },
	    {
	      "id": 353,
	      "text": "包頭市"
	    },
	    {
	      "id": 354,
	      "text": "烏海市"
	    },
	    {
	      "id": 355,
	      "text": "烏蘭察布市"
	    },
	    {
	      "id": 356,
	      "text": "通遼市"
	    },
	    {
	      "id": 357,
	      "text": "赤峰市"
	    },
	    {
	      "id": 358,
	      "text": "鄂爾多斯市"
	    },
	    {
	      "id": 359,
	      "text": "巴彥淖爾市"
	    },
	    {
	      "id": 360,
	      "text": "錫林郭勒盟"
	    },
	    {
	      "id": 361,
	      "text": "興安盟"
	    },
	    {
	      "id": 362,
	      "text": "阿拉善盟"
	    }
	  ],
	  "6": [
	    {
	      "id": 27,
	      "text": "沈陽市"
	    },
	    {
	      "id": 28,
	      "text": "鐵嶺市"
	    },
	    {
	      "id": 29,
	      "text": "大連市"
	    },
	    {
	      "id": 30,
	      "text": "鞍山市"
	    },
	    {
	      "id": 31,
	      "text": "撫順市"
	    },
	    {
	      "id": 32,
	      "text": "本溪市"
	    },
	    {
	      "id": 33,
	      "text": "丹東市"
	    },
	    {
	      "id": 34,
	      "text": "錦州市"
	    },
	    {
	      "id": 35,
	      "text": "營口市"
	    },
	    {
	      "id": 36,
	      "text": "阜新市"
	    },
	    {
	      "id": 37,
	      "text": "遼陽市"
	    },
	    {
	      "id": 38,
	      "text": "朝陽市"
	    },
	    {
	      "id": 39,
	      "text": "碟錦市"
	    },
	    {
	      "id": 40,
	      "text": "葫蘆島市"
	    }
	  ],
	  "7": [
	    {
	      "id": 41,
	      "text": "長春市"
	    },
	    {
	      "id": 42,
	      "text": "吉林市"
	    },
	    {
	      "id": 43,
	      "text": "延邊朝鮮族自治州"
	    },
	    {
	      "id": 44,
	      "text": "四平市"
	    },
	    {
	      "id": 45,
	      "text": "通化市"
	    },
	    {
	      "id": 46,
	      "text": "白城市"
	    },
	    {
	      "id": 47,
	      "text": "遼源市"
	    },
	    {
	      "id": 48,
	      "text": "松原市"
	    },
	    {
	      "id": 49,
	      "text": "白山市"
	    }
	  ],
	  "8": [
	    {
	      "id": 50,
	      "text": "哈爾濱市"
	    },
	    {
	      "id": 51,
	      "text": "齊齊哈爾市"
	    },
	    {
	      "id": 52,
	      "text": "雞西市"
	    },
	    {
	      "id": 53,
	      "text": "牡丹江市"
	    },
	    {
	      "id": 54,
	      "text": "七台河市"
	    },
	    {
	      "id": 55,
	      "text": "佳木斯市"
	    },
	    {
	      "id": 56,
	      "text": "鶴崗市"
	    },
	    {
	      "id": 57,
	      "text": "雙鴨山市"
	    },
	    {
	      "id": 58,
	      "text": "綏化市"
	    },
	    {
	      "id": 59,
	      "text": "黑河市"
	    },
	    {
	      "id": 60,
	      "text": "大興安嶺地區"
	    },
	    {
	      "id": 61,
	      "text": "伊春市"
	    },
	    {
	      "id": 62,
	      "text": "大慶市"
	    }
	  ],
	  "9": [
	    {
	      "id": 3,
	      "text": "上海市"
	    }
	  ],
	  "10": [
	    {
	      "id": 63,
	      "text": "南京市"
	    },
	    {
	      "id": 64,
	      "text": "無錫市"
	    },
	    {
	      "id": 65,
	      "text": "鎮江市"
	    },
	    {
	      "id": 66,
	      "text": "蘇州市"
	    },
	    {
	      "id": 67,
	      "text": "南通市"
	    },
	    {
	      "id": 68,
	      "text": "揚州市"
	    },
	    {
	      "id": 69,
	      "text": "鹽城市"
	    },
	    {
	      "id": 70,
	      "text": "徐州市"
	    },
	    {
	      "id": 71,
	      "text": "淮安市"
	    },
	    {
	      "id": 72,
	      "text": "連雲港市"
	    },
	    {
	      "id": 73,
	      "text": "常州市"
	    },
	    {
	      "id": 74,
	      "text": "泰州市"
	    },
	    {
	      "id": 75,
	      "text": "宿遷市"
	    }
	  ],
	  "11": [
	    {
	      "id": 76,
	      "text": "舟山市"
	    },
	    {
	      "id": 77,
	      "text": "衢州市"
	    },
	    {
	      "id": 78,
	      "text": "杭州市"
	    },
	    {
	      "id": 79,
	      "text": "湖州市"
	    },
	    {
	      "id": 80,
	      "text": "嘉興市"
	    },
	    {
	      "id": 81,
	      "text": "寧波市"
	    },
	    {
	      "id": 82,
	      "text": "紹興市"
	    },
	    {
	      "id": 83,
	      "text": "溫州市"
	    },
	    {
	      "id": 84,
	      "text": "麗水市"
	    },
	    {
	      "id": 85,
	      "text": "金華市"
	    },
	    {
	      "id": 86,
	      "text": "台州市"
	    }
	  ],
	  "12": [
	    {
	      "id": 87,
	      "text": "合肥市"
	    },
	    {
	      "id": 88,
	      "text": "蕪湖市"
	    },
	    {
	      "id": 89,
	      "text": "蚌埠市"
	    },
	    {
	      "id": 90,
	      "text": "淮南市"
	    },
	    {
	      "id": 91,
	      "text": "馬鞍山市"
	    },
	    {
	      "id": 92,
	      "text": "淮北市"
	    },
	    {
	      "id": 93,
	      "text": "銅陵市"
	    },
	    {
	      "id": 94,
	      "text": "安慶市"
	    },
	    {
	      "id": 95,
	      "text": "黃山市"
	    },
	    {
	      "id": 96,
	      "text": "滁州市"
	    },
	    {
	      "id": 97,
	      "text": "阜陽市"
	    },
	    {
	      "id": 98,
	      "text": "宿州市"
	    },
	    {
	      "id": 99,
	      "text": "巢湖市"
	    },
	    {
	      "id": 100,
	      "text": "六安市"
	    },
	    {
	      "id": 101,
	      "text": "亳州市"
	    },
	    {
	      "id": 102,
	      "text": "池州市"
	    },
	    {
	      "id": 103,
	      "text": "宣城市"
	    }
	  ],
	  "13": [
	    {
	      "id": 104,
	      "text": "福州市"
	    },
	    {
	      "id": 105,
	      "text": "廈門市"
	    },
	    {
	      "id": 106,
	      "text": "寧德市"
	    },
	    {
	      "id": 107,
	      "text": "莆田市"
	    },
	    {
	      "id": 108,
	      "text": "泉州市"
	    },
	    {
	      "id": 109,
	      "text": "漳州市"
	    },
	    {
	      "id": 110,
	      "text": "龍巖市"
	    },
	    {
	      "id": 111,
	      "text": "三明市"
	    },
	    {
	      "id": 112,
	      "text": "南平市"
	    }
	  ],
	  "14": [
	    {
	      "id": 113,
	      "text": "鷹潭市"
	    },
	    {
	      "id": 114,
	      "text": "新余市"
	    },
	    {
	      "id": 115,
	      "text": "南昌市"
	    },
	    {
	      "id": 116,
	      "text": "九江市"
	    },
	    {
	      "id": 117,
	      "text": "上饒市"
	    },
	    {
	      "id": 118,
	      "text": "撫州市"
	    },
	    {
	      "id": 119,
	      "text": "宜春市"
	    },
	    {
	      "id": 120,
	      "text": "吉安市"
	    },
	    {
	      "id": 121,
	      "text": "贛州市"
	    },
	    {
	      "id": 122,
	      "text": "景德鎮市"
	    },
	    {
	      "id": 123,
	      "text": "萍鄉市"
	    }
	  ],
	  "15": [
	    {
	      "id": 124,
	      "text": "菏澤市"
	    },
	    {
	      "id": 125,
	      "text": "濟南市"
	    },
	    {
	      "id": 126,
	      "text": "青島市"
	    },
	    {
	      "id": 127,
	      "text": "淄博市"
	    },
	    {
	      "id": 128,
	      "text": "德州市"
	    },
	    {
	      "id": 129,
	      "text": "煙台市"
	    },
	    {
	      "id": 130,
	      "text": "濰坊市"
	    },
	    {
	      "id": 131,
	      "text": "濟寧市"
	    },
	    {
	      "id": 132,
	      "text": "泰安市"
	    },
	    {
	      "id": 133,
	      "text": "臨沂市"
	    },
	    {
	      "id": 134,
	      "text": "濱州市"
	    },
	    {
	      "id": 135,
	      "text": "東營市"
	    },
	    {
	      "id": 136,
	      "text": "威海市"
	    },
	    {
	      "id": 137,
	      "text": "棗莊市"
	    },
	    {
	      "id": 138,
	      "text": "日照市"
	    },
	    {
	      "id": 139,
	      "text": "萊蕪市"
	    },
	    {
	      "id": 140,
	      "text": "聊城市"
	    }
	  ],
	  "16": [
	    {
	      "id": 141,
	      "text": "商丘市"
	    },
	    {
	      "id": 142,
	      "text": "鄭州市"
	    },
	    {
	      "id": 143,
	      "text": "安陽市"
	    },
	    {
	      "id": 144,
	      "text": "新鄉市"
	    },
	    {
	      "id": 145,
	      "text": "許昌市"
	    },
	    {
	      "id": 146,
	      "text": "平頂山市"
	    },
	    {
	      "id": 147,
	      "text": "信陽市"
	    },
	    {
	      "id": 148,
	      "text": "南陽市"
	    },
	    {
	      "id": 149,
	      "text": "開封市"
	    },
	    {
	      "id": 150,
	      "text": "洛陽市"
	    },
	    {
	      "id": 151,
	      "text": "濟源市"
	    },
	    {
	      "id": 152,
	      "text": "焦作市"
	    },
	    {
	      "id": 153,
	      "text": "鶴壁市"
	    },
	    {
	      "id": 154,
	      "text": "濮陽市"
	    },
	    {
	      "id": 155,
	      "text": "周口市"
	    },
	    {
	      "id": 156,
	      "text": "漯河市"
	    },
	    {
	      "id": 157,
	      "text": "駐馬店市"
	    },
	    {
	      "id": 158,
	      "text": "三門峽市"
	    }
	  ],
	  "17": [
	    {
	      "id": 159,
	      "text": "武漢市"
	    },
	    {
	      "id": 160,
	      "text": "襄樊市"
	    },
	    {
	      "id": 161,
	      "text": "鄂州市"
	    },
	    {
	      "id": 162,
	      "text": "孝感市"
	    },
	    {
	      "id": 163,
	      "text": "黃岡市"
	    },
	    {
	      "id": 164,
	      "text": "黃石市"
	    },
	    {
	      "id": 165,
	      "text": "鹹寧市"
	    },
	    {
	      "id": 166,
	      "text": "荊州市"
	    },
	    {
	      "id": 167,
	      "text": "宜昌市"
	    },
	    {
	      "id": 168,
	      "text": "恩施土家族苗族自治州"
	    },
	    {
	      "id": 169,
	      "text": "神農架林區"
	    },
	    {
	      "id": 170,
	      "text": "十堰市"
	    },
	    {
	      "id": 171,
	      "text": "隨州市"
	    },
	    {
	      "id": 172,
	      "text": "荊門市"
	    },
	    {
	      "id": 173,
	      "text": "仙桃市"
	    },
	    {
	      "id": 174,
	      "text": "天門市"
	    },
	    {
	      "id": 175,
	      "text": "潛江市"
	    }
	  ],
	  "18": [
	    {
	      "id": 176,
	      "text": "岳陽市"
	    },
	    {
	      "id": 177,
	      "text": "長沙市"
	    },
	    {
	      "id": 178,
	      "text": "湘潭市"
	    },
	    {
	      "id": 179,
	      "text": "株洲市"
	    },
	    {
	      "id": 180,
	      "text": "衡陽市"
	    },
	    {
	      "id": 181,
	      "text": "郴州市"
	    },
	    {
	      "id": 182,
	      "text": "常德市"
	    },
	    {
	      "id": 183,
	      "text": "益陽市"
	    },
	    {
	      "id": 184,
	      "text": "婁底市"
	    },
	    {
	      "id": 185,
	      "text": "邵陽市"
	    },
	    {
	      "id": 186,
	      "text": "湘西土家族苗族自治州"
	    },
	    {
	      "id": 187,
	      "text": "張家界市"
	    },
	    {
	      "id": 188,
	      "text": "懷化市"
	    },
	    {
	      "id": 189,
	      "text": "永州市"
	    }
	  ],
	  "19": [
	    {
	      "id": 190,
	      "text": "廣州市"
	    },
	    {
	      "id": 191,
	      "text": "汕尾市"
	    },
	    {
	      "id": 192,
	      "text": "陽江市"
	    },
	    {
	      "id": 193,
	      "text": "揭陽市"
	    },
	    {
	      "id": 194,
	      "text": "茂名市"
	    },
	    {
	      "id": 195,
	      "text": "惠州市"
	    },
	    {
	      "id": 196,
	      "text": "江門市"
	    },
	    {
	      "id": 197,
	      "text": "韶關市"
	    },
	    {
	      "id": 198,
	      "text": "梅州市"
	    },
	    {
	      "id": 199,
	      "text": "汕頭市"
	    },
	    {
	      "id": 200,
	      "text": "深圳市"
	    },
	    {
	      "id": 201,
	      "text": "珠海市"
	    },
	    {
	      "id": 202,
	      "text": "佛山市"
	    },
	    {
	      "id": 203,
	      "text": "肇慶市"
	    },
	    {
	      "id": 204,
	      "text": "湛江市"
	    },
	    {
	      "id": 205,
	      "text": "中山市"
	    },
	    {
	      "id": 206,
	      "text": "河源市"
	    },
	    {
	      "id": 207,
	      "text": "清遠市"
	    },
	    {
	      "id": 208,
	      "text": "雲浮市"
	    },
	    {
	      "id": 209,
	      "text": "潮州市"
	    },
	    {
	      "id": 210,
	      "text": "東莞市"
	    }
	  ],
	  "20": [
	    {
	      "id": 255,
	      "text": "海口市"
	    },
	    {
	      "id": 256,
	      "text": "三亞市"
	    },
	    {
	      "id": 257,
	      "text": "五指山市"
	    },
	    {
	      "id": 258,
	      "text": "瓊海市"
	    },
	    {
	      "id": 259,
	      "text": "儋州市"
	    },
	    {
	      "id": 260,
	      "text": "文昌市"
	    },
	    {
	      "id": 261,
	      "text": "萬寧市"
	    },
	    {
	      "id": 262,
	      "text": "東方市"
	    },
	    {
	      "id": 263,
	      "text": "澄邁縣"
	    },
	    {
	      "id": 264,
	      "text": "定安縣"
	    },
	    {
	      "id": 265,
	      "text": "屯昌縣"
	    },
	    {
	      "id": 266,
	      "text": "臨高縣"
	    },
	    {
	      "id": 267,
	      "text": "白沙黎族自治縣"
	    },
	    {
	      "id": 268,
	      "text": "昌江黎族自治縣"
	    },
	    {
	      "id": 269,
	      "text": "樂東黎族自治縣"
	    },
	    {
	      "id": 270,
	      "text": "陵水黎族自治縣"
	    },
	    {
	      "id": 271,
	      "text": "保亭黎族苗族自治縣"
	    },
	    {
	      "id": 272,
	      "text": "瓊中黎族苗族自治縣"
	    }
	  ],
	  "21": [
	    {
	      "id": 307,
	      "text": "防城港市"
	    },
	    {
	      "id": 308,
	      "text": "南寧市"
	    },
	    {
	      "id": 309,
	      "text": "崇左市"
	    },
	    {
	      "id": 310,
	      "text": "來賓市"
	    },
	    {
	      "id": 311,
	      "text": "柳州市"
	    },
	    {
	      "id": 312,
	      "text": "桂林市"
	    },
	    {
	      "id": 313,
	      "text": "梧州市"
	    },
	    {
	      "id": 314,
	      "text": "賀州市"
	    },
	    {
	      "id": 315,
	      "text": "貴港市"
	    },
	    {
	      "id": 316,
	      "text": "玉林市"
	    },
	    {
	      "id": 317,
	      "text": "百色市"
	    },
	    {
	      "id": 318,
	      "text": "欽州市"
	    },
	    {
	      "id": 319,
	      "text": "河池市"
	    },
	    {
	      "id": 320,
	      "text": "北海市"
	    }
	  ],
	  "22": [
	    {
	      "id": 211,
	      "text": "蘭州市"
	    },
	    {
	      "id": 212,
	      "text": "金昌市"
	    },
	    {
	      "id": 213,
	      "text": "白銀市"
	    },
	    {
	      "id": 214,
	      "text": "天水市"
	    },
	    {
	      "id": 215,
	      "text": "嘉峪關市"
	    },
	    {
	      "id": 216,
	      "text": "武威市"
	    },
	    {
	      "id": 217,
	      "text": "張掖市"
	    },
	    {
	      "id": 218,
	      "text": "平涼市"
	    },
	    {
	      "id": 219,
	      "text": "酒泉市"
	    },
	    {
	      "id": 220,
	      "text": "慶陽市"
	    },
	    {
	      "id": 221,
	      "text": "定西市"
	    },
	    {
	      "id": 222,
	      "text": "隴南市"
	    },
	    {
	      "id": 223,
	      "text": "臨夏回族自治州"
	    },
	    {
	      "id": 224,
	      "text": "甘南藏族自治州"
	    }
	  ],
	  "23": [
	    {
	      "id": 297,
	      "text": "西安市"
	    },
	    {
	      "id": 298,
	      "text": "鹹陽市"
	    },
	    {
	      "id": 299,
	      "text": "延安市"
	    },
	    {
	      "id": 300,
	      "text": "榆林市"
	    },
	    {
	      "id": 301,
	      "text": "渭南市"
	    },
	    {
	      "id": 302,
	      "text": "商洛市"
	    },
	    {
	      "id": 303,
	      "text": "安康市"
	    },
	    {
	      "id": 304,
	      "text": "漢中市"
	    },
	    {
	      "id": 305,
	      "text": "寶雞市"
	    },
	    {
	      "id": 306,
	      "text": "銅川市"
	    }
	  ],
	  "24": [
	    {
	      "id": 333,
	      "text": "塔城地區"
	    },
	    {
	      "id": 334,
	      "text": "哈密地區"
	    },
	    {
	      "id": 335,
	      "text": "和田地區"
	    },
	    {
	      "id": 336,
	      "text": "阿勒泰地區"
	    },
	    {
	      "id": 337,
	      "text": "克孜勒蘇柯爾克孜自治州"
	    },
	    {
	      "id": 338,
	      "text": "博爾塔拉蒙古自治州"
	    },
	    {
	      "id": 339,
	      "text": "克拉瑪依市"
	    },
	    {
	      "id": 340,
	      "text": "烏魯木齊市"
	    },
	    {
	      "id": 341,
	      "text": "石河子市"
	    },
	    {
	      "id": 342,
	      "text": "昌吉回族自治州"
	    },
	    {
	      "id": 343,
	      "text": "五家渠市"
	    },
	    {
	      "id": 344,
	      "text": "吐魯番地區"
	    },
	    {
	      "id": 345,
	      "text": "巴音郭楞蒙古自治州"
	    },
	    {
	      "id": 346,
	      "text": "阿克蘇地區"
	    },
	    {
	      "id": 347,
	      "text": "阿拉爾市"
	    },
	    {
	      "id": 348,
	      "text": "喀什地區"
	    },
	    {
	      "id": 349,
	      "text": "圖木舒克市"
	    },
	    {
	      "id": 350,
	      "text": "伊犁哈薩克自治州"
	    }
	  ],
	  "25": [
	    {
	      "id": 289,
	      "text": "海北藏族自治州"
	    },
	    {
	      "id": 290,
	      "text": "西寧市"
	    },
	    {
	      "id": 291,
	      "text": "海東地區"
	    },
	    {
	      "id": 292,
	      "text": "黃南藏族自治州"
	    },
	    {
	      "id": 293,
	      "text": "海南藏族自治州"
	    },
	    {
	      "id": 294,
	      "text": "果洛藏族自治州"
	    },
	    {
	      "id": 295,
	      "text": "玉樹藏族自治州"
	    },
	    {
	      "id": 296,
	      "text": "海西蒙古族藏族自治州"
	    }
	  ],
	  "26": [
	    {
	      "id": 328,
	      "text": "銀川市"
	    },
	    {
	      "id": 329,
	      "text": "石嘴山市"
	    },
	    {
	      "id": 330,
	      "text": "吳忠市"
	    },
	    {
	      "id": 331,
	      "text": "固原市"
	    },
	    {
	      "id": 332,
	      "text": "中衛市"
	    }
	  ],
	  "27": [
	    {
	      "id": 4,
	      "text": "重慶市"
	    }
	  ],
	  "28": [
	    {
	      "id": 225,
	      "text": "成都市"
	    },
	    {
	      "id": 226,
	      "text": "攀枝花市"
	    },
	    {
	      "id": 227,
	      "text": "自貢市"
	    },
	    {
	      "id": 228,
	      "text": "綿陽市"
	    },
	    {
	      "id": 229,
	      "text": "南充市"
	    },
	    {
	      "id": 230,
	      "text": "達州市"
	    },
	    {
	      "id": 231,
	      "text": "遂寧市"
	    },
	    {
	      "id": 232,
	      "text": "廣安市"
	    },
	    {
	      "id": 233,
	      "text": "巴中市"
	    },
	    {
	      "id": 234,
	      "text": "瀘州市"
	    },
	    {
	      "id": 235,
	      "text": "宜賓市"
	    },
	    {
	      "id": 236,
	      "text": "資陽市"
	    },
	    {
	      "id": 237,
	      "text": "內江市"
	    },
	    {
	      "id": 238,
	      "text": "樂山市"
	    },
	    {
	      "id": 239,
	      "text": "眉山市"
	    },
	    {
	      "id": 240,
	      "text": "涼山彝族自治州"
	    },
	    {
	      "id": 241,
	      "text": "雅安市"
	    },
	    {
	      "id": 242,
	      "text": "甘孜藏族自治州"
	    },
	    {
	      "id": 243,
	      "text": "阿壩藏族羌族自治州"
	    },
	    {
	      "id": 244,
	      "text": "德陽市"
	    },
	    {
	      "id": 245,
	      "text": "廣元市"
	    }
	  ],
	  "29": [
	    {
	      "id": 246,
	      "text": "貴陽市"
	    },
	    {
	      "id": 247,
	      "text": "遵義市"
	    },
	    {
	      "id": 248,
	      "text": "安順市"
	    },
	    {
	      "id": 249,
	      "text": "黔南布依族苗族自治州"
	    },
	    {
	      "id": 250,
	      "text": "黔東南苗族侗族自治州"
	    },
	    {
	      "id": 251,
	      "text": "銅仁地區"
	    },
	    {
	      "id": 252,
	      "text": "畢節地區"
	    },
	    {
	      "id": 253,
	      "text": "六碟水市"
	    },
	    {
	      "id": 254,
	      "text": "黔西南布依族苗族自治州"
	    }
	  ],
	  "30": [
	    {
	      "id": 273,
	      "text": "西雙版納傣族自治州"
	    },
	    {
	      "id": 274,
	      "text": "德巨集傣族景頗族自治州"
	    },
	    {
	      "id": 275,
	      "text": "昭通市"
	    },
	    {
	      "id": 276,
	      "text": "昆明市"
	    },
	    {
	      "id": 277,
	      "text": "大理白族自治州"
	    },
	    {
	      "id": 278,
	      "text": "紅河哈尼族彝族自治州"
	    },
	    {
	      "id": 279,
	      "text": "曲靖市"
	    },
	    {
	      "id": 280,
	      "text": "保山市"
	    },
	    {
	      "id": 281,
	      "text": "文山壯族苗族自治州"
	    },
	    {
	      "id": 282,
	      "text": "玉溪市"
	    },
	    {
	      "id": 283,
	      "text": "楚雄彝族自治州"
	    },
	    {
	      "id": 284,
	      "text": "普洱市"
	    },
	    {
	      "id": 285,
	      "text": "臨滄市"
	    },
	    {
	      "id": 286,
	      "text": "怒江僳僳族自治州"
	    },
	    {
	      "id": 287,
	      "text": "迪慶藏族自治州"
	    },
	    {
	      "id": 288,
	      "text": "麗江市"
	    }
	  ],
	  "31": [
	    {
	      "id": 321,
	      "text": "拉薩市"
	    },
	    {
	      "id": 322,
	      "text": "日喀則地區"
	    },
	    {
	      "id": 323,
	      "text": "山南地區"
	    },
	    {
	      "id": 324,
	      "text": "林芝地區"
	    },
	    {
	      "id": 325,
	      "text": "昌都地區"
	    },
	    {
	      "id": 326,
	      "text": "那曲地區"
	    },
	    {
	      "id": 327,
	      "text": "阿里地區"
	    }
	  ],
	  "32": [
	    {
	      "id": 363,
	      "text": "台北市"
	    },
	    {
	      "id": 364,
	      "text": "高雄市"
	    },
	    {
	      "id": 365,
	      "text": "基隆市"
	    },
	    {
	      "id": 366,
	      "text": "台中市"
	    },
	    {
	      "id": 367,
	      "text": "台南市"
	    },
	    {
	      "id": 368,
	      "text": "新竹市"
	    },
	    {
	      "id": 369,
	      "text": "嘉義市"
	    }
	  ],
	  "33": [
	    {
	      "id": 370,
	      "text": "澳門特別行政區"
	    }
	  ],
	  "34": [
	    {
	      "id": 371,
	      "text": "香港特別行政區"
	    }
	  ]
	},
    
    districtData: {
	  "1": [
	    {
	      "id": 1,
	      "text": "東城區"
	    },
	    {
	      "id": 2,
	      "text": "西城區"
	    },
	    {
	      "id": 3,
	      "text": "崇文區"
	    },
	    {
	      "id": 4,
	      "text": "宣武區"
	    },
	    {
	      "id": 5,
	      "text": "朝陽區"
	    },
	    {
	      "id": 6,
	      "text": "豐台區"
	    },
	    {
	      "id": 7,
	      "text": "石景山區"
	    },
	    {
	      "id": 8,
	      "text": "海澱區"
	    },
	    {
	      "id": 9,
	      "text": "門頭溝區"
	    },
	    {
	      "id": 10,
	      "text": "房山區"
	    },
	    {
	      "id": 11,
	      "text": "通州區"
	    },
	    {
	      "id": 12,
	      "text": "順義區"
	    },
	    {
	      "id": 13,
	      "text": "昌平區"
	    },
	    {
	      "id": 14,
	      "text": "大興區"
	    },
	    {
	      "id": 15,
	      "text": "懷柔區"
	    },
	    {
	      "id": 16,
	      "text": "平谷區"
	    },
	    {
	      "id": 17,
	      "text": "密雲縣"
	    },
	    {
	      "id": 18,
	      "text": "延慶縣"
	    }
	  ],
	  "2": [
	    {
	      "id": 19,
	      "text": "和平區"
	    },
	    {
	      "id": 20,
	      "text": "河東區"
	    },
	    {
	      "id": 21,
	      "text": "河西區"
	    },
	    {
	      "id": 22,
	      "text": "南開區"
	    },
	    {
	      "id": 23,
	      "text": "河北區"
	    },
	    {
	      "id": 24,
	      "text": "紅橋區"
	    },
	    {
	      "id": 25,
	      "text": "塘沽區"
	    },
	    {
	      "id": 26,
	      "text": "漢沽區"
	    },
	    {
	      "id": 27,
	      "text": "大港區"
	    },
	    {
	      "id": 28,
	      "text": "東麗區"
	    },
	    {
	      "id": 29,
	      "text": "西青區"
	    },
	    {
	      "id": 30,
	      "text": "津南區"
	    },
	    {
	      "id": 31,
	      "text": "北辰區"
	    },
	    {
	      "id": 32,
	      "text": "武清區"
	    },
	    {
	      "id": 33,
	      "text": "寶坻區"
	    },
	    {
	      "id": 34,
	      "text": "寧河縣"
	    },
	    {
	      "id": 35,
	      "text": "靜海縣"
	    },
	    {
	      "id": 36,
	      "text": "薊縣"
	    }
	  ],
	  "5": [
	    {
	      "id": 96,
	      "text": "邯山區"
	    },
	    {
	      "id": 97,
	      "text": "叢台區"
	    },
	    {
	      "id": 98,
	      "text": "復興區"
	    },
	    {
	      "id": 99,
	      "text": "峰峰礦區"
	    },
	    {
	      "id": 100,
	      "text": "邯鄲縣"
	    },
	    {
	      "id": 101,
	      "text": "臨漳縣"
	    },
	    {
	      "id": 102,
	      "text": "成安縣"
	    },
	    {
	      "id": 103,
	      "text": "大名縣"
	    },
	    {
	      "id": 104,
	      "text": "涉縣"
	    },
	    {
	      "id": 105,
	      "text": "磁縣"
	    },
	    {
	      "id": 106,
	      "text": "肥鄉縣"
	    },
	    {
	      "id": 107,
	      "text": "永年縣"
	    },
	    {
	      "id": 108,
	      "text": "邱縣"
	    },
	    {
	      "id": 109,
	      "text": "雞澤縣"
	    },
	    {
	      "id": 110,
	      "text": "廣平縣"
	    },
	    {
	      "id": 111,
	      "text": "館陶縣"
	    },
	    {
	      "id": 112,
	      "text": "魏縣"
	    },
	    {
	      "id": 113,
	      "text": "曲周縣"
	    },
	    {
	      "id": 114,
	      "text": "武安市"
	    }
	  ],
	  "6": [
	    {
	      "id": 115,
	      "text": "長安區"
	    },
	    {
	      "id": 116,
	      "text": "橋東區"
	    },
	    {
	      "id": 117,
	      "text": "橋西區"
	    },
	    {
	      "id": 118,
	      "text": "新華區"
	    },
	    {
	      "id": 119,
	      "text": "井陘礦區"
	    },
	    {
	      "id": 120,
	      "text": "裕華區"
	    },
	    {
	      "id": 121,
	      "text": "井陘縣"
	    },
	    {
	      "id": 122,
	      "text": "正定縣"
	    },
	    {
	      "id": 123,
	      "text": "欒城縣"
	    },
	    {
	      "id": 124,
	      "text": "行唐縣"
	    },
	    {
	      "id": 125,
	      "text": "靈壽縣"
	    },
	    {
	      "id": 126,
	      "text": "高邑縣"
	    },
	    {
	      "id": 127,
	      "text": "深澤縣"
	    },
	    {
	      "id": 128,
	      "text": "贊皇縣"
	    },
	    {
	      "id": 129,
	      "text": "無極縣"
	    },
	    {
	      "id": 130,
	      "text": "平山縣"
	    },
	    {
	      "id": 131,
	      "text": "元氏縣"
	    },
	    {
	      "id": 132,
	      "text": "趙縣"
	    },
	    {
	      "id": 133,
	      "text": "辛集市"
	    },
	    {
	      "id": 134,
	      "text": "稿城市"
	    },
	    {
	      "id": 135,
	      "text": "晉州市"
	    },
	    {
	      "id": 136,
	      "text": "新樂市"
	    },
	    {
	      "id": 137,
	      "text": "鹿泉市"
	    }
	  ],
	  "7": [
	    {
	      "id": 138,
	      "text": "新市區"
	    },
	    {
	      "id": 139,
	      "text": "北市區"
	    },
	    {
	      "id": 140,
	      "text": "南市區"
	    },
	    {
	      "id": 141,
	      "text": "滿城縣"
	    },
	    {
	      "id": 142,
	      "text": "清苑縣"
	    },
	    {
	      "id": 143,
	      "text": "淶水縣"
	    },
	    {
	      "id": 144,
	      "text": "阜平縣"
	    },
	    {
	      "id": 145,
	      "text": "徐水縣"
	    },
	    {
	      "id": 146,
	      "text": "定興縣"
	    },
	    {
	      "id": 147,
	      "text": "唐縣"
	    },
	    {
	      "id": 148,
	      "text": "高陽縣"
	    },
	    {
	      "id": 149,
	      "text": "容城縣"
	    },
	    {
	      "id": 150,
	      "text": "淶源縣"
	    },
	    {
	      "id": 151,
	      "text": "望都縣"
	    },
	    {
	      "id": 152,
	      "text": "安新縣"
	    },
	    {
	      "id": 153,
	      "text": "易縣"
	    },
	    {
	      "id": 154,
	      "text": "曲陽縣"
	    },
	    {
	      "id": 155,
	      "text": "蠡縣"
	    },
	    {
	      "id": 156,
	      "text": "順平縣"
	    },
	    {
	      "id": 157,
	      "text": "博野縣"
	    },
	    {
	      "id": 158,
	      "text": "雄縣"
	    },
	    {
	      "id": 159,
	      "text": "涿州市"
	    },
	    {
	      "id": 160,
	      "text": "定州市"
	    },
	    {
	      "id": 161,
	      "text": "安國市"
	    },
	    {
	      "id": 162,
	      "text": "高碑店市"
	    }
	  ],
	  "8": [
	    {
	      "id": 163,
	      "text": "橋東區"
	    },
	    {
	      "id": 164,
	      "text": "橋西區"
	    },
	    {
	      "id": 165,
	      "text": "宣化區"
	    },
	    {
	      "id": 166,
	      "text": "下花園區"
	    },
	    {
	      "id": 167,
	      "text": "宣化縣"
	    },
	    {
	      "id": 168,
	      "text": "張北縣"
	    },
	    {
	      "id": 169,
	      "text": "康保縣"
	    },
	    {
	      "id": 170,
	      "text": "沽源縣"
	    },
	    {
	      "id": 171,
	      "text": "尚義縣"
	    },
	    {
	      "id": 172,
	      "text": "蔚縣"
	    },
	    {
	      "id": 173,
	      "text": "陽原縣"
	    },
	    {
	      "id": 174,
	      "text": "懷安縣"
	    },
	    {
	      "id": 175,
	      "text": "萬全縣"
	    },
	    {
	      "id": 176,
	      "text": "懷來縣"
	    },
	    {
	      "id": 177,
	      "text": "涿鹿縣"
	    },
	    {
	      "id": 178,
	      "text": "赤城縣"
	    },
	    {
	      "id": 179,
	      "text": "崇禮縣"
	    }
	  ],
	  "9": [
	    {
	      "id": 180,
	      "text": "雙橋區"
	    },
	    {
	      "id": 181,
	      "text": "雙灤區"
	    },
	    {
	      "id": 182,
	      "text": "鷹手營子礦區"
	    },
	    {
	      "id": 183,
	      "text": "承德縣"
	    },
	    {
	      "id": 184,
	      "text": "興隆縣"
	    },
	    {
	      "id": 185,
	      "text": "平泉縣"
	    },
	    {
	      "id": 186,
	      "text": "灤平縣"
	    },
	    {
	      "id": 187,
	      "text": "隆化縣"
	    },
	    {
	      "id": 188,
	      "text": "豐寧滿族自治縣"
	    },
	    {
	      "id": 189,
	      "text": "寬城滿族自治縣"
	    },
	    {
	      "id": 190,
	      "text": "圍場滿族蒙古族自治縣"
	    }
	  ],
	  "10": [
	    {
	      "id": 191,
	      "text": "路南區"
	    },
	    {
	      "id": 192,
	      "text": "路北區"
	    },
	    {
	      "id": 193,
	      "text": "古冶區"
	    },
	    {
	      "id": 194,
	      "text": "開平區"
	    },
	    {
	      "id": 195,
	      "text": "豐南區"
	    },
	    {
	      "id": 196,
	      "text": "豐潤區"
	    },
	    {
	      "id": 197,
	      "text": "灤縣"
	    },
	    {
	      "id": 198,
	      "text": "灤南縣"
	    },
	    {
	      "id": 199,
	      "text": "樂亭縣"
	    },
	    {
	      "id": 200,
	      "text": "遷西縣"
	    },
	    {
	      "id": 201,
	      "text": "玉田縣"
	    },
	    {
	      "id": 202,
	      "text": "唐海縣"
	    },
	    {
	      "id": 203,
	      "text": "遵化市"
	    },
	    {
	      "id": 204,
	      "text": "遷安市"
	    }
	  ],
	  "11": [
	    {
	      "id": 205,
	      "text": "安次區"
	    },
	    {
	      "id": 206,
	      "text": "廣陽區"
	    },
	    {
	      "id": 207,
	      "text": "固安縣"
	    },
	    {
	      "id": 208,
	      "text": "永清縣"
	    },
	    {
	      "id": 209,
	      "text": "香河縣"
	    },
	    {
	      "id": 210,
	      "text": "大城縣"
	    },
	    {
	      "id": 211,
	      "text": "文安縣"
	    },
	    {
	      "id": 212,
	      "text": "大廠回族自治縣"
	    },
	    {
	      "id": 213,
	      "text": "霸州市"
	    },
	    {
	      "id": 214,
	      "text": "三河市"
	    }
	  ],
	  "12": [
	    {
	      "id": 215,
	      "text": "新華區"
	    },
	    {
	      "id": 216,
	      "text": "運河區"
	    },
	    {
	      "id": 217,
	      "text": "滄縣"
	    },
	    {
	      "id": 218,
	      "text": "青縣"
	    },
	    {
	      "id": 219,
	      "text": "東光縣"
	    },
	    {
	      "id": 220,
	      "text": "海興縣"
	    },
	    {
	      "id": 221,
	      "text": "鹽山縣"
	    },
	    {
	      "id": 222,
	      "text": "肅寧縣"
	    },
	    {
	      "id": 223,
	      "text": "南皮縣"
	    },
	    {
	      "id": 224,
	      "text": "吳橋縣"
	    },
	    {
	      "id": 225,
	      "text": "獻縣"
	    },
	    {
	      "id": 226,
	      "text": "孟村回族自治縣"
	    },
	    {
	      "id": 227,
	      "text": "泊頭市"
	    },
	    {
	      "id": 228,
	      "text": "任丘市"
	    },
	    {
	      "id": 229,
	      "text": "黃驊市"
	    },
	    {
	      "id": 230,
	      "text": "河間市"
	    }
	  ],
	  "13": [
	    {
	      "id": 231,
	      "text": "桃城區"
	    },
	    {
	      "id": 232,
	      "text": "棗強縣"
	    },
	    {
	      "id": 233,
	      "text": "武邑縣"
	    },
	    {
	      "id": 234,
	      "text": "武強縣"
	    },
	    {
	      "id": 235,
	      "text": "饒陽縣"
	    },
	    {
	      "id": 236,
	      "text": "安平縣"
	    },
	    {
	      "id": 237,
	      "text": "故城縣"
	    },
	    {
	      "id": 238,
	      "text": "景縣"
	    },
	    {
	      "id": 239,
	      "text": "阜城縣"
	    },
	    {
	      "id": 240,
	      "text": "冀州市"
	    },
	    {
	      "id": 241,
	      "text": "深州市"
	    }
	  ],
	  "14": [
	    {
	      "id": 242,
	      "text": "橋東區"
	    },
	    {
	      "id": 243,
	      "text": "橋西區"
	    },
	    {
	      "id": 244,
	      "text": "邢台縣"
	    },
	    {
	      "id": 245,
	      "text": "臨城縣"
	    },
	    {
	      "id": 246,
	      "text": "內丘縣"
	    },
	    {
	      "id": 247,
	      "text": "柏鄉縣"
	    },
	    {
	      "id": 248,
	      "text": "隆堯縣"
	    },
	    {
	      "id": 249,
	      "text": "任縣"
	    },
	    {
	      "id": 250,
	      "text": "南和縣"
	    },
	    {
	      "id": 251,
	      "text": "寧晉縣"
	    },
	    {
	      "id": 252,
	      "text": "巨鹿縣"
	    },
	    {
	      "id": 253,
	      "text": "新河縣"
	    },
	    {
	      "id": 254,
	      "text": "廣宗縣"
	    },
	    {
	      "id": 255,
	      "text": "平鄉縣"
	    },
	    {
	      "id": 256,
	      "text": "威縣"
	    },
	    {
	      "id": 257,
	      "text": "清河縣"
	    },
	    {
	      "id": 258,
	      "text": "臨西縣"
	    },
	    {
	      "id": 259,
	      "text": "南宮市"
	    },
	    {
	      "id": 260,
	      "text": "沙河市"
	    }
	  ],
	  "15": [
	    {
	      "id": 261,
	      "text": "海港區"
	    },
	    {
	      "id": 262,
	      "text": "山海關區"
	    },
	    {
	      "id": 263,
	      "text": "北戴河區"
	    },
	    {
	      "id": 264,
	      "text": "青龍滿族自治縣"
	    },
	    {
	      "id": 265,
	      "text": "昌黎縣"
	    },
	    {
	      "id": 266,
	      "text": "撫寧縣"
	    },
	    {
	      "id": 267,
	      "text": "盧龍縣"
	    }
	  ],
	  "16": [
	    {
	      "id": 268,
	      "text": "朔城區"
	    },
	    {
	      "id": 269,
	      "text": "平魯區"
	    },
	    {
	      "id": 270,
	      "text": "山陰縣"
	    },
	    {
	      "id": 271,
	      "text": "應縣"
	    },
	    {
	      "id": 272,
	      "text": "右玉縣"
	    },
	    {
	      "id": 273,
	      "text": "懷仁縣"
	    }
	  ],
	  "17": [
	    {
	      "id": 274,
	      "text": "忻府區"
	    },
	    {
	      "id": 275,
	      "text": "定襄縣"
	    },
	    {
	      "id": 276,
	      "text": "五台縣"
	    },
	    {
	      "id": 277,
	      "text": "代縣"
	    },
	    {
	      "id": 278,
	      "text": "繁峙縣"
	    },
	    {
	      "id": 279,
	      "text": "寧武縣"
	    },
	    {
	      "id": 280,
	      "text": "靜樂縣"
	    },
	    {
	      "id": 281,
	      "text": "神池縣"
	    },
	    {
	      "id": 282,
	      "text": "五寨縣"
	    },
	    {
	      "id": 283,
	      "text": "岢嵐縣"
	    },
	    {
	      "id": 284,
	      "text": "河曲縣"
	    },
	    {
	      "id": 285,
	      "text": "保德縣"
	    },
	    {
	      "id": 286,
	      "text": "偏關縣"
	    },
	    {
	      "id": 287,
	      "text": "原平市"
	    }
	  ],
	  "18": [
	    {
	      "id": 288,
	      "text": "小店區"
	    },
	    {
	      "id": 289,
	      "text": "迎澤區"
	    },
	    {
	      "id": 290,
	      "text": "杏花嶺區"
	    },
	    {
	      "id": 291,
	      "text": "尖草坪區"
	    },
	    {
	      "id": 292,
	      "text": "萬柏林區"
	    },
	    {
	      "id": 293,
	      "text": "晉源區"
	    },
	    {
	      "id": 294,
	      "text": "清徐縣"
	    },
	    {
	      "id": 295,
	      "text": "陽曲縣"
	    },
	    {
	      "id": 296,
	      "text": "婁煩縣"
	    },
	    {
	      "id": 297,
	      "text": "古交市"
	    }
	  ],
	  "19": [
	    {
	      "id": 298,
	      "text": "礦區"
	    },
	    {
	      "id": 299,
	      "text": "南郊區"
	    },
	    {
	      "id": 300,
	      "text": "新榮區"
	    },
	    {
	      "id": 301,
	      "text": "陽高縣"
	    },
	    {
	      "id": 302,
	      "text": "天鎮縣"
	    },
	    {
	      "id": 303,
	      "text": "廣靈縣"
	    },
	    {
	      "id": 304,
	      "text": "靈丘縣"
	    },
	    {
	      "id": 305,
	      "text": "渾源縣"
	    },
	    {
	      "id": 306,
	      "text": "左雲縣"
	    },
	    {
	      "id": 307,
	      "text": "大同縣"
	    }
	  ],
	  "20": [
	    {
	      "id": 308,
	      "text": "礦區"
	    },
	    {
	      "id": 309,
	      "text": "平定縣"
	    },
	    {
	      "id": 310,
	      "text": "盂縣"
	    }
	  ],
	  "21": [
	    {
	      "id": 311,
	      "text": "榆次區"
	    },
	    {
	      "id": 312,
	      "text": "榆社縣"
	    },
	    {
	      "id": 313,
	      "text": "左權縣"
	    },
	    {
	      "id": 314,
	      "text": "和順縣"
	    },
	    {
	      "id": 315,
	      "text": "昔陽縣"
	    },
	    {
	      "id": 316,
	      "text": "壽陽縣"
	    },
	    {
	      "id": 317,
	      "text": "太谷縣"
	    },
	    {
	      "id": 318,
	      "text": "祁縣"
	    },
	    {
	      "id": 319,
	      "text": "平遙縣"
	    },
	    {
	      "id": 320,
	      "text": "靈石縣"
	    },
	    {
	      "id": 321,
	      "text": "介休市"
	    }
	  ],
	  "22": [
	    {
	      "id": 322,
	      "text": "長治縣"
	    },
	    {
	      "id": 323,
	      "text": "襄垣縣"
	    },
	    {
	      "id": 324,
	      "text": "屯留縣"
	    },
	    {
	      "id": 325,
	      "text": "平順縣"
	    },
	    {
	      "id": 326,
	      "text": "黎城縣"
	    },
	    {
	      "id": 327,
	      "text": "壺關縣"
	    },
	    {
	      "id": 328,
	      "text": "長子縣"
	    },
	    {
	      "id": 329,
	      "text": "武鄉縣"
	    },
	    {
	      "id": 330,
	      "text": "沁縣"
	    },
	    {
	      "id": 331,
	      "text": "沁源縣"
	    },
	    {
	      "id": 332,
	      "text": "潞城市"
	    }
	  ],
	  "23": [
	    {
	      "id": 333,
	      "text": "沁水縣"
	    },
	    {
	      "id": 334,
	      "text": "陽城縣"
	    },
	    {
	      "id": 335,
	      "text": "陵川縣"
	    },
	    {
	      "id": 336,
	      "text": "澤州縣"
	    },
	    {
	      "id": 337,
	      "text": "高平市"
	    }
	  ],
	  "24": [
	    {
	      "id": 338,
	      "text": "堯都區"
	    },
	    {
	      "id": 339,
	      "text": "曲沃縣"
	    },
	    {
	      "id": 340,
	      "text": "翼城縣"
	    },
	    {
	      "id": 341,
	      "text": "襄汾縣"
	    },
	    {
	      "id": 342,
	      "text": "洪洞縣"
	    },
	    {
	      "id": 343,
	      "text": "古縣"
	    },
	    {
	      "id": 344,
	      "text": "安澤縣"
	    },
	    {
	      "id": 345,
	      "text": "浮山縣"
	    },
	    {
	      "id": 346,
	      "text": "吉縣"
	    },
	    {
	      "id": 347,
	      "text": "鄉寧縣"
	    },
	    {
	      "id": 348,
	      "text": "大寧縣"
	    },
	    {
	      "id": 349,
	      "text": "隰縣"
	    },
	    {
	      "id": 350,
	      "text": "永和縣"
	    },
	    {
	      "id": 351,
	      "text": "蒲縣"
	    },
	    {
	      "id": 352,
	      "text": "汾西縣"
	    },
	    {
	      "id": 353,
	      "text": "侯馬市"
	    },
	    {
	      "id": 354,
	      "text": "霍州市"
	    }
	  ],
	  "25": [
	    {
	      "id": 355,
	      "text": "離石區"
	    },
	    {
	      "id": 356,
	      "text": "文水縣"
	    },
	    {
	      "id": 357,
	      "text": "交城縣"
	    },
	    {
	      "id": 358,
	      "text": "興縣"
	    },
	    {
	      "id": 359,
	      "text": "臨縣"
	    },
	    {
	      "id": 360,
	      "text": "柳林縣"
	    },
	    {
	      "id": 361,
	      "text": "石樓縣"
	    },
	    {
	      "id": 362,
	      "text": "嵐縣"
	    },
	    {
	      "id": 363,
	      "text": "方山縣"
	    },
	    {
	      "id": 364,
	      "text": "中陽縣"
	    },
	    {
	      "id": 365,
	      "text": "交口縣"
	    },
	    {
	      "id": 366,
	      "text": "孝義市"
	    },
	    {
	      "id": 367,
	      "text": "汾陽市"
	    }
	  ],
	  "26": [
	    {
	      "id": 368,
	      "text": "鹽湖區"
	    },
	    {
	      "id": 369,
	      "text": "臨猗縣"
	    },
	    {
	      "id": 370,
	      "text": "萬榮縣"
	    },
	    {
	      "id": 371,
	      "text": "聞喜縣"
	    },
	    {
	      "id": 372,
	      "text": "稷山縣"
	    },
	    {
	      "id": 373,
	      "text": "新絳縣"
	    },
	    {
	      "id": 374,
	      "text": "絳縣"
	    },
	    {
	      "id": 375,
	      "text": "垣曲縣"
	    },
	    {
	      "id": 376,
	      "text": "夏縣"
	    },
	    {
	      "id": 377,
	      "text": "平陸縣"
	    },
	    {
	      "id": 378,
	      "text": "芮城縣"
	    },
	    {
	      "id": 379,
	      "text": "永濟市"
	    },
	    {
	      "id": 380,
	      "text": "河津市"
	    }
	  ],
	  "351": [
	    {
	      "id": 2724,
	      "text": "海拉爾區"
	    },
	    {
	      "id": 2725,
	      "text": "阿榮旗"
	    },
	    {
	      "id": 2726,
	      "text": "莫力達瓦達斡爾族自治旗"
	    },
	    {
	      "id": 2727,
	      "text": "鄂倫春自治旗"
	    },
	    {
	      "id": 2728,
	      "text": "鄂溫克族自治旗"
	    },
	    {
	      "id": 2729,
	      "text": "陳巴爾虎旗"
	    },
	    {
	      "id": 2730,
	      "text": "新巴爾虎左旗"
	    },
	    {
	      "id": 2731,
	      "text": "新巴爾虎右旗"
	    },
	    {
	      "id": 2732,
	      "text": "滿洲裡市"
	    },
	    {
	      "id": 2733,
	      "text": "牙克石市"
	    },
	    {
	      "id": 2734,
	      "text": "扎蘭屯市"
	    },
	    {
	      "id": 2735,
	      "text": "額爾古納市"
	    },
	    {
	      "id": 2736,
	      "text": "根河市"
	    }
	  ],
	  "352": [
	    {
	      "id": 2737,
	      "text": "新城區"
	    },
	    {
	      "id": 2738,
	      "text": "回民區"
	    },
	    {
	      "id": 2739,
	      "text": "玉泉區"
	    },
	    {
	      "id": 2740,
	      "text": "賽罕區"
	    },
	    {
	      "id": 2741,
	      "text": "土默特左旗"
	    },
	    {
	      "id": 2742,
	      "text": "托克托縣"
	    },
	    {
	      "id": 2743,
	      "text": "和林格爾縣"
	    },
	    {
	      "id": 2744,
	      "text": "清水河縣"
	    },
	    {
	      "id": 2745,
	      "text": "武川縣"
	    }
	  ],
	  "353": [
	    {
	      "id": 2746,
	      "text": "東河區"
	    },
	    {
	      "id": 2747,
	      "text": "昆都侖區"
	    },
	    {
	      "id": 2748,
	      "text": "青山區"
	    },
	    {
	      "id": 2749,
	      "text": "石拐區"
	    },
	    {
	      "id": 2750,
	      "text": "白雲鄂博礦區"
	    },
	    {
	      "id": 2751,
	      "text": "九原區"
	    },
	    {
	      "id": 2752,
	      "text": "土默特右旗"
	    },
	    {
	      "id": 2753,
	      "text": "固陽縣"
	    },
	    {
	      "id": 2754,
	      "text": "達爾罕茂明安聯合旗"
	    }
	  ],
	  "354": [
	    {
	      "id": 2755,
	      "text": "海勃灣區"
	    },
	    {
	      "id": 2756,
	      "text": "海南區"
	    },
	    {
	      "id": 2757,
	      "text": "烏達區"
	    }
	  ],
	  "355": [
	    {
	      "id": 2758,
	      "text": "集寧區"
	    },
	    {
	      "id": 2759,
	      "text": "卓資縣"
	    },
	    {
	      "id": 2760,
	      "text": "化德縣"
	    },
	    {
	      "id": 2761,
	      "text": "商都縣"
	    },
	    {
	      "id": 2762,
	      "text": "興和縣"
	    },
	    {
	      "id": 2763,
	      "text": "涼城縣"
	    },
	    {
	      "id": 2764,
	      "text": "察哈爾右翼前旗"
	    },
	    {
	      "id": 2765,
	      "text": "察哈爾右翼中旗"
	    },
	    {
	      "id": 2766,
	      "text": "察哈爾右翼後旗"
	    },
	    {
	      "id": 2767,
	      "text": "四子王旗"
	    },
	    {
	      "id": 2768,
	      "text": "豐鎮市"
	    }
	  ],
	  "356": [
	    {
	      "id": 2769,
	      "text": "科爾沁區"
	    },
	    {
	      "id": 2770,
	      "text": "科爾沁左翼中旗"
	    },
	    {
	      "id": 2771,
	      "text": "科爾沁左翼後旗"
	    },
	    {
	      "id": 2772,
	      "text": "開魯縣"
	    },
	    {
	      "id": 2773,
	      "text": "庫倫旗"
	    },
	    {
	      "id": 2774,
	      "text": "奈曼旗"
	    },
	    {
	      "id": 2775,
	      "text": "扎魯特旗"
	    },
	    {
	      "id": 2776,
	      "text": "霍林郭勒市"
	    }
	  ],
	  "357": [
	    {
	      "id": 2777,
	      "text": "紅山區"
	    },
	    {
	      "id": 2778,
	      "text": "元寶山區"
	    },
	    {
	      "id": 2779,
	      "text": "松山區"
	    },
	    {
	      "id": 2780,
	      "text": "阿魯科爾沁旗"
	    },
	    {
	      "id": 2781,
	      "text": "巴林左旗"
	    },
	    {
	      "id": 2782,
	      "text": "巴林右旗"
	    },
	    {
	      "id": 2783,
	      "text": "林西縣"
	    },
	    {
	      "id": 2784,
	      "text": "克什克騰旗"
	    },
	    {
	      "id": 2785,
	      "text": "翁牛特旗"
	    },
	    {
	      "id": 2786,
	      "text": "喀喇沁旗"
	    },
	    {
	      "id": 2787,
	      "text": "寧城縣"
	    },
	    {
	      "id": 2788,
	      "text": "敖漢旗"
	    }
	  ],
	  "358": [
	    {
	      "id": 2789,
	      "text": "東勝區"
	    },
	    {
	      "id": 2790,
	      "text": "達拉特旗"
	    },
	    {
	      "id": 2791,
	      "text": "准格爾旗"
	    },
	    {
	      "id": 2792,
	      "text": "鄂托克前旗"
	    },
	    {
	      "id": 2793,
	      "text": "鄂托克旗"
	    },
	    {
	      "id": 2794,
	      "text": "杭錦旗"
	    },
	    {
	      "id": 2795,
	      "text": "烏審旗"
	    },
	    {
	      "id": 2796,
	      "text": "伊金霍洛旗"
	    }
	  ],
	  "359": [
	    {
	      "id": 2797,
	      "text": "臨河區"
	    },
	    {
	      "id": 2798,
	      "text": "五原縣"
	    },
	    {
	      "id": 2799,
	      "text": "磴口縣"
	    },
	    {
	      "id": 2800,
	      "text": "烏拉特前旗"
	    },
	    {
	      "id": 2801,
	      "text": "烏拉特中旗"
	    },
	    {
	      "id": 2802,
	      "text": "烏拉特後旗"
	    },
	    {
	      "id": 2803,
	      "text": "杭錦後旗"
	    }
	  ],
	  "360": [
	    {
	      "id": 2804,
	      "text": "二連浩特市"
	    },
	    {
	      "id": 2805,
	      "text": "錫林浩特市"
	    },
	    {
	      "id": 2806,
	      "text": "阿巴嘎旗"
	    },
	    {
	      "id": 2807,
	      "text": "蘇尼特左旗"
	    },
	    {
	      "id": 2808,
	      "text": "蘇尼特右旗"
	    },
	    {
	      "id": 2809,
	      "text": "東烏珠穆沁旗"
	    },
	    {
	      "id": 2810,
	      "text": "西烏珠穆沁旗"
	    },
	    {
	      "id": 2811,
	      "text": "太僕寺旗"
	    },
	    {
	      "id": 2812,
	      "text": "鑲黃旗"
	    },
	    {
	      "id": 2813,
	      "text": "正鑲白旗"
	    },
	    {
	      "id": 2814,
	      "text": "正藍旗"
	    },
	    {
	      "id": 2815,
	      "text": "多倫縣"
	    }
	  ],
	  "361": [
	    {
	      "id": 2816,
	      "text": "烏蘭浩特市"
	    },
	    {
	      "id": 2817,
	      "text": "阿爾山市"
	    },
	    {
	      "id": 2818,
	      "text": "科爾沁右翼前旗"
	    },
	    {
	      "id": 2819,
	      "text": "科爾沁右翼中旗"
	    },
	    {
	      "id": 2820,
	      "text": "扎賚特旗"
	    },
	    {
	      "id": 2821,
	      "text": "突泉縣"
	    }
	  ],
	  "362": [
	    {
	      "id": 2822,
	      "text": "阿拉善左旗"
	    },
	    {
	      "id": 2823,
	      "text": "阿拉善右旗"
	    },
	    {
	      "id": 2824,
	      "text": "額濟納旗"
	    }
	  ],
	  "27": [
	    {
	      "id": 381,
	      "text": "和平區"
	    },
	    {
	      "id": 382,
	      "text": "沈河區"
	    },
	    {
	      "id": 383,
	      "text": "大東區"
	    },
	    {
	      "id": 384,
	      "text": "皇姑區"
	    },
	    {
	      "id": 385,
	      "text": "鐵西區"
	    },
	    {
	      "id": 386,
	      "text": "蘇家屯區"
	    },
	    {
	      "id": 387,
	      "text": "東陵區"
	    },
	    {
	      "id": 388,
	      "text": "沈北新區"
	    },
	    {
	      "id": 389,
	      "text": "於洪區"
	    },
	    {
	      "id": 390,
	      "text": "遼中縣"
	    },
	    {
	      "id": 391,
	      "text": "康平縣"
	    },
	    {
	      "id": 392,
	      "text": "法庫縣"
	    },
	    {
	      "id": 393,
	      "text": "新民市"
	    }
	  ],
	  "28": [
	    {
	      "id": 394,
	      "text": "銀州區"
	    },
	    {
	      "id": 395,
	      "text": "清河區"
	    },
	    {
	      "id": 396,
	      "text": "鐵嶺縣"
	    },
	    {
	      "id": 397,
	      "text": "西豐縣"
	    },
	    {
	      "id": 398,
	      "text": "昌圖縣"
	    },
	    {
	      "id": 399,
	      "text": "調兵山市"
	    },
	    {
	      "id": 400,
	      "text": "開原市"
	    }
	  ],
	  "29": [
	    {
	      "id": 401,
	      "text": "長海縣"
	    },
	    {
	      "id": 402,
	      "text": "旅順口區"
	    },
	    {
	      "id": 403,
	      "text": "中山區"
	    },
	    {
	      "id": 404,
	      "text": "西崗區"
	    },
	    {
	      "id": 405,
	      "text": "沙河口區"
	    },
	    {
	      "id": 406,
	      "text": "甘井子區"
	    },
	    {
	      "id": 407,
	      "text": "金州區"
	    },
	    {
	      "id": 408,
	      "text": "普蘭店市"
	    },
	    {
	      "id": 409,
	      "text": "瓦房店市"
	    },
	    {
	      "id": 410,
	      "text": "莊河市"
	    }
	  ],
	  "30": [
	    {
	      "id": 411,
	      "text": "鐵東區"
	    },
	    {
	      "id": 412,
	      "text": "鐵西區"
	    },
	    {
	      "id": 413,
	      "text": "立山區"
	    },
	    {
	      "id": 414,
	      "text": "千山區"
	    },
	    {
	      "id": 415,
	      "text": "台安縣"
	    },
	    {
	      "id": 416,
	      "text": "岫巖滿族自治縣"
	    },
	    {
	      "id": 417,
	      "text": "海城市"
	    }
	  ],
	  "31": [
	    {
	      "id": 418,
	      "text": "新撫區"
	    },
	    {
	      "id": 419,
	      "text": "東洲區"
	    },
	    {
	      "id": 420,
	      "text": "望花區"
	    },
	    {
	      "id": 421,
	      "text": "順城區"
	    },
	    {
	      "id": 422,
	      "text": "撫順縣"
	    },
	    {
	      "id": 423,
	      "text": "新賓滿族自治縣"
	    },
	    {
	      "id": 424,
	      "text": "清原滿族自治縣"
	    }
	  ],
	  "32": [
	    {
	      "id": 425,
	      "text": "平山區"
	    },
	    {
	      "id": 426,
	      "text": "溪湖區"
	    },
	    {
	      "id": 427,
	      "text": "明山區"
	    },
	    {
	      "id": 428,
	      "text": "南芬區"
	    },
	    {
	      "id": 429,
	      "text": "本溪滿族自治縣"
	    },
	    {
	      "id": 430,
	      "text": "桓仁滿族自治縣"
	    }
	  ],
	  "33": [
	    {
	      "id": 431,
	      "text": "元寶區"
	    },
	    {
	      "id": 432,
	      "text": "振興區"
	    },
	    {
	      "id": 433,
	      "text": "振安區"
	    },
	    {
	      "id": 434,
	      "text": "寬甸滿族自治縣"
	    },
	    {
	      "id": 435,
	      "text": "東港市"
	    },
	    {
	      "id": 436,
	      "text": "鳳城市"
	    }
	  ],
	  "34": [
	    {
	      "id": 437,
	      "text": "古塔區"
	    },
	    {
	      "id": 438,
	      "text": "凌河區"
	    },
	    {
	      "id": 439,
	      "text": "太和區"
	    },
	    {
	      "id": 440,
	      "text": "黑山縣"
	    },
	    {
	      "id": 441,
	      "text": "義縣"
	    },
	    {
	      "id": 442,
	      "text": "凌海市"
	    },
	    {
	      "id": 443,
	      "text": "北鎮市"
	    }
	  ],
	  "35": [
	    {
	      "id": 444,
	      "text": "站前區"
	    },
	    {
	      "id": 445,
	      "text": "西市區"
	    },
	    {
	      "id": 446,
	      "text": "鱍魚圈區"
	    },
	    {
	      "id": 447,
	      "text": "老邊區"
	    },
	    {
	      "id": 448,
	      "text": "蓋州市"
	    },
	    {
	      "id": 449,
	      "text": "大石橋市"
	    }
	  ],
	  "36": [
	    {
	      "id": 450,
	      "text": "海州區"
	    },
	    {
	      "id": 451,
	      "text": "新邱區"
	    },
	    {
	      "id": 452,
	      "text": "太平區"
	    },
	    {
	      "id": 453,
	      "text": "清河門區"
	    },
	    {
	      "id": 454,
	      "text": "細河區"
	    },
	    {
	      "id": 455,
	      "text": "阜新蒙古族自治縣"
	    },
	    {
	      "id": 456,
	      "text": "彰武縣"
	    }
	  ],
	  "37": [
	    {
	      "id": 457,
	      "text": "白塔區"
	    },
	    {
	      "id": 458,
	      "text": "文聖區"
	    },
	    {
	      "id": 459,
	      "text": "巨集偉區"
	    },
	    {
	      "id": 460,
	      "text": "弓長嶺區"
	    },
	    {
	      "id": 461,
	      "text": "太子河區"
	    },
	    {
	      "id": 462,
	      "text": "遼陽縣"
	    },
	    {
	      "id": 463,
	      "text": "燈塔市"
	    }
	  ],
	  "38": [
	    {
	      "id": 464,
	      "text": "雙塔區"
	    },
	    {
	      "id": 465,
	      "text": "龍城區"
	    },
	    {
	      "id": 466,
	      "text": "朝陽縣"
	    },
	    {
	      "id": 467,
	      "text": "建平縣"
	    },
	    {
	      "id": 468,
	      "text": "喀喇沁左翼蒙古族自治縣"
	    },
	    {
	      "id": 469,
	      "text": "北票市"
	    },
	    {
	      "id": 470,
	      "text": "凌源市"
	    }
	  ],
	  "39": [
	    {
	      "id": 471,
	      "text": "雙台子區"
	    },
	    {
	      "id": 472,
	      "text": "興隆台區"
	    },
	    {
	      "id": 473,
	      "text": "大窪縣"
	    },
	    {
	      "id": 474,
	      "text": "碟山縣"
	    }
	  ],
	  "40": [
	    {
	      "id": 475,
	      "text": "連山區"
	    },
	    {
	      "id": 476,
	      "text": "龍港區"
	    },
	    {
	      "id": 477,
	      "text": "南票區"
	    },
	    {
	      "id": 478,
	      "text": "綏中縣"
	    },
	    {
	      "id": 479,
	      "text": "建昌縣"
	    },
	    {
	      "id": 480,
	      "text": "興城市"
	    }
	  ],
	  "41": [
	    {
	      "id": 481,
	      "text": "南關區"
	    },
	    {
	      "id": 482,
	      "text": "寬城區"
	    },
	    {
	      "id": 483,
	      "text": "朝陽區"
	    },
	    {
	      "id": 484,
	      "text": "二道區"
	    },
	    {
	      "id": 485,
	      "text": "綠園區"
	    },
	    {
	      "id": 486,
	      "text": "雙陽區"
	    },
	    {
	      "id": 487,
	      "text": "農安縣"
	    },
	    {
	      "id": 488,
	      "text": "九台市"
	    },
	    {
	      "id": 489,
	      "text": "榆樹市"
	    },
	    {
	      "id": 490,
	      "text": "德惠市"
	    }
	  ],
	  "42": [
	    {
	      "id": 491,
	      "text": "昌邑區"
	    },
	    {
	      "id": 492,
	      "text": "龍潭區"
	    },
	    {
	      "id": 493,
	      "text": "船營區"
	    },
	    {
	      "id": 494,
	      "text": "豐滿區"
	    },
	    {
	      "id": 495,
	      "text": "永吉縣"
	    },
	    {
	      "id": 496,
	      "text": "蛟河市"
	    },
	    {
	      "id": 497,
	      "text": "樺甸市"
	    },
	    {
	      "id": 498,
	      "text": "舒蘭市"
	    },
	    {
	      "id": 499,
	      "text": "磐石市"
	    }
	  ],
	  "43": [
	    {
	      "id": 500,
	      "text": "延吉市"
	    },
	    {
	      "id": 501,
	      "text": "圖們市"
	    },
	    {
	      "id": 502,
	      "text": "敦化市"
	    },
	    {
	      "id": 503,
	      "text": "琿春市"
	    },
	    {
	      "id": 504,
	      "text": "龍井市"
	    },
	    {
	      "id": 505,
	      "text": "和龍市"
	    },
	    {
	      "id": 506,
	      "text": "汪清縣"
	    },
	    {
	      "id": 507,
	      "text": "安圖縣"
	    }
	  ],
	  "44": [
	    {
	      "id": 508,
	      "text": "鐵西區"
	    },
	    {
	      "id": 509,
	      "text": "鐵東區"
	    },
	    {
	      "id": 510,
	      "text": "梨樹縣"
	    },
	    {
	      "id": 511,
	      "text": "伊通滿族自治縣"
	    },
	    {
	      "id": 512,
	      "text": "公主嶺市"
	    },
	    {
	      "id": 513,
	      "text": "雙遼市"
	    }
	  ],
	  "45": [
	    {
	      "id": 514,
	      "text": "東昌區"
	    },
	    {
	      "id": 515,
	      "text": "二道江區"
	    },
	    {
	      "id": 516,
	      "text": "通化縣"
	    },
	    {
	      "id": 517,
	      "text": "輝南縣"
	    },
	    {
	      "id": 518,
	      "text": "柳河縣"
	    },
	    {
	      "id": 519,
	      "text": "梅河口市"
	    },
	    {
	      "id": 520,
	      "text": "集安市"
	    }
	  ],
	  "46": [
	    {
	      "id": 521,
	      "text": "洮北區"
	    },
	    {
	      "id": 522,
	      "text": "鎮賚縣"
	    },
	    {
	      "id": 523,
	      "text": "通榆縣"
	    },
	    {
	      "id": 524,
	      "text": "洮南市"
	    },
	    {
	      "id": 525,
	      "text": "大安市"
	    }
	  ],
	  "47": [
	    {
	      "id": 526,
	      "text": "龍山區"
	    },
	    {
	      "id": 527,
	      "text": "西安區"
	    },
	    {
	      "id": 528,
	      "text": "東豐縣"
	    },
	    {
	      "id": 529,
	      "text": "東遼縣"
	    }
	  ],
	  "48": [
	    {
	      "id": 530,
	      "text": "寧江區"
	    },
	    {
	      "id": 531,
	      "text": "前郭爾羅斯蒙古族自治縣"
	    },
	    {
	      "id": 532,
	      "text": "長嶺縣"
	    },
	    {
	      "id": 533,
	      "text": "乾安縣"
	    },
	    {
	      "id": 534,
	      "text": "扶余縣"
	    }
	  ],
	  "49": [
	    {
	      "id": 535,
	      "text": "八道江區"
	    },
	    {
	      "id": 536,
	      "text": "江源區"
	    },
	    {
	      "id": 537,
	      "text": "撫松縣"
	    },
	    {
	      "id": 538,
	      "text": "靖宇縣"
	    },
	    {
	      "id": 539,
	      "text": "長白朝鮮族自治縣"
	    },
	    {
	      "id": 540,
	      "text": "臨江市"
	    }
	  ],
	  "50": [
	    {
	      "id": 541,
	      "text": "道裡區"
	    },
	    {
	      "id": 542,
	      "text": "南崗區"
	    },
	    {
	      "id": 543,
	      "text": "道外區"
	    },
	    {
	      "id": 544,
	      "text": "平房區"
	    },
	    {
	      "id": 545,
	      "text": "松北區"
	    },
	    {
	      "id": 546,
	      "text": "香坊區"
	    },
	    {
	      "id": 547,
	      "text": "呼蘭區"
	    },
	    {
	      "id": 548,
	      "text": "阿城區"
	    },
	    {
	      "id": 549,
	      "text": "依蘭縣"
	    },
	    {
	      "id": 550,
	      "text": "方正縣"
	    },
	    {
	      "id": 551,
	      "text": "賓縣"
	    },
	    {
	      "id": 552,
	      "text": "巴彥縣"
	    },
	    {
	      "id": 553,
	      "text": "木蘭縣"
	    },
	    {
	      "id": 554,
	      "text": "通河縣"
	    },
	    {
	      "id": 555,
	      "text": "延壽縣"
	    },
	    {
	      "id": 556,
	      "text": "雙城市"
	    },
	    {
	      "id": 557,
	      "text": "尚志市"
	    },
	    {
	      "id": 558,
	      "text": "五常市"
	    }
	  ],
	  "51": [
	    {
	      "id": 559,
	      "text": "龍沙區"
	    },
	    {
	      "id": 560,
	      "text": "建華區"
	    },
	    {
	      "id": 561,
	      "text": "鐵鋒區"
	    },
	    {
	      "id": 562,
	      "text": "昂昂溪區"
	    },
	    {
	      "id": 563,
	      "text": "富拉爾基區"
	    },
	    {
	      "id": 564,
	      "text": "碾子山區"
	    },
	    {
	      "id": 565,
	      "text": "梅裡斯達翰爾族區"
	    },
	    {
	      "id": 566,
	      "text": "龍江縣"
	    },
	    {
	      "id": 567,
	      "text": "依安縣"
	    },
	    {
	      "id": 568,
	      "text": "泰來縣"
	    },
	    {
	      "id": 569,
	      "text": "甘南縣"
	    },
	    {
	      "id": 570,
	      "text": "富裕縣"
	    },
	    {
	      "id": 571,
	      "text": "克山縣"
	    },
	    {
	      "id": 572,
	      "text": "克東縣"
	    },
	    {
	      "id": 573,
	      "text": "拜泉縣"
	    },
	    {
	      "id": 574,
	      "text": "訥河市"
	    }
	  ],
	  "52": [
	    {
	      "id": 575,
	      "text": "雞冠區"
	    },
	    {
	      "id": 576,
	      "text": "恆山區"
	    },
	    {
	      "id": 577,
	      "text": "滴道區"
	    },
	    {
	      "id": 578,
	      "text": "梨樹區"
	    },
	    {
	      "id": 579,
	      "text": "城子河區"
	    },
	    {
	      "id": 580,
	      "text": "麻山區"
	    },
	    {
	      "id": 581,
	      "text": "雞東縣"
	    },
	    {
	      "id": 582,
	      "text": "虎林市"
	    },
	    {
	      "id": 583,
	      "text": "密山市"
	    }
	  ],
	  "53": [
	    {
	      "id": 584,
	      "text": "東安區"
	    },
	    {
	      "id": 585,
	      "text": "陽明區"
	    },
	    {
	      "id": 586,
	      "text": "愛民區"
	    },
	    {
	      "id": 587,
	      "text": "西安區"
	    },
	    {
	      "id": 588,
	      "text": "東寧縣"
	    },
	    {
	      "id": 589,
	      "text": "林口縣"
	    },
	    {
	      "id": 590,
	      "text": "綏芬河市"
	    },
	    {
	      "id": 591,
	      "text": "海林市"
	    },
	    {
	      "id": 592,
	      "text": "寧安市"
	    },
	    {
	      "id": 593,
	      "text": "穆稜市"
	    }
	  ],
	  "54": [
	    {
	      "id": 594,
	      "text": "新興區"
	    },
	    {
	      "id": 595,
	      "text": "桃山區"
	    },
	    {
	      "id": 596,
	      "text": "茄子河區"
	    },
	    {
	      "id": 597,
	      "text": "勃利縣"
	    }
	  ],
	  "55": [
	    {
	      "id": 598,
	      "text": "向陽區"
	    },
	    {
	      "id": 599,
	      "text": "前進區"
	    },
	    {
	      "id": 600,
	      "text": "東風區"
	    },
	    {
	      "id": 601,
	      "text": "樺南縣"
	    },
	    {
	      "id": 602,
	      "text": "樺川縣"
	    },
	    {
	      "id": 603,
	      "text": "湯原縣"
	    },
	    {
	      "id": 604,
	      "text": "撫遠縣"
	    },
	    {
	      "id": 605,
	      "text": "同江市"
	    },
	    {
	      "id": 606,
	      "text": "富錦市"
	    }
	  ],
	  "56": [
	    {
	      "id": 607,
	      "text": "向陽區"
	    },
	    {
	      "id": 608,
	      "text": "工農區"
	    },
	    {
	      "id": 609,
	      "text": "南山區"
	    },
	    {
	      "id": 610,
	      "text": "興安區"
	    },
	    {
	      "id": 611,
	      "text": "東山區"
	    },
	    {
	      "id": 612,
	      "text": "興山區"
	    },
	    {
	      "id": 613,
	      "text": "蘿北縣"
	    },
	    {
	      "id": 614,
	      "text": "綏濱縣"
	    }
	  ],
	  "57": [
	    {
	      "id": 615,
	      "text": "尖山區"
	    },
	    {
	      "id": 616,
	      "text": "嶺東區"
	    },
	    {
	      "id": 617,
	      "text": "四方台區"
	    },
	    {
	      "id": 618,
	      "text": "寶山區"
	    },
	    {
	      "id": 619,
	      "text": "集賢縣"
	    },
	    {
	      "id": 620,
	      "text": "友誼縣"
	    },
	    {
	      "id": 621,
	      "text": "寶清縣"
	    },
	    {
	      "id": 622,
	      "text": "饒河縣"
	    }
	  ],
	  "58": [
	    {
	      "id": 623,
	      "text": "北林區"
	    },
	    {
	      "id": 624,
	      "text": "望奎縣"
	    },
	    {
	      "id": 625,
	      "text": "蘭西縣"
	    },
	    {
	      "id": 626,
	      "text": "青岡縣"
	    },
	    {
	      "id": 627,
	      "text": "慶安縣"
	    },
	    {
	      "id": 628,
	      "text": "明水縣"
	    },
	    {
	      "id": 629,
	      "text": "綏稜縣"
	    },
	    {
	      "id": 630,
	      "text": "安達市"
	    },
	    {
	      "id": 631,
	      "text": "肇東市"
	    },
	    {
	      "id": 632,
	      "text": "海倫市"
	    }
	  ],
	  "59": [
	    {
	      "id": 633,
	      "text": "愛輝區"
	    },
	    {
	      "id": 634,
	      "text": "嫩江縣"
	    },
	    {
	      "id": 635,
	      "text": "遜克縣"
	    },
	    {
	      "id": 636,
	      "text": "孫吳縣"
	    },
	    {
	      "id": 637,
	      "text": "北安市"
	    },
	    {
	      "id": 638,
	      "text": "五大連池市"
	    }
	  ],
	  "60": [
	    {
	      "id": 639,
	      "text": "呼瑪縣"
	    },
	    {
	      "id": 640,
	      "text": "塔河縣"
	    },
	    {
	      "id": 641,
	      "text": "漠河縣"
	    }
	  ],
	  "61": [
	    {
	      "id": 642,
	      "text": "伊春區"
	    },
	    {
	      "id": 643,
	      "text": "南岔區"
	    },
	    {
	      "id": 644,
	      "text": "友善區"
	    },
	    {
	      "id": 645,
	      "text": "西林區"
	    },
	    {
	      "id": 646,
	      "text": "翠巒區"
	    },
	    {
	      "id": 647,
	      "text": "新青區"
	    },
	    {
	      "id": 648,
	      "text": "美溪區"
	    },
	    {
	      "id": 649,
	      "text": "金山屯區"
	    },
	    {
	      "id": 650,
	      "text": "五營區"
	    },
	    {
	      "id": 651,
	      "text": "烏馬河區"
	    },
	    {
	      "id": 652,
	      "text": "湯旺河區"
	    },
	    {
	      "id": 653,
	      "text": "帶嶺區"
	    },
	    {
	      "id": 654,
	      "text": "烏伊嶺區"
	    },
	    {
	      "id": 655,
	      "text": "紅星區"
	    },
	    {
	      "id": 656,
	      "text": "上甘嶺區"
	    },
	    {
	      "id": 657,
	      "text": "嘉蔭縣"
	    },
	    {
	      "id": 658,
	      "text": "鐵力市"
	    }
	  ],
	  "62": [
	    {
	      "id": 659,
	      "text": "薩爾圖區"
	    },
	    {
	      "id": 660,
	      "text": "龍鳳區"
	    },
	    {
	      "id": 661,
	      "text": "讓胡路區"
	    },
	    {
	      "id": 662,
	      "text": "紅崗區"
	    },
	    {
	      "id": 663,
	      "text": "大同區"
	    },
	    {
	      "id": 664,
	      "text": "肇州縣"
	    },
	    {
	      "id": 665,
	      "text": "肇源縣"
	    },
	    {
	      "id": 666,
	      "text": "林甸縣"
	    },
	    {
	      "id": 667,
	      "text": "杜爾伯特蒙古族自治縣"
	    }
	  ],
	  "3": [
	    {
	      "id": 37,
	      "text": "黃浦區"
	    },
	    {
	      "id": 38,
	      "text": "盧灣區"
	    },
	    {
	      "id": 39,
	      "text": "徐匯區"
	    },
	    {
	      "id": 40,
	      "text": "長寧區"
	    },
	    {
	      "id": 41,
	      "text": "靜安區"
	    },
	    {
	      "id": 42,
	      "text": "普陀區"
	    },
	    {
	      "id": 43,
	      "text": "閘北區"
	    },
	    {
	      "id": 44,
	      "text": "虹口區"
	    },
	    {
	      "id": 45,
	      "text": "楊浦區"
	    },
	    {
	      "id": 46,
	      "text": "閔行區"
	    },
	    {
	      "id": 47,
	      "text": "寶山區"
	    },
	    {
	      "id": 48,
	      "text": "嘉定區"
	    },
	    {
	      "id": 49,
	      "text": "浦東新區"
	    },
	    {
	      "id": 50,
	      "text": "金山區"
	    },
	    {
	      "id": 51,
	      "text": "松江區"
	    },
	    {
	      "id": 52,
	      "text": "青浦區"
	    },
	    {
	      "id": 53,
	      "text": "南匯區"
	    },
	    {
	      "id": 54,
	      "text": "奉賢區"
	    },
	    {
	      "id": 55,
	      "text": "崇明縣"
	    }
	  ],
	  "63": [
	    {
	      "id": 668,
	      "text": "江寧區"
	    },
	    {
	      "id": 669,
	      "text": "浦口區"
	    },
	    {
	      "id": 670,
	      "text": "玄武區"
	    },
	    {
	      "id": 671,
	      "text": "白下區"
	    },
	    {
	      "id": 672,
	      "text": "秦淮區"
	    },
	    {
	      "id": 673,
	      "text": "建鄴區"
	    },
	    {
	      "id": 674,
	      "text": "鼓樓區"
	    },
	    {
	      "id": 675,
	      "text": "下關區"
	    },
	    {
	      "id": 676,
	      "text": "棲霞區"
	    },
	    {
	      "id": 677,
	      "text": "雨花台區"
	    },
	    {
	      "id": 678,
	      "text": "六合區"
	    },
	    {
	      "id": 679,
	      "text": "溧水縣"
	    },
	    {
	      "id": 680,
	      "text": "高淳縣"
	    }
	  ],
	  "64": [
	    {
	      "id": 681,
	      "text": "崇安區"
	    },
	    {
	      "id": 682,
	      "text": "南長區"
	    },
	    {
	      "id": 683,
	      "text": "北塘區"
	    },
	    {
	      "id": 684,
	      "text": "錫山區"
	    },
	    {
	      "id": 685,
	      "text": "惠山區"
	    },
	    {
	      "id": 686,
	      "text": "濱湖區"
	    },
	    {
	      "id": 687,
	      "text": "江陰市"
	    },
	    {
	      "id": 688,
	      "text": "宜興市"
	    }
	  ],
	  "65": [
	    {
	      "id": 689,
	      "text": "京口區"
	    },
	    {
	      "id": 690,
	      "text": "潤州區"
	    },
	    {
	      "id": 691,
	      "text": "丹徒區"
	    },
	    {
	      "id": 692,
	      "text": "丹陽市"
	    },
	    {
	      "id": 693,
	      "text": "揚中市"
	    },
	    {
	      "id": 694,
	      "text": "句容市"
	    }
	  ],
	  "66": [
	    {
	      "id": 695,
	      "text": "滄浪區"
	    },
	    {
	      "id": 696,
	      "text": "常熟市"
	    },
	    {
	      "id": 697,
	      "text": "平江區"
	    },
	    {
	      "id": 698,
	      "text": "金閶區"
	    },
	    {
	      "id": 699,
	      "text": "虎丘區"
	    },
	    {
	      "id": 700,
	      "text": "昆山市"
	    },
	    {
	      "id": 701,
	      "text": "太倉市"
	    },
	    {
	      "id": 702,
	      "text": "吳江市"
	    },
	    {
	      "id": 703,
	      "text": "吳中區"
	    },
	    {
	      "id": 704,
	      "text": "相城區"
	    },
	    {
	      "id": 705,
	      "text": "張家港市"
	    }
	  ],
	  "67": [
	    {
	      "id": 706,
	      "text": "崇川區"
	    },
	    {
	      "id": 707,
	      "text": "港閘區"
	    },
	    {
	      "id": 708,
	      "text": "海安縣"
	    },
	    {
	      "id": 709,
	      "text": "如東縣"
	    },
	    {
	      "id": 710,
	      "text": "啟東市"
	    },
	    {
	      "id": 711,
	      "text": "如皋市"
	    },
	    {
	      "id": 712,
	      "text": "通州市"
	    },
	    {
	      "id": 713,
	      "text": "海門市"
	    }
	  ],
	  "68": [
	    {
	      "id": 714,
	      "text": "高郵市"
	    },
	    {
	      "id": 715,
	      "text": "廣陵區"
	    },
	    {
	      "id": 716,
	      "text": "邗江區"
	    },
	    {
	      "id": 717,
	      "text": "維揚區"
	    },
	    {
	      "id": 718,
	      "text": "寶應縣"
	    },
	    {
	      "id": 719,
	      "text": "江都市"
	    },
	    {
	      "id": 720,
	      "text": "儀征市"
	    }
	  ],
	  "69": [
	    {
	      "id": 721,
	      "text": "亭湖區"
	    },
	    {
	      "id": 722,
	      "text": "鹽都區"
	    },
	    {
	      "id": 723,
	      "text": "響水縣"
	    },
	    {
	      "id": 724,
	      "text": "濱海縣"
	    },
	    {
	      "id": 725,
	      "text": "阜寧縣"
	    },
	    {
	      "id": 726,
	      "text": "射陽縣"
	    },
	    {
	      "id": 727,
	      "text": "建湖縣"
	    },
	    {
	      "id": 728,
	      "text": "東台市"
	    },
	    {
	      "id": 729,
	      "text": "大豐市"
	    }
	  ],
	  "70": [
	    {
	      "id": 730,
	      "text": "鼓樓區"
	    },
	    {
	      "id": 731,
	      "text": "雲龍區"
	    },
	    {
	      "id": 732,
	      "text": "九裡區"
	    },
	    {
	      "id": 733,
	      "text": "賈汪區"
	    },
	    {
	      "id": 734,
	      "text": "泉山區"
	    },
	    {
	      "id": 735,
	      "text": "豐縣"
	    },
	    {
	      "id": 736,
	      "text": "沛縣"
	    },
	    {
	      "id": 737,
	      "text": "銅山縣"
	    },
	    {
	      "id": 738,
	      "text": "睢寧縣"
	    },
	    {
	      "id": 739,
	      "text": "新沂市"
	    },
	    {
	      "id": 740,
	      "text": "邳州市"
	    }
	  ],
	  "71": [
	    {
	      "id": 741,
	      "text": "清河區"
	    },
	    {
	      "id": 742,
	      "text": "楚州區"
	    },
	    {
	      "id": 743,
	      "text": "淮陰區"
	    },
	    {
	      "id": 744,
	      "text": "清浦區"
	    },
	    {
	      "id": 745,
	      "text": "漣水縣"
	    },
	    {
	      "id": 746,
	      "text": "洪澤縣"
	    },
	    {
	      "id": 747,
	      "text": "盱眙縣"
	    },
	    {
	      "id": 748,
	      "text": "金湖縣"
	    }
	  ],
	  "72": [
	    {
	      "id": 749,
	      "text": "連雲區"
	    },
	    {
	      "id": 750,
	      "text": "新浦區"
	    },
	    {
	      "id": 751,
	      "text": "海州區"
	    },
	    {
	      "id": 752,
	      "text": "贛榆縣"
	    },
	    {
	      "id": 753,
	      "text": "東海縣"
	    },
	    {
	      "id": 754,
	      "text": "灌雲縣"
	    },
	    {
	      "id": 755,
	      "text": "灌南縣"
	    }
	  ],
	  "73": [
	    {
	      "id": 756,
	      "text": "天寧區"
	    },
	    {
	      "id": 757,
	      "text": "鍾樓區"
	    },
	    {
	      "id": 758,
	      "text": "戚墅堰區"
	    },
	    {
	      "id": 759,
	      "text": "新北區"
	    },
	    {
	      "id": 760,
	      "text": "武進區"
	    },
	    {
	      "id": 761,
	      "text": "溧陽市"
	    },
	    {
	      "id": 762,
	      "text": "金壇市"
	    }
	  ],
	  "74": [
	    {
	      "id": 763,
	      "text": "海陵區"
	    },
	    {
	      "id": 764,
	      "text": "高港區"
	    },
	    {
	      "id": 765,
	      "text": "興化市"
	    },
	    {
	      "id": 766,
	      "text": "靖江市"
	    },
	    {
	      "id": 767,
	      "text": "泰興市"
	    },
	    {
	      "id": 768,
	      "text": "姜堰市"
	    }
	  ],
	  "75": [
	    {
	      "id": 769,
	      "text": "宿城區"
	    },
	    {
	      "id": 770,
	      "text": "宿豫區"
	    },
	    {
	      "id": 771,
	      "text": "沭陽縣"
	    },
	    {
	      "id": 772,
	      "text": "泗陽縣"
	    },
	    {
	      "id": 773,
	      "text": "泗洪縣"
	    }
	  ],
	  "76": [
	    {
	      "id": 774,
	      "text": "定海區"
	    },
	    {
	      "id": 775,
	      "text": "普陀區"
	    },
	    {
	      "id": 776,
	      "text": "岱山縣"
	    },
	    {
	      "id": 777,
	      "text": "嵊泗縣"
	    }
	  ],
	  "77": [
	    {
	      "id": 778,
	      "text": "柯城區"
	    },
	    {
	      "id": 779,
	      "text": "衢江區"
	    },
	    {
	      "id": 780,
	      "text": "常山縣"
	    },
	    {
	      "id": 781,
	      "text": "開化縣"
	    },
	    {
	      "id": 782,
	      "text": "龍游縣"
	    },
	    {
	      "id": 783,
	      "text": "江山市"
	    }
	  ],
	  "78": [
	    {
	      "id": 784,
	      "text": "上城區"
	    },
	    {
	      "id": 785,
	      "text": "下城區"
	    },
	    {
	      "id": 786,
	      "text": "江干區"
	    },
	    {
	      "id": 787,
	      "text": "拱墅區"
	    },
	    {
	      "id": 788,
	      "text": "西湖區"
	    },
	    {
	      "id": 789,
	      "text": "濱江區"
	    },
	    {
	      "id": 790,
	      "text": "余杭區"
	    },
	    {
	      "id": 791,
	      "text": "桐廬縣"
	    },
	    {
	      "id": 792,
	      "text": "淳安縣"
	    },
	    {
	      "id": 793,
	      "text": "建德市"
	    },
	    {
	      "id": 794,
	      "text": "富陽市"
	    },
	    {
	      "id": 795,
	      "text": "臨安市"
	    },
	    {
	      "id": 796,
	      "text": "蕭山區"
	    }
	  ],
	  "79": [
	    {
	      "id": 797,
	      "text": "吳興區"
	    },
	    {
	      "id": 798,
	      "text": "南潯區"
	    },
	    {
	      "id": 799,
	      "text": "德清縣"
	    },
	    {
	      "id": 800,
	      "text": "長興縣"
	    },
	    {
	      "id": 801,
	      "text": "安吉縣"
	    }
	  ],
	  "80": [
	    {
	      "id": 802,
	      "text": " 南湖區"
	    },
	    {
	      "id": 803,
	      "text": " 秀洲區"
	    },
	    {
	      "id": 804,
	      "text": " 嘉善縣"
	    },
	    {
	      "id": 805,
	      "text": " 海鹽縣"
	    },
	    {
	      "id": 806,
	      "text": " 海寧市"
	    },
	    {
	      "id": 807,
	      "text": " 平湖市"
	    },
	    {
	      "id": 808,
	      "text": " 桐鄉市 "
	    }
	  ],
	  "81": [
	    {
	      "id": 809,
	      "text": "海曙區"
	    },
	    {
	      "id": 810,
	      "text": "江東區"
	    },
	    {
	      "id": 811,
	      "text": "江北區"
	    },
	    {
	      "id": 812,
	      "text": "北侖區"
	    },
	    {
	      "id": 813,
	      "text": "鎮海區"
	    },
	    {
	      "id": 814,
	      "text": "鄞州區"
	    },
	    {
	      "id": 815,
	      "text": "象山縣"
	    },
	    {
	      "id": 816,
	      "text": "寧海縣"
	    },
	    {
	      "id": 817,
	      "text": "余姚市"
	    },
	    {
	      "id": 818,
	      "text": "慈溪市"
	    },
	    {
	      "id": 819,
	      "text": "奉化市"
	    }
	  ],
	  "82": [
	    {
	      "id": 820,
	      "text": "越城區"
	    },
	    {
	      "id": 821,
	      "text": "紹興縣"
	    },
	    {
	      "id": 822,
	      "text": "新昌縣"
	    },
	    {
	      "id": 823,
	      "text": "諸暨市"
	    },
	    {
	      "id": 824,
	      "text": "上虞市"
	    },
	    {
	      "id": 825,
	      "text": "嵊州市"
	    }
	  ],
	  "83": [
	    {
	      "id": 826,
	      "text": "鹿城區"
	    },
	    {
	      "id": 827,
	      "text": "龍灣區"
	    },
	    {
	      "id": 828,
	      "text": "甌海區"
	    },
	    {
	      "id": 829,
	      "text": "洞頭縣"
	    },
	    {
	      "id": 830,
	      "text": "永嘉縣"
	    },
	    {
	      "id": 831,
	      "text": "平陽縣"
	    },
	    {
	      "id": 832,
	      "text": "蒼南縣"
	    },
	    {
	      "id": 833,
	      "text": "文成縣"
	    },
	    {
	      "id": 834,
	      "text": "泰順縣"
	    },
	    {
	      "id": 835,
	      "text": "瑞安市"
	    },
	    {
	      "id": 836,
	      "text": "樂清市"
	    }
	  ],
	  "84": [
	    {
	      "id": 837,
	      "text": "蓮都區"
	    },
	    {
	      "id": 838,
	      "text": "青田縣"
	    },
	    {
	      "id": 839,
	      "text": "縉雲縣"
	    },
	    {
	      "id": 840,
	      "text": "遂昌縣"
	    },
	    {
	      "id": 841,
	      "text": "松陽縣"
	    },
	    {
	      "id": 842,
	      "text": "雲和縣"
	    },
	    {
	      "id": 843,
	      "text": "慶元縣"
	    },
	    {
	      "id": 844,
	      "text": "景寧畬族自治縣"
	    },
	    {
	      "id": 845,
	      "text": "龍泉市"
	    }
	  ],
	  "85": [
	    {
	      "id": 846,
	      "text": "婺城區"
	    },
	    {
	      "id": 847,
	      "text": "金東區"
	    },
	    {
	      "id": 848,
	      "text": "武義縣"
	    },
	    {
	      "id": 849,
	      "text": "浦江縣"
	    },
	    {
	      "id": 850,
	      "text": "磐安縣"
	    },
	    {
	      "id": 851,
	      "text": "蘭溪市"
	    },
	    {
	      "id": 852,
	      "text": "義烏市"
	    },
	    {
	      "id": 853,
	      "text": "東陽市"
	    },
	    {
	      "id": 854,
	      "text": "永康市"
	    }
	  ],
	  "86": [
	    {
	      "id": 855,
	      "text": "椒江區"
	    },
	    {
	      "id": 856,
	      "text": "黃巖區"
	    },
	    {
	      "id": 857,
	      "text": "路橋區"
	    },
	    {
	      "id": 858,
	      "text": "玉環縣"
	    },
	    {
	      "id": 859,
	      "text": "三門縣"
	    },
	    {
	      "id": 860,
	      "text": "天台縣"
	    },
	    {
	      "id": 861,
	      "text": "仙居縣"
	    },
	    {
	      "id": 862,
	      "text": "溫嶺市"
	    },
	    {
	      "id": 863,
	      "text": "臨海市"
	    }
	  ],
	  "87": [
	    {
	      "id": 864,
	      "text": "瑤海區"
	    },
	    {
	      "id": 865,
	      "text": "廬陽區"
	    },
	    {
	      "id": 866,
	      "text": "蜀山區"
	    },
	    {
	      "id": 867,
	      "text": "包河區"
	    },
	    {
	      "id": 868,
	      "text": "長豐縣"
	    },
	    {
	      "id": 869,
	      "text": "肥東縣"
	    },
	    {
	      "id": 870,
	      "text": "肥西縣"
	    }
	  ],
	  "88": [
	    {
	      "id": 871,
	      "text": "鏡湖區"
	    },
	    {
	      "id": 872,
	      "text": "弋江區"
	    },
	    {
	      "id": 873,
	      "text": "鳩江區"
	    },
	    {
	      "id": 874,
	      "text": "三山區"
	    },
	    {
	      "id": 875,
	      "text": "蕪湖縣"
	    },
	    {
	      "id": 876,
	      "text": "繁昌縣"
	    },
	    {
	      "id": 877,
	      "text": "南陵縣"
	    }
	  ],
	  "89": [
	    {
	      "id": 878,
	      "text": "龍子湖區"
	    },
	    {
	      "id": 879,
	      "text": "蚌山區"
	    },
	    {
	      "id": 880,
	      "text": "禹會區"
	    },
	    {
	      "id": 881,
	      "text": "淮上區"
	    },
	    {
	      "id": 882,
	      "text": "懷遠縣"
	    },
	    {
	      "id": 883,
	      "text": "五河縣"
	    },
	    {
	      "id": 884,
	      "text": "固鎮縣"
	    }
	  ],
	  "90": [
	    {
	      "id": 885,
	      "text": "大通區"
	    },
	    {
	      "id": 886,
	      "text": "田家庵區"
	    },
	    {
	      "id": 887,
	      "text": "謝家集區"
	    },
	    {
	      "id": 888,
	      "text": "八公山區"
	    },
	    {
	      "id": 889,
	      "text": "潘集區"
	    },
	    {
	      "id": 890,
	      "text": "鳳台縣"
	    }
	  ],
	  "91": [
	    {
	      "id": 891,
	      "text": "金家莊區"
	    },
	    {
	      "id": 892,
	      "text": "花山區"
	    },
	    {
	      "id": 893,
	      "text": "雨山區"
	    },
	    {
	      "id": 894,
	      "text": "當塗縣"
	    }
	  ],
	  "92": [
	    {
	      "id": 895,
	      "text": "杜集區"
	    },
	    {
	      "id": 896,
	      "text": "相山區"
	    },
	    {
	      "id": 897,
	      "text": "烈山區"
	    },
	    {
	      "id": 898,
	      "text": "濉溪縣 "
	    }
	  ],
	  "93": [
	    {
	      "id": 899,
	      "text": "銅官山區"
	    },
	    {
	      "id": 900,
	      "text": "獅子山區"
	    },
	    {
	      "id": 901,
	      "text": "銅陵縣"
	    }
	  ],
	  "94": [
	    {
	      "id": 902,
	      "text": "迎江區"
	    },
	    {
	      "id": 903,
	      "text": "大觀區"
	    },
	    {
	      "id": 904,
	      "text": "宜秀區"
	    },
	    {
	      "id": 905,
	      "text": "懷寧縣"
	    },
	    {
	      "id": 906,
	      "text": "樅陽縣"
	    },
	    {
	      "id": 907,
	      "text": "潛山縣"
	    },
	    {
	      "id": 908,
	      "text": "太湖縣"
	    },
	    {
	      "id": 909,
	      "text": "宿松縣"
	    },
	    {
	      "id": 910,
	      "text": "望江縣"
	    },
	    {
	      "id": 911,
	      "text": "岳西縣"
	    },
	    {
	      "id": 912,
	      "text": "桐城市"
	    }
	  ],
	  "95": [
	    {
	      "id": 913,
	      "text": "屯溪區"
	    },
	    {
	      "id": 914,
	      "text": "黃山區"
	    },
	    {
	      "id": 915,
	      "text": "徽州區"
	    },
	    {
	      "id": 916,
	      "text": "歙縣"
	    },
	    {
	      "id": 917,
	      "text": "休寧縣"
	    },
	    {
	      "id": 918,
	      "text": "黟縣"
	    },
	    {
	      "id": 919,
	      "text": "祁門縣"
	    }
	  ],
	  "96": [
	    {
	      "id": 920,
	      "text": "琅琊區"
	    },
	    {
	      "id": 921,
	      "text": "南譙區"
	    },
	    {
	      "id": 922,
	      "text": "來安縣"
	    },
	    {
	      "id": 923,
	      "text": "全椒縣"
	    },
	    {
	      "id": 924,
	      "text": "定遠縣"
	    },
	    {
	      "id": 925,
	      "text": "鳳陽縣"
	    },
	    {
	      "id": 926,
	      "text": "天長市"
	    },
	    {
	      "id": 927,
	      "text": "明光市"
	    }
	  ],
	  "97": [
	    {
	      "id": 928,
	      "text": "穎州區"
	    },
	    {
	      "id": 929,
	      "text": "穎東區"
	    },
	    {
	      "id": 930,
	      "text": "穎泉區"
	    },
	    {
	      "id": 931,
	      "text": "臨泉縣"
	    },
	    {
	      "id": 932,
	      "text": "太和縣"
	    },
	    {
	      "id": 933,
	      "text": "阜南縣"
	    },
	    {
	      "id": 934,
	      "text": "穎上縣"
	    },
	    {
	      "id": 935,
	      "text": "界首市"
	    }
	  ],
	  "98": [
	    {
	      "id": 936,
	      "text": "埇橋區"
	    },
	    {
	      "id": 937,
	      "text": "碭山縣"
	    },
	    {
	      "id": 938,
	      "text": "蕭縣"
	    },
	    {
	      "id": 939,
	      "text": "靈璧縣"
	    },
	    {
	      "id": 940,
	      "text": "泗縣 "
	    }
	  ],
	  "99": [
	    {
	      "id": 941,
	      "text": "居巢區"
	    },
	    {
	      "id": 942,
	      "text": "廬江縣"
	    },
	    {
	      "id": 943,
	      "text": "無為縣"
	    },
	    {
	      "id": 944,
	      "text": "含山縣"
	    },
	    {
	      "id": 945,
	      "text": "和縣 "
	    }
	  ],
	  "100": [
	    {
	      "id": 946,
	      "text": "金安區"
	    },
	    {
	      "id": 947,
	      "text": "裕安區"
	    },
	    {
	      "id": 948,
	      "text": "壽縣"
	    },
	    {
	      "id": 949,
	      "text": "霍邱縣"
	    },
	    {
	      "id": 950,
	      "text": "舒城縣"
	    },
	    {
	      "id": 951,
	      "text": "金寨縣"
	    },
	    {
	      "id": 952,
	      "text": "霍山縣"
	    }
	  ],
	  "101": [
	    {
	      "id": 953,
	      "text": "譙城區"
	    },
	    {
	      "id": 954,
	      "text": "渦陽縣"
	    },
	    {
	      "id": 955,
	      "text": "蒙城縣"
	    },
	    {
	      "id": 956,
	      "text": "利辛縣"
	    }
	  ],
	  "102": [
	    {
	      "id": 957,
	      "text": "貴池區"
	    },
	    {
	      "id": 958,
	      "text": "東至縣"
	    },
	    {
	      "id": 959,
	      "text": "石台縣"
	    },
	    {
	      "id": 960,
	      "text": "青陽縣"
	    }
	  ],
	  "103": [
	    {
	      "id": 961,
	      "text": "宣州區"
	    },
	    {
	      "id": 962,
	      "text": "郎溪縣"
	    },
	    {
	      "id": 963,
	      "text": "廣德縣"
	    },
	    {
	      "id": 964,
	      "text": "涇縣"
	    },
	    {
	      "id": 965,
	      "text": "績溪縣"
	    },
	    {
	      "id": 966,
	      "text": "旌德縣"
	    },
	    {
	      "id": 967,
	      "text": "寧國市"
	    }
	  ],
	  "104": [
	    {
	      "id": 968,
	      "text": "鼓樓區"
	    },
	    {
	      "id": 969,
	      "text": "台江區"
	    },
	    {
	      "id": 970,
	      "text": "倉山區"
	    },
	    {
	      "id": 971,
	      "text": "馬尾區"
	    },
	    {
	      "id": 972,
	      "text": "晉安區"
	    },
	    {
	      "id": 973,
	      "text": "閩侯縣"
	    },
	    {
	      "id": 974,
	      "text": "連江縣"
	    },
	    {
	      "id": 975,
	      "text": "羅源縣"
	    },
	    {
	      "id": 976,
	      "text": "閩清縣"
	    },
	    {
	      "id": 977,
	      "text": "永泰縣"
	    },
	    {
	      "id": 978,
	      "text": "平潭縣"
	    },
	    {
	      "id": 979,
	      "text": "福清市"
	    },
	    {
	      "id": 980,
	      "text": "長樂市"
	    }
	  ],
	  "105": [
	    {
	      "id": 981,
	      "text": "思明區"
	    },
	    {
	      "id": 982,
	      "text": "海滄區"
	    },
	    {
	      "id": 983,
	      "text": "湖裡區"
	    },
	    {
	      "id": 984,
	      "text": "集美區"
	    },
	    {
	      "id": 985,
	      "text": "同安區"
	    },
	    {
	      "id": 986,
	      "text": "翔安區"
	    }
	  ],
	  "106": [
	    {
	      "id": 987,
	      "text": "蕉城區"
	    },
	    {
	      "id": 988,
	      "text": "霞浦縣"
	    },
	    {
	      "id": 989,
	      "text": "古田縣"
	    },
	    {
	      "id": 990,
	      "text": "屏南縣"
	    },
	    {
	      "id": 991,
	      "text": "壽寧縣"
	    },
	    {
	      "id": 992,
	      "text": "周寧縣"
	    },
	    {
	      "id": 993,
	      "text": "柘榮縣"
	    },
	    {
	      "id": 994,
	      "text": "福安市"
	    },
	    {
	      "id": 995,
	      "text": "福鼎市"
	    }
	  ],
	  "107": [
	    {
	      "id": 996,
	      "text": "城廂區"
	    },
	    {
	      "id": 997,
	      "text": "涵江區"
	    },
	    {
	      "id": 998,
	      "text": "荔城區"
	    },
	    {
	      "id": 999,
	      "text": "秀嶼區"
	    },
	    {
	      "id": 1000,
	      "text": "仙游縣"
	    }
	  ],
	  "108": [
	    {
	      "id": 1001,
	      "text": "鯉城區"
	    },
	    {
	      "id": 1002,
	      "text": "豐澤區"
	    },
	    {
	      "id": 1003,
	      "text": "洛江區"
	    },
	    {
	      "id": 1004,
	      "text": "泉港區"
	    },
	    {
	      "id": 1005,
	      "text": "惠安縣"
	    },
	    {
	      "id": 1006,
	      "text": "安溪縣"
	    },
	    {
	      "id": 1007,
	      "text": "永春縣"
	    },
	    {
	      "id": 1008,
	      "text": "德化縣"
	    },
	    {
	      "id": 1009,
	      "text": "石獅市"
	    },
	    {
	      "id": 1010,
	      "text": "晉江市"
	    },
	    {
	      "id": 1011,
	      "text": "南安市"
	    }
	  ],
	  "109": [
	    {
	      "id": 1012,
	      "text": "薌城區"
	    },
	    {
	      "id": 1013,
	      "text": "龍文區"
	    },
	    {
	      "id": 1014,
	      "text": "雲霄縣"
	    },
	    {
	      "id": 1015,
	      "text": "漳浦縣"
	    },
	    {
	      "id": 1016,
	      "text": "詔安縣"
	    },
	    {
	      "id": 1017,
	      "text": "長泰縣"
	    },
	    {
	      "id": 1018,
	      "text": "東山縣"
	    },
	    {
	      "id": 1019,
	      "text": "南靖縣"
	    },
	    {
	      "id": 1020,
	      "text": "平和縣"
	    },
	    {
	      "id": 1021,
	      "text": "華安縣"
	    },
	    {
	      "id": 1022,
	      "text": "龍海市"
	    }
	  ],
	  "110": [
	    {
	      "id": 1023,
	      "text": "新羅區"
	    },
	    {
	      "id": 1024,
	      "text": "長汀縣"
	    },
	    {
	      "id": 1025,
	      "text": "永定縣"
	    },
	    {
	      "id": 1026,
	      "text": "上杭縣"
	    },
	    {
	      "id": 1027,
	      "text": "武平縣"
	    },
	    {
	      "id": 1028,
	      "text": "連城縣"
	    },
	    {
	      "id": 1029,
	      "text": "漳平市"
	    }
	  ],
	  "111": [
	    {
	      "id": 1030,
	      "text": "梅列區"
	    },
	    {
	      "id": 1031,
	      "text": "三元區"
	    },
	    {
	      "id": 1032,
	      "text": "明溪縣"
	    },
	    {
	      "id": 1033,
	      "text": "清流縣"
	    },
	    {
	      "id": 1034,
	      "text": "寧化縣"
	    },
	    {
	      "id": 1035,
	      "text": "大田縣"
	    },
	    {
	      "id": 1036,
	      "text": "尤溪縣"
	    },
	    {
	      "id": 1037,
	      "text": "沙縣"
	    },
	    {
	      "id": 1038,
	      "text": "將樂縣"
	    },
	    {
	      "id": 1039,
	      "text": "泰寧縣"
	    },
	    {
	      "id": 1040,
	      "text": "建寧縣"
	    },
	    {
	      "id": 1041,
	      "text": "永安市"
	    }
	  ],
	  "112": [
	    {
	      "id": 1042,
	      "text": "延平區"
	    },
	    {
	      "id": 1043,
	      "text": "順昌縣"
	    },
	    {
	      "id": 1044,
	      "text": "浦城縣"
	    },
	    {
	      "id": 1045,
	      "text": "光澤縣"
	    },
	    {
	      "id": 1046,
	      "text": "松溪縣"
	    },
	    {
	      "id": 1047,
	      "text": "政和縣"
	    },
	    {
	      "id": 1048,
	      "text": "邵武市"
	    },
	    {
	      "id": 1049,
	      "text": "武夷山市"
	    },
	    {
	      "id": 1050,
	      "text": "建甌市"
	    },
	    {
	      "id": 1051,
	      "text": "建陽市"
	    }
	  ],
	  "113": [
	    {
	      "id": 1052,
	      "text": "月湖區"
	    },
	    {
	      "id": 1053,
	      "text": "余江縣"
	    },
	    {
	      "id": 1054,
	      "text": "貴溪市"
	    }
	  ],
	  "114": [
	    {
	      "id": 1055,
	      "text": "渝水區"
	    },
	    {
	      "id": 1056,
	      "text": "分宜縣"
	    }
	  ],
	  "115": [
	    {
	      "id": 1057,
	      "text": "東湖區"
	    },
	    {
	      "id": 1058,
	      "text": "西湖區"
	    },
	    {
	      "id": 1059,
	      "text": "青雲譜區"
	    },
	    {
	      "id": 1060,
	      "text": "灣裡區"
	    },
	    {
	      "id": 1061,
	      "text": "青山湖區"
	    },
	    {
	      "id": 1062,
	      "text": "南昌縣"
	    },
	    {
	      "id": 1063,
	      "text": "新增縣"
	    },
	    {
	      "id": 1064,
	      "text": "安義縣"
	    },
	    {
	      "id": 1065,
	      "text": "進賢縣"
	    }
	  ],
	  "116": [
	    {
	      "id": 1066,
	      "text": "廬山區"
	    },
	    {
	      "id": 1067,
	      "text": "潯陽區"
	    },
	    {
	      "id": 1068,
	      "text": "九江縣"
	    },
	    {
	      "id": 1069,
	      "text": "武寧縣"
	    },
	    {
	      "id": 1070,
	      "text": "修水縣"
	    },
	    {
	      "id": 1071,
	      "text": "永修縣"
	    },
	    {
	      "id": 1072,
	      "text": "德安縣"
	    },
	    {
	      "id": 1073,
	      "text": "星子縣"
	    },
	    {
	      "id": 1074,
	      "text": "都昌縣"
	    },
	    {
	      "id": 1075,
	      "text": "湖口縣"
	    },
	    {
	      "id": 1076,
	      "text": "彭澤縣"
	    },
	    {
	      "id": 1077,
	      "text": "瑞昌市"
	    }
	  ],
	  "117": [
	    {
	      "id": 1078,
	      "text": "信州區"
	    },
	    {
	      "id": 1079,
	      "text": "上饒縣"
	    },
	    {
	      "id": 1080,
	      "text": "廣豐縣"
	    },
	    {
	      "id": 1081,
	      "text": "玉山縣"
	    },
	    {
	      "id": 1082,
	      "text": "鉛山縣"
	    },
	    {
	      "id": 1083,
	      "text": "橫峰縣"
	    },
	    {
	      "id": 1084,
	      "text": "弋陽縣"
	    },
	    {
	      "id": 1085,
	      "text": "余干縣"
	    },
	    {
	      "id": 1086,
	      "text": "鄱陽縣"
	    },
	    {
	      "id": 1087,
	      "text": "萬年縣"
	    },
	    {
	      "id": 1088,
	      "text": "婺源縣"
	    },
	    {
	      "id": 1089,
	      "text": "德興市"
	    }
	  ],
	  "118": [
	    {
	      "id": 1090,
	      "text": "臨川區"
	    },
	    {
	      "id": 1091,
	      "text": "南城縣"
	    },
	    {
	      "id": 1092,
	      "text": "黎川縣"
	    },
	    {
	      "id": 1093,
	      "text": "南豐縣"
	    },
	    {
	      "id": 1094,
	      "text": "崇仁縣"
	    },
	    {
	      "id": 1095,
	      "text": "樂安縣"
	    },
	    {
	      "id": 1096,
	      "text": "宜黃縣"
	    },
	    {
	      "id": 1097,
	      "text": "金溪縣"
	    },
	    {
	      "id": 1098,
	      "text": "資溪縣"
	    },
	    {
	      "id": 1099,
	      "text": "東鄉縣"
	    },
	    {
	      "id": 1100,
	      "text": "廣昌縣"
	    }
	  ],
	  "119": [
	    {
	      "id": 1101,
	      "text": "袁州區"
	    },
	    {
	      "id": 1102,
	      "text": "奉新縣"
	    },
	    {
	      "id": 1103,
	      "text": "萬載縣"
	    },
	    {
	      "id": 1104,
	      "text": "上高縣"
	    },
	    {
	      "id": 1105,
	      "text": "宜豐縣"
	    },
	    {
	      "id": 1106,
	      "text": "靖安縣"
	    },
	    {
	      "id": 1107,
	      "text": "銅鼓縣"
	    },
	    {
	      "id": 1108,
	      "text": "豐城市"
	    },
	    {
	      "id": 1109,
	      "text": "樟樹市"
	    },
	    {
	      "id": 1110,
	      "text": "高安市"
	    }
	  ],
	  "120": [
	    {
	      "id": 1111,
	      "text": "吉州區"
	    },
	    {
	      "id": 1112,
	      "text": "青原區"
	    },
	    {
	      "id": 1113,
	      "text": "吉安縣"
	    },
	    {
	      "id": 1114,
	      "text": "吉水縣"
	    },
	    {
	      "id": 1115,
	      "text": "峽江縣"
	    },
	    {
	      "id": 1116,
	      "text": "新干縣"
	    },
	    {
	      "id": 1117,
	      "text": "永豐縣"
	    },
	    {
	      "id": 1118,
	      "text": "泰和縣"
	    },
	    {
	      "id": 1119,
	      "text": "遂川縣"
	    },
	    {
	      "id": 1120,
	      "text": "萬安縣"
	    },
	    {
	      "id": 1121,
	      "text": "安福縣"
	    },
	    {
	      "id": 1122,
	      "text": "永新縣"
	    },
	    {
	      "id": 1123,
	      "text": "井岡山市"
	    }
	  ],
	  "121": [
	    {
	      "id": 1124,
	      "text": "章貢區"
	    },
	    {
	      "id": 1125,
	      "text": "贛縣"
	    },
	    {
	      "id": 1126,
	      "text": "信豐縣"
	    },
	    {
	      "id": 1127,
	      "text": "大余縣"
	    },
	    {
	      "id": 1128,
	      "text": "上猶縣"
	    },
	    {
	      "id": 1129,
	      "text": "崇義縣"
	    },
	    {
	      "id": 1130,
	      "text": "安遠縣"
	    },
	    {
	      "id": 1131,
	      "text": "龍南縣"
	    },
	    {
	      "id": 1132,
	      "text": "定南縣"
	    },
	    {
	      "id": 1133,
	      "text": "全南縣"
	    },
	    {
	      "id": 1134,
	      "text": "寧都縣"
	    },
	    {
	      "id": 1135,
	      "text": "於都縣"
	    },
	    {
	      "id": 1136,
	      "text": "興國縣"
	    },
	    {
	      "id": 1137,
	      "text": "會昌縣"
	    },
	    {
	      "id": 1138,
	      "text": "尋烏縣"
	    },
	    {
	      "id": 1139,
	      "text": "石城縣"
	    },
	    {
	      "id": 1140,
	      "text": "瑞金市"
	    },
	    {
	      "id": 1141,
	      "text": "南康市"
	    }
	  ],
	  "122": [
	    {
	      "id": 1142,
	      "text": "昌江區"
	    },
	    {
	      "id": 1143,
	      "text": "珠山區"
	    },
	    {
	      "id": 1144,
	      "text": "浮梁縣"
	    },
	    {
	      "id": 1145,
	      "text": "樂平市"
	    }
	  ],
	  "123": [
	    {
	      "id": 1146,
	      "text": "安源區"
	    },
	    {
	      "id": 1147,
	      "text": "湘東區"
	    },
	    {
	      "id": 1148,
	      "text": "蓮花縣"
	    },
	    {
	      "id": 1149,
	      "text": "上栗縣"
	    },
	    {
	      "id": 1150,
	      "text": "蘆溪縣"
	    }
	  ],
	  "124": [
	    {
	      "id": 1151,
	      "text": "牡丹區"
	    },
	    {
	      "id": 1152,
	      "text": "曹縣"
	    },
	    {
	      "id": 1153,
	      "text": "單縣"
	    },
	    {
	      "id": 1154,
	      "text": "成武縣"
	    },
	    {
	      "id": 1155,
	      "text": "巨野縣"
	    },
	    {
	      "id": 1156,
	      "text": "鄆城縣"
	    },
	    {
	      "id": 1157,
	      "text": "鄄城縣"
	    },
	    {
	      "id": 1158,
	      "text": "定陶縣"
	    },
	    {
	      "id": 1159,
	      "text": "東明縣"
	    }
	  ],
	  "125": [
	    {
	      "id": 1160,
	      "text": "歷下區"
	    },
	    {
	      "id": 1161,
	      "text": "市中區"
	    },
	    {
	      "id": 1162,
	      "text": "槐蔭區"
	    },
	    {
	      "id": 1163,
	      "text": "天橋區"
	    },
	    {
	      "id": 1164,
	      "text": "歷城區"
	    },
	    {
	      "id": 1165,
	      "text": "長清區"
	    },
	    {
	      "id": 1166,
	      "text": "平陰縣"
	    },
	    {
	      "id": 1167,
	      "text": "濟陽縣"
	    },
	    {
	      "id": 1168,
	      "text": "商河縣"
	    },
	    {
	      "id": 1169,
	      "text": "章丘市"
	    }
	  ],
	  "126": [
	    {
	      "id": 1170,
	      "text": "市南區"
	    },
	    {
	      "id": 1171,
	      "text": "市北區"
	    },
	    {
	      "id": 1172,
	      "text": "四方區"
	    },
	    {
	      "id": 1173,
	      "text": "黃島區"
	    },
	    {
	      "id": 1174,
	      "text": "嶗山區"
	    },
	    {
	      "id": 1175,
	      "text": "李滄區"
	    },
	    {
	      "id": 1176,
	      "text": "城陽區"
	    },
	    {
	      "id": 1177,
	      "text": "膠州市"
	    },
	    {
	      "id": 1178,
	      "text": "即墨市"
	    },
	    {
	      "id": 1179,
	      "text": "平度市"
	    },
	    {
	      "id": 1180,
	      "text": "膠南市"
	    },
	    {
	      "id": 1181,
	      "text": "萊西市"
	    }
	  ],
	  "127": [
	    {
	      "id": 1182,
	      "text": "淄川區"
	    },
	    {
	      "id": 1183,
	      "text": "張店區"
	    },
	    {
	      "id": 1184,
	      "text": "博山區"
	    },
	    {
	      "id": 1185,
	      "text": "臨淄區"
	    },
	    {
	      "id": 1186,
	      "text": "周村區"
	    },
	    {
	      "id": 1187,
	      "text": "桓台縣"
	    },
	    {
	      "id": 1188,
	      "text": "高青縣"
	    },
	    {
	      "id": 1189,
	      "text": "沂源縣"
	    }
	  ],
	  "128": [
	    {
	      "id": 1190,
	      "text": "德城區"
	    },
	    {
	      "id": 1191,
	      "text": "陵縣"
	    },
	    {
	      "id": 1192,
	      "text": "寧津縣"
	    },
	    {
	      "id": 1193,
	      "text": "慶雲縣"
	    },
	    {
	      "id": 1194,
	      "text": "臨邑縣"
	    },
	    {
	      "id": 1195,
	      "text": "齊河縣"
	    },
	    {
	      "id": 1196,
	      "text": "平原縣"
	    },
	    {
	      "id": 1197,
	      "text": "夏津縣"
	    },
	    {
	      "id": 1198,
	      "text": "武城縣"
	    },
	    {
	      "id": 1199,
	      "text": "樂陵市"
	    },
	    {
	      "id": 1200,
	      "text": "禹城市"
	    }
	  ],
	  "129": [
	    {
	      "id": 1201,
	      "text": "芝罘區"
	    },
	    {
	      "id": 1202,
	      "text": "福山區"
	    },
	    {
	      "id": 1203,
	      "text": "牟平區"
	    },
	    {
	      "id": 1204,
	      "text": "萊山區"
	    },
	    {
	      "id": 1205,
	      "text": "長島縣"
	    },
	    {
	      "id": 1206,
	      "text": "龍口市"
	    },
	    {
	      "id": 1207,
	      "text": "萊陽市"
	    },
	    {
	      "id": 1208,
	      "text": "萊州市"
	    },
	    {
	      "id": 1209,
	      "text": "蓬萊市"
	    },
	    {
	      "id": 1210,
	      "text": "招遠市"
	    },
	    {
	      "id": 1211,
	      "text": "棲霞市"
	    },
	    {
	      "id": 1212,
	      "text": "海陽市"
	    }
	  ],
	  "130": [
	    {
	      "id": 1213,
	      "text": "濰城區"
	    },
	    {
	      "id": 1214,
	      "text": "寒亭區"
	    },
	    {
	      "id": 1215,
	      "text": "坊子區"
	    },
	    {
	      "id": 1216,
	      "text": "奎文區"
	    },
	    {
	      "id": 1217,
	      "text": "臨朐縣"
	    },
	    {
	      "id": 1218,
	      "text": "昌樂縣"
	    },
	    {
	      "id": 1219,
	      "text": "青州市"
	    },
	    {
	      "id": 1220,
	      "text": "諸城市"
	    },
	    {
	      "id": 1221,
	      "text": "壽光市"
	    },
	    {
	      "id": 1222,
	      "text": "安丘市"
	    },
	    {
	      "id": 1223,
	      "text": "高密市"
	    },
	    {
	      "id": 1224,
	      "text": "昌邑市"
	    }
	  ],
	  "131": [
	    {
	      "id": 1225,
	      "text": "市中區"
	    },
	    {
	      "id": 1226,
	      "text": "任城區"
	    },
	    {
	      "id": 1227,
	      "text": "微山縣"
	    },
	    {
	      "id": 1228,
	      "text": "魚台縣"
	    },
	    {
	      "id": 1229,
	      "text": "金鄉縣"
	    },
	    {
	      "id": 1230,
	      "text": "嘉祥縣"
	    },
	    {
	      "id": 1231,
	      "text": "汶上縣"
	    },
	    {
	      "id": 1232,
	      "text": "泗水縣"
	    },
	    {
	      "id": 1233,
	      "text": "梁山縣"
	    },
	    {
	      "id": 1234,
	      "text": "曲阜市"
	    },
	    {
	      "id": 1235,
	      "text": "兗州市"
	    },
	    {
	      "id": 1236,
	      "text": "鄒城市"
	    }
	  ],
	  "132": [
	    {
	      "id": 1237,
	      "text": "泰山區"
	    },
	    {
	      "id": 1238,
	      "text": "岱岳區"
	    },
	    {
	      "id": 1239,
	      "text": "寧陽縣"
	    },
	    {
	      "id": 1240,
	      "text": "東平縣"
	    },
	    {
	      "id": 1241,
	      "text": "新泰市"
	    },
	    {
	      "id": 1242,
	      "text": "肥城市"
	    }
	  ],
	  "133": [
	    {
	      "id": 1243,
	      "text": "蘭山區"
	    },
	    {
	      "id": 1244,
	      "text": "羅莊區"
	    },
	    {
	      "id": 1245,
	      "text": "河東區"
	    },
	    {
	      "id": 1246,
	      "text": "沂南縣"
	    },
	    {
	      "id": 1247,
	      "text": "郯城縣"
	    },
	    {
	      "id": 1248,
	      "text": "沂水縣"
	    },
	    {
	      "id": 1249,
	      "text": "蒼山縣"
	    },
	    {
	      "id": 1250,
	      "text": "費縣"
	    },
	    {
	      "id": 1251,
	      "text": "平邑縣"
	    },
	    {
	      "id": 1252,
	      "text": "莒南縣"
	    },
	    {
	      "id": 1253,
	      "text": "蒙陰縣"
	    },
	    {
	      "id": 1254,
	      "text": "臨沭縣"
	    }
	  ],
	  "134": [
	    {
	      "id": 1255,
	      "text": "濱城區"
	    },
	    {
	      "id": 1256,
	      "text": "惠民縣"
	    },
	    {
	      "id": 1257,
	      "text": "陽信縣"
	    },
	    {
	      "id": 1258,
	      "text": "無棣縣"
	    },
	    {
	      "id": 1259,
	      "text": "沾化縣"
	    },
	    {
	      "id": 1260,
	      "text": "博興縣"
	    },
	    {
	      "id": 1261,
	      "text": "鄒平縣"
	    }
	  ],
	  "135": [
	    {
	      "id": 1262,
	      "text": "東營區"
	    },
	    {
	      "id": 1263,
	      "text": "河口區"
	    },
	    {
	      "id": 1264,
	      "text": "墾利縣"
	    },
	    {
	      "id": 1265,
	      "text": "利津縣"
	    },
	    {
	      "id": 1266,
	      "text": "廣饒縣"
	    }
	  ],
	  "136": [
	    {
	      "id": 1267,
	      "text": "環翠區"
	    },
	    {
	      "id": 1268,
	      "text": "文登市"
	    },
	    {
	      "id": 1269,
	      "text": "榮成市"
	    },
	    {
	      "id": 1270,
	      "text": "乳山市"
	    }
	  ],
	  "137": [
	    {
	      "id": 1271,
	      "text": "市中區"
	    },
	    {
	      "id": 1272,
	      "text": "薛城區"
	    },
	    {
	      "id": 1273,
	      "text": "嶧城區"
	    },
	    {
	      "id": 1274,
	      "text": "台兒莊區"
	    },
	    {
	      "id": 1275,
	      "text": "山亭區"
	    },
	    {
	      "id": 1276,
	      "text": "滕州市"
	    }
	  ],
	  "138": [
	    {
	      "id": 1277,
	      "text": "東港區"
	    },
	    {
	      "id": 1278,
	      "text": "嵐山區"
	    },
	    {
	      "id": 1279,
	      "text": "五蓮縣"
	    },
	    {
	      "id": 1280,
	      "text": "莒縣"
	    }
	  ],
	  "139": [
	    {
	      "id": 1281,
	      "text": "萊城區"
	    },
	    {
	      "id": 1282,
	      "text": "鋼城區"
	    }
	  ],
	  "140": [
	    {
	      "id": 1283,
	      "text": "東昌府區"
	    },
	    {
	      "id": 1284,
	      "text": "陽谷縣"
	    },
	    {
	      "id": 1285,
	      "text": "莘縣"
	    },
	    {
	      "id": 1286,
	      "text": "茌平縣"
	    },
	    {
	      "id": 1287,
	      "text": "東阿縣"
	    },
	    {
	      "id": 1288,
	      "text": "冠縣"
	    },
	    {
	      "id": 1289,
	      "text": "高唐縣"
	    },
	    {
	      "id": 1290,
	      "text": "臨清市"
	    }
	  ],
	  "141": [
	    {
	      "id": 1291,
	      "text": "梁園區"
	    },
	    {
	      "id": 1292,
	      "text": "睢陽區"
	    },
	    {
	      "id": 1293,
	      "text": "民權縣"
	    },
	    {
	      "id": 1294,
	      "text": "睢縣"
	    },
	    {
	      "id": 1295,
	      "text": "寧陵縣"
	    },
	    {
	      "id": 1296,
	      "text": "柘城縣"
	    },
	    {
	      "id": 1297,
	      "text": "虞城縣"
	    },
	    {
	      "id": 1298,
	      "text": "夏邑縣"
	    },
	    {
	      "id": 1299,
	      "text": "永城市"
	    }
	  ],
	  "142": [
	    {
	      "id": 1300,
	      "text": "中原區"
	    },
	    {
	      "id": 1301,
	      "text": "二七區"
	    },
	    {
	      "id": 1302,
	      "text": "管城回族區"
	    },
	    {
	      "id": 1303,
	      "text": "金水區"
	    },
	    {
	      "id": 1304,
	      "text": "上街區"
	    },
	    {
	      "id": 1305,
	      "text": "惠濟區"
	    },
	    {
	      "id": 1306,
	      "text": "中牟縣"
	    },
	    {
	      "id": 1307,
	      "text": "鞏義市"
	    },
	    {
	      "id": 1308,
	      "text": "滎陽市"
	    },
	    {
	      "id": 1309,
	      "text": "新密市"
	    },
	    {
	      "id": 1310,
	      "text": "新鄭市"
	    },
	    {
	      "id": 1311,
	      "text": "登封市"
	    }
	  ],
	  "143": [
	    {
	      "id": 1312,
	      "text": "文峰區"
	    },
	    {
	      "id": 1313,
	      "text": "北關區"
	    },
	    {
	      "id": 1314,
	      "text": "殷都區"
	    },
	    {
	      "id": 1315,
	      "text": "龍安區"
	    },
	    {
	      "id": 1316,
	      "text": "安陽縣"
	    },
	    {
	      "id": 1317,
	      "text": "湯陰縣"
	    },
	    {
	      "id": 1318,
	      "text": "滑縣"
	    },
	    {
	      "id": 1319,
	      "text": "內黃縣"
	    },
	    {
	      "id": 1320,
	      "text": "林州市"
	    }
	  ],
	  "144": [
	    {
	      "id": 1321,
	      "text": "紅旗區"
	    },
	    {
	      "id": 1322,
	      "text": "衛濱區"
	    },
	    {
	      "id": 1323,
	      "text": "鳳泉區"
	    },
	    {
	      "id": 1324,
	      "text": "牧野區"
	    },
	    {
	      "id": 1325,
	      "text": "新鄉縣"
	    },
	    {
	      "id": 1326,
	      "text": "獲嘉縣"
	    },
	    {
	      "id": 1327,
	      "text": "原陽縣"
	    },
	    {
	      "id": 1328,
	      "text": "延津縣"
	    },
	    {
	      "id": 1329,
	      "text": "封丘縣"
	    },
	    {
	      "id": 1330,
	      "text": "長垣縣"
	    },
	    {
	      "id": 1331,
	      "text": "衛輝市"
	    },
	    {
	      "id": 1332,
	      "text": "輝縣市"
	    }
	  ],
	  "145": [
	    {
	      "id": 1333,
	      "text": "魏都區"
	    },
	    {
	      "id": 1334,
	      "text": "許昌縣"
	    },
	    {
	      "id": 1335,
	      "text": "鄢陵縣"
	    },
	    {
	      "id": 1336,
	      "text": "襄城縣"
	    },
	    {
	      "id": 1337,
	      "text": "禹州市"
	    },
	    {
	      "id": 1338,
	      "text": "長葛市"
	    }
	  ],
	  "146": [
	    {
	      "id": 1339,
	      "text": "新華區"
	    },
	    {
	      "id": 1340,
	      "text": "衛東區"
	    },
	    {
	      "id": 1341,
	      "text": "石龍區"
	    },
	    {
	      "id": 1342,
	      "text": "湛河區"
	    },
	    {
	      "id": 1343,
	      "text": "寶豐縣"
	    },
	    {
	      "id": 1344,
	      "text": "葉縣"
	    },
	    {
	      "id": 1345,
	      "text": "魯山縣"
	    },
	    {
	      "id": 1346,
	      "text": "郟縣"
	    },
	    {
	      "id": 1347,
	      "text": "舞鋼市"
	    },
	    {
	      "id": 1348,
	      "text": "汝州市"
	    }
	  ],
	  "147": [
	    {
	      "id": 1349,
	      "text": "溮河區"
	    },
	    {
	      "id": 1350,
	      "text": "平橋區"
	    },
	    {
	      "id": 1351,
	      "text": "羅山縣"
	    },
	    {
	      "id": 1352,
	      "text": "光山縣"
	    },
	    {
	      "id": 1353,
	      "text": "新縣"
	    },
	    {
	      "id": 1354,
	      "text": "商城縣"
	    },
	    {
	      "id": 1355,
	      "text": "固始縣"
	    },
	    {
	      "id": 1356,
	      "text": "潢川縣"
	    },
	    {
	      "id": 1357,
	      "text": "淮濱縣"
	    },
	    {
	      "id": 1358,
	      "text": "息縣"
	    }
	  ],
	  "148": [
	    {
	      "id": 1359,
	      "text": "宛城區"
	    },
	    {
	      "id": 1360,
	      "text": "臥龍區"
	    },
	    {
	      "id": 1361,
	      "text": "南召縣"
	    },
	    {
	      "id": 1362,
	      "text": "方城縣"
	    },
	    {
	      "id": 1363,
	      "text": "西峽縣"
	    },
	    {
	      "id": 1364,
	      "text": "鎮平縣"
	    },
	    {
	      "id": 1365,
	      "text": "內鄉縣"
	    },
	    {
	      "id": 1366,
	      "text": "淅川縣"
	    },
	    {
	      "id": 1367,
	      "text": "社旗縣"
	    },
	    {
	      "id": 1368,
	      "text": "唐河縣"
	    },
	    {
	      "id": 1369,
	      "text": "新野縣"
	    },
	    {
	      "id": 1370,
	      "text": "桐柏縣"
	    },
	    {
	      "id": 1371,
	      "text": "鄧州市"
	    }
	  ],
	  "149": [
	    {
	      "id": 1372,
	      "text": "龍亭區"
	    },
	    {
	      "id": 1373,
	      "text": "順河回族區"
	    },
	    {
	      "id": 1374,
	      "text": "鼓樓區"
	    },
	    {
	      "id": 1375,
	      "text": "禹王台區"
	    },
	    {
	      "id": 1376,
	      "text": "金明區"
	    },
	    {
	      "id": 1377,
	      "text": "杞縣"
	    },
	    {
	      "id": 1378,
	      "text": "通許縣"
	    },
	    {
	      "id": 1379,
	      "text": "尉氏縣"
	    },
	    {
	      "id": 1380,
	      "text": "開封縣"
	    },
	    {
	      "id": 1381,
	      "text": "蘭考縣"
	    }
	  ],
	  "150": [
	    {
	      "id": 1382,
	      "text": "老城區"
	    },
	    {
	      "id": 1383,
	      "text": "西工區"
	    },
	    {
	      "id": 1384,
	      "text": "瀍河回族區"
	    },
	    {
	      "id": 1385,
	      "text": "澗西區"
	    },
	    {
	      "id": 1386,
	      "text": "吉利區"
	    },
	    {
	      "id": 1387,
	      "text": "洛龍區"
	    },
	    {
	      "id": 1388,
	      "text": "孟津縣"
	    },
	    {
	      "id": 1389,
	      "text": "新安縣"
	    },
	    {
	      "id": 1390,
	      "text": "欒川縣"
	    },
	    {
	      "id": 1391,
	      "text": "嵩縣"
	    },
	    {
	      "id": 1392,
	      "text": "汝陽縣"
	    },
	    {
	      "id": 1393,
	      "text": "宜陽縣"
	    },
	    {
	      "id": 1394,
	      "text": "洛寧縣"
	    },
	    {
	      "id": 1395,
	      "text": "伊川縣"
	    },
	    {
	      "id": 1396,
	      "text": "偃師市"
	    }
	  ],
	  "151": [],
	  "152": [
	    {
	      "id": 1397,
	      "text": "解放區"
	    },
	    {
	      "id": 1398,
	      "text": "中站區"
	    },
	    {
	      "id": 1399,
	      "text": "馬村區"
	    },
	    {
	      "id": 1400,
	      "text": "山陽區"
	    },
	    {
	      "id": 1401,
	      "text": "修武縣"
	    },
	    {
	      "id": 1402,
	      "text": "博愛縣"
	    },
	    {
	      "id": 1403,
	      "text": "武陟縣"
	    },
	    {
	      "id": 1404,
	      "text": "溫縣"
	    },
	    {
	      "id": 1405,
	      "text": "沁陽市"
	    },
	    {
	      "id": 1406,
	      "text": "孟州市"
	    }
	  ],
	  "153": [
	    {
	      "id": 1407,
	      "text": "鶴山區"
	    },
	    {
	      "id": 1408,
	      "text": "山城區"
	    },
	    {
	      "id": 1409,
	      "text": "淇濱區"
	    },
	    {
	      "id": 1410,
	      "text": "浚縣"
	    },
	    {
	      "id": 1411,
	      "text": "淇縣"
	    }
	  ],
	  "154": [
	    {
	      "id": 1412,
	      "text": "華龍區"
	    },
	    {
	      "id": 1413,
	      "text": "清豐縣"
	    },
	    {
	      "id": 1414,
	      "text": "南樂縣"
	    },
	    {
	      "id": 1415,
	      "text": "范縣"
	    },
	    {
	      "id": 1416,
	      "text": "台前縣"
	    },
	    {
	      "id": 1417,
	      "text": "濮陽縣"
	    }
	  ],
	  "155": [
	    {
	      "id": 1418,
	      "text": "川匯區"
	    },
	    {
	      "id": 1419,
	      "text": "扶溝縣"
	    },
	    {
	      "id": 1420,
	      "text": "西華縣"
	    },
	    {
	      "id": 1421,
	      "text": "商水縣"
	    },
	    {
	      "id": 1422,
	      "text": "沈丘縣"
	    },
	    {
	      "id": 1423,
	      "text": "鄲城縣"
	    },
	    {
	      "id": 1424,
	      "text": "淮陽縣"
	    },
	    {
	      "id": 1425,
	      "text": "太康縣"
	    },
	    {
	      "id": 1426,
	      "text": "鹿邑縣"
	    },
	    {
	      "id": 1427,
	      "text": "項城市"
	    }
	  ],
	  "156": [
	    {
	      "id": 1428,
	      "text": "源匯區"
	    },
	    {
	      "id": 1429,
	      "text": "郾城區"
	    },
	    {
	      "id": 1430,
	      "text": "召陵區"
	    },
	    {
	      "id": 1431,
	      "text": "舞陽縣"
	    },
	    {
	      "id": 1432,
	      "text": "臨穎縣"
	    }
	  ],
	  "157": [
	    {
	      "id": 1433,
	      "text": "驛城區"
	    },
	    {
	      "id": 1434,
	      "text": "西平縣"
	    },
	    {
	      "id": 1435,
	      "text": "上蔡縣"
	    },
	    {
	      "id": 1436,
	      "text": "平輿縣"
	    },
	    {
	      "id": 1437,
	      "text": "正陽縣"
	    },
	    {
	      "id": 1438,
	      "text": "確山縣"
	    },
	    {
	      "id": 1439,
	      "text": "泌陽縣"
	    },
	    {
	      "id": 1440,
	      "text": "汝南縣"
	    },
	    {
	      "id": 1441,
	      "text": "遂平縣"
	    },
	    {
	      "id": 1442,
	      "text": "新蔡縣"
	    }
	  ],
	  "158": [
	    {
	      "id": 1443,
	      "text": "湖濱區"
	    },
	    {
	      "id": 1444,
	      "text": "澠池縣"
	    },
	    {
	      "id": 1445,
	      "text": "陝縣"
	    },
	    {
	      "id": 1446,
	      "text": "盧氏縣"
	    },
	    {
	      "id": 1447,
	      "text": "義馬市"
	    },
	    {
	      "id": 1448,
	      "text": "靈寶市"
	    }
	  ],
	  "159": [
	    {
	      "id": 1449,
	      "text": "江岸區"
	    },
	    {
	      "id": 1450,
	      "text": "江漢區"
	    },
	    {
	      "id": 1451,
	      "text": "礄口區"
	    },
	    {
	      "id": 1452,
	      "text": "漢陽區"
	    },
	    {
	      "id": 1453,
	      "text": "武昌區"
	    },
	    {
	      "id": 1454,
	      "text": "青山區"
	    },
	    {
	      "id": 1455,
	      "text": "洪山區"
	    },
	    {
	      "id": 1456,
	      "text": "東西湖區"
	    },
	    {
	      "id": 1457,
	      "text": "漢南區"
	    },
	    {
	      "id": 1458,
	      "text": "蔡甸區"
	    },
	    {
	      "id": 1459,
	      "text": "江夏區"
	    },
	    {
	      "id": 1460,
	      "text": "黃陂區"
	    },
	    {
	      "id": 1461,
	      "text": "新洲區"
	    }
	  ],
	  "160": [
	    {
	      "id": 1462,
	      "text": "襄城區"
	    },
	    {
	      "id": 1463,
	      "text": "樊城區"
	    },
	    {
	      "id": 1464,
	      "text": "襄陽區"
	    },
	    {
	      "id": 1465,
	      "text": "南漳縣"
	    },
	    {
	      "id": 1466,
	      "text": "谷城縣"
	    },
	    {
	      "id": 1467,
	      "text": "保康縣"
	    },
	    {
	      "id": 1468,
	      "text": "老河口市"
	    },
	    {
	      "id": 1469,
	      "text": "棗陽市"
	    },
	    {
	      "id": 1470,
	      "text": "宜城市"
	    }
	  ],
	  "161": [
	    {
	      "id": 1471,
	      "text": "梁子湖區"
	    },
	    {
	      "id": 1472,
	      "text": "華容區"
	    },
	    {
	      "id": 1473,
	      "text": "鄂城區"
	    }
	  ],
	  "162": [
	    {
	      "id": 1474,
	      "text": "孝南區"
	    },
	    {
	      "id": 1475,
	      "text": "孝昌縣"
	    },
	    {
	      "id": 1476,
	      "text": "大悟縣"
	    },
	    {
	      "id": 1477,
	      "text": "雲夢縣"
	    },
	    {
	      "id": 1478,
	      "text": "應城市"
	    },
	    {
	      "id": 1479,
	      "text": "安陸市"
	    },
	    {
	      "id": 1480,
	      "text": "漢川市"
	    }
	  ],
	  "163": [
	    {
	      "id": 1481,
	      "text": "黃州區"
	    },
	    {
	      "id": 1482,
	      "text": "團風縣"
	    },
	    {
	      "id": 1483,
	      "text": "紅安縣"
	    },
	    {
	      "id": 1484,
	      "text": "羅田縣"
	    },
	    {
	      "id": 1485,
	      "text": "英山縣"
	    },
	    {
	      "id": 1486,
	      "text": "浠水縣"
	    },
	    {
	      "id": 1487,
	      "text": "蘄春縣"
	    },
	    {
	      "id": 1488,
	      "text": "黃梅縣"
	    },
	    {
	      "id": 1489,
	      "text": "麻城市"
	    },
	    {
	      "id": 1490,
	      "text": "武穴市"
	    }
	  ],
	  "164": [
	    {
	      "id": 1491,
	      "text": "黃石港區"
	    },
	    {
	      "id": 1492,
	      "text": "西塞山區"
	    },
	    {
	      "id": 1493,
	      "text": "下陸區"
	    },
	    {
	      "id": 1494,
	      "text": "鐵山區"
	    },
	    {
	      "id": 1495,
	      "text": "陽新縣"
	    },
	    {
	      "id": 1496,
	      "text": "大冶市"
	    }
	  ],
	  "165": [
	    {
	      "id": 1497,
	      "text": "鹹安區"
	    },
	    {
	      "id": 1498,
	      "text": "嘉魚縣"
	    },
	    {
	      "id": 1499,
	      "text": "通城縣"
	    },
	    {
	      "id": 1500,
	      "text": "崇陽縣"
	    },
	    {
	      "id": 1501,
	      "text": "通山縣"
	    },
	    {
	      "id": 1502,
	      "text": "赤壁市"
	    }
	  ],
	  "166": [
	    {
	      "id": 1503,
	      "text": "沙市區"
	    },
	    {
	      "id": 1504,
	      "text": "荊州區"
	    },
	    {
	      "id": 1505,
	      "text": "公安縣"
	    },
	    {
	      "id": 1506,
	      "text": "監利縣"
	    },
	    {
	      "id": 1507,
	      "text": "江陵縣"
	    },
	    {
	      "id": 1508,
	      "text": "石首市"
	    },
	    {
	      "id": 1509,
	      "text": "洪湖市"
	    },
	    {
	      "id": 1510,
	      "text": "松滋市"
	    }
	  ],
	  "167": [
	    {
	      "id": 1511,
	      "text": "西陵區"
	    },
	    {
	      "id": 1512,
	      "text": "伍家崗區"
	    },
	    {
	      "id": 1513,
	      "text": "點軍區"
	    },
	    {
	      "id": 1514,
	      "text": "猇亭區"
	    },
	    {
	      "id": 1515,
	      "text": "夷陵區"
	    },
	    {
	      "id": 1516,
	      "text": "遠安縣"
	    },
	    {
	      "id": 1517,
	      "text": "興山縣"
	    },
	    {
	      "id": 1518,
	      "text": "秭歸縣"
	    },
	    {
	      "id": 1519,
	      "text": "長陽土家族自治縣"
	    },
	    {
	      "id": 1520,
	      "text": "五峰土家族自治縣"
	    },
	    {
	      "id": 1521,
	      "text": "宜都市"
	    },
	    {
	      "id": 1522,
	      "text": "當陽市"
	    },
	    {
	      "id": 1523,
	      "text": "枝江市"
	    }
	  ],
	  "168": [
	    {
	      "id": 1524,
	      "text": "恩施市"
	    },
	    {
	      "id": 1525,
	      "text": "利川市"
	    },
	    {
	      "id": 1526,
	      "text": "建始縣"
	    },
	    {
	      "id": 1527,
	      "text": "巴東縣"
	    },
	    {
	      "id": 1528,
	      "text": "宣恩縣"
	    },
	    {
	      "id": 1529,
	      "text": "鹹豐縣"
	    },
	    {
	      "id": 1530,
	      "text": "來鳳縣"
	    },
	    {
	      "id": 1531,
	      "text": "鶴峰縣"
	    }
	  ],
	  "169": [],
	  "170": [
	    {
	      "id": 1532,
	      "text": "茅箭區"
	    },
	    {
	      "id": 1533,
	      "text": "張灣區"
	    },
	    {
	      "id": 1534,
	      "text": "鄖縣"
	    },
	    {
	      "id": 1535,
	      "text": "鄖西縣"
	    },
	    {
	      "id": 1536,
	      "text": "竹山縣"
	    },
	    {
	      "id": 1537,
	      "text": "竹溪縣"
	    },
	    {
	      "id": 1538,
	      "text": "房縣"
	    },
	    {
	      "id": 1539,
	      "text": "丹江口市"
	    }
	  ],
	  "171": [
	    {
	      "id": 1540,
	      "text": "曾都區"
	    },
	    {
	      "id": 1541,
	      "text": "廣水市"
	    }
	  ],
	  "172": [
	    {
	      "id": 1542,
	      "text": "東寶區"
	    },
	    {
	      "id": 1543,
	      "text": "掇刀區"
	    },
	    {
	      "id": 1544,
	      "text": "京山縣"
	    },
	    {
	      "id": 1545,
	      "text": "沙洋縣"
	    },
	    {
	      "id": 1546,
	      "text": "鍾祥市"
	    }
	  ],
	  "173": [],
	  "174": [],
	  "175": [],
	  "176": [
	    {
	      "id": 1547,
	      "text": "岳陽樓區"
	    },
	    {
	      "id": 1548,
	      "text": "雲溪區"
	    },
	    {
	      "id": 1549,
	      "text": "君山區"
	    },
	    {
	      "id": 1550,
	      "text": "岳陽縣"
	    },
	    {
	      "id": 1551,
	      "text": "華容縣"
	    },
	    {
	      "id": 1552,
	      "text": "湘陰縣"
	    },
	    {
	      "id": 1553,
	      "text": "平江縣"
	    },
	    {
	      "id": 1554,
	      "text": "汨羅市"
	    },
	    {
	      "id": 1555,
	      "text": "臨湘市"
	    }
	  ],
	  "177": [
	    {
	      "id": 1556,
	      "text": "芙蓉區"
	    },
	    {
	      "id": 1557,
	      "text": "天心區"
	    },
	    {
	      "id": 1558,
	      "text": "岳麓區"
	    },
	    {
	      "id": 1559,
	      "text": "開福區"
	    },
	    {
	      "id": 1560,
	      "text": "雨花區"
	    },
	    {
	      "id": 1561,
	      "text": "長沙縣"
	    },
	    {
	      "id": 1562,
	      "text": "望城縣"
	    },
	    {
	      "id": 1563,
	      "text": "寧鄉縣"
	    },
	    {
	      "id": 1564,
	      "text": "瀏陽市"
	    }
	  ],
	  "178": [
	    {
	      "id": 1565,
	      "text": "雨湖區"
	    },
	    {
	      "id": 1566,
	      "text": "岳塘區"
	    },
	    {
	      "id": 1567,
	      "text": "湘潭縣"
	    },
	    {
	      "id": 1568,
	      "text": "湘鄉市"
	    },
	    {
	      "id": 1569,
	      "text": "韶山市"
	    }
	  ],
	  "179": [
	    {
	      "id": 1570,
	      "text": "荷塘區"
	    },
	    {
	      "id": 1571,
	      "text": "蘆淞區"
	    },
	    {
	      "id": 1572,
	      "text": "石峰區"
	    },
	    {
	      "id": 1573,
	      "text": "天元區"
	    },
	    {
	      "id": 1574,
	      "text": "株洲縣"
	    },
	    {
	      "id": 1575,
	      "text": "攸縣"
	    },
	    {
	      "id": 1576,
	      "text": "茶陵縣"
	    },
	    {
	      "id": 1577,
	      "text": "炎陵縣"
	    },
	    {
	      "id": 1578,
	      "text": "醴陵市"
	    }
	  ],
	  "180": [
	    {
	      "id": 1579,
	      "text": "珠暉區"
	    },
	    {
	      "id": 1580,
	      "text": "雁峰區"
	    },
	    {
	      "id": 1581,
	      "text": "石鼓區"
	    },
	    {
	      "id": 1582,
	      "text": "蒸湘區"
	    },
	    {
	      "id": 1583,
	      "text": "南岳區"
	    },
	    {
	      "id": 1584,
	      "text": "衡陽縣"
	    },
	    {
	      "id": 1585,
	      "text": "衡南縣"
	    },
	    {
	      "id": 1586,
	      "text": "衡山縣"
	    },
	    {
	      "id": 1587,
	      "text": "衡東縣"
	    },
	    {
	      "id": 1588,
	      "text": "祁東縣"
	    },
	    {
	      "id": 1589,
	      "text": "耒陽市"
	    },
	    {
	      "id": 1590,
	      "text": "常寧市"
	    }
	  ],
	  "181": [
	    {
	      "id": 1591,
	      "text": "北湖區"
	    },
	    {
	      "id": 1592,
	      "text": "蘇仙區"
	    },
	    {
	      "id": 1593,
	      "text": "桂陽縣"
	    },
	    {
	      "id": 1594,
	      "text": "宜章縣"
	    },
	    {
	      "id": 1595,
	      "text": "永興縣"
	    },
	    {
	      "id": 1596,
	      "text": "嘉禾縣"
	    },
	    {
	      "id": 1597,
	      "text": "臨武縣"
	    },
	    {
	      "id": 1598,
	      "text": "汝城縣"
	    },
	    {
	      "id": 1599,
	      "text": "桂東縣"
	    },
	    {
	      "id": 1600,
	      "text": "安仁縣"
	    },
	    {
	      "id": 1601,
	      "text": "資興市"
	    }
	  ],
	  "182": [
	    {
	      "id": 1602,
	      "text": "武陵區"
	    },
	    {
	      "id": 1603,
	      "text": "鼎城區"
	    },
	    {
	      "id": 1604,
	      "text": "安鄉縣"
	    },
	    {
	      "id": 1605,
	      "text": "漢壽縣"
	    },
	    {
	      "id": 1606,
	      "text": "澧縣"
	    },
	    {
	      "id": 1607,
	      "text": "臨澧縣"
	    },
	    {
	      "id": 1608,
	      "text": "桃源縣"
	    },
	    {
	      "id": 1609,
	      "text": "石門縣"
	    },
	    {
	      "id": 1610,
	      "text": "津市市"
	    }
	  ],
	  "183": [
	    {
	      "id": 1611,
	      "text": "資陽區"
	    },
	    {
	      "id": 1612,
	      "text": "赫山區"
	    },
	    {
	      "id": 1613,
	      "text": "南縣"
	    },
	    {
	      "id": 1614,
	      "text": "桃江縣"
	    },
	    {
	      "id": 1615,
	      "text": "安化縣"
	    },
	    {
	      "id": 1616,
	      "text": "沅江市"
	    }
	  ],
	  "184": [
	    {
	      "id": 1617,
	      "text": "婁星區"
	    },
	    {
	      "id": 1618,
	      "text": "雙峰縣"
	    },
	    {
	      "id": 1619,
	      "text": "新化縣"
	    },
	    {
	      "id": 1620,
	      "text": "冷水江市"
	    },
	    {
	      "id": 1621,
	      "text": "漣源市"
	    }
	  ],
	  "185": [
	    {
	      "id": 1622,
	      "text": "雙清區"
	    },
	    {
	      "id": 1623,
	      "text": "大祥區"
	    },
	    {
	      "id": 1624,
	      "text": "北塔區"
	    },
	    {
	      "id": 1625,
	      "text": "邵東縣"
	    },
	    {
	      "id": 1626,
	      "text": "新邵縣"
	    },
	    {
	      "id": 1627,
	      "text": "邵陽縣"
	    },
	    {
	      "id": 1628,
	      "text": "隆回縣"
	    },
	    {
	      "id": 1629,
	      "text": "洞口縣"
	    },
	    {
	      "id": 1630,
	      "text": "綏寧縣"
	    },
	    {
	      "id": 1631,
	      "text": "新寧縣"
	    },
	    {
	      "id": 1632,
	      "text": "城步苗族自治縣"
	    },
	    {
	      "id": 1633,
	      "text": "武岡市"
	    }
	  ],
	  "186": [
	    {
	      "id": 1634,
	      "text": "吉首市"
	    },
	    {
	      "id": 1635,
	      "text": "瀘溪縣"
	    },
	    {
	      "id": 1636,
	      "text": "鳳凰縣"
	    },
	    {
	      "id": 1637,
	      "text": "花垣縣"
	    },
	    {
	      "id": 1638,
	      "text": "保靖縣"
	    },
	    {
	      "id": 1639,
	      "text": "古丈縣"
	    },
	    {
	      "id": 1640,
	      "text": "永順縣"
	    },
	    {
	      "id": 1641,
	      "text": "龍山縣"
	    }
	  ],
	  "187": [
	    {
	      "id": 1642,
	      "text": "永定區"
	    },
	    {
	      "id": 1643,
	      "text": "武陵源區"
	    },
	    {
	      "id": 1644,
	      "text": "慈利縣"
	    },
	    {
	      "id": 1645,
	      "text": "桑植縣"
	    }
	  ],
	  "188": [
	    {
	      "id": 1646,
	      "text": "鶴城區"
	    },
	    {
	      "id": 1647,
	      "text": "中方縣"
	    },
	    {
	      "id": 1648,
	      "text": "沅陵縣"
	    },
	    {
	      "id": 1649,
	      "text": "辰溪縣"
	    },
	    {
	      "id": 1650,
	      "text": "漵浦縣"
	    },
	    {
	      "id": 1651,
	      "text": "會同縣"
	    },
	    {
	      "id": 1652,
	      "text": "麻陽苗族自治縣"
	    },
	    {
	      "id": 1653,
	      "text": "新晃侗族自治縣"
	    },
	    {
	      "id": 1654,
	      "text": "芷江侗族自治縣"
	    },
	    {
	      "id": 1655,
	      "text": "靖州苗族侗族自治縣"
	    },
	    {
	      "id": 1656,
	      "text": "通道侗族自治縣"
	    },
	    {
	      "id": 1657,
	      "text": "洪江市"
	    }
	  ],
	  "189": [
	    {
	      "id": 1658,
	      "text": "零陵區"
	    },
	    {
	      "id": 1659,
	      "text": "冷水灘區"
	    },
	    {
	      "id": 1660,
	      "text": "祁陽縣"
	    },
	    {
	      "id": 1661,
	      "text": "東安縣"
	    },
	    {
	      "id": 1662,
	      "text": "雙牌縣"
	    },
	    {
	      "id": 1663,
	      "text": "道縣"
	    },
	    {
	      "id": 1664,
	      "text": "江永縣"
	    },
	    {
	      "id": 1665,
	      "text": "寧遠縣"
	    },
	    {
	      "id": 1666,
	      "text": "藍山縣"
	    },
	    {
	      "id": 1667,
	      "text": "新田縣"
	    },
	    {
	      "id": 1668,
	      "text": "江華瑤族自治縣"
	    }
	  ],
	  "190": [
	    {
	      "id": 1669,
	      "text": "從化市"
	    },
	    {
	      "id": 1670,
	      "text": "荔灣區"
	    },
	    {
	      "id": 1671,
	      "text": "越秀區"
	    },
	    {
	      "id": 1672,
	      "text": "海珠區"
	    },
	    {
	      "id": 1673,
	      "text": "天河區"
	    },
	    {
	      "id": 1674,
	      "text": "白雲區"
	    },
	    {
	      "id": 1675,
	      "text": "花都區"
	    },
	    {
	      "id": 1676,
	      "text": "黃埔區"
	    },
	    {
	      "id": 1677,
	      "text": "蘿崗區"
	    },
	    {
	      "id": 1678,
	      "text": "南沙區"
	    },
	    {
	      "id": 1679,
	      "text": "番禺區"
	    },
	    {
	      "id": 1680,
	      "text": "增城市"
	    }
	  ],
	  "191": [
	    {
	      "id": 1681,
	      "text": "海豐縣"
	    },
	    {
	      "id": 1682,
	      "text": "陸河縣"
	    },
	    {
	      "id": 1683,
	      "text": "陸豐市"
	    }
	  ],
	  "192": [
	    {
	      "id": 1684,
	      "text": "江城區"
	    },
	    {
	      "id": 1685,
	      "text": "陽西縣"
	    },
	    {
	      "id": 1686,
	      "text": "陽東縣"
	    },
	    {
	      "id": 1687,
	      "text": "陽春市"
	    }
	  ],
	  "193": [
	    {
	      "id": 1688,
	      "text": "榕城區"
	    },
	    {
	      "id": 1689,
	      "text": "揭東縣"
	    },
	    {
	      "id": 1690,
	      "text": "揭西縣"
	    },
	    {
	      "id": 1691,
	      "text": "惠來縣"
	    },
	    {
	      "id": 1692,
	      "text": "普寧市"
	    }
	  ],
	  "194": [
	    {
	      "id": 1693,
	      "text": "茂南區"
	    },
	    {
	      "id": 1694,
	      "text": "茂港區"
	    },
	    {
	      "id": 1695,
	      "text": "電白縣"
	    },
	    {
	      "id": 1696,
	      "text": "高州市"
	    },
	    {
	      "id": 1697,
	      "text": "化州市"
	    },
	    {
	      "id": 1698,
	      "text": "信宜市"
	    }
	  ],
	  "195": [
	    {
	      "id": 1699,
	      "text": "惠城區"
	    },
	    {
	      "id": 1700,
	      "text": "惠陽區"
	    },
	    {
	      "id": 1701,
	      "text": "博羅縣"
	    },
	    {
	      "id": 1702,
	      "text": "惠東縣"
	    },
	    {
	      "id": 1703,
	      "text": "龍門縣"
	    }
	  ],
	  "196": [
	    {
	      "id": 1704,
	      "text": "蓬江區"
	    },
	    {
	      "id": 1705,
	      "text": "江海區"
	    },
	    {
	      "id": 1706,
	      "text": "新會區"
	    },
	    {
	      "id": 1707,
	      "text": "台山市"
	    },
	    {
	      "id": 1708,
	      "text": "開平市"
	    },
	    {
	      "id": 1709,
	      "text": "鶴山市"
	    },
	    {
	      "id": 1710,
	      "text": "恩平市"
	    }
	  ],
	  "197": [
	    {
	      "id": 1711,
	      "text": "武江區"
	    },
	    {
	      "id": 1712,
	      "text": "湞江區"
	    },
	    {
	      "id": 1713,
	      "text": "曲江區"
	    },
	    {
	      "id": 1714,
	      "text": "始興縣"
	    },
	    {
	      "id": 1715,
	      "text": "仁化縣"
	    },
	    {
	      "id": 1716,
	      "text": "翁源縣"
	    },
	    {
	      "id": 1717,
	      "text": "乳源瑤族自治縣"
	    },
	    {
	      "id": 1718,
	      "text": "新豐縣"
	    },
	    {
	      "id": 1719,
	      "text": "樂昌市"
	    },
	    {
	      "id": 1720,
	      "text": "南雄市"
	    }
	  ],
	  "198": [
	    {
	      "id": 1721,
	      "text": "梅江區"
	    },
	    {
	      "id": 1722,
	      "text": "梅縣"
	    },
	    {
	      "id": 1723,
	      "text": "大埔縣"
	    },
	    {
	      "id": 1724,
	      "text": "豐順縣"
	    },
	    {
	      "id": 1725,
	      "text": "五華縣"
	    },
	    {
	      "id": 1726,
	      "text": "平遠縣"
	    },
	    {
	      "id": 1727,
	      "text": "蕉嶺縣"
	    },
	    {
	      "id": 1728,
	      "text": "興寧市"
	    }
	  ],
	  "199": [
	    {
	      "id": 1729,
	      "text": "龍湖區"
	    },
	    {
	      "id": 1730,
	      "text": "金平區"
	    },
	    {
	      "id": 1731,
	      "text": "濠江區"
	    },
	    {
	      "id": 1732,
	      "text": "潮陽區"
	    },
	    {
	      "id": 1733,
	      "text": "潮南區"
	    },
	    {
	      "id": 1734,
	      "text": "澄海區"
	    },
	    {
	      "id": 1735,
	      "text": "南澳縣"
	    }
	  ],
	  "200": [
	    {
	      "id": 1736,
	      "text": "羅湖區"
	    },
	    {
	      "id": 1737,
	      "text": "福田區"
	    },
	    {
	      "id": 1738,
	      "text": "南山區"
	    },
	    {
	      "id": 1739,
	      "text": "寶安區"
	    },
	    {
	      "id": 1740,
	      "text": "龍崗區"
	    },
	    {
	      "id": 1741,
	      "text": "鹽田區"
	    }
	  ],
	  "201": [
	    {
	      "id": 1742,
	      "text": "香洲區"
	    },
	    {
	      "id": 1743,
	      "text": "斗門區"
	    },
	    {
	      "id": 1744,
	      "text": "金灣區"
	    }
	  ],
	  "202": [
	    {
	      "id": 1745,
	      "text": "禪城區"
	    },
	    {
	      "id": 1746,
	      "text": "南海區"
	    },
	    {
	      "id": 1747,
	      "text": "順德區"
	    },
	    {
	      "id": 1748,
	      "text": "三水區"
	    },
	    {
	      "id": 1749,
	      "text": "高明區"
	    }
	  ],
	  "203": [
	    {
	      "id": 1750,
	      "text": "端州區"
	    },
	    {
	      "id": 1751,
	      "text": "鼎湖區"
	    },
	    {
	      "id": 1752,
	      "text": "廣寧縣"
	    },
	    {
	      "id": 1753,
	      "text": "懷集縣"
	    },
	    {
	      "id": 1754,
	      "text": "封開縣"
	    },
	    {
	      "id": 1755,
	      "text": "德慶縣"
	    },
	    {
	      "id": 1756,
	      "text": "高要市"
	    },
	    {
	      "id": 1757,
	      "text": "四會市"
	    }
	  ],
	  "204": [
	    {
	      "id": 1758,
	      "text": "赤坎區"
	    },
	    {
	      "id": 1759,
	      "text": "霞山區"
	    },
	    {
	      "id": 1760,
	      "text": "坡頭區"
	    },
	    {
	      "id": 1761,
	      "text": "麻章區"
	    },
	    {
	      "id": 1762,
	      "text": "遂溪縣"
	    },
	    {
	      "id": 1763,
	      "text": "徐聞縣"
	    },
	    {
	      "id": 1764,
	      "text": "廉江市"
	    },
	    {
	      "id": 1765,
	      "text": "雷州市"
	    },
	    {
	      "id": 1766,
	      "text": "吳川市"
	    }
	  ],
	  "205": [],
	  "206": [
	    {
	      "id": 1767,
	      "text": "源城區"
	    },
	    {
	      "id": 1768,
	      "text": "紫金縣"
	    },
	    {
	      "id": 1769,
	      "text": "龍川縣"
	    },
	    {
	      "id": 1770,
	      "text": "連平縣"
	    },
	    {
	      "id": 1771,
	      "text": "和平縣"
	    },
	    {
	      "id": 1772,
	      "text": "東源縣"
	    }
	  ],
	  "207": [
	    {
	      "id": 1773,
	      "text": "清城區"
	    },
	    {
	      "id": 1774,
	      "text": "佛岡縣"
	    },
	    {
	      "id": 1775,
	      "text": "陽山縣"
	    },
	    {
	      "id": 1776,
	      "text": "連山壯族瑤族自治縣"
	    },
	    {
	      "id": 1777,
	      "text": "連南瑤族自治縣"
	    },
	    {
	      "id": 1778,
	      "text": "清新縣"
	    },
	    {
	      "id": 1779,
	      "text": "英德市"
	    },
	    {
	      "id": 1780,
	      "text": "連州市"
	    }
	  ],
	  "208": [
	    {
	      "id": 1781,
	      "text": "雲城區"
	    },
	    {
	      "id": 1782,
	      "text": "新興縣"
	    },
	    {
	      "id": 1783,
	      "text": "郁南縣"
	    },
	    {
	      "id": 1784,
	      "text": "雲安縣"
	    },
	    {
	      "id": 1785,
	      "text": "羅定市"
	    }
	  ],
	  "209": [
	    {
	      "id": 1786,
	      "text": "湘橋區"
	    },
	    {
	      "id": 1787,
	      "text": "潮安縣"
	    },
	    {
	      "id": 1788,
	      "text": "饒平縣"
	    }
	  ],
	  "210": [],
	  "255": [
	    {
	      "id": 2144,
	      "text": "秀英區"
	    },
	    {
	      "id": 2145,
	      "text": "龍華區"
	    },
	    {
	      "id": 2146,
	      "text": "瓊山區"
	    },
	    {
	      "id": 2147,
	      "text": "美蘭區"
	    }
	  ],
	  "256": [],
	  "257": [],
	  "258": [],
	  "259": [],
	  "260": [],
	  "261": [],
	  "262": [],
	  "263": [],
	  "264": [],
	  "265": [],
	  "266": [],
	  "267": [],
	  "268": [],
	  "269": [],
	  "270": [],
	  "271": [],
	  "272": [],
	  "307": [
	    {
	      "id": 2427,
	      "text": "港口區"
	    },
	    {
	      "id": 2428,
	      "text": "防城區"
	    },
	    {
	      "id": 2429,
	      "text": "上思縣"
	    },
	    {
	      "id": 2430,
	      "text": "東興市"
	    }
	  ],
	  "308": [
	    {
	      "id": 2431,
	      "text": "興寧區"
	    },
	    {
	      "id": 2432,
	      "text": "青秀區"
	    },
	    {
	      "id": 2433,
	      "text": "江南區"
	    },
	    {
	      "id": 2434,
	      "text": "西鄉塘區"
	    },
	    {
	      "id": 2435,
	      "text": "良慶區"
	    },
	    {
	      "id": 2436,
	      "text": "邕寧區"
	    },
	    {
	      "id": 2437,
	      "text": "武鳴縣"
	    },
	    {
	      "id": 2438,
	      "text": "隆安縣"
	    },
	    {
	      "id": 2439,
	      "text": "馬山縣"
	    },
	    {
	      "id": 2440,
	      "text": "上林縣"
	    },
	    {
	      "id": 2441,
	      "text": "賓陽縣"
	    },
	    {
	      "id": 2442,
	      "text": "橫縣"
	    }
	  ],
	  "309": [
	    {
	      "id": 2443,
	      "text": "江洲區"
	    },
	    {
	      "id": 2444,
	      "text": "扶綏縣"
	    },
	    {
	      "id": 2445,
	      "text": "寧明縣"
	    },
	    {
	      "id": 2446,
	      "text": "龍州縣"
	    },
	    {
	      "id": 2447,
	      "text": "大新縣"
	    },
	    {
	      "id": 2448,
	      "text": "天等縣"
	    },
	    {
	      "id": 2449,
	      "text": "憑祥市"
	    }
	  ],
	  "310": [
	    {
	      "id": 2450,
	      "text": "興賓區"
	    },
	    {
	      "id": 2451,
	      "text": "忻城縣"
	    },
	    {
	      "id": 2452,
	      "text": "象州縣"
	    },
	    {
	      "id": 2453,
	      "text": "武宣縣"
	    },
	    {
	      "id": 2454,
	      "text": "金秀瑤族自治縣"
	    },
	    {
	      "id": 2455,
	      "text": "合山市"
	    }
	  ],
	  "311": [
	    {
	      "id": 2456,
	      "text": "城中區"
	    },
	    {
	      "id": 2457,
	      "text": "魚峰區"
	    },
	    {
	      "id": 2458,
	      "text": "柳南區"
	    },
	    {
	      "id": 2459,
	      "text": "柳北區"
	    },
	    {
	      "id": 2460,
	      "text": "柳江縣"
	    },
	    {
	      "id": 2461,
	      "text": "柳城縣"
	    },
	    {
	      "id": 2462,
	      "text": "鹿寨縣"
	    },
	    {
	      "id": 2463,
	      "text": "融安縣"
	    },
	    {
	      "id": 2464,
	      "text": "融水苗族自治縣"
	    },
	    {
	      "id": 2465,
	      "text": "三江侗族自治縣"
	    }
	  ],
	  "312": [
	    {
	      "id": 2466,
	      "text": "秀峰區"
	    },
	    {
	      "id": 2467,
	      "text": "疊彩區"
	    },
	    {
	      "id": 2468,
	      "text": "象山區"
	    },
	    {
	      "id": 2469,
	      "text": "七星區"
	    },
	    {
	      "id": 2470,
	      "text": "雁山區"
	    },
	    {
	      "id": 2471,
	      "text": "陽朔縣"
	    },
	    {
	      "id": 2472,
	      "text": "臨桂縣"
	    },
	    {
	      "id": 2473,
	      "text": "靈川縣"
	    },
	    {
	      "id": 2474,
	      "text": "全州縣"
	    },
	    {
	      "id": 2475,
	      "text": "興安縣"
	    },
	    {
	      "id": 2476,
	      "text": "永福縣"
	    },
	    {
	      "id": 2477,
	      "text": "灌陽縣"
	    },
	    {
	      "id": 2478,
	      "text": "龍勝各族自治縣"
	    },
	    {
	      "id": 2479,
	      "text": "資源縣"
	    },
	    {
	      "id": 2480,
	      "text": "平樂縣"
	    },
	    {
	      "id": 2481,
	      "text": "荔浦縣"
	    },
	    {
	      "id": 2482,
	      "text": "恭城瑤族自治縣"
	    }
	  ],
	  "313": [
	    {
	      "id": 2483,
	      "text": "萬秀區"
	    },
	    {
	      "id": 2484,
	      "text": "碟山區"
	    },
	    {
	      "id": 2485,
	      "text": "長洲區"
	    },
	    {
	      "id": 2486,
	      "text": "蒼梧縣"
	    },
	    {
	      "id": 2487,
	      "text": "籐縣"
	    },
	    {
	      "id": 2488,
	      "text": "蒙山縣"
	    },
	    {
	      "id": 2489,
	      "text": "岑溪市"
	    }
	  ],
	  "314": [
	    {
	      "id": 2490,
	      "text": "八步區"
	    },
	    {
	      "id": 2491,
	      "text": "昭平縣"
	    },
	    {
	      "id": 2492,
	      "text": "鍾山縣"
	    },
	    {
	      "id": 2493,
	      "text": "富川瑤族自治縣"
	    }
	  ],
	  "315": [
	    {
	      "id": 2494,
	      "text": "港北區"
	    },
	    {
	      "id": 2495,
	      "text": "港南區"
	    },
	    {
	      "id": 2496,
	      "text": "覃塘區"
	    },
	    {
	      "id": 2497,
	      "text": "平南縣"
	    },
	    {
	      "id": 2498,
	      "text": "桂平市"
	    }
	  ],
	  "316": [
	    {
	      "id": 2499,
	      "text": "玉州區"
	    },
	    {
	      "id": 2500,
	      "text": "容縣"
	    },
	    {
	      "id": 2501,
	      "text": "陸川縣"
	    },
	    {
	      "id": 2502,
	      "text": "博白縣"
	    },
	    {
	      "id": 2503,
	      "text": "興業縣"
	    },
	    {
	      "id": 2504,
	      "text": "北流市"
	    }
	  ],
	  "317": [
	    {
	      "id": 2505,
	      "text": "右江區"
	    },
	    {
	      "id": 2506,
	      "text": "田陽縣"
	    },
	    {
	      "id": 2507,
	      "text": "田東縣"
	    },
	    {
	      "id": 2508,
	      "text": "平果縣"
	    },
	    {
	      "id": 2509,
	      "text": "德保縣"
	    },
	    {
	      "id": 2510,
	      "text": "靖西縣"
	    },
	    {
	      "id": 2511,
	      "text": "那坡縣"
	    },
	    {
	      "id": 2512,
	      "text": "凌雲縣"
	    },
	    {
	      "id": 2513,
	      "text": "樂業縣"
	    },
	    {
	      "id": 2514,
	      "text": "田林縣"
	    },
	    {
	      "id": 2515,
	      "text": "西林縣"
	    },
	    {
	      "id": 2516,
	      "text": "隆林各族自治縣"
	    }
	  ],
	  "318": [
	    {
	      "id": 2517,
	      "text": "欽南區"
	    },
	    {
	      "id": 2518,
	      "text": "欽北區"
	    },
	    {
	      "id": 2519,
	      "text": "靈山縣"
	    },
	    {
	      "id": 2520,
	      "text": "浦北縣"
	    }
	  ],
	  "319": [
	    {
	      "id": 2521,
	      "text": "金城江區"
	    },
	    {
	      "id": 2522,
	      "text": "南丹縣"
	    },
	    {
	      "id": 2523,
	      "text": "天峨縣"
	    },
	    {
	      "id": 2524,
	      "text": "鳳山縣"
	    },
	    {
	      "id": 2525,
	      "text": "東蘭縣"
	    },
	    {
	      "id": 2526,
	      "text": "羅城仫佬族自治縣"
	    },
	    {
	      "id": 2527,
	      "text": "環江毛南族自治縣"
	    },
	    {
	      "id": 2528,
	      "text": "巴馬瑤族自治縣"
	    },
	    {
	      "id": 2529,
	      "text": "都安瑤族自治縣"
	    },
	    {
	      "id": 2530,
	      "text": "大化瑤族自治縣"
	    },
	    {
	      "id": 2531,
	      "text": "宜州市"
	    }
	  ],
	  "320": [
	    {
	      "id": 2532,
	      "text": "海城區"
	    },
	    {
	      "id": 2533,
	      "text": "銀海區"
	    },
	    {
	      "id": 2534,
	      "text": "鐵山港區"
	    },
	    {
	      "id": 2535,
	      "text": "合浦縣"
	    }
	  ],
	  "211": [
	    {
	      "id": 1789,
	      "text": "城關區"
	    },
	    {
	      "id": 1790,
	      "text": "七裡河區"
	    },
	    {
	      "id": 1791,
	      "text": "西固區"
	    },
	    {
	      "id": 1792,
	      "text": "安寧區"
	    },
	    {
	      "id": 1793,
	      "text": "紅古區"
	    },
	    {
	      "id": 1794,
	      "text": "永登縣"
	    },
	    {
	      "id": 1795,
	      "text": "皋蘭縣"
	    },
	    {
	      "id": 1796,
	      "text": "榆中縣"
	    }
	  ],
	  "212": [
	    {
	      "id": 1797,
	      "text": "金川區"
	    },
	    {
	      "id": 1798,
	      "text": "永昌縣"
	    }
	  ],
	  "213": [
	    {
	      "id": 1799,
	      "text": "白銀區"
	    },
	    {
	      "id": 1800,
	      "text": "平川區"
	    },
	    {
	      "id": 1801,
	      "text": "靖遠縣"
	    },
	    {
	      "id": 1802,
	      "text": "會寧縣"
	    },
	    {
	      "id": 1803,
	      "text": "景泰縣"
	    }
	  ],
	  "214": [
	    {
	      "id": 1804,
	      "text": "秦州區"
	    },
	    {
	      "id": 1805,
	      "text": "麥積區"
	    },
	    {
	      "id": 1806,
	      "text": "清水縣"
	    },
	    {
	      "id": 1807,
	      "text": "秦安縣"
	    },
	    {
	      "id": 1808,
	      "text": "甘谷縣"
	    },
	    {
	      "id": 1809,
	      "text": "武山縣"
	    },
	    {
	      "id": 1810,
	      "text": "張家川回族自治縣"
	    }
	  ],
	  "215": [],
	  "216": [
	    {
	      "id": 1811,
	      "text": "涼州區"
	    },
	    {
	      "id": 1812,
	      "text": "民勤縣"
	    },
	    {
	      "id": 1813,
	      "text": "古浪縣"
	    },
	    {
	      "id": 1814,
	      "text": "天祝藏族自治縣"
	    }
	  ],
	  "217": [
	    {
	      "id": 1815,
	      "text": "甘州區"
	    },
	    {
	      "id": 1816,
	      "text": "肅南裕固族自治縣"
	    },
	    {
	      "id": 1817,
	      "text": "民樂縣"
	    },
	    {
	      "id": 1818,
	      "text": "臨澤縣"
	    },
	    {
	      "id": 1819,
	      "text": "高台縣"
	    },
	    {
	      "id": 1820,
	      "text": "山丹縣"
	    }
	  ],
	  "218": [
	    {
	      "id": 1821,
	      "text": "崆峒區"
	    },
	    {
	      "id": 1822,
	      "text": "涇川縣"
	    },
	    {
	      "id": 1823,
	      "text": "靈台縣"
	    },
	    {
	      "id": 1824,
	      "text": "崇信縣"
	    },
	    {
	      "id": 1825,
	      "text": "華亭縣"
	    },
	    {
	      "id": 1826,
	      "text": "莊浪縣"
	    },
	    {
	      "id": 1827,
	      "text": "靜寧縣"
	    }
	  ],
	  "219": [
	    {
	      "id": 1828,
	      "text": "肅州區"
	    },
	    {
	      "id": 1829,
	      "text": "金塔縣"
	    },
	    {
	      "id": 1830,
	      "text": "瓜州縣"
	    },
	    {
	      "id": 1831,
	      "text": "肅北蒙古族自治縣"
	    },
	    {
	      "id": 1832,
	      "text": "阿克塞哈薩克族自治縣"
	    },
	    {
	      "id": 1833,
	      "text": "玉門市"
	    },
	    {
	      "id": 1834,
	      "text": "敦煌市"
	    }
	  ],
	  "220": [
	    {
	      "id": 1835,
	      "text": "西峰區"
	    },
	    {
	      "id": 1836,
	      "text": "慶城縣"
	    },
	    {
	      "id": 1837,
	      "text": "環縣"
	    },
	    {
	      "id": 1838,
	      "text": "華池縣"
	    },
	    {
	      "id": 1839,
	      "text": "合水縣"
	    },
	    {
	      "id": 1840,
	      "text": "正寧縣"
	    },
	    {
	      "id": 1841,
	      "text": "寧縣"
	    },
	    {
	      "id": 1842,
	      "text": "鎮原縣"
	    }
	  ],
	  "221": [
	    {
	      "id": 1843,
	      "text": "安定區"
	    },
	    {
	      "id": 1844,
	      "text": "通渭縣"
	    },
	    {
	      "id": 1845,
	      "text": "隴西縣"
	    },
	    {
	      "id": 1846,
	      "text": "渭源縣"
	    },
	    {
	      "id": 1847,
	      "text": "臨洮縣"
	    },
	    {
	      "id": 1848,
	      "text": "漳縣"
	    },
	    {
	      "id": 1849,
	      "text": "岷縣"
	    }
	  ],
	  "222": [
	    {
	      "id": 1850,
	      "text": "武都區"
	    },
	    {
	      "id": 1851,
	      "text": "成縣"
	    },
	    {
	      "id": 1852,
	      "text": "文縣"
	    },
	    {
	      "id": 1853,
	      "text": "宕昌縣"
	    },
	    {
	      "id": 1854,
	      "text": "康縣"
	    },
	    {
	      "id": 1855,
	      "text": "西和縣"
	    },
	    {
	      "id": 1856,
	      "text": "禮縣"
	    },
	    {
	      "id": 1857,
	      "text": "徽縣"
	    },
	    {
	      "id": 1858,
	      "text": "兩當縣"
	    }
	  ],
	  "223": [
	    {
	      "id": 1859,
	      "text": "臨夏市"
	    },
	    {
	      "id": 1860,
	      "text": "臨夏縣"
	    },
	    {
	      "id": 1861,
	      "text": "康樂縣"
	    },
	    {
	      "id": 1862,
	      "text": "永靖縣"
	    },
	    {
	      "id": 1863,
	      "text": "廣河縣"
	    },
	    {
	      "id": 1864,
	      "text": "和政縣"
	    },
	    {
	      "id": 1865,
	      "text": "東鄉族自治縣"
	    },
	    {
	      "id": 1866,
	      "text": "積石山保安族東鄉族撒拉族自治縣"
	    }
	  ],
	  "224": [
	    {
	      "id": 1867,
	      "text": "合作市"
	    },
	    {
	      "id": 1868,
	      "text": "臨潭縣"
	    },
	    {
	      "id": 1869,
	      "text": "卓尼縣"
	    },
	    {
	      "id": 1870,
	      "text": "舟曲縣"
	    },
	    {
	      "id": 1871,
	      "text": "迭部縣"
	    },
	    {
	      "id": 1872,
	      "text": "瑪曲縣"
	    },
	    {
	      "id": 1873,
	      "text": "碌曲縣"
	    },
	    {
	      "id": 1874,
	      "text": "夏河縣"
	    }
	  ],
	  "297": [
	    {
	      "id": 2320,
	      "text": "新城區"
	    },
	    {
	      "id": 2321,
	      "text": "碑林區"
	    },
	    {
	      "id": 2322,
	      "text": "蓮湖區"
	    },
	    {
	      "id": 2323,
	      "text": "灞橋區"
	    },
	    {
	      "id": 2324,
	      "text": "未央區"
	    },
	    {
	      "id": 2325,
	      "text": "雁塔區"
	    },
	    {
	      "id": 2326,
	      "text": "閻良區"
	    },
	    {
	      "id": 2327,
	      "text": "臨潼區"
	    },
	    {
	      "id": 2328,
	      "text": "長安區"
	    },
	    {
	      "id": 2329,
	      "text": "藍田縣"
	    },
	    {
	      "id": 2330,
	      "text": "周至縣"
	    },
	    {
	      "id": 2331,
	      "text": "戶縣"
	    },
	    {
	      "id": 2332,
	      "text": "高陵縣"
	    }
	  ],
	  "298": [
	    {
	      "id": 2333,
	      "text": "秦都區"
	    },
	    {
	      "id": 2334,
	      "text": "楊陵區"
	    },
	    {
	      "id": 2335,
	      "text": "渭城區"
	    },
	    {
	      "id": 2336,
	      "text": "三原縣"
	    },
	    {
	      "id": 2337,
	      "text": "涇陽縣"
	    },
	    {
	      "id": 2338,
	      "text": "乾縣"
	    },
	    {
	      "id": 2339,
	      "text": "禮泉縣"
	    },
	    {
	      "id": 2340,
	      "text": "永壽縣"
	    },
	    {
	      "id": 2341,
	      "text": "彬縣"
	    },
	    {
	      "id": 2342,
	      "text": "長武縣"
	    },
	    {
	      "id": 2343,
	      "text": "旬邑縣"
	    },
	    {
	      "id": 2344,
	      "text": "淳化縣"
	    },
	    {
	      "id": 2345,
	      "text": "武功縣"
	    },
	    {
	      "id": 2346,
	      "text": "興平市"
	    }
	  ],
	  "299": [
	    {
	      "id": 2347,
	      "text": "寶塔區"
	    },
	    {
	      "id": 2348,
	      "text": "延長縣"
	    },
	    {
	      "id": 2349,
	      "text": "延川縣"
	    },
	    {
	      "id": 2350,
	      "text": "子長縣"
	    },
	    {
	      "id": 2351,
	      "text": "安塞縣"
	    },
	    {
	      "id": 2352,
	      "text": "志丹縣"
	    },
	    {
	      "id": 2353,
	      "text": "吳起縣"
	    },
	    {
	      "id": 2354,
	      "text": "甘泉縣"
	    },
	    {
	      "id": 2355,
	      "text": "富縣"
	    },
	    {
	      "id": 2356,
	      "text": "洛川縣"
	    },
	    {
	      "id": 2357,
	      "text": "宜川縣"
	    },
	    {
	      "id": 2358,
	      "text": "黃龍縣"
	    },
	    {
	      "id": 2359,
	      "text": "黃陵縣"
	    }
	  ],
	  "300": [
	    {
	      "id": 2360,
	      "text": "榆陽區"
	    },
	    {
	      "id": 2361,
	      "text": "神木縣"
	    },
	    {
	      "id": 2362,
	      "text": "府谷縣"
	    },
	    {
	      "id": 2363,
	      "text": "橫山縣"
	    },
	    {
	      "id": 2364,
	      "text": "靖邊縣"
	    },
	    {
	      "id": 2365,
	      "text": "定邊縣"
	    },
	    {
	      "id": 2366,
	      "text": "綏德縣"
	    },
	    {
	      "id": 2367,
	      "text": "米脂縣"
	    },
	    {
	      "id": 2368,
	      "text": "佳縣"
	    },
	    {
	      "id": 2369,
	      "text": "吳堡縣"
	    },
	    {
	      "id": 2370,
	      "text": "清澗縣"
	    },
	    {
	      "id": 2371,
	      "text": "子洲縣"
	    }
	  ],
	  "301": [
	    {
	      "id": 2372,
	      "text": "臨渭區"
	    },
	    {
	      "id": 2373,
	      "text": "華縣"
	    },
	    {
	      "id": 2374,
	      "text": "潼關縣"
	    },
	    {
	      "id": 2375,
	      "text": "大荔縣"
	    },
	    {
	      "id": 2376,
	      "text": "合陽縣"
	    },
	    {
	      "id": 2377,
	      "text": "澄城縣"
	    },
	    {
	      "id": 2378,
	      "text": "蒲城縣"
	    },
	    {
	      "id": 2379,
	      "text": "白水縣"
	    },
	    {
	      "id": 2380,
	      "text": "富平縣"
	    },
	    {
	      "id": 2381,
	      "text": "韓城市"
	    },
	    {
	      "id": 2382,
	      "text": "華陰市"
	    }
	  ],
	  "302": [
	    {
	      "id": 2383,
	      "text": "商州區"
	    },
	    {
	      "id": 2384,
	      "text": "洛南縣"
	    },
	    {
	      "id": 2385,
	      "text": "丹鳳縣"
	    },
	    {
	      "id": 2386,
	      "text": "商南縣"
	    },
	    {
	      "id": 2387,
	      "text": "山陽縣"
	    },
	    {
	      "id": 2388,
	      "text": "鎮安縣"
	    },
	    {
	      "id": 2389,
	      "text": "柞水縣"
	    }
	  ],
	  "303": [
	    {
	      "id": 2390,
	      "text": "漢濱區"
	    },
	    {
	      "id": 2391,
	      "text": "漢陰縣"
	    },
	    {
	      "id": 2392,
	      "text": "石泉縣"
	    },
	    {
	      "id": 2393,
	      "text": "寧陝縣"
	    },
	    {
	      "id": 2394,
	      "text": "紫陽縣"
	    },
	    {
	      "id": 2395,
	      "text": "嵐皋縣"
	    },
	    {
	      "id": 2396,
	      "text": "平利縣"
	    },
	    {
	      "id": 2397,
	      "text": "鎮坪縣"
	    },
	    {
	      "id": 2398,
	      "text": "旬陽縣"
	    },
	    {
	      "id": 2399,
	      "text": "白河縣"
	    }
	  ],
	  "304": [
	    {
	      "id": 2400,
	      "text": "漢台區"
	    },
	    {
	      "id": 2401,
	      "text": "南鄭縣"
	    },
	    {
	      "id": 2402,
	      "text": "城固縣"
	    },
	    {
	      "id": 2403,
	      "text": "洋縣"
	    },
	    {
	      "id": 2404,
	      "text": "西鄉縣"
	    },
	    {
	      "id": 2405,
	      "text": "勉縣"
	    },
	    {
	      "id": 2406,
	      "text": "寧強縣"
	    },
	    {
	      "id": 2407,
	      "text": "略陽縣"
	    },
	    {
	      "id": 2408,
	      "text": "鎮巴縣"
	    },
	    {
	      "id": 2409,
	      "text": "留壩縣"
	    },
	    {
	      "id": 2410,
	      "text": "佛坪縣"
	    }
	  ],
	  "305": [
	    {
	      "id": 2411,
	      "text": "渭濱區"
	    },
	    {
	      "id": 2412,
	      "text": "金台區"
	    },
	    {
	      "id": 2413,
	      "text": "陳倉區"
	    },
	    {
	      "id": 2414,
	      "text": "鳳翔縣"
	    },
	    {
	      "id": 2415,
	      "text": "岐山縣"
	    },
	    {
	      "id": 2416,
	      "text": "扶風縣"
	    },
	    {
	      "id": 2417,
	      "text": "眉縣"
	    },
	    {
	      "id": 2418,
	      "text": "隴縣"
	    },
	    {
	      "id": 2419,
	      "text": "千陽縣"
	    },
	    {
	      "id": 2420,
	      "text": "麟游縣"
	    },
	    {
	      "id": 2421,
	      "text": "鳳縣"
	    },
	    {
	      "id": 2422,
	      "text": "太白縣"
	    }
	  ],
	  "306": [
	    {
	      "id": 2423,
	      "text": "王益區"
	    },
	    {
	      "id": 2424,
	      "text": "印台區"
	    },
	    {
	      "id": 2425,
	      "text": "耀州區"
	    },
	    {
	      "id": 2426,
	      "text": "宜君縣"
	    }
	  ],
	  "333": [
	    {
	      "id": 2630,
	      "text": "塔城市"
	    },
	    {
	      "id": 2631,
	      "text": "烏蘇市"
	    },
	    {
	      "id": 2632,
	      "text": "額敏縣"
	    },
	    {
	      "id": 2633,
	      "text": "沙灣縣"
	    },
	    {
	      "id": 2634,
	      "text": "托裡縣"
	    },
	    {
	      "id": 2635,
	      "text": "裕民縣"
	    },
	    {
	      "id": 2636,
	      "text": "和布克賽爾蒙古自治縣"
	    }
	  ],
	  "334": [
	    {
	      "id": 2637,
	      "text": "哈密市"
	    },
	    {
	      "id": 2638,
	      "text": "巴裡坤哈薩克自治縣"
	    },
	    {
	      "id": 2639,
	      "text": "伊吾縣"
	    }
	  ],
	  "335": [
	    {
	      "id": 2640,
	      "text": "和田市"
	    },
	    {
	      "id": 2641,
	      "text": "和田縣"
	    },
	    {
	      "id": 2642,
	      "text": "墨玉縣"
	    },
	    {
	      "id": 2643,
	      "text": "皮山縣"
	    },
	    {
	      "id": 2644,
	      "text": "洛浦縣"
	    },
	    {
	      "id": 2645,
	      "text": "策勒縣"
	    },
	    {
	      "id": 2646,
	      "text": "於田縣"
	    },
	    {
	      "id": 2647,
	      "text": "民豐縣"
	    }
	  ],
	  "336": [
	    {
	      "id": 2648,
	      "text": "阿勒泰市"
	    },
	    {
	      "id": 2649,
	      "text": "布爾津縣"
	    },
	    {
	      "id": 2650,
	      "text": "富蘊縣"
	    },
	    {
	      "id": 2651,
	      "text": "福海縣"
	    },
	    {
	      "id": 2652,
	      "text": "哈巴河縣"
	    },
	    {
	      "id": 2653,
	      "text": "青河縣"
	    },
	    {
	      "id": 2654,
	      "text": "吉木乃縣"
	    }
	  ],
	  "337": [
	    {
	      "id": 2655,
	      "text": "阿圖什市"
	    },
	    {
	      "id": 2656,
	      "text": "阿克陶縣"
	    },
	    {
	      "id": 2657,
	      "text": "阿合奇縣"
	    },
	    {
	      "id": 2658,
	      "text": "烏恰縣"
	    }
	  ],
	  "338": [
	    {
	      "id": 2659,
	      "text": "博樂市"
	    },
	    {
	      "id": 2660,
	      "text": "精河縣"
	    },
	    {
	      "id": 2661,
	      "text": "溫泉縣"
	    }
	  ],
	  "339": [
	    {
	      "id": 2662,
	      "text": "獨山子區"
	    },
	    {
	      "id": 2663,
	      "text": "克拉瑪依區"
	    },
	    {
	      "id": 2664,
	      "text": "白鹼灘區"
	    },
	    {
	      "id": 2665,
	      "text": "烏爾禾區"
	    }
	  ],
	  "340": [
	    {
	      "id": 2666,
	      "text": "天山區"
	    },
	    {
	      "id": 2667,
	      "text": "沙依巴克區"
	    },
	    {
	      "id": 2668,
	      "text": "新市區"
	    },
	    {
	      "id": 2669,
	      "text": "水磨溝區"
	    },
	    {
	      "id": 2670,
	      "text": "頭屯河區"
	    },
	    {
	      "id": 2671,
	      "text": "達阪城區"
	    },
	    {
	      "id": 2672,
	      "text": "米東區"
	    },
	    {
	      "id": 2673,
	      "text": "烏魯木齊縣"
	    }
	  ],
	  "341": [],
	  "342": [
	    {
	      "id": 2674,
	      "text": "昌吉市"
	    },
	    {
	      "id": 2675,
	      "text": "阜康市"
	    },
	    {
	      "id": 2676,
	      "text": "呼圖壁縣"
	    },
	    {
	      "id": 2677,
	      "text": "瑪納斯縣"
	    },
	    {
	      "id": 2678,
	      "text": "奇台縣"
	    },
	    {
	      "id": 2679,
	      "text": "吉木薩爾縣"
	    },
	    {
	      "id": 2680,
	      "text": "木壘哈薩克自治縣"
	    }
	  ],
	  "343": [],
	  "344": [
	    {
	      "id": 2681,
	      "text": "吐魯番市"
	    },
	    {
	      "id": 2682,
	      "text": "鄯善縣"
	    },
	    {
	      "id": 2683,
	      "text": "托克遜縣"
	    }
	  ],
	  "345": [
	    {
	      "id": 2684,
	      "text": "庫爾勒市"
	    },
	    {
	      "id": 2685,
	      "text": "輪台縣"
	    },
	    {
	      "id": 2686,
	      "text": "尉犁縣"
	    },
	    {
	      "id": 2687,
	      "text": "若羌縣"
	    },
	    {
	      "id": 2688,
	      "text": "且末縣"
	    },
	    {
	      "id": 2689,
	      "text": "焉耆回族自治縣"
	    },
	    {
	      "id": 2690,
	      "text": "和靜縣"
	    },
	    {
	      "id": 2691,
	      "text": "和碩縣"
	    },
	    {
	      "id": 2692,
	      "text": "博湖縣"
	    }
	  ],
	  "346": [
	    {
	      "id": 2693,
	      "text": "阿克蘇市"
	    },
	    {
	      "id": 2694,
	      "text": "溫宿縣"
	    },
	    {
	      "id": 2695,
	      "text": "庫車縣"
	    },
	    {
	      "id": 2696,
	      "text": "沙雅縣"
	    },
	    {
	      "id": 2697,
	      "text": "新和縣"
	    },
	    {
	      "id": 2698,
	      "text": "拜城縣"
	    },
	    {
	      "id": 2699,
	      "text": "烏什縣"
	    },
	    {
	      "id": 2700,
	      "text": "阿瓦提縣"
	    },
	    {
	      "id": 2701,
	      "text": "柯坪縣"
	    }
	  ],
	  "347": [],
	  "348": [
	    {
	      "id": 2702,
	      "text": "喀什市"
	    },
	    {
	      "id": 2703,
	      "text": "疏附縣"
	    },
	    {
	      "id": 2704,
	      "text": "疏勒縣"
	    },
	    {
	      "id": 2705,
	      "text": "英吉沙縣"
	    },
	    {
	      "id": 2706,
	      "text": "澤普縣"
	    },
	    {
	      "id": 2707,
	      "text": "莎車縣"
	    },
	    {
	      "id": 2708,
	      "text": "葉城縣"
	    },
	    {
	      "id": 2709,
	      "text": "麥蓋提縣"
	    },
	    {
	      "id": 2710,
	      "text": "岳普湖縣"
	    },
	    {
	      "id": 2711,
	      "text": "伽師縣"
	    },
	    {
	      "id": 2712,
	      "text": "巴楚縣"
	    },
	    {
	      "id": 2713,
	      "text": "塔什庫爾干塔吉克自治縣"
	    }
	  ],
	  "349": [],
	  "350": [
	    {
	      "id": 2714,
	      "text": "伊寧市"
	    },
	    {
	      "id": 2715,
	      "text": "奎屯市"
	    },
	    {
	      "id": 2716,
	      "text": "伊寧縣"
	    },
	    {
	      "id": 2717,
	      "text": "察布查爾錫伯自治縣"
	    },
	    {
	      "id": 2718,
	      "text": "霍城縣"
	    },
	    {
	      "id": 2719,
	      "text": "鞏留縣"
	    },
	    {
	      "id": 2720,
	      "text": "新源縣"
	    },
	    {
	      "id": 2721,
	      "text": "昭蘇縣"
	    },
	    {
	      "id": 2722,
	      "text": "特克斯縣"
	    },
	    {
	      "id": 2723,
	      "text": "尼勒克縣"
	    }
	  ],
	  "289": [
	    {
	      "id": 2277,
	      "text": "門源回族自治縣"
	    },
	    {
	      "id": 2278,
	      "text": "祁連縣"
	    },
	    {
	      "id": 2279,
	      "text": "海晏縣"
	    },
	    {
	      "id": 2280,
	      "text": "剛察縣"
	    }
	  ],
	  "290": [
	    {
	      "id": 2281,
	      "text": "城東區"
	    },
	    {
	      "id": 2282,
	      "text": "城中區"
	    },
	    {
	      "id": 2283,
	      "text": "城西區"
	    },
	    {
	      "id": 2284,
	      "text": "城北區"
	    },
	    {
	      "id": 2285,
	      "text": "大通回族土族自治縣"
	    },
	    {
	      "id": 2286,
	      "text": "湟中縣"
	    },
	    {
	      "id": 2287,
	      "text": "湟源縣"
	    }
	  ],
	  "291": [
	    {
	      "id": 2288,
	      "text": "平安縣"
	    },
	    {
	      "id": 2289,
	      "text": "民和回族土族自治縣"
	    },
	    {
	      "id": 2290,
	      "text": "樂都縣"
	    },
	    {
	      "id": 2291,
	      "text": "互助土族自治縣"
	    },
	    {
	      "id": 2292,
	      "text": "化隆回族自治縣"
	    },
	    {
	      "id": 2293,
	      "text": "循化撒拉族自治縣"
	    }
	  ],
	  "292": [
	    {
	      "id": 2294,
	      "text": "同仁縣"
	    },
	    {
	      "id": 2295,
	      "text": "尖扎縣"
	    },
	    {
	      "id": 2296,
	      "text": "澤庫縣"
	    },
	    {
	      "id": 2297,
	      "text": "河南蒙古族自治縣"
	    }
	  ],
	  "293": [
	    {
	      "id": 2298,
	      "text": "共和縣"
	    },
	    {
	      "id": 2299,
	      "text": "同德縣"
	    },
	    {
	      "id": 2300,
	      "text": "貴德縣"
	    },
	    {
	      "id": 2301,
	      "text": "興海縣"
	    },
	    {
	      "id": 2302,
	      "text": "貴南縣"
	    }
	  ],
	  "294": [
	    {
	      "id": 2303,
	      "text": "瑪沁縣"
	    },
	    {
	      "id": 2304,
	      "text": "班瑪縣"
	    },
	    {
	      "id": 2305,
	      "text": "甘德縣"
	    },
	    {
	      "id": 2306,
	      "text": "達日縣"
	    },
	    {
	      "id": 2307,
	      "text": "久治縣"
	    },
	    {
	      "id": 2308,
	      "text": "瑪多縣"
	    }
	  ],
	  "295": [
	    {
	      "id": 2309,
	      "text": "玉樹縣"
	    },
	    {
	      "id": 2310,
	      "text": "雜多縣"
	    },
	    {
	      "id": 2311,
	      "text": "稱多縣"
	    },
	    {
	      "id": 2312,
	      "text": "治多縣"
	    },
	    {
	      "id": 2313,
	      "text": "囊謙縣"
	    },
	    {
	      "id": 2314,
	      "text": "曲麻萊縣"
	    }
	  ],
	  "296": [
	    {
	      "id": 2315,
	      "text": "格爾木市"
	    },
	    {
	      "id": 2316,
	      "text": "德令哈市"
	    },
	    {
	      "id": 2317,
	      "text": "烏蘭縣"
	    },
	    {
	      "id": 2318,
	      "text": "都蘭縣"
	    },
	    {
	      "id": 2319,
	      "text": "天峻縣"
	    }
	  ],
	  "328": [
	    {
	      "id": 2609,
	      "text": "興慶區"
	    },
	    {
	      "id": 2610,
	      "text": "西夏區"
	    },
	    {
	      "id": 2611,
	      "text": "金鳳區"
	    },
	    {
	      "id": 2612,
	      "text": "永寧縣"
	    },
	    {
	      "id": 2613,
	      "text": "賀蘭縣"
	    },
	    {
	      "id": 2614,
	      "text": "靈武市"
	    }
	  ],
	  "329": [
	    {
	      "id": 2615,
	      "text": "大武口區"
	    },
	    {
	      "id": 2616,
	      "text": "惠農區"
	    },
	    {
	      "id": 2617,
	      "text": "平羅縣"
	    }
	  ],
	  "330": [
	    {
	      "id": 2618,
	      "text": "利通區"
	    },
	    {
	      "id": 2619,
	      "text": "鹽池縣"
	    },
	    {
	      "id": 2620,
	      "text": "同心縣"
	    },
	    {
	      "id": 2621,
	      "text": "青銅峽市"
	    }
	  ],
	  "331": [
	    {
	      "id": 2622,
	      "text": "原州區"
	    },
	    {
	      "id": 2623,
	      "text": "西吉縣"
	    },
	    {
	      "id": 2624,
	      "text": "隆德縣"
	    },
	    {
	      "id": 2625,
	      "text": "涇源縣"
	    },
	    {
	      "id": 2626,
	      "text": "彭陽縣"
	    }
	  ],
	  "332": [
	    {
	      "id": 2627,
	      "text": "沙坡頭區"
	    },
	    {
	      "id": 2628,
	      "text": "中寧縣"
	    },
	    {
	      "id": 2629,
	      "text": "海原縣"
	    }
	  ],
	  "4": [
	    {
	      "id": 56,
	      "text": "萬州區"
	    },
	    {
	      "id": 57,
	      "text": "涪陵區"
	    },
	    {
	      "id": 58,
	      "text": "渝中區"
	    },
	    {
	      "id": 59,
	      "text": "大渡口區"
	    },
	    {
	      "id": 60,
	      "text": "江北區"
	    },
	    {
	      "id": 61,
	      "text": "沙坪壩區"
	    },
	    {
	      "id": 62,
	      "text": "九龍坡區"
	    },
	    {
	      "id": 63,
	      "text": "南岸區"
	    },
	    {
	      "id": 64,
	      "text": "北碚區"
	    },
	    {
	      "id": 65,
	      "text": "萬盛區"
	    },
	    {
	      "id": 66,
	      "text": "雙橋區"
	    },
	    {
	      "id": 67,
	      "text": "渝北區"
	    },
	    {
	      "id": 68,
	      "text": "巴南區"
	    },
	    {
	      "id": 69,
	      "text": "黔江區"
	    },
	    {
	      "id": 70,
	      "text": "長壽區"
	    },
	    {
	      "id": 71,
	      "text": "江津區"
	    },
	    {
	      "id": 72,
	      "text": "合川區"
	    },
	    {
	      "id": 73,
	      "text": "永川區"
	    },
	    {
	      "id": 74,
	      "text": "南川區"
	    },
	    {
	      "id": 75,
	      "text": "綦江縣"
	    },
	    {
	      "id": 76,
	      "text": "潼南縣"
	    },
	    {
	      "id": 77,
	      "text": "銅梁縣"
	    },
	    {
	      "id": 78,
	      "text": "大足縣"
	    },
	    {
	      "id": 79,
	      "text": "榮昌縣"
	    },
	    {
	      "id": 80,
	      "text": "璧山縣"
	    },
	    {
	      "id": 81,
	      "text": "梁平縣"
	    },
	    {
	      "id": 82,
	      "text": "城口縣"
	    },
	    {
	      "id": 83,
	      "text": "豐都縣"
	    },
	    {
	      "id": 84,
	      "text": "墊江縣"
	    },
	    {
	      "id": 85,
	      "text": "武隆縣"
	    },
	    {
	      "id": 86,
	      "text": "忠縣"
	    },
	    {
	      "id": 87,
	      "text": "開縣"
	    },
	    {
	      "id": 88,
	      "text": "雲陽縣"
	    },
	    {
	      "id": 89,
	      "text": "奉節縣"
	    },
	    {
	      "id": 90,
	      "text": "巫山縣"
	    },
	    {
	      "id": 91,
	      "text": "巫溪縣"
	    },
	    {
	      "id": 92,
	      "text": "石柱土家族自治縣"
	    },
	    {
	      "id": 93,
	      "text": "秀山土家族苗族自治縣"
	    },
	    {
	      "id": 94,
	      "text": "酉陽土家族苗族自治縣"
	    },
	    {
	      "id": 95,
	      "text": "彭水苗族土家族自治縣"
	    }
	  ],
	  "225": [
	    {
	      "id": 1875,
	      "text": "錦江區"
	    },
	    {
	      "id": 1876,
	      "text": "青羊區"
	    },
	    {
	      "id": 1877,
	      "text": "金牛區"
	    },
	    {
	      "id": 1878,
	      "text": "武侯區"
	    },
	    {
	      "id": 1879,
	      "text": "成華區"
	    },
	    {
	      "id": 1880,
	      "text": "龍泉驛區"
	    },
	    {
	      "id": 1881,
	      "text": "青白江區"
	    },
	    {
	      "id": 1882,
	      "text": "新都區"
	    },
	    {
	      "id": 1883,
	      "text": "溫江區"
	    },
	    {
	      "id": 1884,
	      "text": "金堂縣"
	    },
	    {
	      "id": 1885,
	      "text": "雙流縣"
	    },
	    {
	      "id": 1886,
	      "text": "郫縣"
	    },
	    {
	      "id": 1887,
	      "text": "大邑縣"
	    },
	    {
	      "id": 1888,
	      "text": "蒲江縣"
	    },
	    {
	      "id": 1889,
	      "text": "新津縣"
	    },
	    {
	      "id": 1890,
	      "text": "都江堰市"
	    },
	    {
	      "id": 1891,
	      "text": "彭州市"
	    },
	    {
	      "id": 1892,
	      "text": "邛崍市"
	    },
	    {
	      "id": 1893,
	      "text": "崇州市"
	    }
	  ],
	  "226": [
	    {
	      "id": 1894,
	      "text": "東區"
	    },
	    {
	      "id": 1895,
	      "text": "西區"
	    },
	    {
	      "id": 1896,
	      "text": "仁和區"
	    },
	    {
	      "id": 1897,
	      "text": "米易縣"
	    },
	    {
	      "id": 1898,
	      "text": "鹽邊縣"
	    }
	  ],
	  "227": [
	    {
	      "id": 1899,
	      "text": "自流井區"
	    },
	    {
	      "id": 1900,
	      "text": "貢井區"
	    },
	    {
	      "id": 1901,
	      "text": "大安區"
	    },
	    {
	      "id": 1902,
	      "text": "沿灘區"
	    },
	    {
	      "id": 1903,
	      "text": "榮縣"
	    },
	    {
	      "id": 1904,
	      "text": "富順縣"
	    }
	  ],
	  "228": [
	    {
	      "id": 1905,
	      "text": "涪城區"
	    },
	    {
	      "id": 1906,
	      "text": "游仙區"
	    },
	    {
	      "id": 1907,
	      "text": "三台縣"
	    },
	    {
	      "id": 1908,
	      "text": "鹽亭縣"
	    },
	    {
	      "id": 1909,
	      "text": "安縣"
	    },
	    {
	      "id": 1910,
	      "text": "梓潼縣"
	    },
	    {
	      "id": 1911,
	      "text": "北川羌族自治縣"
	    },
	    {
	      "id": 1912,
	      "text": "平武縣"
	    },
	    {
	      "id": 1913,
	      "text": "江油市"
	    }
	  ],
	  "229": [
	    {
	      "id": 1914,
	      "text": "順慶區"
	    },
	    {
	      "id": 1915,
	      "text": "高坪區"
	    },
	    {
	      "id": 1916,
	      "text": "嘉陵區"
	    },
	    {
	      "id": 1917,
	      "text": "南部縣"
	    },
	    {
	      "id": 1918,
	      "text": "營山縣"
	    },
	    {
	      "id": 1919,
	      "text": "蓬安縣"
	    },
	    {
	      "id": 1920,
	      "text": "儀隴縣"
	    },
	    {
	      "id": 1921,
	      "text": "西充縣"
	    },
	    {
	      "id": 1922,
	      "text": "閬中市"
	    }
	  ],
	  "230": [
	    {
	      "id": 1923,
	      "text": "通川區"
	    },
	    {
	      "id": 1924,
	      "text": "達縣"
	    },
	    {
	      "id": 1925,
	      "text": "宣漢縣"
	    },
	    {
	      "id": 1926,
	      "text": "開江縣"
	    },
	    {
	      "id": 1927,
	      "text": "大竹縣"
	    },
	    {
	      "id": 1928,
	      "text": "渠縣"
	    },
	    {
	      "id": 1929,
	      "text": "萬源市"
	    }
	  ],
	  "231": [
	    {
	      "id": 1930,
	      "text": "船山區"
	    },
	    {
	      "id": 1931,
	      "text": "安居區"
	    },
	    {
	      "id": 1932,
	      "text": "蓬溪縣"
	    },
	    {
	      "id": 1933,
	      "text": "射洪縣"
	    },
	    {
	      "id": 1934,
	      "text": "大英縣"
	    }
	  ],
	  "232": [
	    {
	      "id": 1935,
	      "text": "廣安區"
	    },
	    {
	      "id": 1936,
	      "text": "岳池縣"
	    },
	    {
	      "id": 1937,
	      "text": "武勝縣"
	    },
	    {
	      "id": 1938,
	      "text": "鄰水縣"
	    },
	    {
	      "id": 1939,
	      "text": "華鎣市"
	    }
	  ],
	  "233": [
	    {
	      "id": 1940,
	      "text": "巴州區"
	    },
	    {
	      "id": 1941,
	      "text": "通江縣"
	    },
	    {
	      "id": 1942,
	      "text": "南江縣"
	    },
	    {
	      "id": 1943,
	      "text": "平昌縣"
	    }
	  ],
	  "234": [
	    {
	      "id": 1944,
	      "text": "江陽區"
	    },
	    {
	      "id": 1945,
	      "text": "納溪區"
	    },
	    {
	      "id": 1946,
	      "text": "龍馬潭區"
	    },
	    {
	      "id": 1947,
	      "text": "瀘縣"
	    },
	    {
	      "id": 1948,
	      "text": "合江縣"
	    },
	    {
	      "id": 1949,
	      "text": "敘永縣"
	    },
	    {
	      "id": 1950,
	      "text": "古藺縣"
	    }
	  ],
	  "235": [
	    {
	      "id": 1951,
	      "text": "翠屏區"
	    },
	    {
	      "id": 1952,
	      "text": "宜賓縣"
	    },
	    {
	      "id": 1953,
	      "text": "南溪縣"
	    },
	    {
	      "id": 1954,
	      "text": "江安縣"
	    },
	    {
	      "id": 1955,
	      "text": "長寧縣"
	    },
	    {
	      "id": 1956,
	      "text": "高縣"
	    },
	    {
	      "id": 1957,
	      "text": "珙縣"
	    },
	    {
	      "id": 1958,
	      "text": "筠連縣"
	    },
	    {
	      "id": 1959,
	      "text": "興文縣"
	    },
	    {
	      "id": 1960,
	      "text": "屏山縣"
	    }
	  ],
	  "236": [
	    {
	      "id": 1961,
	      "text": "雁江區"
	    },
	    {
	      "id": 1962,
	      "text": "安岳縣"
	    },
	    {
	      "id": 1963,
	      "text": "樂至縣"
	    },
	    {
	      "id": 1964,
	      "text": "簡陽市"
	    }
	  ],
	  "237": [
	    {
	      "id": 1965,
	      "text": "市中區"
	    },
	    {
	      "id": 1966,
	      "text": "東興區"
	    },
	    {
	      "id": 1967,
	      "text": "威遠縣"
	    },
	    {
	      "id": 1968,
	      "text": "資中縣"
	    },
	    {
	      "id": 1969,
	      "text": "隆昌縣"
	    }
	  ],
	  "238": [
	    {
	      "id": 1970,
	      "text": "市中區"
	    },
	    {
	      "id": 1971,
	      "text": "沙灣區"
	    },
	    {
	      "id": 1972,
	      "text": "五通橋區"
	    },
	    {
	      "id": 1973,
	      "text": "金口河區"
	    },
	    {
	      "id": 1974,
	      "text": "犍為縣"
	    },
	    {
	      "id": 1975,
	      "text": "井研縣"
	    },
	    {
	      "id": 1976,
	      "text": "夾江縣"
	    },
	    {
	      "id": 1977,
	      "text": "沐川縣"
	    },
	    {
	      "id": 1978,
	      "text": "峨邊彝族自治縣"
	    },
	    {
	      "id": 1979,
	      "text": "馬邊彝族自治縣"
	    },
	    {
	      "id": 1980,
	      "text": "峨眉山市"
	    }
	  ],
	  "239": [
	    {
	      "id": 1981,
	      "text": "東坡區"
	    },
	    {
	      "id": 1982,
	      "text": "仁壽縣"
	    },
	    {
	      "id": 1983,
	      "text": "彭山縣"
	    },
	    {
	      "id": 1984,
	      "text": "洪雅縣"
	    },
	    {
	      "id": 1985,
	      "text": "丹稜縣"
	    },
	    {
	      "id": 1986,
	      "text": "青神縣"
	    }
	  ],
	  "240": [
	    {
	      "id": 1987,
	      "text": "西昌市"
	    },
	    {
	      "id": 1988,
	      "text": "木裡藏族自治縣"
	    },
	    {
	      "id": 1989,
	      "text": "鹽源縣"
	    },
	    {
	      "id": 1990,
	      "text": "德昌縣"
	    },
	    {
	      "id": 1991,
	      "text": "會理縣"
	    },
	    {
	      "id": 1992,
	      "text": "會東縣"
	    },
	    {
	      "id": 1993,
	      "text": "寧南縣"
	    },
	    {
	      "id": 1994,
	      "text": "普格縣"
	    },
	    {
	      "id": 1995,
	      "text": "布拖縣"
	    },
	    {
	      "id": 1996,
	      "text": "金陽縣"
	    },
	    {
	      "id": 1997,
	      "text": "昭覺縣"
	    },
	    {
	      "id": 1998,
	      "text": "喜德縣"
	    },
	    {
	      "id": 1999,
	      "text": "冕寧縣"
	    },
	    {
	      "id": 2000,
	      "text": "越西縣"
	    },
	    {
	      "id": 2001,
	      "text": "甘洛縣"
	    },
	    {
	      "id": 2002,
	      "text": "美姑縣"
	    },
	    {
	      "id": 2003,
	      "text": "雷波縣"
	    }
	  ],
	  "241": [
	    {
	      "id": 2004,
	      "text": "雨城區"
	    },
	    {
	      "id": 2005,
	      "text": "名山縣"
	    },
	    {
	      "id": 2006,
	      "text": "滎經縣"
	    },
	    {
	      "id": 2007,
	      "text": "漢源縣"
	    },
	    {
	      "id": 2008,
	      "text": "石棉縣"
	    },
	    {
	      "id": 2009,
	      "text": "天全縣"
	    },
	    {
	      "id": 2010,
	      "text": "蘆山縣"
	    },
	    {
	      "id": 2011,
	      "text": "寶興縣"
	    }
	  ],
	  "242": [
	    {
	      "id": 2012,
	      "text": "康定縣"
	    },
	    {
	      "id": 2013,
	      "text": "瀘定縣"
	    },
	    {
	      "id": 2014,
	      "text": "丹巴縣"
	    },
	    {
	      "id": 2015,
	      "text": "九龍縣"
	    },
	    {
	      "id": 2016,
	      "text": "雅江縣"
	    },
	    {
	      "id": 2017,
	      "text": "道孚縣"
	    },
	    {
	      "id": 2018,
	      "text": "爐霍縣"
	    },
	    {
	      "id": 2019,
	      "text": "甘孜縣"
	    },
	    {
	      "id": 2020,
	      "text": "新龍縣"
	    },
	    {
	      "id": 2021,
	      "text": "德格縣"
	    },
	    {
	      "id": 2022,
	      "text": "白玉縣"
	    },
	    {
	      "id": 2023,
	      "text": "石渠縣"
	    },
	    {
	      "id": 2024,
	      "text": "色達縣"
	    },
	    {
	      "id": 2025,
	      "text": "理塘縣"
	    },
	    {
	      "id": 2026,
	      "text": "巴塘縣"
	    },
	    {
	      "id": 2027,
	      "text": "鄉城縣"
	    },
	    {
	      "id": 2028,
	      "text": "稻城縣"
	    },
	    {
	      "id": 2029,
	      "text": "得榮縣"
	    }
	  ],
	  "243": [
	    {
	      "id": 2030,
	      "text": "汶川縣"
	    },
	    {
	      "id": 2031,
	      "text": "理縣"
	    },
	    {
	      "id": 2032,
	      "text": "茂縣"
	    },
	    {
	      "id": 2033,
	      "text": "松潘縣"
	    },
	    {
	      "id": 2034,
	      "text": "九寨溝縣"
	    },
	    {
	      "id": 2035,
	      "text": "金川縣"
	    },
	    {
	      "id": 2036,
	      "text": "小金縣"
	    },
	    {
	      "id": 2037,
	      "text": "黑水縣"
	    },
	    {
	      "id": 2038,
	      "text": "馬爾康縣"
	    },
	    {
	      "id": 2039,
	      "text": "壤塘縣"
	    },
	    {
	      "id": 2040,
	      "text": "阿壩縣"
	    },
	    {
	      "id": 2041,
	      "text": "若爾蓋縣"
	    },
	    {
	      "id": 2042,
	      "text": "紅原縣"
	    }
	  ],
	  "244": [
	    {
	      "id": 2043,
	      "text": "旌陽區"
	    },
	    {
	      "id": 2044,
	      "text": "中江縣"
	    },
	    {
	      "id": 2045,
	      "text": "羅江縣"
	    },
	    {
	      "id": 2046,
	      "text": "廣漢市"
	    },
	    {
	      "id": 2047,
	      "text": "什邡市"
	    },
	    {
	      "id": 2048,
	      "text": "綿竹市"
	    }
	  ],
	  "245": [
	    {
	      "id": 2049,
	      "text": "市中區"
	    },
	    {
	      "id": 2050,
	      "text": "元壩區"
	    },
	    {
	      "id": 2051,
	      "text": "朝天區"
	    },
	    {
	      "id": 2052,
	      "text": "旺蒼縣"
	    },
	    {
	      "id": 2053,
	      "text": "青川縣"
	    },
	    {
	      "id": 2054,
	      "text": "劍閣縣"
	    },
	    {
	      "id": 2055,
	      "text": "蒼溪縣"
	    }
	  ],
	  "246": [
	    {
	      "id": 2056,
	      "text": "南明區"
	    },
	    {
	      "id": 2057,
	      "text": "雲巖區"
	    },
	    {
	      "id": 2058,
	      "text": "花溪區"
	    },
	    {
	      "id": 2059,
	      "text": "烏當區"
	    },
	    {
	      "id": 2060,
	      "text": "白雲區"
	    },
	    {
	      "id": 2061,
	      "text": "小河區"
	    },
	    {
	      "id": 2062,
	      "text": "開陽縣"
	    },
	    {
	      "id": 2063,
	      "text": "息烽縣"
	    },
	    {
	      "id": 2064,
	      "text": "修文縣"
	    },
	    {
	      "id": 2065,
	      "text": "清鎮市"
	    }
	  ],
	  "247": [
	    {
	      "id": 2066,
	      "text": "紅花崗區"
	    },
	    {
	      "id": 2067,
	      "text": "匯川區"
	    },
	    {
	      "id": 2068,
	      "text": "遵義縣"
	    },
	    {
	      "id": 2069,
	      "text": "桐梓縣"
	    },
	    {
	      "id": 2070,
	      "text": "綏陽縣"
	    },
	    {
	      "id": 2071,
	      "text": "正安縣"
	    },
	    {
	      "id": 2072,
	      "text": "道真仡佬族苗族自治縣"
	    },
	    {
	      "id": 2073,
	      "text": "務川仡佬族苗族自治縣"
	    },
	    {
	      "id": 2074,
	      "text": "鳳岡縣"
	    },
	    {
	      "id": 2075,
	      "text": "湄潭縣"
	    },
	    {
	      "id": 2076,
	      "text": "余慶縣"
	    },
	    {
	      "id": 2077,
	      "text": "習水縣"
	    },
	    {
	      "id": 2078,
	      "text": "赤水市"
	    },
	    {
	      "id": 2079,
	      "text": "仁懷市"
	    }
	  ],
	  "248": [
	    {
	      "id": 2080,
	      "text": "西秀區"
	    },
	    {
	      "id": 2081,
	      "text": "平壩縣"
	    },
	    {
	      "id": 2082,
	      "text": "普定縣"
	    },
	    {
	      "id": 2083,
	      "text": "鎮寧布依族苗族自治縣"
	    },
	    {
	      "id": 2084,
	      "text": "關嶺布依族苗族自治縣"
	    },
	    {
	      "id": 2085,
	      "text": "紫雲苗族布依族自治縣"
	    }
	  ],
	  "249": [
	    {
	      "id": 2086,
	      "text": "都勻市"
	    },
	    {
	      "id": 2087,
	      "text": "福泉市"
	    },
	    {
	      "id": 2088,
	      "text": "荔波縣"
	    },
	    {
	      "id": 2089,
	      "text": "貴定縣"
	    },
	    {
	      "id": 2090,
	      "text": "甕安縣"
	    },
	    {
	      "id": 2091,
	      "text": "獨山縣"
	    },
	    {
	      "id": 2092,
	      "text": "平塘縣"
	    },
	    {
	      "id": 2093,
	      "text": "羅甸縣"
	    },
	    {
	      "id": 2094,
	      "text": "長順縣"
	    },
	    {
	      "id": 2095,
	      "text": "龍裡縣"
	    },
	    {
	      "id": 2096,
	      "text": "惠水縣"
	    },
	    {
	      "id": 2097,
	      "text": "三都水族自治縣"
	    }
	  ],
	  "250": [
	    {
	      "id": 2098,
	      "text": "凱裡市"
	    },
	    {
	      "id": 2099,
	      "text": "黃平縣"
	    },
	    {
	      "id": 2100,
	      "text": "施秉縣"
	    },
	    {
	      "id": 2101,
	      "text": "三穗縣"
	    },
	    {
	      "id": 2102,
	      "text": "鎮遠縣"
	    },
	    {
	      "id": 2103,
	      "text": "岑鞏縣"
	    },
	    {
	      "id": 2104,
	      "text": "天柱縣"
	    },
	    {
	      "id": 2105,
	      "text": "錦屏縣"
	    },
	    {
	      "id": 2106,
	      "text": "劍河縣"
	    },
	    {
	      "id": 2107,
	      "text": "台江縣"
	    },
	    {
	      "id": 2108,
	      "text": "黎平縣"
	    },
	    {
	      "id": 2109,
	      "text": "榕江縣"
	    },
	    {
	      "id": 2110,
	      "text": "從江縣"
	    },
	    {
	      "id": 2111,
	      "text": "雷山縣"
	    },
	    {
	      "id": 2112,
	      "text": "麻江縣"
	    },
	    {
	      "id": 2113,
	      "text": "丹寨縣"
	    }
	  ],
	  "251": [
	    {
	      "id": 2114,
	      "text": "銅仁市"
	    },
	    {
	      "id": 2115,
	      "text": "江口縣"
	    },
	    {
	      "id": 2116,
	      "text": "玉屏侗族自治縣"
	    },
	    {
	      "id": 2117,
	      "text": "石阡縣"
	    },
	    {
	      "id": 2118,
	      "text": "思南縣"
	    },
	    {
	      "id": 2119,
	      "text": "印江土家族苗族自治縣"
	    },
	    {
	      "id": 2120,
	      "text": "德江縣"
	    },
	    {
	      "id": 2121,
	      "text": "沿河土家族自治縣"
	    },
	    {
	      "id": 2122,
	      "text": "松桃苗族自治縣"
	    },
	    {
	      "id": 2123,
	      "text": "萬山特區"
	    }
	  ],
	  "252": [
	    {
	      "id": 2124,
	      "text": "畢節市"
	    },
	    {
	      "id": 2125,
	      "text": "大方縣"
	    },
	    {
	      "id": 2126,
	      "text": "黔西縣"
	    },
	    {
	      "id": 2127,
	      "text": "金沙縣"
	    },
	    {
	      "id": 2128,
	      "text": "織金縣"
	    },
	    {
	      "id": 2129,
	      "text": "納雍縣"
	    },
	    {
	      "id": 2130,
	      "text": "威寧彝族回族苗族自治縣"
	    },
	    {
	      "id": 2131,
	      "text": "赫章縣"
	    }
	  ],
	  "253": [
	    {
	      "id": 2132,
	      "text": "鍾山區"
	    },
	    {
	      "id": 2133,
	      "text": "六枝特區"
	    },
	    {
	      "id": 2134,
	      "text": "水城縣"
	    },
	    {
	      "id": 2135,
	      "text": "碟縣"
	    }
	  ],
	  "254": [
	    {
	      "id": 2136,
	      "text": "興義市"
	    },
	    {
	      "id": 2137,
	      "text": "興仁縣"
	    },
	    {
	      "id": 2138,
	      "text": "普安縣"
	    },
	    {
	      "id": 2139,
	      "text": "晴隆縣"
	    },
	    {
	      "id": 2140,
	      "text": "貞豐縣"
	    },
	    {
	      "id": 2141,
	      "text": "望謨縣"
	    },
	    {
	      "id": 2142,
	      "text": "冊亨縣"
	    },
	    {
	      "id": 2143,
	      "text": "安龍縣"
	    }
	  ],
	  "273": [
	    {
	      "id": 2148,
	      "text": "景洪市"
	    },
	    {
	      "id": 2149,
	      "text": "猛海縣"
	    },
	    {
	      "id": 2150,
	      "text": "猛臘縣"
	    }
	  ],
	  "274": [
	    {
	      "id": 2151,
	      "text": "瑞麗市"
	    },
	    {
	      "id": 2152,
	      "text": "潞西市"
	    },
	    {
	      "id": 2153,
	      "text": "梁河縣"
	    },
	    {
	      "id": 2154,
	      "text": "盈江縣"
	    },
	    {
	      "id": 2155,
	      "text": "隴川縣"
	    }
	  ],
	  "275": [
	    {
	      "id": 2156,
	      "text": "昭陽區"
	    },
	    {
	      "id": 2157,
	      "text": "魯甸縣"
	    },
	    {
	      "id": 2158,
	      "text": "巧家縣"
	    },
	    {
	      "id": 2159,
	      "text": "鹽津縣"
	    },
	    {
	      "id": 2160,
	      "text": "大關縣"
	    },
	    {
	      "id": 2161,
	      "text": "永善縣"
	    },
	    {
	      "id": 2162,
	      "text": "綏江縣"
	    },
	    {
	      "id": 2163,
	      "text": "鎮雄縣"
	    },
	    {
	      "id": 2164,
	      "text": "彝良縣"
	    },
	    {
	      "id": 2165,
	      "text": "威信縣"
	    },
	    {
	      "id": 2166,
	      "text": "水富縣"
	    }
	  ],
	  "276": [
	    {
	      "id": 2167,
	      "text": "五華區"
	    },
	    {
	      "id": 2168,
	      "text": "碟龍區"
	    },
	    {
	      "id": 2169,
	      "text": "官渡區"
	    },
	    {
	      "id": 2170,
	      "text": "西山區"
	    },
	    {
	      "id": 2171,
	      "text": "東川區"
	    },
	    {
	      "id": 2172,
	      "text": "呈貢縣"
	    },
	    {
	      "id": 2173,
	      "text": "晉寧縣"
	    },
	    {
	      "id": 2174,
	      "text": "富民縣"
	    },
	    {
	      "id": 2175,
	      "text": "宜良縣"
	    },
	    {
	      "id": 2176,
	      "text": "石林彝族自治縣"
	    },
	    {
	      "id": 2177,
	      "text": "嵩明縣"
	    },
	    {
	      "id": 2178,
	      "text": "祿勸彝族苗族自治縣"
	    },
	    {
	      "id": 2179,
	      "text": "尋甸回族彝族自治縣"
	    },
	    {
	      "id": 2180,
	      "text": "安寧市"
	    }
	  ],
	  "277": [
	    {
	      "id": 2181,
	      "text": "大理市"
	    },
	    {
	      "id": 2182,
	      "text": "漾濞彝族自治縣"
	    },
	    {
	      "id": 2183,
	      "text": "祥雲縣"
	    },
	    {
	      "id": 2184,
	      "text": "賓川縣"
	    },
	    {
	      "id": 2185,
	      "text": "彌渡縣"
	    },
	    {
	      "id": 2186,
	      "text": "南澗彝族自治縣"
	    },
	    {
	      "id": 2187,
	      "text": "巍山彝族回族自治縣"
	    },
	    {
	      "id": 2188,
	      "text": "永平縣"
	    },
	    {
	      "id": 2189,
	      "text": "雲龍縣"
	    },
	    {
	      "id": 2190,
	      "text": "洱源縣"
	    },
	    {
	      "id": 2191,
	      "text": "劍川縣"
	    },
	    {
	      "id": 2192,
	      "text": "鶴慶縣"
	    }
	  ],
	  "278": [
	    {
	      "id": 2193,
	      "text": "個舊市"
	    },
	    {
	      "id": 2194,
	      "text": "開遠市"
	    },
	    {
	      "id": 2195,
	      "text": "蒙自縣"
	    },
	    {
	      "id": 2196,
	      "text": "屏邊苗族自治縣"
	    },
	    {
	      "id": 2197,
	      "text": "建水縣"
	    },
	    {
	      "id": 2198,
	      "text": "石屏縣"
	    },
	    {
	      "id": 2199,
	      "text": "彌勒縣"
	    },
	    {
	      "id": 2200,
	      "text": "瀘西縣"
	    },
	    {
	      "id": 2201,
	      "text": "元陽縣"
	    },
	    {
	      "id": 2202,
	      "text": "紅河縣"
	    },
	    {
	      "id": 2203,
	      "text": "金平苗族瑤族傣族自治縣"
	    },
	    {
	      "id": 2204,
	      "text": "綠春縣"
	    },
	    {
	      "id": 2205,
	      "text": "河口瑤族自治縣"
	    }
	  ],
	  "279": [
	    {
	      "id": 2206,
	      "text": "麒麟區"
	    },
	    {
	      "id": 2207,
	      "text": "馬龍縣"
	    },
	    {
	      "id": 2208,
	      "text": "陸良縣"
	    },
	    {
	      "id": 2209,
	      "text": "師宗縣"
	    },
	    {
	      "id": 2210,
	      "text": "羅平縣"
	    },
	    {
	      "id": 2211,
	      "text": "富源縣"
	    },
	    {
	      "id": 2212,
	      "text": "會澤縣"
	    },
	    {
	      "id": 2213,
	      "text": "沾益縣"
	    },
	    {
	      "id": 2214,
	      "text": "宣威市"
	    }
	  ],
	  "280": [
	    {
	      "id": 2215,
	      "text": "隆陽區"
	    },
	    {
	      "id": 2216,
	      "text": "施甸縣"
	    },
	    {
	      "id": 2217,
	      "text": "騰沖縣"
	    },
	    {
	      "id": 2218,
	      "text": "龍陵縣"
	    },
	    {
	      "id": 2219,
	      "text": "昌寧縣"
	    }
	  ],
	  "281": [
	    {
	      "id": 2220,
	      "text": "文山縣"
	    },
	    {
	      "id": 2221,
	      "text": "硯山縣"
	    },
	    {
	      "id": 2222,
	      "text": "西疇縣"
	    },
	    {
	      "id": 2223,
	      "text": "麻栗坡縣"
	    },
	    {
	      "id": 2224,
	      "text": "馬關縣"
	    },
	    {
	      "id": 2225,
	      "text": "丘北縣"
	    },
	    {
	      "id": 2226,
	      "text": "廣南縣"
	    },
	    {
	      "id": 2227,
	      "text": "富寧縣"
	    }
	  ],
	  "282": [
	    {
	      "id": 2228,
	      "text": "紅塔區"
	    },
	    {
	      "id": 2229,
	      "text": "江川縣"
	    },
	    {
	      "id": 2230,
	      "text": "澄江縣"
	    },
	    {
	      "id": 2231,
	      "text": "通海縣"
	    },
	    {
	      "id": 2232,
	      "text": "華寧縣"
	    },
	    {
	      "id": 2233,
	      "text": "易門縣"
	    },
	    {
	      "id": 2234,
	      "text": "峨山彝族自治縣"
	    },
	    {
	      "id": 2235,
	      "text": "新平彝族傣族自治縣"
	    },
	    {
	      "id": 2236,
	      "text": "元江哈尼族彝族傣族自治縣"
	    }
	  ],
	  "283": [
	    {
	      "id": 2237,
	      "text": "楚雄市"
	    },
	    {
	      "id": 2238,
	      "text": "雙柏縣"
	    },
	    {
	      "id": 2239,
	      "text": "牟定縣"
	    },
	    {
	      "id": 2240,
	      "text": "南華縣"
	    },
	    {
	      "id": 2241,
	      "text": "姚安縣"
	    },
	    {
	      "id": 2242,
	      "text": "大姚縣"
	    },
	    {
	      "id": 2243,
	      "text": "永仁縣"
	    },
	    {
	      "id": 2244,
	      "text": "元謀縣"
	    },
	    {
	      "id": 2245,
	      "text": "武定縣"
	    },
	    {
	      "id": 2246,
	      "text": "祿豐縣"
	    }
	  ],
	  "284": [
	    {
	      "id": 2247,
	      "text": "思茅區"
	    },
	    {
	      "id": 2248,
	      "text": "寧洱哈尼族彝族自治縣"
	    },
	    {
	      "id": 2249,
	      "text": "墨江哈尼族自治縣"
	    },
	    {
	      "id": 2250,
	      "text": "景東彝族自治縣"
	    },
	    {
	      "id": 2251,
	      "text": "景谷傣族彝族自治縣"
	    },
	    {
	      "id": 2252,
	      "text": "鎮沅彝族哈尼族拉祜族自治縣"
	    },
	    {
	      "id": 2253,
	      "text": "江城哈尼族彝族自治縣"
	    },
	    {
	      "id": 2254,
	      "text": "孟連傣族拉祜族佤族自治縣"
	    },
	    {
	      "id": 2255,
	      "text": "瀾滄拉祜族自治縣"
	    },
	    {
	      "id": 2256,
	      "text": "西盟佤族自治縣"
	    }
	  ],
	  "285": [
	    {
	      "id": 2257,
	      "text": "臨翔區"
	    },
	    {
	      "id": 2258,
	      "text": "鳳慶縣"
	    },
	    {
	      "id": 2259,
	      "text": "雲縣"
	    },
	    {
	      "id": 2260,
	      "text": "永德縣"
	    },
	    {
	      "id": 2261,
	      "text": "鎮康縣"
	    },
	    {
	      "id": 2262,
	      "text": "雙江拉祜族佤族布朗族傣族自治縣"
	    },
	    {
	      "id": 2263,
	      "text": "耿馬傣族佤族自治縣"
	    },
	    {
	      "id": 2264,
	      "text": "滄源佤族自治縣"
	    }
	  ],
	  "286": [
	    {
	      "id": 2265,
	      "text": "瀘水縣"
	    },
	    {
	      "id": 2266,
	      "text": "福貢縣"
	    },
	    {
	      "id": 2267,
	      "text": "貢山獨龍族怒族自治縣"
	    },
	    {
	      "id": 2268,
	      "text": "蘭坪白族普米族自治縣"
	    }
	  ],
	  "287": [
	    {
	      "id": 2269,
	      "text": "香格裡拉縣"
	    },
	    {
	      "id": 2270,
	      "text": "德欽縣"
	    },
	    {
	      "id": 2271,
	      "text": "維西僳僳族自治縣"
	    }
	  ],
	  "288": [
	    {
	      "id": 2272,
	      "text": "古城區"
	    },
	    {
	      "id": 2273,
	      "text": "玉龍納西族自治縣"
	    },
	    {
	      "id": 2274,
	      "text": "永勝縣"
	    },
	    {
	      "id": 2275,
	      "text": "華坪縣"
	    },
	    {
	      "id": 2276,
	      "text": "寧蒗彝族自治縣"
	    }
	  ],
	  "321": [
	    {
	      "id": 2536,
	      "text": "城關區"
	    },
	    {
	      "id": 2537,
	      "text": "林周縣"
	    },
	    {
	      "id": 2538,
	      "text": "當雄縣"
	    },
	    {
	      "id": 2539,
	      "text": "尼木縣"
	    },
	    {
	      "id": 2540,
	      "text": "曲水縣"
	    },
	    {
	      "id": 2541,
	      "text": "堆龍德慶縣"
	    },
	    {
	      "id": 2542,
	      "text": "達孜縣"
	    },
	    {
	      "id": 2543,
	      "text": "墨竹工卡縣"
	    }
	  ],
	  "322": [
	    {
	      "id": 2544,
	      "text": "日喀則市"
	    },
	    {
	      "id": 2545,
	      "text": "南木林縣"
	    },
	    {
	      "id": 2546,
	      "text": "江孜縣"
	    },
	    {
	      "id": 2547,
	      "text": "定日縣"
	    },
	    {
	      "id": 2548,
	      "text": "薩迦縣"
	    },
	    {
	      "id": 2549,
	      "text": "拉孜縣"
	    },
	    {
	      "id": 2550,
	      "text": "昂仁縣"
	    },
	    {
	      "id": 2551,
	      "text": "謝通門縣"
	    },
	    {
	      "id": 2552,
	      "text": "白朗縣"
	    },
	    {
	      "id": 2553,
	      "text": "仁布縣"
	    },
	    {
	      "id": 2554,
	      "text": "康馬縣"
	    },
	    {
	      "id": 2555,
	      "text": "定結縣"
	    },
	    {
	      "id": 2556,
	      "text": "仲巴縣"
	    },
	    {
	      "id": 2557,
	      "text": "亞東縣"
	    },
	    {
	      "id": 2558,
	      "text": "吉隆縣"
	    },
	    {
	      "id": 2559,
	      "text": "聶拉木縣"
	    },
	    {
	      "id": 2560,
	      "text": "薩嘎縣"
	    },
	    {
	      "id": 2561,
	      "text": "崗巴縣"
	    }
	  ],
	  "323": [
	    {
	      "id": 2562,
	      "text": "乃東縣"
	    },
	    {
	      "id": 2563,
	      "text": "扎囊縣"
	    },
	    {
	      "id": 2564,
	      "text": "貢嘎縣"
	    },
	    {
	      "id": 2565,
	      "text": "桑日縣"
	    },
	    {
	      "id": 2566,
	      "text": "瓊結縣"
	    },
	    {
	      "id": 2567,
	      "text": "曲松縣"
	    },
	    {
	      "id": 2568,
	      "text": "措美縣"
	    },
	    {
	      "id": 2569,
	      "text": "洛扎縣"
	    },
	    {
	      "id": 2570,
	      "text": "加查縣"
	    },
	    {
	      "id": 2571,
	      "text": "隆子縣"
	    },
	    {
	      "id": 2572,
	      "text": "錯那縣"
	    },
	    {
	      "id": 2573,
	      "text": "浪卡子縣"
	    }
	  ],
	  "324": [
	    {
	      "id": 2574,
	      "text": "林芝縣"
	    },
	    {
	      "id": 2575,
	      "text": "工布江達縣"
	    },
	    {
	      "id": 2576,
	      "text": "米林縣"
	    },
	    {
	      "id": 2577,
	      "text": "墨脫縣"
	    },
	    {
	      "id": 2578,
	      "text": "波密縣"
	    },
	    {
	      "id": 2579,
	      "text": "察隅縣"
	    },
	    {
	      "id": 2580,
	      "text": "朗縣"
	    }
	  ],
	  "325": [
	    {
	      "id": 2581,
	      "text": "昌都縣"
	    },
	    {
	      "id": 2582,
	      "text": "江達縣"
	    },
	    {
	      "id": 2583,
	      "text": "貢覺縣"
	    },
	    {
	      "id": 2584,
	      "text": "類別烏齊縣"
	    },
	    {
	      "id": 2585,
	      "text": "丁青縣"
	    },
	    {
	      "id": 2586,
	      "text": "察雅縣"
	    },
	    {
	      "id": 2587,
	      "text": "八宿縣"
	    },
	    {
	      "id": 2588,
	      "text": "左貢縣"
	    },
	    {
	      "id": 2589,
	      "text": "芒康縣"
	    },
	    {
	      "id": 2590,
	      "text": "洛隆縣"
	    },
	    {
	      "id": 2591,
	      "text": "邊壩縣"
	    }
	  ],
	  "326": [
	    {
	      "id": 2592,
	      "text": "那曲縣"
	    },
	    {
	      "id": 2593,
	      "text": "嘉黎縣"
	    },
	    {
	      "id": 2594,
	      "text": "例如縣"
	    },
	    {
	      "id": 2595,
	      "text": "聶榮縣"
	    },
	    {
	      "id": 2596,
	      "text": "安多縣"
	    },
	    {
	      "id": 2597,
	      "text": "申扎縣"
	    },
	    {
	      "id": 2598,
	      "text": "索縣"
	    },
	    {
	      "id": 2599,
	      "text": "班戈縣"
	    },
	    {
	      "id": 2600,
	      "text": "巴青縣"
	    },
	    {
	      "id": 2601,
	      "text": "尼瑪縣"
	    }
	  ],
	  "327": [
	    {
	      "id": 2602,
	      "text": "普蘭縣"
	    },
	    {
	      "id": 2603,
	      "text": "札達縣"
	    },
	    {
	      "id": 2604,
	      "text": "噶爾縣"
	    },
	    {
	      "id": 2605,
	      "text": "日土縣"
	    },
	    {
	      "id": 2606,
	      "text": "革吉縣"
	    },
	    {
	      "id": 2607,
	      "text": "改則縣"
	    },
	    {
	      "id": 2608,
	      "text": "措勤縣"
	    }
	  ],
	  "363": [],
	  "364": [],
	  "365": [],
	  "366": [],
	  "367": [],
	  "368": [],
	  "369": [],
	  "370": [],
	  "371": []
	}

})
