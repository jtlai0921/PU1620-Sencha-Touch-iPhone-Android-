Ext.define('Ext.tux.dataview.Area', {
	extend : 'Ext.dataview.NestedList',
	xtype : 'arealist',

	config : {
		backText: '傳回',
		title:"請選取地區",
		toolbar:{
			items:[
				{
					text:"取消",
					align: 'right'
				}
			]
		},
		
		store:{
			type: 'tree',
			fields:["text"],
			sorters:"text",
			root:{text:"地區",
				children: [
				  {
				    "text": "北京市",
				    "children": [
				      {
				        "text": "北京市",
				        "children": [
				          {
				            "text": "東城區",
				            "leaf": true
				          },
				          {
				            "text": "西城區",
				            "leaf": true
				          },
				          {
				            "text": "崇文區",
				            "leaf": true
				          },
				          {
				            "text": "宣武區",
				            "leaf": true
				          },
				          {
				            "text": "朝陽區",
				            "leaf": true
				          },
				          {
				            "text": "豐台區",
				            "leaf": true
				          },
				          {
				            "text": "石景山區",
				            "leaf": true
				          },
				          {
				            "text": "海澱區",
				            "leaf": true
				          },
				          {
				            "text": "門頭溝區",
				            "leaf": true
				          },
				          {
				            "text": "房山區",
				            "leaf": true
				          },
				          {
				            "text": "通州區",
				            "leaf": true
				          },
				          {
				            "text": "順義區",
				            "leaf": true
				          },
				          {
				            "text": "昌平區",
				            "leaf": true
				          },
				          {
				            "text": "大興區",
				            "leaf": true
				          },
				          {
				            "text": "懷柔區",
				            "leaf": true
				          },
				          {
				            "text": "平谷區",
				            "leaf": true
				          },
				          {
				            "text": "密雲縣",
				            "leaf": true
				          },
				          {
				            "text": "延慶縣",
				            "leaf": true
				          }
				        ]
				      }
				    ]
				  },
				  {
				    "text": "天津市",
				    "children": [
				      {
				        "text": "天津市",
				        "children": [
				          {
				            "text": "和平區",
				            "leaf": true
				          },
				          {
				            "text": "河東區",
				            "leaf": true
				          },
				          {
				            "text": "河西區",
				            "leaf": true
				          },
				          {
				            "text": "南開區",
				            "leaf": true
				          },
				          {
				            "text": "河北區",
				            "leaf": true
				          },
				          {
				            "text": "紅橋區",
				            "leaf": true
				          },
				          {
				            "text": "塘沽區",
				            "leaf": true
				          },
				          {
				            "text": "漢沽區",
				            "leaf": true
				          },
				          {
				            "text": "大港區",
				            "leaf": true
				          },
				          {
				            "text": "東麗區",
				            "leaf": true
				          },
				          {
				            "text": "西青區",
				            "leaf": true
				          },
				          {
				            "text": "津南區",
				            "leaf": true
				          },
				          {
				            "text": "北辰區",
				            "leaf": true
				          },
				          {
				            "text": "武清區",
				            "leaf": true
				          },
				          {
				            "text": "寶坻區",
				            "leaf": true
				          },
				          {
				            "text": "寧河縣",
				            "leaf": true
				          },
				          {
				            "text": "靜海縣",
				            "leaf": true
				          },
				          {
				            "text": "薊縣",
				            "leaf": true
				          }
				        ]
				      }
				    ]
				  },
				  {
				    "text": "河北省",
				    "children": [
				      {
				        "text": "邯鄲市",
				        "children": [
				          {
				            "text": "邯山區",
				            "leaf": true
				          },
				          {
				            "text": "叢台區",
				            "leaf": true
				          },
				          {
				            "text": "復興區",
				            "leaf": true
				          },
				          {
				            "text": "峰峰礦區",
				            "leaf": true
				          },
				          {
				            "text": "邯鄲縣",
				            "leaf": true
				          },
				          {
				            "text": "臨漳縣",
				            "leaf": true
				          },
				          {
				            "text": "成安縣",
				            "leaf": true
				          },
				          {
				            "text": "大名縣",
				            "leaf": true
				          },
				          {
				            "text": "涉縣",
				            "leaf": true
				          },
				          {
				            "text": "磁縣",
				            "leaf": true
				          },
				          {
				            "text": "肥鄉縣",
				            "leaf": true
				          },
				          {
				            "text": "永年縣",
				            "leaf": true
				          },
				          {
				            "text": "邱縣",
				            "leaf": true
				          },
				          {
				            "text": "雞澤縣",
				            "leaf": true
				          },
				          {
				            "text": "廣平縣",
				            "leaf": true
				          },
				          {
				            "text": "館陶縣",
				            "leaf": true
				          },
				          {
				            "text": "魏縣",
				            "leaf": true
				          },
				          {
				            "text": "曲周縣",
				            "leaf": true
				          },
				          {
				            "text": "武安市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "石家莊市",
				        "children": [
				          {
				            "text": "長安區",
				            "leaf": true
				          },
				          {
				            "text": "橋東區",
				            "leaf": true
				          },
				          {
				            "text": "橋西區",
				            "leaf": true
				          },
				          {
				            "text": "新華區",
				            "leaf": true
				          },
				          {
				            "text": "井陘礦區",
				            "leaf": true
				          },
				          {
				            "text": "裕華區",
				            "leaf": true
				          },
				          {
				            "text": "井陘縣",
				            "leaf": true
				          },
				          {
				            "text": "正定縣",
				            "leaf": true
				          },
				          {
				            "text": "欒城縣",
				            "leaf": true
				          },
				          {
				            "text": "行唐縣",
				            "leaf": true
				          },
				          {
				            "text": "靈壽縣",
				            "leaf": true
				          },
				          {
				            "text": "高邑縣",
				            "leaf": true
				          },
				          {
				            "text": "深澤縣",
				            "leaf": true
				          },
				          {
				            "text": "贊皇縣",
				            "leaf": true
				          },
				          {
				            "text": "無極縣",
				            "leaf": true
				          },
				          {
				            "text": "平山縣",
				            "leaf": true
				          },
				          {
				            "text": "元氏縣",
				            "leaf": true
				          },
				          {
				            "text": "趙縣",
				            "leaf": true
				          },
				          {
				            "text": "辛集市",
				            "leaf": true
				          },
				          {
				            "text": "稿城市",
				            "leaf": true
				          },
				          {
				            "text": "晉州市",
				            "leaf": true
				          },
				          {
				            "text": "新樂市",
				            "leaf": true
				          },
				          {
				            "text": "鹿泉市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "保定市",
				        "children": [
				          {
				            "text": "新市區",
				            "leaf": true
				          },
				          {
				            "text": "北市區",
				            "leaf": true
				          },
				          {
				            "text": "南市區",
				            "leaf": true
				          },
				          {
				            "text": "滿城縣",
				            "leaf": true
				          },
				          {
				            "text": "清苑縣",
				            "leaf": true
				          },
				          {
				            "text": "淶水縣",
				            "leaf": true
				          },
				          {
				            "text": "阜平縣",
				            "leaf": true
				          },
				          {
				            "text": "徐水縣",
				            "leaf": true
				          },
				          {
				            "text": "定興縣",
				            "leaf": true
				          },
				          {
				            "text": "唐縣",
				            "leaf": true
				          },
				          {
				            "text": "高陽縣",
				            "leaf": true
				          },
				          {
				            "text": "容城縣",
				            "leaf": true
				          },
				          {
				            "text": "淶源縣",
				            "leaf": true
				          },
				          {
				            "text": "望都縣",
				            "leaf": true
				          },
				          {
				            "text": "安新縣",
				            "leaf": true
				          },
				          {
				            "text": "易縣",
				            "leaf": true
				          },
				          {
				            "text": "曲陽縣",
				            "leaf": true
				          },
				          {
				            "text": "蠡縣",
				            "leaf": true
				          },
				          {
				            "text": "順平縣",
				            "leaf": true
				          },
				          {
				            "text": "博野縣",
				            "leaf": true
				          },
				          {
				            "text": "雄縣",
				            "leaf": true
				          },
				          {
				            "text": "涿州市",
				            "leaf": true
				          },
				          {
				            "text": "定州市",
				            "leaf": true
				          },
				          {
				            "text": "安國市",
				            "leaf": true
				          },
				          {
				            "text": "高碑店市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "張家口市",
				        "children": [
				          {
				            "text": "橋東區",
				            "leaf": true
				          },
				          {
				            "text": "橋西區",
				            "leaf": true
				          },
				          {
				            "text": "宣化區",
				            "leaf": true
				          },
				          {
				            "text": "下花園區",
				            "leaf": true
				          },
				          {
				            "text": "宣化縣",
				            "leaf": true
				          },
				          {
				            "text": "張北縣",
				            "leaf": true
				          },
				          {
				            "text": "康保縣",
				            "leaf": true
				          },
				          {
				            "text": "沽源縣",
				            "leaf": true
				          },
				          {
				            "text": "尚義縣",
				            "leaf": true
				          },
				          {
				            "text": "蔚縣",
				            "leaf": true
				          },
				          {
				            "text": "陽原縣",
				            "leaf": true
				          },
				          {
				            "text": "懷安縣",
				            "leaf": true
				          },
				          {
				            "text": "萬全縣",
				            "leaf": true
				          },
				          {
				            "text": "懷來縣",
				            "leaf": true
				          },
				          {
				            "text": "涿鹿縣",
				            "leaf": true
				          },
				          {
				            "text": "赤城縣",
				            "leaf": true
				          },
				          {
				            "text": "崇禮縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "承德市",
				        "children": [
				          {
				            "text": "雙橋區",
				            "leaf": true
				          },
				          {
				            "text": "雙灤區",
				            "leaf": true
				          },
				          {
				            "text": "鷹手營子礦區",
				            "leaf": true
				          },
				          {
				            "text": "承德縣",
				            "leaf": true
				          },
				          {
				            "text": "興隆縣",
				            "leaf": true
				          },
				          {
				            "text": "平泉縣",
				            "leaf": true
				          },
				          {
				            "text": "灤平縣",
				            "leaf": true
				          },
				          {
				            "text": "隆化縣",
				            "leaf": true
				          },
				          {
				            "text": "豐寧滿族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "寬城滿族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "圍場滿族蒙古族自治縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "唐山市",
				        "children": [
				          {
				            "text": "路南區",
				            "leaf": true
				          },
				          {
				            "text": "路北區",
				            "leaf": true
				          },
				          {
				            "text": "古冶區",
				            "leaf": true
				          },
				          {
				            "text": "開平區",
				            "leaf": true
				          },
				          {
				            "text": "豐南區",
				            "leaf": true
				          },
				          {
				            "text": "豐潤區",
				            "leaf": true
				          },
				          {
				            "text": "灤縣",
				            "leaf": true
				          },
				          {
				            "text": "灤南縣",
				            "leaf": true
				          },
				          {
				            "text": "樂亭縣",
				            "leaf": true
				          },
				          {
				            "text": "遷西縣",
				            "leaf": true
				          },
				          {
				            "text": "玉田縣",
				            "leaf": true
				          },
				          {
				            "text": "唐海縣",
				            "leaf": true
				          },
				          {
				            "text": "遵化市",
				            "leaf": true
				          },
				          {
				            "text": "遷安市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "廊坊市",
				        "children": [
				          {
				            "text": "安次區",
				            "leaf": true
				          },
				          {
				            "text": "廣陽區",
				            "leaf": true
				          },
				          {
				            "text": "固安縣",
				            "leaf": true
				          },
				          {
				            "text": "永清縣",
				            "leaf": true
				          },
				          {
				            "text": "香河縣",
				            "leaf": true
				          },
				          {
				            "text": "大城縣",
				            "leaf": true
				          },
				          {
				            "text": "文安縣",
				            "leaf": true
				          },
				          {
				            "text": "大廠回族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "霸州市",
				            "leaf": true
				          },
				          {
				            "text": "三河市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "滄州市",
				        "children": [
				          {
				            "text": "新華區",
				            "leaf": true
				          },
				          {
				            "text": "運河區",
				            "leaf": true
				          },
				          {
				            "text": "滄縣",
				            "leaf": true
				          },
				          {
				            "text": "青縣",
				            "leaf": true
				          },
				          {
				            "text": "東光縣",
				            "leaf": true
				          },
				          {
				            "text": "海興縣",
				            "leaf": true
				          },
				          {
				            "text": "鹽山縣",
				            "leaf": true
				          },
				          {
				            "text": "肅寧縣",
				            "leaf": true
				          },
				          {
				            "text": "南皮縣",
				            "leaf": true
				          },
				          {
				            "text": "吳橋縣",
				            "leaf": true
				          },
				          {
				            "text": "獻縣",
				            "leaf": true
				          },
				          {
				            "text": "孟村回族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "泊頭市",
				            "leaf": true
				          },
				          {
				            "text": "任丘市",
				            "leaf": true
				          },
				          {
				            "text": "黃驊市",
				            "leaf": true
				          },
				          {
				            "text": "河間市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "衡水市",
				        "children": [
				          {
				            "text": "桃城區",
				            "leaf": true
				          },
				          {
				            "text": "棗強縣",
				            "leaf": true
				          },
				          {
				            "text": "武邑縣",
				            "leaf": true
				          },
				          {
				            "text": "武強縣",
				            "leaf": true
				          },
				          {
				            "text": "饒陽縣",
				            "leaf": true
				          },
				          {
				            "text": "安平縣",
				            "leaf": true
				          },
				          {
				            "text": "故城縣",
				            "leaf": true
				          },
				          {
				            "text": "景縣",
				            "leaf": true
				          },
				          {
				            "text": "阜城縣",
				            "leaf": true
				          },
				          {
				            "text": "冀州市",
				            "leaf": true
				          },
				          {
				            "text": "深州市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "邢台市",
				        "children": [
				          {
				            "text": "橋東區",
				            "leaf": true
				          },
				          {
				            "text": "橋西區",
				            "leaf": true
				          },
				          {
				            "text": "邢台縣",
				            "leaf": true
				          },
				          {
				            "text": "臨城縣",
				            "leaf": true
				          },
				          {
				            "text": "內丘縣",
				            "leaf": true
				          },
				          {
				            "text": "柏鄉縣",
				            "leaf": true
				          },
				          {
				            "text": "隆堯縣",
				            "leaf": true
				          },
				          {
				            "text": "任縣",
				            "leaf": true
				          },
				          {
				            "text": "南和縣",
				            "leaf": true
				          },
				          {
				            "text": "寧晉縣",
				            "leaf": true
				          },
				          {
				            "text": "巨鹿縣",
				            "leaf": true
				          },
				          {
				            "text": "新河縣",
				            "leaf": true
				          },
				          {
				            "text": "廣宗縣",
				            "leaf": true
				          },
				          {
				            "text": "平鄉縣",
				            "leaf": true
				          },
				          {
				            "text": "威縣",
				            "leaf": true
				          },
				          {
				            "text": "清河縣",
				            "leaf": true
				          },
				          {
				            "text": "臨西縣",
				            "leaf": true
				          },
				          {
				            "text": "南宮市",
				            "leaf": true
				          },
				          {
				            "text": "沙河市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "秦皇島市",
				        "children": [
				          {
				            "text": "海港區",
				            "leaf": true
				          },
				          {
				            "text": "山海關區",
				            "leaf": true
				          },
				          {
				            "text": "北戴河區",
				            "leaf": true
				          },
				          {
				            "text": "青龍滿族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "昌黎縣",
				            "leaf": true
				          },
				          {
				            "text": "撫寧縣",
				            "leaf": true
				          },
				          {
				            "text": "盧龍縣",
				            "leaf": true
				          }
				        ]
				      }
				    ]
				  },
				  {
				    "text": "山西省",
				    "children": [
				      {
				        "text": "朔州市",
				        "children": [
				          {
				            "text": "朔城區",
				            "leaf": true
				          },
				          {
				            "text": "平魯區",
				            "leaf": true
				          },
				          {
				            "text": "山陰縣",
				            "leaf": true
				          },
				          {
				            "text": "應縣",
				            "leaf": true
				          },
				          {
				            "text": "右玉縣",
				            "leaf": true
				          },
				          {
				            "text": "懷仁縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "忻州市",
				        "children": [
				          {
				            "text": "忻府區",
				            "leaf": true
				          },
				          {
				            "text": "定襄縣",
				            "leaf": true
				          },
				          {
				            "text": "五台縣",
				            "leaf": true
				          },
				          {
				            "text": "代縣",
				            "leaf": true
				          },
				          {
				            "text": "繁峙縣",
				            "leaf": true
				          },
				          {
				            "text": "寧武縣",
				            "leaf": true
				          },
				          {
				            "text": "靜樂縣",
				            "leaf": true
				          },
				          {
				            "text": "神池縣",
				            "leaf": true
				          },
				          {
				            "text": "五寨縣",
				            "leaf": true
				          },
				          {
				            "text": "岢嵐縣",
				            "leaf": true
				          },
				          {
				            "text": "河曲縣",
				            "leaf": true
				          },
				          {
				            "text": "保德縣",
				            "leaf": true
				          },
				          {
				            "text": "偏關縣",
				            "leaf": true
				          },
				          {
				            "text": "原平市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "太原市",
				        "children": [
				          {
				            "text": "小店區",
				            "leaf": true
				          },
				          {
				            "text": "迎澤區",
				            "leaf": true
				          },
				          {
				            "text": "杏花嶺區",
				            "leaf": true
				          },
				          {
				            "text": "尖草坪區",
				            "leaf": true
				          },
				          {
				            "text": "萬柏林區",
				            "leaf": true
				          },
				          {
				            "text": "晉源區",
				            "leaf": true
				          },
				          {
				            "text": "清徐縣",
				            "leaf": true
				          },
				          {
				            "text": "陽曲縣",
				            "leaf": true
				          },
				          {
				            "text": "婁煩縣",
				            "leaf": true
				          },
				          {
				            "text": "古交市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "大同市",
				        "children": [
				          {
				            "text": "礦區",
				            "leaf": true
				          },
				          {
				            "text": "南郊區",
				            "leaf": true
				          },
				          {
				            "text": "新榮區",
				            "leaf": true
				          },
				          {
				            "text": "陽高縣",
				            "leaf": true
				          },
				          {
				            "text": "天鎮縣",
				            "leaf": true
				          },
				          {
				            "text": "廣靈縣",
				            "leaf": true
				          },
				          {
				            "text": "靈丘縣",
				            "leaf": true
				          },
				          {
				            "text": "渾源縣",
				            "leaf": true
				          },
				          {
				            "text": "左雲縣",
				            "leaf": true
				          },
				          {
				            "text": "大同縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "陽泉市",
				        "children": [
				          {
				            "text": "礦區",
				            "leaf": true
				          },
				          {
				            "text": "平定縣",
				            "leaf": true
				          },
				          {
				            "text": "盂縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "晉中市",
				        "children": [
				          {
				            "text": "榆次區",
				            "leaf": true
				          },
				          {
				            "text": "榆社縣",
				            "leaf": true
				          },
				          {
				            "text": "左權縣",
				            "leaf": true
				          },
				          {
				            "text": "和順縣",
				            "leaf": true
				          },
				          {
				            "text": "昔陽縣",
				            "leaf": true
				          },
				          {
				            "text": "壽陽縣",
				            "leaf": true
				          },
				          {
				            "text": "太谷縣",
				            "leaf": true
				          },
				          {
				            "text": "祁縣",
				            "leaf": true
				          },
				          {
				            "text": "平遙縣",
				            "leaf": true
				          },
				          {
				            "text": "靈石縣",
				            "leaf": true
				          },
				          {
				            "text": "介休市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "長治市",
				        "children": [
				          {
				            "text": "長治縣",
				            "leaf": true
				          },
				          {
				            "text": "襄垣縣",
				            "leaf": true
				          },
				          {
				            "text": "屯留縣",
				            "leaf": true
				          },
				          {
				            "text": "平順縣",
				            "leaf": true
				          },
				          {
				            "text": "黎城縣",
				            "leaf": true
				          },
				          {
				            "text": "壺關縣",
				            "leaf": true
				          },
				          {
				            "text": "長子縣",
				            "leaf": true
				          },
				          {
				            "text": "武鄉縣",
				            "leaf": true
				          },
				          {
				            "text": "沁縣",
				            "leaf": true
				          },
				          {
				            "text": "沁源縣",
				            "leaf": true
				          },
				          {
				            "text": "潞城市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "晉城市",
				        "children": [
				          {
				            "text": "沁水縣",
				            "leaf": true
				          },
				          {
				            "text": "陽城縣",
				            "leaf": true
				          },
				          {
				            "text": "陵川縣",
				            "leaf": true
				          },
				          {
				            "text": "澤州縣",
				            "leaf": true
				          },
				          {
				            "text": "高平市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "臨汾市",
				        "children": [
				          {
				            "text": "堯都區",
				            "leaf": true
				          },
				          {
				            "text": "曲沃縣",
				            "leaf": true
				          },
				          {
				            "text": "翼城縣",
				            "leaf": true
				          },
				          {
				            "text": "襄汾縣",
				            "leaf": true
				          },
				          {
				            "text": "洪洞縣",
				            "leaf": true
				          },
				          {
				            "text": "古縣",
				            "leaf": true
				          },
				          {
				            "text": "安澤縣",
				            "leaf": true
				          },
				          {
				            "text": "浮山縣",
				            "leaf": true
				          },
				          {
				            "text": "吉縣",
				            "leaf": true
				          },
				          {
				            "text": "鄉寧縣",
				            "leaf": true
				          },
				          {
				            "text": "大寧縣",
				            "leaf": true
				          },
				          {
				            "text": "隰縣",
				            "leaf": true
				          },
				          {
				            "text": "永和縣",
				            "leaf": true
				          },
				          {
				            "text": "蒲縣",
				            "leaf": true
				          },
				          {
				            "text": "汾西縣",
				            "leaf": true
				          },
				          {
				            "text": "侯馬市",
				            "leaf": true
				          },
				          {
				            "text": "霍州市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "呂梁市",
				        "children": [
				          {
				            "text": "離石區",
				            "leaf": true
				          },
				          {
				            "text": "文水縣",
				            "leaf": true
				          },
				          {
				            "text": "交城縣",
				            "leaf": true
				          },
				          {
				            "text": "興縣",
				            "leaf": true
				          },
				          {
				            "text": "臨縣",
				            "leaf": true
				          },
				          {
				            "text": "柳林縣",
				            "leaf": true
				          },
				          {
				            "text": "石樓縣",
				            "leaf": true
				          },
				          {
				            "text": "嵐縣",
				            "leaf": true
				          },
				          {
				            "text": "方山縣",
				            "leaf": true
				          },
				          {
				            "text": "中陽縣",
				            "leaf": true
				          },
				          {
				            "text": "交口縣",
				            "leaf": true
				          },
				          {
				            "text": "孝義市",
				            "leaf": true
				          },
				          {
				            "text": "汾陽市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "運城市",
				        "children": [
				          {
				            "text": "鹽湖區",
				            "leaf": true
				          },
				          {
				            "text": "臨猗縣",
				            "leaf": true
				          },
				          {
				            "text": "萬榮縣",
				            "leaf": true
				          },
				          {
				            "text": "聞喜縣",
				            "leaf": true
				          },
				          {
				            "text": "稷山縣",
				            "leaf": true
				          },
				          {
				            "text": "新絳縣",
				            "leaf": true
				          },
				          {
				            "text": "絳縣",
				            "leaf": true
				          },
				          {
				            "text": "垣曲縣",
				            "leaf": true
				          },
				          {
				            "text": "夏縣",
				            "leaf": true
				          },
				          {
				            "text": "平陸縣",
				            "leaf": true
				          },
				          {
				            "text": "芮城縣",
				            "leaf": true
				          },
				          {
				            "text": "永濟市",
				            "leaf": true
				          },
				          {
				            "text": "河津市",
				            "leaf": true
				          }
				        ]
				      }
				    ]
				  },
				  {
				    "text": "內蒙古自治區",
				    "children": [
				      {
				        "text": "呼倫貝爾市",
				        "children": [
				          {
				            "text": "海拉爾區",
				            "leaf": true
				          },
				          {
				            "text": "阿榮旗",
				            "leaf": true
				          },
				          {
				            "text": "莫力達瓦達斡爾族自治旗",
				            "leaf": true
				          },
				          {
				            "text": "鄂倫春自治旗",
				            "leaf": true
				          },
				          {
				            "text": "鄂溫克族自治旗",
				            "leaf": true
				          },
				          {
				            "text": "陳巴爾虎旗",
				            "leaf": true
				          },
				          {
				            "text": "新巴爾虎左旗",
				            "leaf": true
				          },
				          {
				            "text": "新巴爾虎右旗",
				            "leaf": true
				          },
				          {
				            "text": "滿洲裡市",
				            "leaf": true
				          },
				          {
				            "text": "牙克石市",
				            "leaf": true
				          },
				          {
				            "text": "扎蘭屯市",
				            "leaf": true
				          },
				          {
				            "text": "額爾古納市",
				            "leaf": true
				          },
				          {
				            "text": "根河市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "呼和浩特市",
				        "children": [
				          {
				            "text": "新城區",
				            "leaf": true
				          },
				          {
				            "text": "回民區",
				            "leaf": true
				          },
				          {
				            "text": "玉泉區",
				            "leaf": true
				          },
				          {
				            "text": "賽罕區",
				            "leaf": true
				          },
				          {
				            "text": "土默特左旗",
				            "leaf": true
				          },
				          {
				            "text": "托克托縣",
				            "leaf": true
				          },
				          {
				            "text": "和林格爾縣",
				            "leaf": true
				          },
				          {
				            "text": "清水河縣",
				            "leaf": true
				          },
				          {
				            "text": "武川縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "包頭市",
				        "children": [
				          {
				            "text": "東河區",
				            "leaf": true
				          },
				          {
				            "text": "昆都侖區",
				            "leaf": true
				          },
				          {
				            "text": "青山區",
				            "leaf": true
				          },
				          {
				            "text": "石拐區",
				            "leaf": true
				          },
				          {
				            "text": "白雲鄂博礦區",
				            "leaf": true
				          },
				          {
				            "text": "九原區",
				            "leaf": true
				          },
				          {
				            "text": "土默特右旗",
				            "leaf": true
				          },
				          {
				            "text": "固陽縣",
				            "leaf": true
				          },
				          {
				            "text": "達爾罕茂明安聯合旗",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "烏海市",
				        "children": [
				          {
				            "text": "海勃灣區",
				            "leaf": true
				          },
				          {
				            "text": "海南區",
				            "leaf": true
				          },
				          {
				            "text": "烏達區",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "烏蘭察布市",
				        "children": [
				          {
				            "text": "集寧區",
				            "leaf": true
				          },
				          {
				            "text": "卓資縣",
				            "leaf": true
				          },
				          {
				            "text": "化德縣",
				            "leaf": true
				          },
				          {
				            "text": "商都縣",
				            "leaf": true
				          },
				          {
				            "text": "興和縣",
				            "leaf": true
				          },
				          {
				            "text": "涼城縣",
				            "leaf": true
				          },
				          {
				            "text": "察哈爾右翼前旗",
				            "leaf": true
				          },
				          {
				            "text": "察哈爾右翼中旗",
				            "leaf": true
				          },
				          {
				            "text": "察哈爾右翼後旗",
				            "leaf": true
				          },
				          {
				            "text": "四子王旗",
				            "leaf": true
				          },
				          {
				            "text": "豐鎮市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "通遼市",
				        "children": [
				          {
				            "text": "科爾沁區",
				            "leaf": true
				          },
				          {
				            "text": "科爾沁左翼中旗",
				            "leaf": true
				          },
				          {
				            "text": "科爾沁左翼後旗",
				            "leaf": true
				          },
				          {
				            "text": "開魯縣",
				            "leaf": true
				          },
				          {
				            "text": "庫倫旗",
				            "leaf": true
				          },
				          {
				            "text": "奈曼旗",
				            "leaf": true
				          },
				          {
				            "text": "扎魯特旗",
				            "leaf": true
				          },
				          {
				            "text": "霍林郭勒市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "赤峰市",
				        "children": [
				          {
				            "text": "紅山區",
				            "leaf": true
				          },
				          {
				            "text": "元寶山區",
				            "leaf": true
				          },
				          {
				            "text": "松山區",
				            "leaf": true
				          },
				          {
				            "text": "阿魯科爾沁旗",
				            "leaf": true
				          },
				          {
				            "text": "巴林左旗",
				            "leaf": true
				          },
				          {
				            "text": "巴林右旗",
				            "leaf": true
				          },
				          {
				            "text": "林西縣",
				            "leaf": true
				          },
				          {
				            "text": "克什克騰旗",
				            "leaf": true
				          },
				          {
				            "text": "翁牛特旗",
				            "leaf": true
				          },
				          {
				            "text": "喀喇沁旗",
				            "leaf": true
				          },
				          {
				            "text": "寧城縣",
				            "leaf": true
				          },
				          {
				            "text": "敖漢旗",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "鄂爾多斯市",
				        "children": [
				          {
				            "text": "東勝區",
				            "leaf": true
				          },
				          {
				            "text": "達拉特旗",
				            "leaf": true
				          },
				          {
				            "text": "准格爾旗",
				            "leaf": true
				          },
				          {
				            "text": "鄂托克前旗",
				            "leaf": true
				          },
				          {
				            "text": "鄂托克旗",
				            "leaf": true
				          },
				          {
				            "text": "杭錦旗",
				            "leaf": true
				          },
				          {
				            "text": "烏審旗",
				            "leaf": true
				          },
				          {
				            "text": "伊金霍洛旗",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "巴彥淖爾市",
				        "children": [
				          {
				            "text": "臨河區",
				            "leaf": true
				          },
				          {
				            "text": "五原縣",
				            "leaf": true
				          },
				          {
				            "text": "磴口縣",
				            "leaf": true
				          },
				          {
				            "text": "烏拉特前旗",
				            "leaf": true
				          },
				          {
				            "text": "烏拉特中旗",
				            "leaf": true
				          },
				          {
				            "text": "烏拉特後旗",
				            "leaf": true
				          },
				          {
				            "text": "杭錦後旗",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "錫林郭勒盟",
				        "children": [
				          {
				            "text": "二連浩特市",
				            "leaf": true
				          },
				          {
				            "text": "錫林浩特市",
				            "leaf": true
				          },
				          {
				            "text": "阿巴嘎旗",
				            "leaf": true
				          },
				          {
				            "text": "蘇尼特左旗",
				            "leaf": true
				          },
				          {
				            "text": "蘇尼特右旗",
				            "leaf": true
				          },
				          {
				            "text": "東烏珠穆沁旗",
				            "leaf": true
				          },
				          {
				            "text": "西烏珠穆沁旗",
				            "leaf": true
				          },
				          {
				            "text": "太僕寺旗",
				            "leaf": true
				          },
				          {
				            "text": "鑲黃旗",
				            "leaf": true
				          },
				          {
				            "text": "正鑲白旗",
				            "leaf": true
				          },
				          {
				            "text": "正藍旗",
				            "leaf": true
				          },
				          {
				            "text": "多倫縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "興安盟",
				        "children": [
				          {
				            "text": "烏蘭浩特市",
				            "leaf": true
				          },
				          {
				            "text": "阿爾山市",
				            "leaf": true
				          },
				          {
				            "text": "科爾沁右翼前旗",
				            "leaf": true
				          },
				          {
				            "text": "科爾沁右翼中旗",
				            "leaf": true
				          },
				          {
				            "text": "扎賚特旗",
				            "leaf": true
				          },
				          {
				            "text": "突泉縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "阿拉善盟",
				        "children": [
				          {
				            "text": "阿拉善左旗",
				            "leaf": true
				          },
				          {
				            "text": "阿拉善右旗",
				            "leaf": true
				          },
				          {
				            "text": "額濟納旗",
				            "leaf": true
				          }
				        ]
				      }
				    ]
				  },
				  {
				    "text": "遼寧省",
				    "children": [
				      {
				        "text": "沈陽市",
				        "children": [
				          {
				            "text": "和平區",
				            "leaf": true
				          },
				          {
				            "text": "沈河區",
				            "leaf": true
				          },
				          {
				            "text": "大東區",
				            "leaf": true
				          },
				          {
				            "text": "皇姑區",
				            "leaf": true
				          },
				          {
				            "text": "鐵西區",
				            "leaf": true
				          },
				          {
				            "text": "蘇家屯區",
				            "leaf": true
				          },
				          {
				            "text": "東陵區",
				            "leaf": true
				          },
				          {
				            "text": "沈北新區",
				            "leaf": true
				          },
				          {
				            "text": "於洪區",
				            "leaf": true
				          },
				          {
				            "text": "遼中縣",
				            "leaf": true
				          },
				          {
				            "text": "康平縣",
				            "leaf": true
				          },
				          {
				            "text": "法庫縣",
				            "leaf": true
				          },
				          {
				            "text": "新民市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "鐵嶺市",
				        "children": [
				          {
				            "text": "銀州區",
				            "leaf": true
				          },
				          {
				            "text": "清河區",
				            "leaf": true
				          },
				          {
				            "text": "鐵嶺縣",
				            "leaf": true
				          },
				          {
				            "text": "西豐縣",
				            "leaf": true
				          },
				          {
				            "text": "昌圖縣",
				            "leaf": true
				          },
				          {
				            "text": "調兵山市",
				            "leaf": true
				          },
				          {
				            "text": "開原市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "大連市",
				        "children": [
				          {
				            "text": "長海縣",
				            "leaf": true
				          },
				          {
				            "text": "旅順口區",
				            "leaf": true
				          },
				          {
				            "text": "中山區",
				            "leaf": true
				          },
				          {
				            "text": "西崗區",
				            "leaf": true
				          },
				          {
				            "text": "沙河口區",
				            "leaf": true
				          },
				          {
				            "text": "甘井子區",
				            "leaf": true
				          },
				          {
				            "text": "金州區",
				            "leaf": true
				          },
				          {
				            "text": "普蘭店市",
				            "leaf": true
				          },
				          {
				            "text": "瓦房店市",
				            "leaf": true
				          },
				          {
				            "text": "莊河市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "鞍山市",
				        "children": [
				          {
				            "text": "鐵東區",
				            "leaf": true
				          },
				          {
				            "text": "鐵西區",
				            "leaf": true
				          },
				          {
				            "text": "立山區",
				            "leaf": true
				          },
				          {
				            "text": "千山區",
				            "leaf": true
				          },
				          {
				            "text": "台安縣",
				            "leaf": true
				          },
				          {
				            "text": "岫巖滿族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "海城市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "撫順市",
				        "children": [
				          {
				            "text": "新撫區",
				            "leaf": true
				          },
				          {
				            "text": "東洲區",
				            "leaf": true
				          },
				          {
				            "text": "望花區",
				            "leaf": true
				          },
				          {
				            "text": "順城區",
				            "leaf": true
				          },
				          {
				            "text": "撫順縣",
				            "leaf": true
				          },
				          {
				            "text": "新賓滿族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "清原滿族自治縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "本溪市",
				        "children": [
				          {
				            "text": "平山區",
				            "leaf": true
				          },
				          {
				            "text": "溪湖區",
				            "leaf": true
				          },
				          {
				            "text": "明山區",
				            "leaf": true
				          },
				          {
				            "text": "南芬區",
				            "leaf": true
				          },
				          {
				            "text": "本溪滿族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "桓仁滿族自治縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "丹東市",
				        "children": [
				          {
				            "text": "元寶區",
				            "leaf": true
				          },
				          {
				            "text": "振興區",
				            "leaf": true
				          },
				          {
				            "text": "振安區",
				            "leaf": true
				          },
				          {
				            "text": "寬甸滿族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "東港市",
				            "leaf": true
				          },
				          {
				            "text": "鳳城市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "錦州市",
				        "children": [
				          {
				            "text": "古塔區",
				            "leaf": true
				          },
				          {
				            "text": "凌河區",
				            "leaf": true
				          },
				          {
				            "text": "太和區",
				            "leaf": true
				          },
				          {
				            "text": "黑山縣",
				            "leaf": true
				          },
				          {
				            "text": "義縣",
				            "leaf": true
				          },
				          {
				            "text": "凌海市",
				            "leaf": true
				          },
				          {
				            "text": "北鎮市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "營口市",
				        "children": [
				          {
				            "text": "站前區",
				            "leaf": true
				          },
				          {
				            "text": "西市區",
				            "leaf": true
				          },
				          {
				            "text": "鱍魚圈區",
				            "leaf": true
				          },
				          {
				            "text": "老邊區",
				            "leaf": true
				          },
				          {
				            "text": "蓋州市",
				            "leaf": true
				          },
				          {
				            "text": "大石橋市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "阜新市",
				        "children": [
				          {
				            "text": "海州區",
				            "leaf": true
				          },
				          {
				            "text": "新邱區",
				            "leaf": true
				          },
				          {
				            "text": "太平區",
				            "leaf": true
				          },
				          {
				            "text": "清河門區",
				            "leaf": true
				          },
				          {
				            "text": "細河區",
				            "leaf": true
				          },
				          {
				            "text": "阜新蒙古族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "彰武縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "遼陽市",
				        "children": [
				          {
				            "text": "白塔區",
				            "leaf": true
				          },
				          {
				            "text": "文聖區",
				            "leaf": true
				          },
				          {
				            "text": "巨集偉區",
				            "leaf": true
				          },
				          {
				            "text": "弓長嶺區",
				            "leaf": true
				          },
				          {
				            "text": "太子河區",
				            "leaf": true
				          },
				          {
				            "text": "遼陽縣",
				            "leaf": true
				          },
				          {
				            "text": "燈塔市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "朝陽市",
				        "children": [
				          {
				            "text": "雙塔區",
				            "leaf": true
				          },
				          {
				            "text": "龍城區",
				            "leaf": true
				          },
				          {
				            "text": "朝陽縣",
				            "leaf": true
				          },
				          {
				            "text": "建平縣",
				            "leaf": true
				          },
				          {
				            "text": "喀喇沁左翼蒙古族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "北票市",
				            "leaf": true
				          },
				          {
				            "text": "凌源市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "碟錦市",
				        "children": [
				          {
				            "text": "雙台子區",
				            "leaf": true
				          },
				          {
				            "text": "興隆台區",
				            "leaf": true
				          },
				          {
				            "text": "大窪縣",
				            "leaf": true
				          },
				          {
				            "text": "碟山縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "葫蘆島市",
				        "children": [
				          {
				            "text": "連山區",
				            "leaf": true
				          },
				          {
				            "text": "龍港區",
				            "leaf": true
				          },
				          {
				            "text": "南票區",
				            "leaf": true
				          },
				          {
				            "text": "綏中縣",
				            "leaf": true
				          },
				          {
				            "text": "建昌縣",
				            "leaf": true
				          },
				          {
				            "text": "興城市",
				            "leaf": true
				          }
				        ]
				      }
				    ]
				  },
				  {
				    "text": "吉林省",
				    "children": [
				      {
				        "text": "長春市",
				        "children": [
				          {
				            "text": "南關區",
				            "leaf": true
				          },
				          {
				            "text": "寬城區",
				            "leaf": true
				          },
				          {
				            "text": "朝陽區",
				            "leaf": true
				          },
				          {
				            "text": "二道區",
				            "leaf": true
				          },
				          {
				            "text": "綠園區",
				            "leaf": true
				          },
				          {
				            "text": "雙陽區",
				            "leaf": true
				          },
				          {
				            "text": "農安縣",
				            "leaf": true
				          },
				          {
				            "text": "九台市",
				            "leaf": true
				          },
				          {
				            "text": "榆樹市",
				            "leaf": true
				          },
				          {
				            "text": "德惠市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "吉林市",
				        "children": [
				          {
				            "text": "昌邑區",
				            "leaf": true
				          },
				          {
				            "text": "龍潭區",
				            "leaf": true
				          },
				          {
				            "text": "船營區",
				            "leaf": true
				          },
				          {
				            "text": "豐滿區",
				            "leaf": true
				          },
				          {
				            "text": "永吉縣",
				            "leaf": true
				          },
				          {
				            "text": "蛟河市",
				            "leaf": true
				          },
				          {
				            "text": "樺甸市",
				            "leaf": true
				          },
				          {
				            "text": "舒蘭市",
				            "leaf": true
				          },
				          {
				            "text": "磐石市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "延邊朝鮮族自治州",
				        "children": [
				          {
				            "text": "延吉市",
				            "leaf": true
				          },
				          {
				            "text": "圖們市",
				            "leaf": true
				          },
				          {
				            "text": "敦化市",
				            "leaf": true
				          },
				          {
				            "text": "琿春市",
				            "leaf": true
				          },
				          {
				            "text": "龍井市",
				            "leaf": true
				          },
				          {
				            "text": "和龍市",
				            "leaf": true
				          },
				          {
				            "text": "汪清縣",
				            "leaf": true
				          },
				          {
				            "text": "安圖縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "四平市",
				        "children": [
				          {
				            "text": "鐵西區",
				            "leaf": true
				          },
				          {
				            "text": "鐵東區",
				            "leaf": true
				          },
				          {
				            "text": "梨樹縣",
				            "leaf": true
				          },
				          {
				            "text": "伊通滿族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "公主嶺市",
				            "leaf": true
				          },
				          {
				            "text": "雙遼市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "通化市",
				        "children": [
				          {
				            "text": "東昌區",
				            "leaf": true
				          },
				          {
				            "text": "二道江區",
				            "leaf": true
				          },
				          {
				            "text": "通化縣",
				            "leaf": true
				          },
				          {
				            "text": "輝南縣",
				            "leaf": true
				          },
				          {
				            "text": "柳河縣",
				            "leaf": true
				          },
				          {
				            "text": "梅河口市",
				            "leaf": true
				          },
				          {
				            "text": "集安市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "白城市",
				        "children": [
				          {
				            "text": "洮北區",
				            "leaf": true
				          },
				          {
				            "text": "鎮賚縣",
				            "leaf": true
				          },
				          {
				            "text": "通榆縣",
				            "leaf": true
				          },
				          {
				            "text": "洮南市",
				            "leaf": true
				          },
				          {
				            "text": "大安市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "遼源市",
				        "children": [
				          {
				            "text": "龍山區",
				            "leaf": true
				          },
				          {
				            "text": "西安區",
				            "leaf": true
				          },
				          {
				            "text": "東豐縣",
				            "leaf": true
				          },
				          {
				            "text": "東遼縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "松原市",
				        "children": [
				          {
				            "text": "寧江區",
				            "leaf": true
				          },
				          {
				            "text": "前郭爾羅斯蒙古族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "長嶺縣",
				            "leaf": true
				          },
				          {
				            "text": "乾安縣",
				            "leaf": true
				          },
				          {
				            "text": "扶余縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "白山市",
				        "children": [
				          {
				            "text": "八道江區",
				            "leaf": true
				          },
				          {
				            "text": "江源區",
				            "leaf": true
				          },
				          {
				            "text": "撫松縣",
				            "leaf": true
				          },
				          {
				            "text": "靖宇縣",
				            "leaf": true
				          },
				          {
				            "text": "長白朝鮮族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "臨江市",
				            "leaf": true
				          }
				        ]
				      }
				    ]
				  },
				  {
				    "text": "黑龍江省",
				    "children": [
				      {
				        "text": "哈爾濱市",
				        "children": [
				          {
				            "text": "道裡區",
				            "leaf": true
				          },
				          {
				            "text": "南崗區",
				            "leaf": true
				          },
				          {
				            "text": "道外區",
				            "leaf": true
				          },
				          {
				            "text": "平房區",
				            "leaf": true
				          },
				          {
				            "text": "松北區",
				            "leaf": true
				          },
				          {
				            "text": "香坊區",
				            "leaf": true
				          },
				          {
				            "text": "呼蘭區",
				            "leaf": true
				          },
				          {
				            "text": "阿城區",
				            "leaf": true
				          },
				          {
				            "text": "依蘭縣",
				            "leaf": true
				          },
				          {
				            "text": "方正縣",
				            "leaf": true
				          },
				          {
				            "text": "賓縣",
				            "leaf": true
				          },
				          {
				            "text": "巴彥縣",
				            "leaf": true
				          },
				          {
				            "text": "木蘭縣",
				            "leaf": true
				          },
				          {
				            "text": "通河縣",
				            "leaf": true
				          },
				          {
				            "text": "延壽縣",
				            "leaf": true
				          },
				          {
				            "text": "雙城市",
				            "leaf": true
				          },
				          {
				            "text": "尚志市",
				            "leaf": true
				          },
				          {
				            "text": "五常市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "齊齊哈爾市",
				        "children": [
				          {
				            "text": "龍沙區",
				            "leaf": true
				          },
				          {
				            "text": "建華區",
				            "leaf": true
				          },
				          {
				            "text": "鐵鋒區",
				            "leaf": true
				          },
				          {
				            "text": "昂昂溪區",
				            "leaf": true
				          },
				          {
				            "text": "富拉爾基區",
				            "leaf": true
				          },
				          {
				            "text": "碾子山區",
				            "leaf": true
				          },
				          {
				            "text": "梅裡斯達翰爾族區",
				            "leaf": true
				          },
				          {
				            "text": "龍江縣",
				            "leaf": true
				          },
				          {
				            "text": "依安縣",
				            "leaf": true
				          },
				          {
				            "text": "泰來縣",
				            "leaf": true
				          },
				          {
				            "text": "甘南縣",
				            "leaf": true
				          },
				          {
				            "text": "富裕縣",
				            "leaf": true
				          },
				          {
				            "text": "克山縣",
				            "leaf": true
				          },
				          {
				            "text": "克東縣",
				            "leaf": true
				          },
				          {
				            "text": "拜泉縣",
				            "leaf": true
				          },
				          {
				            "text": "訥河市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "雞西市",
				        "children": [
				          {
				            "text": "雞冠區",
				            "leaf": true
				          },
				          {
				            "text": "恆山區",
				            "leaf": true
				          },
				          {
				            "text": "滴道區",
				            "leaf": true
				          },
				          {
				            "text": "梨樹區",
				            "leaf": true
				          },
				          {
				            "text": "城子河區",
				            "leaf": true
				          },
				          {
				            "text": "麻山區",
				            "leaf": true
				          },
				          {
				            "text": "雞東縣",
				            "leaf": true
				          },
				          {
				            "text": "虎林市",
				            "leaf": true
				          },
				          {
				            "text": "密山市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "牡丹江市",
				        "children": [
				          {
				            "text": "東安區",
				            "leaf": true
				          },
				          {
				            "text": "陽明區",
				            "leaf": true
				          },
				          {
				            "text": "愛民區",
				            "leaf": true
				          },
				          {
				            "text": "西安區",
				            "leaf": true
				          },
				          {
				            "text": "東寧縣",
				            "leaf": true
				          },
				          {
				            "text": "林口縣",
				            "leaf": true
				          },
				          {
				            "text": "綏芬河市",
				            "leaf": true
				          },
				          {
				            "text": "海林市",
				            "leaf": true
				          },
				          {
				            "text": "寧安市",
				            "leaf": true
				          },
				          {
				            "text": "穆稜市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "七台河市",
				        "children": [
				          {
				            "text": "新興區",
				            "leaf": true
				          },
				          {
				            "text": "桃山區",
				            "leaf": true
				          },
				          {
				            "text": "茄子河區",
				            "leaf": true
				          },
				          {
				            "text": "勃利縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "佳木斯市",
				        "children": [
				          {
				            "text": "向陽區",
				            "leaf": true
				          },
				          {
				            "text": "前進區",
				            "leaf": true
				          },
				          {
				            "text": "東風區",
				            "leaf": true
				          },
				          {
				            "text": "樺南縣",
				            "leaf": true
				          },
				          {
				            "text": "樺川縣",
				            "leaf": true
				          },
				          {
				            "text": "湯原縣",
				            "leaf": true
				          },
				          {
				            "text": "撫遠縣",
				            "leaf": true
				          },
				          {
				            "text": "同江市",
				            "leaf": true
				          },
				          {
				            "text": "富錦市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "鶴崗市",
				        "children": [
				          {
				            "text": "向陽區",
				            "leaf": true
				          },
				          {
				            "text": "工農區",
				            "leaf": true
				          },
				          {
				            "text": "南山區",
				            "leaf": true
				          },
				          {
				            "text": "興安區",
				            "leaf": true
				          },
				          {
				            "text": "東山區",
				            "leaf": true
				          },
				          {
				            "text": "興山區",
				            "leaf": true
				          },
				          {
				            "text": "蘿北縣",
				            "leaf": true
				          },
				          {
				            "text": "綏濱縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "雙鴨山市",
				        "children": [
				          {
				            "text": "尖山區",
				            "leaf": true
				          },
				          {
				            "text": "嶺東區",
				            "leaf": true
				          },
				          {
				            "text": "四方台區",
				            "leaf": true
				          },
				          {
				            "text": "寶山區",
				            "leaf": true
				          },
				          {
				            "text": "集賢縣",
				            "leaf": true
				          },
				          {
				            "text": "友誼縣",
				            "leaf": true
				          },
				          {
				            "text": "寶清縣",
				            "leaf": true
				          },
				          {
				            "text": "饒河縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "綏化市",
				        "children": [
				          {
				            "text": "北林區",
				            "leaf": true
				          },
				          {
				            "text": "望奎縣",
				            "leaf": true
				          },
				          {
				            "text": "蘭西縣",
				            "leaf": true
				          },
				          {
				            "text": "青岡縣",
				            "leaf": true
				          },
				          {
				            "text": "慶安縣",
				            "leaf": true
				          },
				          {
				            "text": "明水縣",
				            "leaf": true
				          },
				          {
				            "text": "綏稜縣",
				            "leaf": true
				          },
				          {
				            "text": "安達市",
				            "leaf": true
				          },
				          {
				            "text": "肇東市",
				            "leaf": true
				          },
				          {
				            "text": "海倫市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "黑河市",
				        "children": [
				          {
				            "text": "愛輝區",
				            "leaf": true
				          },
				          {
				            "text": "嫩江縣",
				            "leaf": true
				          },
				          {
				            "text": "遜克縣",
				            "leaf": true
				          },
				          {
				            "text": "孫吳縣",
				            "leaf": true
				          },
				          {
				            "text": "北安市",
				            "leaf": true
				          },
				          {
				            "text": "五大連池市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "大興安嶺地區",
				        "children": [
				          {
				            "text": "呼瑪縣",
				            "leaf": true
				          },
				          {
				            "text": "塔河縣",
				            "leaf": true
				          },
				          {
				            "text": "漠河縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "伊春市",
				        "children": [
				          {
				            "text": "伊春區",
				            "leaf": true
				          },
				          {
				            "text": "南岔區",
				            "leaf": true
				          },
				          {
				            "text": "友善區",
				            "leaf": true
				          },
				          {
				            "text": "西林區",
				            "leaf": true
				          },
				          {
				            "text": "翠巒區",
				            "leaf": true
				          },
				          {
				            "text": "新青區",
				            "leaf": true
				          },
				          {
				            "text": "美溪區",
				            "leaf": true
				          },
				          {
				            "text": "金山屯區",
				            "leaf": true
				          },
				          {
				            "text": "五營區",
				            "leaf": true
				          },
				          {
				            "text": "烏馬河區",
				            "leaf": true
				          },
				          {
				            "text": "湯旺河區",
				            "leaf": true
				          },
				          {
				            "text": "帶嶺區",
				            "leaf": true
				          },
				          {
				            "text": "烏伊嶺區",
				            "leaf": true
				          },
				          {
				            "text": "紅星區",
				            "leaf": true
				          },
				          {
				            "text": "上甘嶺區",
				            "leaf": true
				          },
				          {
				            "text": "嘉蔭縣",
				            "leaf": true
				          },
				          {
				            "text": "鐵力市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "大慶市",
				        "children": [
				          {
				            "text": "薩爾圖區",
				            "leaf": true
				          },
				          {
				            "text": "龍鳳區",
				            "leaf": true
				          },
				          {
				            "text": "讓胡路區",
				            "leaf": true
				          },
				          {
				            "text": "紅崗區",
				            "leaf": true
				          },
				          {
				            "text": "大同區",
				            "leaf": true
				          },
				          {
				            "text": "肇州縣",
				            "leaf": true
				          },
				          {
				            "text": "肇源縣",
				            "leaf": true
				          },
				          {
				            "text": "林甸縣",
				            "leaf": true
				          },
				          {
				            "text": "杜爾伯特蒙古族自治縣",
				            "leaf": true
				          }
				        ]
				      }
				    ]
				  },
				  {
				    "text": "上海市",
				    "children": [
				      {
				        "text": "上海市",
				        "children": [
				          {
				            "text": "黃浦區",
				            "leaf": true
				          },
				          {
				            "text": "盧灣區",
				            "leaf": true
				          },
				          {
				            "text": "徐匯區",
				            "leaf": true
				          },
				          {
				            "text": "長寧區",
				            "leaf": true
				          },
				          {
				            "text": "靜安區",
				            "leaf": true
				          },
				          {
				            "text": "普陀區",
				            "leaf": true
				          },
				          {
				            "text": "閘北區",
				            "leaf": true
				          },
				          {
				            "text": "虹口區",
				            "leaf": true
				          },
				          {
				            "text": "楊浦區",
				            "leaf": true
				          },
				          {
				            "text": "閔行區",
				            "leaf": true
				          },
				          {
				            "text": "寶山區",
				            "leaf": true
				          },
				          {
				            "text": "嘉定區",
				            "leaf": true
				          },
				          {
				            "text": "浦東新區",
				            "leaf": true
				          },
				          {
				            "text": "金山區",
				            "leaf": true
				          },
				          {
				            "text": "松江區",
				            "leaf": true
				          },
				          {
				            "text": "青浦區",
				            "leaf": true
				          },
				          {
				            "text": "南匯區",
				            "leaf": true
				          },
				          {
				            "text": "奉賢區",
				            "leaf": true
				          },
				          {
				            "text": "崇明縣",
				            "leaf": true
				          }
				        ]
				      }
				    ]
				  },
				  {
				    "text": "江蘇省",
				    "children": [
				      {
				        "text": "南京市",
				        "children": [
				          {
				            "text": "江寧區",
				            "leaf": true
				          },
				          {
				            "text": "浦口區",
				            "leaf": true
				          },
				          {
				            "text": "玄武區",
				            "leaf": true
				          },
				          {
				            "text": "白下區",
				            "leaf": true
				          },
				          {
				            "text": "秦淮區",
				            "leaf": true
				          },
				          {
				            "text": "建鄴區",
				            "leaf": true
				          },
				          {
				            "text": "鼓樓區",
				            "leaf": true
				          },
				          {
				            "text": "下關區",
				            "leaf": true
				          },
				          {
				            "text": "棲霞區",
				            "leaf": true
				          },
				          {
				            "text": "雨花台區",
				            "leaf": true
				          },
				          {
				            "text": "六合區",
				            "leaf": true
				          },
				          {
				            "text": "溧水縣",
				            "leaf": true
				          },
				          {
				            "text": "高淳縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "無錫市",
				        "children": [
				          {
				            "text": "崇安區",
				            "leaf": true
				          },
				          {
				            "text": "南長區",
				            "leaf": true
				          },
				          {
				            "text": "北塘區",
				            "leaf": true
				          },
				          {
				            "text": "錫山區",
				            "leaf": true
				          },
				          {
				            "text": "惠山區",
				            "leaf": true
				          },
				          {
				            "text": "濱湖區",
				            "leaf": true
				          },
				          {
				            "text": "江陰市",
				            "leaf": true
				          },
				          {
				            "text": "宜興市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "鎮江市",
				        "children": [
				          {
				            "text": "京口區",
				            "leaf": true
				          },
				          {
				            "text": "潤州區",
				            "leaf": true
				          },
				          {
				            "text": "丹徒區",
				            "leaf": true
				          },
				          {
				            "text": "丹陽市",
				            "leaf": true
				          },
				          {
				            "text": "揚中市",
				            "leaf": true
				          },
				          {
				            "text": "句容市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "蘇州市",
				        "children": [
				          {
				            "text": "滄浪區",
				            "leaf": true
				          },
				          {
				            "text": "常熟市",
				            "leaf": true
				          },
				          {
				            "text": "平江區",
				            "leaf": true
				          },
				          {
				            "text": "金閶區",
				            "leaf": true
				          },
				          {
				            "text": "虎丘區",
				            "leaf": true
				          },
				          {
				            "text": "昆山市",
				            "leaf": true
				          },
				          {
				            "text": "太倉市",
				            "leaf": true
				          },
				          {
				            "text": "吳江市",
				            "leaf": true
				          },
				          {
				            "text": "吳中區",
				            "leaf": true
				          },
				          {
				            "text": "相城區",
				            "leaf": true
				          },
				          {
				            "text": "張家港市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "南通市",
				        "children": [
				          {
				            "text": "崇川區",
				            "leaf": true
				          },
				          {
				            "text": "港閘區",
				            "leaf": true
				          },
				          {
				            "text": "海安縣",
				            "leaf": true
				          },
				          {
				            "text": "如東縣",
				            "leaf": true
				          },
				          {
				            "text": "啟東市",
				            "leaf": true
				          },
				          {
				            "text": "如皋市",
				            "leaf": true
				          },
				          {
				            "text": "通州市",
				            "leaf": true
				          },
				          {
				            "text": "海門市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "揚州市",
				        "children": [
				          {
				            "text": "高郵市",
				            "leaf": true
				          },
				          {
				            "text": "廣陵區",
				            "leaf": true
				          },
				          {
				            "text": "邗江區",
				            "leaf": true
				          },
				          {
				            "text": "維揚區",
				            "leaf": true
				          },
				          {
				            "text": "寶應縣",
				            "leaf": true
				          },
				          {
				            "text": "江都市",
				            "leaf": true
				          },
				          {
				            "text": "儀征市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "鹽城市",
				        "children": [
				          {
				            "text": "亭湖區",
				            "leaf": true
				          },
				          {
				            "text": "鹽都區",
				            "leaf": true
				          },
				          {
				            "text": "響水縣",
				            "leaf": true
				          },
				          {
				            "text": "濱海縣",
				            "leaf": true
				          },
				          {
				            "text": "阜寧縣",
				            "leaf": true
				          },
				          {
				            "text": "射陽縣",
				            "leaf": true
				          },
				          {
				            "text": "建湖縣",
				            "leaf": true
				          },
				          {
				            "text": "東台市",
				            "leaf": true
				          },
				          {
				            "text": "大豐市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "徐州市",
				        "children": [
				          {
				            "text": "鼓樓區",
				            "leaf": true
				          },
				          {
				            "text": "雲龍區",
				            "leaf": true
				          },
				          {
				            "text": "九裡區",
				            "leaf": true
				          },
				          {
				            "text": "賈汪區",
				            "leaf": true
				          },
				          {
				            "text": "泉山區",
				            "leaf": true
				          },
				          {
				            "text": "豐縣",
				            "leaf": true
				          },
				          {
				            "text": "沛縣",
				            "leaf": true
				          },
				          {
				            "text": "銅山縣",
				            "leaf": true
				          },
				          {
				            "text": "睢寧縣",
				            "leaf": true
				          },
				          {
				            "text": "新沂市",
				            "leaf": true
				          },
				          {
				            "text": "邳州市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "淮安市",
				        "children": [
				          {
				            "text": "清河區",
				            "leaf": true
				          },
				          {
				            "text": "楚州區",
				            "leaf": true
				          },
				          {
				            "text": "淮陰區",
				            "leaf": true
				          },
				          {
				            "text": "清浦區",
				            "leaf": true
				          },
				          {
				            "text": "漣水縣",
				            "leaf": true
				          },
				          {
				            "text": "洪澤縣",
				            "leaf": true
				          },
				          {
				            "text": "盱眙縣",
				            "leaf": true
				          },
				          {
				            "text": "金湖縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "連雲港市",
				        "children": [
				          {
				            "text": "連雲區",
				            "leaf": true
				          },
				          {
				            "text": "新浦區",
				            "leaf": true
				          },
				          {
				            "text": "海州區",
				            "leaf": true
				          },
				          {
				            "text": "贛榆縣",
				            "leaf": true
				          },
				          {
				            "text": "東海縣",
				            "leaf": true
				          },
				          {
				            "text": "灌雲縣",
				            "leaf": true
				          },
				          {
				            "text": "灌南縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "常州市",
				        "children": [
				          {
				            "text": "天寧區",
				            "leaf": true
				          },
				          {
				            "text": "鍾樓區",
				            "leaf": true
				          },
				          {
				            "text": "戚墅堰區",
				            "leaf": true
				          },
				          {
				            "text": "新北區",
				            "leaf": true
				          },
				          {
				            "text": "武進區",
				            "leaf": true
				          },
				          {
				            "text": "溧陽市",
				            "leaf": true
				          },
				          {
				            "text": "金壇市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "泰州市",
				        "children": [
				          {
				            "text": "海陵區",
				            "leaf": true
				          },
				          {
				            "text": "高港區",
				            "leaf": true
				          },
				          {
				            "text": "興化市",
				            "leaf": true
				          },
				          {
				            "text": "靖江市",
				            "leaf": true
				          },
				          {
				            "text": "泰興市",
				            "leaf": true
				          },
				          {
				            "text": "姜堰市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "宿遷市",
				        "children": [
				          {
				            "text": "宿城區",
				            "leaf": true
				          },
				          {
				            "text": "宿豫區",
				            "leaf": true
				          },
				          {
				            "text": "沭陽縣",
				            "leaf": true
				          },
				          {
				            "text": "泗陽縣",
				            "leaf": true
				          },
				          {
				            "text": "泗洪縣",
				            "leaf": true
				          }
				        ]
				      }
				    ]
				  },
				  {
				    "text": "浙江省",
				    "children": [
				      {
				        "text": "舟山市",
				        "children": [
				          {
				            "text": "定海區",
				            "leaf": true
				          },
				          {
				            "text": "普陀區",
				            "leaf": true
				          },
				          {
				            "text": "岱山縣",
				            "leaf": true
				          },
				          {
				            "text": "嵊泗縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "衢州市",
				        "children": [
				          {
				            "text": "柯城區",
				            "leaf": true
				          },
				          {
				            "text": "衢江區",
				            "leaf": true
				          },
				          {
				            "text": "常山縣",
				            "leaf": true
				          },
				          {
				            "text": "開化縣",
				            "leaf": true
				          },
				          {
				            "text": "龍游縣",
				            "leaf": true
				          },
				          {
				            "text": "江山市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "杭州市",
				        "children": [
				          {
				            "text": "上城區",
				            "leaf": true
				          },
				          {
				            "text": "下城區",
				            "leaf": true
				          },
				          {
				            "text": "江干區",
				            "leaf": true
				          },
				          {
				            "text": "拱墅區",
				            "leaf": true
				          },
				          {
				            "text": "西湖區",
				            "leaf": true
				          },
				          {
				            "text": "濱江區",
				            "leaf": true
				          },
				          {
				            "text": "余杭區",
				            "leaf": true
				          },
				          {
				            "text": "桐廬縣",
				            "leaf": true
				          },
				          {
				            "text": "淳安縣",
				            "leaf": true
				          },
				          {
				            "text": "建德市",
				            "leaf": true
				          },
				          {
				            "text": "富陽市",
				            "leaf": true
				          },
				          {
				            "text": "臨安市",
				            "leaf": true
				          },
				          {
				            "text": "蕭山區",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "湖州市",
				        "children": [
				          {
				            "text": "吳興區",
				            "leaf": true
				          },
				          {
				            "text": "南潯區",
				            "leaf": true
				          },
				          {
				            "text": "德清縣",
				            "leaf": true
				          },
				          {
				            "text": "長興縣",
				            "leaf": true
				          },
				          {
				            "text": "安吉縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "嘉興市",
				        "children": [
				          {
				            "text": " 南湖區",
				            "leaf": true
				          },
				          {
				            "text": " 秀洲區",
				            "leaf": true
				          },
				          {
				            "text": " 嘉善縣",
				            "leaf": true
				          },
				          {
				            "text": " 海鹽縣",
				            "leaf": true
				          },
				          {
				            "text": " 海寧市",
				            "leaf": true
				          },
				          {
				            "text": " 平湖市",
				            "leaf": true
				          },
				          {
				            "text": " 桐鄉市 ",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "寧波市",
				        "children": [
				          {
				            "text": "海曙區",
				            "leaf": true
				          },
				          {
				            "text": "江東區",
				            "leaf": true
				          },
				          {
				            "text": "江北區",
				            "leaf": true
				          },
				          {
				            "text": "北侖區",
				            "leaf": true
				          },
				          {
				            "text": "鎮海區",
				            "leaf": true
				          },
				          {
				            "text": "鄞州區",
				            "leaf": true
				          },
				          {
				            "text": "象山縣",
				            "leaf": true
				          },
				          {
				            "text": "寧海縣",
				            "leaf": true
				          },
				          {
				            "text": "余姚市",
				            "leaf": true
				          },
				          {
				            "text": "慈溪市",
				            "leaf": true
				          },
				          {
				            "text": "奉化市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "紹興市",
				        "children": [
				          {
				            "text": "越城區",
				            "leaf": true
				          },
				          {
				            "text": "紹興縣",
				            "leaf": true
				          },
				          {
				            "text": "新昌縣",
				            "leaf": true
				          },
				          {
				            "text": "諸暨市",
				            "leaf": true
				          },
				          {
				            "text": "上虞市",
				            "leaf": true
				          },
				          {
				            "text": "嵊州市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "溫州市",
				        "children": [
				          {
				            "text": "鹿城區",
				            "leaf": true
				          },
				          {
				            "text": "龍灣區",
				            "leaf": true
				          },
				          {
				            "text": "甌海區",
				            "leaf": true
				          },
				          {
				            "text": "洞頭縣",
				            "leaf": true
				          },
				          {
				            "text": "永嘉縣",
				            "leaf": true
				          },
				          {
				            "text": "平陽縣",
				            "leaf": true
				          },
				          {
				            "text": "蒼南縣",
				            "leaf": true
				          },
				          {
				            "text": "文成縣",
				            "leaf": true
				          },
				          {
				            "text": "泰順縣",
				            "leaf": true
				          },
				          {
				            "text": "瑞安市",
				            "leaf": true
				          },
				          {
				            "text": "樂清市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "麗水市",
				        "children": [
				          {
				            "text": "蓮都區",
				            "leaf": true
				          },
				          {
				            "text": "青田縣",
				            "leaf": true
				          },
				          {
				            "text": "縉雲縣",
				            "leaf": true
				          },
				          {
				            "text": "遂昌縣",
				            "leaf": true
				          },
				          {
				            "text": "松陽縣",
				            "leaf": true
				          },
				          {
				            "text": "雲和縣",
				            "leaf": true
				          },
				          {
				            "text": "慶元縣",
				            "leaf": true
				          },
				          {
				            "text": "景寧畬族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "龍泉市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "金華市",
				        "children": [
				          {
				            "text": "婺城區",
				            "leaf": true
				          },
				          {
				            "text": "金東區",
				            "leaf": true
				          },
				          {
				            "text": "武義縣",
				            "leaf": true
				          },
				          {
				            "text": "浦江縣",
				            "leaf": true
				          },
				          {
				            "text": "磐安縣",
				            "leaf": true
				          },
				          {
				            "text": "蘭溪市",
				            "leaf": true
				          },
				          {
				            "text": "義烏市",
				            "leaf": true
				          },
				          {
				            "text": "東陽市",
				            "leaf": true
				          },
				          {
				            "text": "永康市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "台州市",
				        "children": [
				          {
				            "text": "椒江區",
				            "leaf": true
				          },
				          {
				            "text": "黃巖區",
				            "leaf": true
				          },
				          {
				            "text": "路橋區",
				            "leaf": true
				          },
				          {
				            "text": "玉環縣",
				            "leaf": true
				          },
				          {
				            "text": "三門縣",
				            "leaf": true
				          },
				          {
				            "text": "天台縣",
				            "leaf": true
				          },
				          {
				            "text": "仙居縣",
				            "leaf": true
				          },
				          {
				            "text": "溫嶺市",
				            "leaf": true
				          },
				          {
				            "text": "臨海市",
				            "leaf": true
				          }
				        ]
				      }
				    ]
				  },
				  {
				    "text": "安徽省",
				    "children": [
				      {
				        "text": "合肥市",
				        "children": [
				          {
				            "text": "瑤海區",
				            "leaf": true
				          },
				          {
				            "text": "廬陽區",
				            "leaf": true
				          },
				          {
				            "text": "蜀山區",
				            "leaf": true
				          },
				          {
				            "text": "包河區",
				            "leaf": true
				          },
				          {
				            "text": "長豐縣",
				            "leaf": true
				          },
				          {
				            "text": "肥東縣",
				            "leaf": true
				          },
				          {
				            "text": "肥西縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "蕪湖市",
				        "children": [
				          {
				            "text": "鏡湖區",
				            "leaf": true
				          },
				          {
				            "text": "弋江區",
				            "leaf": true
				          },
				          {
				            "text": "鳩江區",
				            "leaf": true
				          },
				          {
				            "text": "三山區",
				            "leaf": true
				          },
				          {
				            "text": "蕪湖縣",
				            "leaf": true
				          },
				          {
				            "text": "繁昌縣",
				            "leaf": true
				          },
				          {
				            "text": "南陵縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "蚌埠市",
				        "children": [
				          {
				            "text": "龍子湖區",
				            "leaf": true
				          },
				          {
				            "text": "蚌山區",
				            "leaf": true
				          },
				          {
				            "text": "禹會區",
				            "leaf": true
				          },
				          {
				            "text": "淮上區",
				            "leaf": true
				          },
				          {
				            "text": "懷遠縣",
				            "leaf": true
				          },
				          {
				            "text": "五河縣",
				            "leaf": true
				          },
				          {
				            "text": "固鎮縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "淮南市",
				        "children": [
				          {
				            "text": "大通區",
				            "leaf": true
				          },
				          {
				            "text": "田家庵區",
				            "leaf": true
				          },
				          {
				            "text": "謝家集區",
				            "leaf": true
				          },
				          {
				            "text": "八公山區",
				            "leaf": true
				          },
				          {
				            "text": "潘集區",
				            "leaf": true
				          },
				          {
				            "text": "鳳台縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "馬鞍山市",
				        "children": [
				          {
				            "text": "金家莊區",
				            "leaf": true
				          },
				          {
				            "text": "花山區",
				            "leaf": true
				          },
				          {
				            "text": "雨山區",
				            "leaf": true
				          },
				          {
				            "text": "當塗縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "淮北市",
				        "children": [
				          {
				            "text": "杜集區",
				            "leaf": true
				          },
				          {
				            "text": "相山區",
				            "leaf": true
				          },
				          {
				            "text": "烈山區",
				            "leaf": true
				          },
				          {
				            "text": "濉溪縣 ",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "銅陵市",
				        "children": [
				          {
				            "text": "銅官山區",
				            "leaf": true
				          },
				          {
				            "text": "獅子山區",
				            "leaf": true
				          },
				          {
				            "text": "銅陵縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "安慶市",
				        "children": [
				          {
				            "text": "迎江區",
				            "leaf": true
				          },
				          {
				            "text": "大觀區",
				            "leaf": true
				          },
				          {
				            "text": "宜秀區",
				            "leaf": true
				          },
				          {
				            "text": "懷寧縣",
				            "leaf": true
				          },
				          {
				            "text": "樅陽縣",
				            "leaf": true
				          },
				          {
				            "text": "潛山縣",
				            "leaf": true
				          },
				          {
				            "text": "太湖縣",
				            "leaf": true
				          },
				          {
				            "text": "宿松縣",
				            "leaf": true
				          },
				          {
				            "text": "望江縣",
				            "leaf": true
				          },
				          {
				            "text": "岳西縣",
				            "leaf": true
				          },
				          {
				            "text": "桐城市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "黃山市",
				        "children": [
				          {
				            "text": "屯溪區",
				            "leaf": true
				          },
				          {
				            "text": "黃山區",
				            "leaf": true
				          },
				          {
				            "text": "徽州區",
				            "leaf": true
				          },
				          {
				            "text": "歙縣",
				            "leaf": true
				          },
				          {
				            "text": "休寧縣",
				            "leaf": true
				          },
				          {
				            "text": "黟縣",
				            "leaf": true
				          },
				          {
				            "text": "祁門縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "滁州市",
				        "children": [
				          {
				            "text": "琅琊區",
				            "leaf": true
				          },
				          {
				            "text": "南譙區",
				            "leaf": true
				          },
				          {
				            "text": "來安縣",
				            "leaf": true
				          },
				          {
				            "text": "全椒縣",
				            "leaf": true
				          },
				          {
				            "text": "定遠縣",
				            "leaf": true
				          },
				          {
				            "text": "鳳陽縣",
				            "leaf": true
				          },
				          {
				            "text": "天長市",
				            "leaf": true
				          },
				          {
				            "text": "明光市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "阜陽市",
				        "children": [
				          {
				            "text": "穎州區",
				            "leaf": true
				          },
				          {
				            "text": "穎東區",
				            "leaf": true
				          },
				          {
				            "text": "穎泉區",
				            "leaf": true
				          },
				          {
				            "text": "臨泉縣",
				            "leaf": true
				          },
				          {
				            "text": "太和縣",
				            "leaf": true
				          },
				          {
				            "text": "阜南縣",
				            "leaf": true
				          },
				          {
				            "text": "穎上縣",
				            "leaf": true
				          },
				          {
				            "text": "界首市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "宿州市",
				        "children": [
				          {
				            "text": "埇橋區",
				            "leaf": true
				          },
				          {
				            "text": "碭山縣",
				            "leaf": true
				          },
				          {
				            "text": "蕭縣",
				            "leaf": true
				          },
				          {
				            "text": "靈璧縣",
				            "leaf": true
				          },
				          {
				            "text": "泗縣 ",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "巢湖市",
				        "children": [
				          {
				            "text": "居巢區",
				            "leaf": true
				          },
				          {
				            "text": "廬江縣",
				            "leaf": true
				          },
				          {
				            "text": "無為縣",
				            "leaf": true
				          },
				          {
				            "text": "含山縣",
				            "leaf": true
				          },
				          {
				            "text": "和縣 ",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "六安市",
				        "children": [
				          {
				            "text": "金安區",
				            "leaf": true
				          },
				          {
				            "text": "裕安區",
				            "leaf": true
				          },
				          {
				            "text": "壽縣",
				            "leaf": true
				          },
				          {
				            "text": "霍邱縣",
				            "leaf": true
				          },
				          {
				            "text": "舒城縣",
				            "leaf": true
				          },
				          {
				            "text": "金寨縣",
				            "leaf": true
				          },
				          {
				            "text": "霍山縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "亳州市",
				        "children": [
				          {
				            "text": "譙城區",
				            "leaf": true
				          },
				          {
				            "text": "渦陽縣",
				            "leaf": true
				          },
				          {
				            "text": "蒙城縣",
				            "leaf": true
				          },
				          {
				            "text": "利辛縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "池州市",
				        "children": [
				          {
				            "text": "貴池區",
				            "leaf": true
				          },
				          {
				            "text": "東至縣",
				            "leaf": true
				          },
				          {
				            "text": "石台縣",
				            "leaf": true
				          },
				          {
				            "text": "青陽縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "宣城市",
				        "children": [
				          {
				            "text": "宣州區",
				            "leaf": true
				          },
				          {
				            "text": "郎溪縣",
				            "leaf": true
				          },
				          {
				            "text": "廣德縣",
				            "leaf": true
				          },
				          {
				            "text": "涇縣",
				            "leaf": true
				          },
				          {
				            "text": "績溪縣",
				            "leaf": true
				          },
				          {
				            "text": "旌德縣",
				            "leaf": true
				          },
				          {
				            "text": "寧國市",
				            "leaf": true
				          }
				        ]
				      }
				    ]
				  },
				  {
				    "text": "福建省",
				    "children": [
				      {
				        "text": "福州市",
				        "children": [
				          {
				            "text": "鼓樓區",
				            "leaf": true
				          },
				          {
				            "text": "台江區",
				            "leaf": true
				          },
				          {
				            "text": "倉山區",
				            "leaf": true
				          },
				          {
				            "text": "馬尾區",
				            "leaf": true
				          },
				          {
				            "text": "晉安區",
				            "leaf": true
				          },
				          {
				            "text": "閩侯縣",
				            "leaf": true
				          },
				          {
				            "text": "連江縣",
				            "leaf": true
				          },
				          {
				            "text": "羅源縣",
				            "leaf": true
				          },
				          {
				            "text": "閩清縣",
				            "leaf": true
				          },
				          {
				            "text": "永泰縣",
				            "leaf": true
				          },
				          {
				            "text": "平潭縣",
				            "leaf": true
				          },
				          {
				            "text": "福清市",
				            "leaf": true
				          },
				          {
				            "text": "長樂市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "廈門市",
				        "children": [
				          {
				            "text": "思明區",
				            "leaf": true
				          },
				          {
				            "text": "海滄區",
				            "leaf": true
				          },
				          {
				            "text": "湖裡區",
				            "leaf": true
				          },
				          {
				            "text": "集美區",
				            "leaf": true
				          },
				          {
				            "text": "同安區",
				            "leaf": true
				          },
				          {
				            "text": "翔安區",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "寧德市",
				        "children": [
				          {
				            "text": "蕉城區",
				            "leaf": true
				          },
				          {
				            "text": "霞浦縣",
				            "leaf": true
				          },
				          {
				            "text": "古田縣",
				            "leaf": true
				          },
				          {
				            "text": "屏南縣",
				            "leaf": true
				          },
				          {
				            "text": "壽寧縣",
				            "leaf": true
				          },
				          {
				            "text": "周寧縣",
				            "leaf": true
				          },
				          {
				            "text": "柘榮縣",
				            "leaf": true
				          },
				          {
				            "text": "福安市",
				            "leaf": true
				          },
				          {
				            "text": "福鼎市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "莆田市",
				        "children": [
				          {
				            "text": "城廂區",
				            "leaf": true
				          },
				          {
				            "text": "涵江區",
				            "leaf": true
				          },
				          {
				            "text": "荔城區",
				            "leaf": true
				          },
				          {
				            "text": "秀嶼區",
				            "leaf": true
				          },
				          {
				            "text": "仙游縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "泉州市",
				        "children": [
				          {
				            "text": "鯉城區",
				            "leaf": true
				          },
				          {
				            "text": "豐澤區",
				            "leaf": true
				          },
				          {
				            "text": "洛江區",
				            "leaf": true
				          },
				          {
				            "text": "泉港區",
				            "leaf": true
				          },
				          {
				            "text": "惠安縣",
				            "leaf": true
				          },
				          {
				            "text": "安溪縣",
				            "leaf": true
				          },
				          {
				            "text": "永春縣",
				            "leaf": true
				          },
				          {
				            "text": "德化縣",
				            "leaf": true
				          },
				          {
				            "text": "石獅市",
				            "leaf": true
				          },
				          {
				            "text": "晉江市",
				            "leaf": true
				          },
				          {
				            "text": "南安市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "漳州市",
				        "children": [
				          {
				            "text": "薌城區",
				            "leaf": true
				          },
				          {
				            "text": "龍文區",
				            "leaf": true
				          },
				          {
				            "text": "雲霄縣",
				            "leaf": true
				          },
				          {
				            "text": "漳浦縣",
				            "leaf": true
				          },
				          {
				            "text": "詔安縣",
				            "leaf": true
				          },
				          {
				            "text": "長泰縣",
				            "leaf": true
				          },
				          {
				            "text": "東山縣",
				            "leaf": true
				          },
				          {
				            "text": "南靖縣",
				            "leaf": true
				          },
				          {
				            "text": "平和縣",
				            "leaf": true
				          },
				          {
				            "text": "華安縣",
				            "leaf": true
				          },
				          {
				            "text": "龍海市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "龍巖市",
				        "children": [
				          {
				            "text": "新羅區",
				            "leaf": true
				          },
				          {
				            "text": "長汀縣",
				            "leaf": true
				          },
				          {
				            "text": "永定縣",
				            "leaf": true
				          },
				          {
				            "text": "上杭縣",
				            "leaf": true
				          },
				          {
				            "text": "武平縣",
				            "leaf": true
				          },
				          {
				            "text": "連城縣",
				            "leaf": true
				          },
				          {
				            "text": "漳平市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "三明市",
				        "children": [
				          {
				            "text": "梅列區",
				            "leaf": true
				          },
				          {
				            "text": "三元區",
				            "leaf": true
				          },
				          {
				            "text": "明溪縣",
				            "leaf": true
				          },
				          {
				            "text": "清流縣",
				            "leaf": true
				          },
				          {
				            "text": "寧化縣",
				            "leaf": true
				          },
				          {
				            "text": "大田縣",
				            "leaf": true
				          },
				          {
				            "text": "尤溪縣",
				            "leaf": true
				          },
				          {
				            "text": "沙縣",
				            "leaf": true
				          },
				          {
				            "text": "將樂縣",
				            "leaf": true
				          },
				          {
				            "text": "泰寧縣",
				            "leaf": true
				          },
				          {
				            "text": "建寧縣",
				            "leaf": true
				          },
				          {
				            "text": "永安市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "南平市",
				        "children": [
				          {
				            "text": "延平區",
				            "leaf": true
				          },
				          {
				            "text": "順昌縣",
				            "leaf": true
				          },
				          {
				            "text": "浦城縣",
				            "leaf": true
				          },
				          {
				            "text": "光澤縣",
				            "leaf": true
				          },
				          {
				            "text": "松溪縣",
				            "leaf": true
				          },
				          {
				            "text": "政和縣",
				            "leaf": true
				          },
				          {
				            "text": "邵武市",
				            "leaf": true
				          },
				          {
				            "text": "武夷山市",
				            "leaf": true
				          },
				          {
				            "text": "建甌市",
				            "leaf": true
				          },
				          {
				            "text": "建陽市",
				            "leaf": true
				          }
				        ]
				      }
				    ]
				  },
				  {
				    "text": "江西省",
				    "children": [
				      {
				        "text": "鷹潭市",
				        "children": [
				          {
				            "text": "月湖區",
				            "leaf": true
				          },
				          {
				            "text": "余江縣",
				            "leaf": true
				          },
				          {
				            "text": "貴溪市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "新余市",
				        "children": [
				          {
				            "text": "渝水區",
				            "leaf": true
				          },
				          {
				            "text": "分宜縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "南昌市",
				        "children": [
				          {
				            "text": "東湖區",
				            "leaf": true
				          },
				          {
				            "text": "西湖區",
				            "leaf": true
				          },
				          {
				            "text": "青雲譜區",
				            "leaf": true
				          },
				          {
				            "text": "灣裡區",
				            "leaf": true
				          },
				          {
				            "text": "青山湖區",
				            "leaf": true
				          },
				          {
				            "text": "南昌縣",
				            "leaf": true
				          },
				          {
				            "text": "新增縣",
				            "leaf": true
				          },
				          {
				            "text": "安義縣",
				            "leaf": true
				          },
				          {
				            "text": "進賢縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "九江市",
				        "children": [
				          {
				            "text": "廬山區",
				            "leaf": true
				          },
				          {
				            "text": "潯陽區",
				            "leaf": true
				          },
				          {
				            "text": "九江縣",
				            "leaf": true
				          },
				          {
				            "text": "武寧縣",
				            "leaf": true
				          },
				          {
				            "text": "修水縣",
				            "leaf": true
				          },
				          {
				            "text": "永修縣",
				            "leaf": true
				          },
				          {
				            "text": "德安縣",
				            "leaf": true
				          },
				          {
				            "text": "星子縣",
				            "leaf": true
				          },
				          {
				            "text": "都昌縣",
				            "leaf": true
				          },
				          {
				            "text": "湖口縣",
				            "leaf": true
				          },
				          {
				            "text": "彭澤縣",
				            "leaf": true
				          },
				          {
				            "text": "瑞昌市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "上饒市",
				        "children": [
				          {
				            "text": "信州區",
				            "leaf": true
				          },
				          {
				            "text": "上饒縣",
				            "leaf": true
				          },
				          {
				            "text": "廣豐縣",
				            "leaf": true
				          },
				          {
				            "text": "玉山縣",
				            "leaf": true
				          },
				          {
				            "text": "鉛山縣",
				            "leaf": true
				          },
				          {
				            "text": "橫峰縣",
				            "leaf": true
				          },
				          {
				            "text": "弋陽縣",
				            "leaf": true
				          },
				          {
				            "text": "余干縣",
				            "leaf": true
				          },
				          {
				            "text": "鄱陽縣",
				            "leaf": true
				          },
				          {
				            "text": "萬年縣",
				            "leaf": true
				          },
				          {
				            "text": "婺源縣",
				            "leaf": true
				          },
				          {
				            "text": "德興市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "撫州市",
				        "children": [
				          {
				            "text": "臨川區",
				            "leaf": true
				          },
				          {
				            "text": "南城縣",
				            "leaf": true
				          },
				          {
				            "text": "黎川縣",
				            "leaf": true
				          },
				          {
				            "text": "南豐縣",
				            "leaf": true
				          },
				          {
				            "text": "崇仁縣",
				            "leaf": true
				          },
				          {
				            "text": "樂安縣",
				            "leaf": true
				          },
				          {
				            "text": "宜黃縣",
				            "leaf": true
				          },
				          {
				            "text": "金溪縣",
				            "leaf": true
				          },
				          {
				            "text": "資溪縣",
				            "leaf": true
				          },
				          {
				            "text": "東鄉縣",
				            "leaf": true
				          },
				          {
				            "text": "廣昌縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "宜春市",
				        "children": [
				          {
				            "text": "袁州區",
				            "leaf": true
				          },
				          {
				            "text": "奉新縣",
				            "leaf": true
				          },
				          {
				            "text": "萬載縣",
				            "leaf": true
				          },
				          {
				            "text": "上高縣",
				            "leaf": true
				          },
				          {
				            "text": "宜豐縣",
				            "leaf": true
				          },
				          {
				            "text": "靖安縣",
				            "leaf": true
				          },
				          {
				            "text": "銅鼓縣",
				            "leaf": true
				          },
				          {
				            "text": "豐城市",
				            "leaf": true
				          },
				          {
				            "text": "樟樹市",
				            "leaf": true
				          },
				          {
				            "text": "高安市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "吉安市",
				        "children": [
				          {
				            "text": "吉州區",
				            "leaf": true
				          },
				          {
				            "text": "青原區",
				            "leaf": true
				          },
				          {
				            "text": "吉安縣",
				            "leaf": true
				          },
				          {
				            "text": "吉水縣",
				            "leaf": true
				          },
				          {
				            "text": "峽江縣",
				            "leaf": true
				          },
				          {
				            "text": "新干縣",
				            "leaf": true
				          },
				          {
				            "text": "永豐縣",
				            "leaf": true
				          },
				          {
				            "text": "泰和縣",
				            "leaf": true
				          },
				          {
				            "text": "遂川縣",
				            "leaf": true
				          },
				          {
				            "text": "萬安縣",
				            "leaf": true
				          },
				          {
				            "text": "安福縣",
				            "leaf": true
				          },
				          {
				            "text": "永新縣",
				            "leaf": true
				          },
				          {
				            "text": "井岡山市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "贛州市",
				        "children": [
				          {
				            "text": "章貢區",
				            "leaf": true
				          },
				          {
				            "text": "贛縣",
				            "leaf": true
				          },
				          {
				            "text": "信豐縣",
				            "leaf": true
				          },
				          {
				            "text": "大余縣",
				            "leaf": true
				          },
				          {
				            "text": "上猶縣",
				            "leaf": true
				          },
				          {
				            "text": "崇義縣",
				            "leaf": true
				          },
				          {
				            "text": "安遠縣",
				            "leaf": true
				          },
				          {
				            "text": "龍南縣",
				            "leaf": true
				          },
				          {
				            "text": "定南縣",
				            "leaf": true
				          },
				          {
				            "text": "全南縣",
				            "leaf": true
				          },
				          {
				            "text": "寧都縣",
				            "leaf": true
				          },
				          {
				            "text": "於都縣",
				            "leaf": true
				          },
				          {
				            "text": "興國縣",
				            "leaf": true
				          },
				          {
				            "text": "會昌縣",
				            "leaf": true
				          },
				          {
				            "text": "尋烏縣",
				            "leaf": true
				          },
				          {
				            "text": "石城縣",
				            "leaf": true
				          },
				          {
				            "text": "瑞金市",
				            "leaf": true
				          },
				          {
				            "text": "南康市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "景德鎮市",
				        "children": [
				          {
				            "text": "昌江區",
				            "leaf": true
				          },
				          {
				            "text": "珠山區",
				            "leaf": true
				          },
				          {
				            "text": "浮梁縣",
				            "leaf": true
				          },
				          {
				            "text": "樂平市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "萍鄉市",
				        "children": [
				          {
				            "text": "安源區",
				            "leaf": true
				          },
				          {
				            "text": "湘東區",
				            "leaf": true
				          },
				          {
				            "text": "蓮花縣",
				            "leaf": true
				          },
				          {
				            "text": "上栗縣",
				            "leaf": true
				          },
				          {
				            "text": "蘆溪縣",
				            "leaf": true
				          }
				        ]
				      }
				    ]
				  },
				  {
				    "text": "山東省",
				    "children": [
				      {
				        "text": "菏澤市",
				        "children": [
				          {
				            "text": "牡丹區",
				            "leaf": true
				          },
				          {
				            "text": "曹縣",
				            "leaf": true
				          },
				          {
				            "text": "單縣",
				            "leaf": true
				          },
				          {
				            "text": "成武縣",
				            "leaf": true
				          },
				          {
				            "text": "巨野縣",
				            "leaf": true
				          },
				          {
				            "text": "鄆城縣",
				            "leaf": true
				          },
				          {
				            "text": "鄄城縣",
				            "leaf": true
				          },
				          {
				            "text": "定陶縣",
				            "leaf": true
				          },
				          {
				            "text": "東明縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "濟南市",
				        "children": [
				          {
				            "text": "歷下區",
				            "leaf": true
				          },
				          {
				            "text": "市中區",
				            "leaf": true
				          },
				          {
				            "text": "槐蔭區",
				            "leaf": true
				          },
				          {
				            "text": "天橋區",
				            "leaf": true
				          },
				          {
				            "text": "歷城區",
				            "leaf": true
				          },
				          {
				            "text": "長清區",
				            "leaf": true
				          },
				          {
				            "text": "平陰縣",
				            "leaf": true
				          },
				          {
				            "text": "濟陽縣",
				            "leaf": true
				          },
				          {
				            "text": "商河縣",
				            "leaf": true
				          },
				          {
				            "text": "章丘市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "青島市",
				        "children": [
				          {
				            "text": "市南區",
				            "leaf": true
				          },
				          {
				            "text": "市北區",
				            "leaf": true
				          },
				          {
				            "text": "四方區",
				            "leaf": true
				          },
				          {
				            "text": "黃島區",
				            "leaf": true
				          },
				          {
				            "text": "嶗山區",
				            "leaf": true
				          },
				          {
				            "text": "李滄區",
				            "leaf": true
				          },
				          {
				            "text": "城陽區",
				            "leaf": true
				          },
				          {
				            "text": "膠州市",
				            "leaf": true
				          },
				          {
				            "text": "即墨市",
				            "leaf": true
				          },
				          {
				            "text": "平度市",
				            "leaf": true
				          },
				          {
				            "text": "膠南市",
				            "leaf": true
				          },
				          {
				            "text": "萊西市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "淄博市",
				        "children": [
				          {
				            "text": "淄川區",
				            "leaf": true
				          },
				          {
				            "text": "張店區",
				            "leaf": true
				          },
				          {
				            "text": "博山區",
				            "leaf": true
				          },
				          {
				            "text": "臨淄區",
				            "leaf": true
				          },
				          {
				            "text": "周村區",
				            "leaf": true
				          },
				          {
				            "text": "桓台縣",
				            "leaf": true
				          },
				          {
				            "text": "高青縣",
				            "leaf": true
				          },
				          {
				            "text": "沂源縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "德州市",
				        "children": [
				          {
				            "text": "德城區",
				            "leaf": true
				          },
				          {
				            "text": "陵縣",
				            "leaf": true
				          },
				          {
				            "text": "寧津縣",
				            "leaf": true
				          },
				          {
				            "text": "慶雲縣",
				            "leaf": true
				          },
				          {
				            "text": "臨邑縣",
				            "leaf": true
				          },
				          {
				            "text": "齊河縣",
				            "leaf": true
				          },
				          {
				            "text": "平原縣",
				            "leaf": true
				          },
				          {
				            "text": "夏津縣",
				            "leaf": true
				          },
				          {
				            "text": "武城縣",
				            "leaf": true
				          },
				          {
				            "text": "樂陵市",
				            "leaf": true
				          },
				          {
				            "text": "禹城市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "煙台市",
				        "children": [
				          {
				            "text": "芝罘區",
				            "leaf": true
				          },
				          {
				            "text": "福山區",
				            "leaf": true
				          },
				          {
				            "text": "牟平區",
				            "leaf": true
				          },
				          {
				            "text": "萊山區",
				            "leaf": true
				          },
				          {
				            "text": "長島縣",
				            "leaf": true
				          },
				          {
				            "text": "龍口市",
				            "leaf": true
				          },
				          {
				            "text": "萊陽市",
				            "leaf": true
				          },
				          {
				            "text": "萊州市",
				            "leaf": true
				          },
				          {
				            "text": "蓬萊市",
				            "leaf": true
				          },
				          {
				            "text": "招遠市",
				            "leaf": true
				          },
				          {
				            "text": "棲霞市",
				            "leaf": true
				          },
				          {
				            "text": "海陽市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "濰坊市",
				        "children": [
				          {
				            "text": "濰城區",
				            "leaf": true
				          },
				          {
				            "text": "寒亭區",
				            "leaf": true
				          },
				          {
				            "text": "坊子區",
				            "leaf": true
				          },
				          {
				            "text": "奎文區",
				            "leaf": true
				          },
				          {
				            "text": "臨朐縣",
				            "leaf": true
				          },
				          {
				            "text": "昌樂縣",
				            "leaf": true
				          },
				          {
				            "text": "青州市",
				            "leaf": true
				          },
				          {
				            "text": "諸城市",
				            "leaf": true
				          },
				          {
				            "text": "壽光市",
				            "leaf": true
				          },
				          {
				            "text": "安丘市",
				            "leaf": true
				          },
				          {
				            "text": "高密市",
				            "leaf": true
				          },
				          {
				            "text": "昌邑市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "濟寧市",
				        "children": [
				          {
				            "text": "市中區",
				            "leaf": true
				          },
				          {
				            "text": "任城區",
				            "leaf": true
				          },
				          {
				            "text": "微山縣",
				            "leaf": true
				          },
				          {
				            "text": "魚台縣",
				            "leaf": true
				          },
				          {
				            "text": "金鄉縣",
				            "leaf": true
				          },
				          {
				            "text": "嘉祥縣",
				            "leaf": true
				          },
				          {
				            "text": "汶上縣",
				            "leaf": true
				          },
				          {
				            "text": "泗水縣",
				            "leaf": true
				          },
				          {
				            "text": "梁山縣",
				            "leaf": true
				          },
				          {
				            "text": "曲阜市",
				            "leaf": true
				          },
				          {
				            "text": "兗州市",
				            "leaf": true
				          },
				          {
				            "text": "鄒城市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "泰安市",
				        "children": [
				          {
				            "text": "泰山區",
				            "leaf": true
				          },
				          {
				            "text": "岱岳區",
				            "leaf": true
				          },
				          {
				            "text": "寧陽縣",
				            "leaf": true
				          },
				          {
				            "text": "東平縣",
				            "leaf": true
				          },
				          {
				            "text": "新泰市",
				            "leaf": true
				          },
				          {
				            "text": "肥城市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "臨沂市",
				        "children": [
				          {
				            "text": "蘭山區",
				            "leaf": true
				          },
				          {
				            "text": "羅莊區",
				            "leaf": true
				          },
				          {
				            "text": "河東區",
				            "leaf": true
				          },
				          {
				            "text": "沂南縣",
				            "leaf": true
				          },
				          {
				            "text": "郯城縣",
				            "leaf": true
				          },
				          {
				            "text": "沂水縣",
				            "leaf": true
				          },
				          {
				            "text": "蒼山縣",
				            "leaf": true
				          },
				          {
				            "text": "費縣",
				            "leaf": true
				          },
				          {
				            "text": "平邑縣",
				            "leaf": true
				          },
				          {
				            "text": "莒南縣",
				            "leaf": true
				          },
				          {
				            "text": "蒙陰縣",
				            "leaf": true
				          },
				          {
				            "text": "臨沭縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "濱州市",
				        "children": [
				          {
				            "text": "濱城區",
				            "leaf": true
				          },
				          {
				            "text": "惠民縣",
				            "leaf": true
				          },
				          {
				            "text": "陽信縣",
				            "leaf": true
				          },
				          {
				            "text": "無棣縣",
				            "leaf": true
				          },
				          {
				            "text": "沾化縣",
				            "leaf": true
				          },
				          {
				            "text": "博興縣",
				            "leaf": true
				          },
				          {
				            "text": "鄒平縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "東營市",
				        "children": [
				          {
				            "text": "東營區",
				            "leaf": true
				          },
				          {
				            "text": "河口區",
				            "leaf": true
				          },
				          {
				            "text": "墾利縣",
				            "leaf": true
				          },
				          {
				            "text": "利津縣",
				            "leaf": true
				          },
				          {
				            "text": "廣饒縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "威海市",
				        "children": [
				          {
				            "text": "環翠區",
				            "leaf": true
				          },
				          {
				            "text": "文登市",
				            "leaf": true
				          },
				          {
				            "text": "榮成市",
				            "leaf": true
				          },
				          {
				            "text": "乳山市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "棗莊市",
				        "children": [
				          {
				            "text": "市中區",
				            "leaf": true
				          },
				          {
				            "text": "薛城區",
				            "leaf": true
				          },
				          {
				            "text": "嶧城區",
				            "leaf": true
				          },
				          {
				            "text": "台兒莊區",
				            "leaf": true
				          },
				          {
				            "text": "山亭區",
				            "leaf": true
				          },
				          {
				            "text": "滕州市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "日照市",
				        "children": [
				          {
				            "text": "東港區",
				            "leaf": true
				          },
				          {
				            "text": "嵐山區",
				            "leaf": true
				          },
				          {
				            "text": "五蓮縣",
				            "leaf": true
				          },
				          {
				            "text": "莒縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "萊蕪市",
				        "children": [
				          {
				            "text": "萊城區",
				            "leaf": true
				          },
				          {
				            "text": "鋼城區",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "聊城市",
				        "children": [
				          {
				            "text": "東昌府區",
				            "leaf": true
				          },
				          {
				            "text": "陽谷縣",
				            "leaf": true
				          },
				          {
				            "text": "莘縣",
				            "leaf": true
				          },
				          {
				            "text": "茌平縣",
				            "leaf": true
				          },
				          {
				            "text": "東阿縣",
				            "leaf": true
				          },
				          {
				            "text": "冠縣",
				            "leaf": true
				          },
				          {
				            "text": "高唐縣",
				            "leaf": true
				          },
				          {
				            "text": "臨清市",
				            "leaf": true
				          }
				        ]
				      }
				    ]
				  },
				  {
				    "text": "河南省",
				    "children": [
				      {
				        "text": "商丘市",
				        "children": [
				          {
				            "text": "梁園區",
				            "leaf": true
				          },
				          {
				            "text": "睢陽區",
				            "leaf": true
				          },
				          {
				            "text": "民權縣",
				            "leaf": true
				          },
				          {
				            "text": "睢縣",
				            "leaf": true
				          },
				          {
				            "text": "寧陵縣",
				            "leaf": true
				          },
				          {
				            "text": "柘城縣",
				            "leaf": true
				          },
				          {
				            "text": "虞城縣",
				            "leaf": true
				          },
				          {
				            "text": "夏邑縣",
				            "leaf": true
				          },
				          {
				            "text": "永城市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "鄭州市",
				        "children": [
				          {
				            "text": "中原區",
				            "leaf": true
				          },
				          {
				            "text": "二七區",
				            "leaf": true
				          },
				          {
				            "text": "管城回族區",
				            "leaf": true
				          },
				          {
				            "text": "金水區",
				            "leaf": true
				          },
				          {
				            "text": "上街區",
				            "leaf": true
				          },
				          {
				            "text": "惠濟區",
				            "leaf": true
				          },
				          {
				            "text": "中牟縣",
				            "leaf": true
				          },
				          {
				            "text": "鞏義市",
				            "leaf": true
				          },
				          {
				            "text": "滎陽市",
				            "leaf": true
				          },
				          {
				            "text": "新密市",
				            "leaf": true
				          },
				          {
				            "text": "新鄭市",
				            "leaf": true
				          },
				          {
				            "text": "登封市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "安陽市",
				        "children": [
				          {
				            "text": "文峰區",
				            "leaf": true
				          },
				          {
				            "text": "北關區",
				            "leaf": true
				          },
				          {
				            "text": "殷都區",
				            "leaf": true
				          },
				          {
				            "text": "龍安區",
				            "leaf": true
				          },
				          {
				            "text": "安陽縣",
				            "leaf": true
				          },
				          {
				            "text": "湯陰縣",
				            "leaf": true
				          },
				          {
				            "text": "滑縣",
				            "leaf": true
				          },
				          {
				            "text": "內黃縣",
				            "leaf": true
				          },
				          {
				            "text": "林州市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "新鄉市",
				        "children": [
				          {
				            "text": "紅旗區",
				            "leaf": true
				          },
				          {
				            "text": "衛濱區",
				            "leaf": true
				          },
				          {
				            "text": "鳳泉區",
				            "leaf": true
				          },
				          {
				            "text": "牧野區",
				            "leaf": true
				          },
				          {
				            "text": "新鄉縣",
				            "leaf": true
				          },
				          {
				            "text": "獲嘉縣",
				            "leaf": true
				          },
				          {
				            "text": "原陽縣",
				            "leaf": true
				          },
				          {
				            "text": "延津縣",
				            "leaf": true
				          },
				          {
				            "text": "封丘縣",
				            "leaf": true
				          },
				          {
				            "text": "長垣縣",
				            "leaf": true
				          },
				          {
				            "text": "衛輝市",
				            "leaf": true
				          },
				          {
				            "text": "輝縣市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "許昌市",
				        "children": [
				          {
				            "text": "魏都區",
				            "leaf": true
				          },
				          {
				            "text": "許昌縣",
				            "leaf": true
				          },
				          {
				            "text": "鄢陵縣",
				            "leaf": true
				          },
				          {
				            "text": "襄城縣",
				            "leaf": true
				          },
				          {
				            "text": "禹州市",
				            "leaf": true
				          },
				          {
				            "text": "長葛市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "平頂山市",
				        "children": [
				          {
				            "text": "新華區",
				            "leaf": true
				          },
				          {
				            "text": "衛東區",
				            "leaf": true
				          },
				          {
				            "text": "石龍區",
				            "leaf": true
				          },
				          {
				            "text": "湛河區",
				            "leaf": true
				          },
				          {
				            "text": "寶豐縣",
				            "leaf": true
				          },
				          {
				            "text": "葉縣",
				            "leaf": true
				          },
				          {
				            "text": "魯山縣",
				            "leaf": true
				          },
				          {
				            "text": "郟縣",
				            "leaf": true
				          },
				          {
				            "text": "舞鋼市",
				            "leaf": true
				          },
				          {
				            "text": "汝州市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "信陽市",
				        "children": [
				          {
				            "text": "溮河區",
				            "leaf": true
				          },
				          {
				            "text": "平橋區",
				            "leaf": true
				          },
				          {
				            "text": "羅山縣",
				            "leaf": true
				          },
				          {
				            "text": "光山縣",
				            "leaf": true
				          },
				          {
				            "text": "新縣",
				            "leaf": true
				          },
				          {
				            "text": "商城縣",
				            "leaf": true
				          },
				          {
				            "text": "固始縣",
				            "leaf": true
				          },
				          {
				            "text": "潢川縣",
				            "leaf": true
				          },
				          {
				            "text": "淮濱縣",
				            "leaf": true
				          },
				          {
				            "text": "息縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "南陽市",
				        "children": [
				          {
				            "text": "宛城區",
				            "leaf": true
				          },
				          {
				            "text": "臥龍區",
				            "leaf": true
				          },
				          {
				            "text": "南召縣",
				            "leaf": true
				          },
				          {
				            "text": "方城縣",
				            "leaf": true
				          },
				          {
				            "text": "西峽縣",
				            "leaf": true
				          },
				          {
				            "text": "鎮平縣",
				            "leaf": true
				          },
				          {
				            "text": "內鄉縣",
				            "leaf": true
				          },
				          {
				            "text": "淅川縣",
				            "leaf": true
				          },
				          {
				            "text": "社旗縣",
				            "leaf": true
				          },
				          {
				            "text": "唐河縣",
				            "leaf": true
				          },
				          {
				            "text": "新野縣",
				            "leaf": true
				          },
				          {
				            "text": "桐柏縣",
				            "leaf": true
				          },
				          {
				            "text": "鄧州市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "開封市",
				        "children": [
				          {
				            "text": "龍亭區",
				            "leaf": true
				          },
				          {
				            "text": "順河回族區",
				            "leaf": true
				          },
				          {
				            "text": "鼓樓區",
				            "leaf": true
				          },
				          {
				            "text": "禹王台區",
				            "leaf": true
				          },
				          {
				            "text": "金明區",
				            "leaf": true
				          },
				          {
				            "text": "杞縣",
				            "leaf": true
				          },
				          {
				            "text": "通許縣",
				            "leaf": true
				          },
				          {
				            "text": "尉氏縣",
				            "leaf": true
				          },
				          {
				            "text": "開封縣",
				            "leaf": true
				          },
				          {
				            "text": "蘭考縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "洛陽市",
				        "children": [
				          {
				            "text": "老城區",
				            "leaf": true
				          },
				          {
				            "text": "西工區",
				            "leaf": true
				          },
				          {
				            "text": "瀍河回族區",
				            "leaf": true
				          },
				          {
				            "text": "澗西區",
				            "leaf": true
				          },
				          {
				            "text": "吉利區",
				            "leaf": true
				          },
				          {
				            "text": "洛龍區",
				            "leaf": true
				          },
				          {
				            "text": "孟津縣",
				            "leaf": true
				          },
				          {
				            "text": "新安縣",
				            "leaf": true
				          },
				          {
				            "text": "欒川縣",
				            "leaf": true
				          },
				          {
				            "text": "嵩縣",
				            "leaf": true
				          },
				          {
				            "text": "汝陽縣",
				            "leaf": true
				          },
				          {
				            "text": "宜陽縣",
				            "leaf": true
				          },
				          {
				            "text": "洛寧縣",
				            "leaf": true
				          },
				          {
				            "text": "伊川縣",
				            "leaf": true
				          },
				          {
				            "text": "偃師市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "濟源市",
				        "leaf": true
				      },
				      {
				        "text": "焦作市",
				        "children": [
				          {
				            "text": "解放區",
				            "leaf": true
				          },
				          {
				            "text": "中站區",
				            "leaf": true
				          },
				          {
				            "text": "馬村區",
				            "leaf": true
				          },
				          {
				            "text": "山陽區",
				            "leaf": true
				          },
				          {
				            "text": "修武縣",
				            "leaf": true
				          },
				          {
				            "text": "博愛縣",
				            "leaf": true
				          },
				          {
				            "text": "武陟縣",
				            "leaf": true
				          },
				          {
				            "text": "溫縣",
				            "leaf": true
				          },
				          {
				            "text": "沁陽市",
				            "leaf": true
				          },
				          {
				            "text": "孟州市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "鶴壁市",
				        "children": [
				          {
				            "text": "鶴山區",
				            "leaf": true
				          },
				          {
				            "text": "山城區",
				            "leaf": true
				          },
				          {
				            "text": "淇濱區",
				            "leaf": true
				          },
				          {
				            "text": "浚縣",
				            "leaf": true
				          },
				          {
				            "text": "淇縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "濮陽市",
				        "children": [
				          {
				            "text": "華龍區",
				            "leaf": true
				          },
				          {
				            "text": "清豐縣",
				            "leaf": true
				          },
				          {
				            "text": "南樂縣",
				            "leaf": true
				          },
				          {
				            "text": "范縣",
				            "leaf": true
				          },
				          {
				            "text": "台前縣",
				            "leaf": true
				          },
				          {
				            "text": "濮陽縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "周口市",
				        "children": [
				          {
				            "text": "川匯區",
				            "leaf": true
				          },
				          {
				            "text": "扶溝縣",
				            "leaf": true
				          },
				          {
				            "text": "西華縣",
				            "leaf": true
				          },
				          {
				            "text": "商水縣",
				            "leaf": true
				          },
				          {
				            "text": "沈丘縣",
				            "leaf": true
				          },
				          {
				            "text": "鄲城縣",
				            "leaf": true
				          },
				          {
				            "text": "淮陽縣",
				            "leaf": true
				          },
				          {
				            "text": "太康縣",
				            "leaf": true
				          },
				          {
				            "text": "鹿邑縣",
				            "leaf": true
				          },
				          {
				            "text": "項城市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "漯河市",
				        "children": [
				          {
				            "text": "源匯區",
				            "leaf": true
				          },
				          {
				            "text": "郾城區",
				            "leaf": true
				          },
				          {
				            "text": "召陵區",
				            "leaf": true
				          },
				          {
				            "text": "舞陽縣",
				            "leaf": true
				          },
				          {
				            "text": "臨穎縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "駐馬店市",
				        "children": [
				          {
				            "text": "驛城區",
				            "leaf": true
				          },
				          {
				            "text": "西平縣",
				            "leaf": true
				          },
				          {
				            "text": "上蔡縣",
				            "leaf": true
				          },
				          {
				            "text": "平輿縣",
				            "leaf": true
				          },
				          {
				            "text": "正陽縣",
				            "leaf": true
				          },
				          {
				            "text": "確山縣",
				            "leaf": true
				          },
				          {
				            "text": "泌陽縣",
				            "leaf": true
				          },
				          {
				            "text": "汝南縣",
				            "leaf": true
				          },
				          {
				            "text": "遂平縣",
				            "leaf": true
				          },
				          {
				            "text": "新蔡縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "三門峽市",
				        "children": [
				          {
				            "text": "湖濱區",
				            "leaf": true
				          },
				          {
				            "text": "澠池縣",
				            "leaf": true
				          },
				          {
				            "text": "陝縣",
				            "leaf": true
				          },
				          {
				            "text": "盧氏縣",
				            "leaf": true
				          },
				          {
				            "text": "義馬市",
				            "leaf": true
				          },
				          {
				            "text": "靈寶市",
				            "leaf": true
				          }
				        ]
				      }
				    ]
				  },
				  {
				    "text": "湖北省",
				    "children": [
				      {
				        "text": "武漢市",
				        "children": [
				          {
				            "text": "江岸區",
				            "leaf": true
				          },
				          {
				            "text": "江漢區",
				            "leaf": true
				          },
				          {
				            "text": "礄口區",
				            "leaf": true
				          },
				          {
				            "text": "漢陽區",
				            "leaf": true
				          },
				          {
				            "text": "武昌區",
				            "leaf": true
				          },
				          {
				            "text": "青山區",
				            "leaf": true
				          },
				          {
				            "text": "洪山區",
				            "leaf": true
				          },
				          {
				            "text": "東西湖區",
				            "leaf": true
				          },
				          {
				            "text": "漢南區",
				            "leaf": true
				          },
				          {
				            "text": "蔡甸區",
				            "leaf": true
				          },
				          {
				            "text": "江夏區",
				            "leaf": true
				          },
				          {
				            "text": "黃陂區",
				            "leaf": true
				          },
				          {
				            "text": "新洲區",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "襄樊市",
				        "children": [
				          {
				            "text": "襄城區",
				            "leaf": true
				          },
				          {
				            "text": "樊城區",
				            "leaf": true
				          },
				          {
				            "text": "襄陽區",
				            "leaf": true
				          },
				          {
				            "text": "南漳縣",
				            "leaf": true
				          },
				          {
				            "text": "谷城縣",
				            "leaf": true
				          },
				          {
				            "text": "保康縣",
				            "leaf": true
				          },
				          {
				            "text": "老河口市",
				            "leaf": true
				          },
				          {
				            "text": "棗陽市",
				            "leaf": true
				          },
				          {
				            "text": "宜城市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "鄂州市",
				        "children": [
				          {
				            "text": "梁子湖區",
				            "leaf": true
				          },
				          {
				            "text": "華容區",
				            "leaf": true
				          },
				          {
				            "text": "鄂城區",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "孝感市",
				        "children": [
				          {
				            "text": "孝南區",
				            "leaf": true
				          },
				          {
				            "text": "孝昌縣",
				            "leaf": true
				          },
				          {
				            "text": "大悟縣",
				            "leaf": true
				          },
				          {
				            "text": "雲夢縣",
				            "leaf": true
				          },
				          {
				            "text": "應城市",
				            "leaf": true
				          },
				          {
				            "text": "安陸市",
				            "leaf": true
				          },
				          {
				            "text": "漢川市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "黃岡市",
				        "children": [
				          {
				            "text": "黃州區",
				            "leaf": true
				          },
				          {
				            "text": "團風縣",
				            "leaf": true
				          },
				          {
				            "text": "紅安縣",
				            "leaf": true
				          },
				          {
				            "text": "羅田縣",
				            "leaf": true
				          },
				          {
				            "text": "英山縣",
				            "leaf": true
				          },
				          {
				            "text": "浠水縣",
				            "leaf": true
				          },
				          {
				            "text": "蘄春縣",
				            "leaf": true
				          },
				          {
				            "text": "黃梅縣",
				            "leaf": true
				          },
				          {
				            "text": "麻城市",
				            "leaf": true
				          },
				          {
				            "text": "武穴市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "黃石市",
				        "children": [
				          {
				            "text": "黃石港區",
				            "leaf": true
				          },
				          {
				            "text": "西塞山區",
				            "leaf": true
				          },
				          {
				            "text": "下陸區",
				            "leaf": true
				          },
				          {
				            "text": "鐵山區",
				            "leaf": true
				          },
				          {
				            "text": "陽新縣",
				            "leaf": true
				          },
				          {
				            "text": "大冶市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "鹹寧市",
				        "children": [
				          {
				            "text": "鹹安區",
				            "leaf": true
				          },
				          {
				            "text": "嘉魚縣",
				            "leaf": true
				          },
				          {
				            "text": "通城縣",
				            "leaf": true
				          },
				          {
				            "text": "崇陽縣",
				            "leaf": true
				          },
				          {
				            "text": "通山縣",
				            "leaf": true
				          },
				          {
				            "text": "赤壁市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "荊州市",
				        "children": [
				          {
				            "text": "沙市區",
				            "leaf": true
				          },
				          {
				            "text": "荊州區",
				            "leaf": true
				          },
				          {
				            "text": "公安縣",
				            "leaf": true
				          },
				          {
				            "text": "監利縣",
				            "leaf": true
				          },
				          {
				            "text": "江陵縣",
				            "leaf": true
				          },
				          {
				            "text": "石首市",
				            "leaf": true
				          },
				          {
				            "text": "洪湖市",
				            "leaf": true
				          },
				          {
				            "text": "松滋市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "宜昌市",
				        "children": [
				          {
				            "text": "西陵區",
				            "leaf": true
				          },
				          {
				            "text": "伍家崗區",
				            "leaf": true
				          },
				          {
				            "text": "點軍區",
				            "leaf": true
				          },
				          {
				            "text": "猇亭區",
				            "leaf": true
				          },
				          {
				            "text": "夷陵區",
				            "leaf": true
				          },
				          {
				            "text": "遠安縣",
				            "leaf": true
				          },
				          {
				            "text": "興山縣",
				            "leaf": true
				          },
				          {
				            "text": "秭歸縣",
				            "leaf": true
				          },
				          {
				            "text": "長陽土家族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "五峰土家族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "宜都市",
				            "leaf": true
				          },
				          {
				            "text": "當陽市",
				            "leaf": true
				          },
				          {
				            "text": "枝江市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "恩施土家族苗族自治州",
				        "children": [
				          {
				            "text": "恩施市",
				            "leaf": true
				          },
				          {
				            "text": "利川市",
				            "leaf": true
				          },
				          {
				            "text": "建始縣",
				            "leaf": true
				          },
				          {
				            "text": "巴東縣",
				            "leaf": true
				          },
				          {
				            "text": "宣恩縣",
				            "leaf": true
				          },
				          {
				            "text": "鹹豐縣",
				            "leaf": true
				          },
				          {
				            "text": "來鳳縣",
				            "leaf": true
				          },
				          {
				            "text": "鶴峰縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "神農架林區",
				        "leaf": true
				      },
				      {
				        "text": "十堰市",
				        "children": [
				          {
				            "text": "茅箭區",
				            "leaf": true
				          },
				          {
				            "text": "張灣區",
				            "leaf": true
				          },
				          {
				            "text": "鄖縣",
				            "leaf": true
				          },
				          {
				            "text": "鄖西縣",
				            "leaf": true
				          },
				          {
				            "text": "竹山縣",
				            "leaf": true
				          },
				          {
				            "text": "竹溪縣",
				            "leaf": true
				          },
				          {
				            "text": "房縣",
				            "leaf": true
				          },
				          {
				            "text": "丹江口市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "隨州市",
				        "children": [
				          {
				            "text": "曾都區",
				            "leaf": true
				          },
				          {
				            "text": "廣水市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "荊門市",
				        "children": [
				          {
				            "text": "東寶區",
				            "leaf": true
				          },
				          {
				            "text": "掇刀區",
				            "leaf": true
				          },
				          {
				            "text": "京山縣",
				            "leaf": true
				          },
				          {
				            "text": "沙洋縣",
				            "leaf": true
				          },
				          {
				            "text": "鍾祥市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "仙桃市",
				        "leaf": true
				      },
				      {
				        "text": "天門市",
				        "leaf": true
				      },
				      {
				        "text": "潛江市",
				        "leaf": true
				      }
				    ]
				  },
				  {
				    "text": "湖南省",
				    "children": [
				      {
				        "text": "岳陽市",
				        "children": [
				          {
				            "text": "岳陽樓區",
				            "leaf": true
				          },
				          {
				            "text": "雲溪區",
				            "leaf": true
				          },
				          {
				            "text": "君山區",
				            "leaf": true
				          },
				          {
				            "text": "岳陽縣",
				            "leaf": true
				          },
				          {
				            "text": "華容縣",
				            "leaf": true
				          },
				          {
				            "text": "湘陰縣",
				            "leaf": true
				          },
				          {
				            "text": "平江縣",
				            "leaf": true
				          },
				          {
				            "text": "汨羅市",
				            "leaf": true
				          },
				          {
				            "text": "臨湘市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "長沙市",
				        "children": [
				          {
				            "text": "芙蓉區",
				            "leaf": true
				          },
				          {
				            "text": "天心區",
				            "leaf": true
				          },
				          {
				            "text": "岳麓區",
				            "leaf": true
				          },
				          {
				            "text": "開福區",
				            "leaf": true
				          },
				          {
				            "text": "雨花區",
				            "leaf": true
				          },
				          {
				            "text": "長沙縣",
				            "leaf": true
				          },
				          {
				            "text": "望城縣",
				            "leaf": true
				          },
				          {
				            "text": "寧鄉縣",
				            "leaf": true
				          },
				          {
				            "text": "瀏陽市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "湘潭市",
				        "children": [
				          {
				            "text": "雨湖區",
				            "leaf": true
				          },
				          {
				            "text": "岳塘區",
				            "leaf": true
				          },
				          {
				            "text": "湘潭縣",
				            "leaf": true
				          },
				          {
				            "text": "湘鄉市",
				            "leaf": true
				          },
				          {
				            "text": "韶山市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "株洲市",
				        "children": [
				          {
				            "text": "荷塘區",
				            "leaf": true
				          },
				          {
				            "text": "蘆淞區",
				            "leaf": true
				          },
				          {
				            "text": "石峰區",
				            "leaf": true
				          },
				          {
				            "text": "天元區",
				            "leaf": true
				          },
				          {
				            "text": "株洲縣",
				            "leaf": true
				          },
				          {
				            "text": "攸縣",
				            "leaf": true
				          },
				          {
				            "text": "茶陵縣",
				            "leaf": true
				          },
				          {
				            "text": "炎陵縣",
				            "leaf": true
				          },
				          {
				            "text": "醴陵市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "衡陽市",
				        "children": [
				          {
				            "text": "珠暉區",
				            "leaf": true
				          },
				          {
				            "text": "雁峰區",
				            "leaf": true
				          },
				          {
				            "text": "石鼓區",
				            "leaf": true
				          },
				          {
				            "text": "蒸湘區",
				            "leaf": true
				          },
				          {
				            "text": "南岳區",
				            "leaf": true
				          },
				          {
				            "text": "衡陽縣",
				            "leaf": true
				          },
				          {
				            "text": "衡南縣",
				            "leaf": true
				          },
				          {
				            "text": "衡山縣",
				            "leaf": true
				          },
				          {
				            "text": "衡東縣",
				            "leaf": true
				          },
				          {
				            "text": "祁東縣",
				            "leaf": true
				          },
				          {
				            "text": "耒陽市",
				            "leaf": true
				          },
				          {
				            "text": "常寧市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "郴州市",
				        "children": [
				          {
				            "text": "北湖區",
				            "leaf": true
				          },
				          {
				            "text": "蘇仙區",
				            "leaf": true
				          },
				          {
				            "text": "桂陽縣",
				            "leaf": true
				          },
				          {
				            "text": "宜章縣",
				            "leaf": true
				          },
				          {
				            "text": "永興縣",
				            "leaf": true
				          },
				          {
				            "text": "嘉禾縣",
				            "leaf": true
				          },
				          {
				            "text": "臨武縣",
				            "leaf": true
				          },
				          {
				            "text": "汝城縣",
				            "leaf": true
				          },
				          {
				            "text": "桂東縣",
				            "leaf": true
				          },
				          {
				            "text": "安仁縣",
				            "leaf": true
				          },
				          {
				            "text": "資興市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "常德市",
				        "children": [
				          {
				            "text": "武陵區",
				            "leaf": true
				          },
				          {
				            "text": "鼎城區",
				            "leaf": true
				          },
				          {
				            "text": "安鄉縣",
				            "leaf": true
				          },
				          {
				            "text": "漢壽縣",
				            "leaf": true
				          },
				          {
				            "text": "澧縣",
				            "leaf": true
				          },
				          {
				            "text": "臨澧縣",
				            "leaf": true
				          },
				          {
				            "text": "桃源縣",
				            "leaf": true
				          },
				          {
				            "text": "石門縣",
				            "leaf": true
				          },
				          {
				            "text": "津市市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "益陽市",
				        "children": [
				          {
				            "text": "資陽區",
				            "leaf": true
				          },
				          {
				            "text": "赫山區",
				            "leaf": true
				          },
				          {
				            "text": "南縣",
				            "leaf": true
				          },
				          {
				            "text": "桃江縣",
				            "leaf": true
				          },
				          {
				            "text": "安化縣",
				            "leaf": true
				          },
				          {
				            "text": "沅江市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "婁底市",
				        "children": [
				          {
				            "text": "婁星區",
				            "leaf": true
				          },
				          {
				            "text": "雙峰縣",
				            "leaf": true
				          },
				          {
				            "text": "新化縣",
				            "leaf": true
				          },
				          {
				            "text": "冷水江市",
				            "leaf": true
				          },
				          {
				            "text": "漣源市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "邵陽市",
				        "children": [
				          {
				            "text": "雙清區",
				            "leaf": true
				          },
				          {
				            "text": "大祥區",
				            "leaf": true
				          },
				          {
				            "text": "北塔區",
				            "leaf": true
				          },
				          {
				            "text": "邵東縣",
				            "leaf": true
				          },
				          {
				            "text": "新邵縣",
				            "leaf": true
				          },
				          {
				            "text": "邵陽縣",
				            "leaf": true
				          },
				          {
				            "text": "隆回縣",
				            "leaf": true
				          },
				          {
				            "text": "洞口縣",
				            "leaf": true
				          },
				          {
				            "text": "綏寧縣",
				            "leaf": true
				          },
				          {
				            "text": "新寧縣",
				            "leaf": true
				          },
				          {
				            "text": "城步苗族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "武岡市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "湘西土家族苗族自治州",
				        "children": [
				          {
				            "text": "吉首市",
				            "leaf": true
				          },
				          {
				            "text": "瀘溪縣",
				            "leaf": true
				          },
				          {
				            "text": "鳳凰縣",
				            "leaf": true
				          },
				          {
				            "text": "花垣縣",
				            "leaf": true
				          },
				          {
				            "text": "保靖縣",
				            "leaf": true
				          },
				          {
				            "text": "古丈縣",
				            "leaf": true
				          },
				          {
				            "text": "永順縣",
				            "leaf": true
				          },
				          {
				            "text": "龍山縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "張家界市",
				        "children": [
				          {
				            "text": "永定區",
				            "leaf": true
				          },
				          {
				            "text": "武陵源區",
				            "leaf": true
				          },
				          {
				            "text": "慈利縣",
				            "leaf": true
				          },
				          {
				            "text": "桑植縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "懷化市",
				        "children": [
				          {
				            "text": "鶴城區",
				            "leaf": true
				          },
				          {
				            "text": "中方縣",
				            "leaf": true
				          },
				          {
				            "text": "沅陵縣",
				            "leaf": true
				          },
				          {
				            "text": "辰溪縣",
				            "leaf": true
				          },
				          {
				            "text": "漵浦縣",
				            "leaf": true
				          },
				          {
				            "text": "會同縣",
				            "leaf": true
				          },
				          {
				            "text": "麻陽苗族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "新晃侗族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "芷江侗族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "靖州苗族侗族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "通道侗族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "洪江市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "永州市",
				        "children": [
				          {
				            "text": "零陵區",
				            "leaf": true
				          },
				          {
				            "text": "冷水灘區",
				            "leaf": true
				          },
				          {
				            "text": "祁陽縣",
				            "leaf": true
				          },
				          {
				            "text": "東安縣",
				            "leaf": true
				          },
				          {
				            "text": "雙牌縣",
				            "leaf": true
				          },
				          {
				            "text": "道縣",
				            "leaf": true
				          },
				          {
				            "text": "江永縣",
				            "leaf": true
				          },
				          {
				            "text": "寧遠縣",
				            "leaf": true
				          },
				          {
				            "text": "藍山縣",
				            "leaf": true
				          },
				          {
				            "text": "新田縣",
				            "leaf": true
				          },
				          {
				            "text": "江華瑤族自治縣",
				            "leaf": true
				          }
				        ]
				      }
				    ]
				  },
				  {
				    "text": "廣東省",
				    "children": [
				      {
				        "text": "廣州市",
				        "children": [
				          {
				            "text": "從化市",
				            "leaf": true
				          },
				          {
				            "text": "荔灣區",
				            "leaf": true
				          },
				          {
				            "text": "越秀區",
				            "leaf": true
				          },
				          {
				            "text": "海珠區",
				            "leaf": true
				          },
				          {
				            "text": "天河區",
				            "leaf": true
				          },
				          {
				            "text": "白雲區",
				            "leaf": true
				          },
				          {
				            "text": "花都區",
				            "leaf": true
				          },
				          {
				            "text": "黃埔區",
				            "leaf": true
				          },
				          {
				            "text": "蘿崗區",
				            "leaf": true
				          },
				          {
				            "text": "南沙區",
				            "leaf": true
				          },
				          {
				            "text": "番禺區",
				            "leaf": true
				          },
				          {
				            "text": "增城市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "汕尾市",
				        "children": [
				          {
				            "text": "海豐縣",
				            "leaf": true
				          },
				          {
				            "text": "陸河縣",
				            "leaf": true
				          },
				          {
				            "text": "陸豐市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "陽江市",
				        "children": [
				          {
				            "text": "江城區",
				            "leaf": true
				          },
				          {
				            "text": "陽西縣",
				            "leaf": true
				          },
				          {
				            "text": "陽東縣",
				            "leaf": true
				          },
				          {
				            "text": "陽春市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "揭陽市",
				        "children": [
				          {
				            "text": "榕城區",
				            "leaf": true
				          },
				          {
				            "text": "揭東縣",
				            "leaf": true
				          },
				          {
				            "text": "揭西縣",
				            "leaf": true
				          },
				          {
				            "text": "惠來縣",
				            "leaf": true
				          },
				          {
				            "text": "普寧市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "茂名市",
				        "children": [
				          {
				            "text": "茂南區",
				            "leaf": true
				          },
				          {
				            "text": "茂港區",
				            "leaf": true
				          },
				          {
				            "text": "電白縣",
				            "leaf": true
				          },
				          {
				            "text": "高州市",
				            "leaf": true
				          },
				          {
				            "text": "化州市",
				            "leaf": true
				          },
				          {
				            "text": "信宜市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "惠州市",
				        "children": [
				          {
				            "text": "惠城區",
				            "leaf": true
				          },
				          {
				            "text": "惠陽區",
				            "leaf": true
				          },
				          {
				            "text": "博羅縣",
				            "leaf": true
				          },
				          {
				            "text": "惠東縣",
				            "leaf": true
				          },
				          {
				            "text": "龍門縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "江門市",
				        "children": [
				          {
				            "text": "蓬江區",
				            "leaf": true
				          },
				          {
				            "text": "江海區",
				            "leaf": true
				          },
				          {
				            "text": "新會區",
				            "leaf": true
				          },
				          {
				            "text": "台山市",
				            "leaf": true
				          },
				          {
				            "text": "開平市",
				            "leaf": true
				          },
				          {
				            "text": "鶴山市",
				            "leaf": true
				          },
				          {
				            "text": "恩平市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "韶關市",
				        "children": [
				          {
				            "text": "武江區",
				            "leaf": true
				          },
				          {
				            "text": "湞江區",
				            "leaf": true
				          },
				          {
				            "text": "曲江區",
				            "leaf": true
				          },
				          {
				            "text": "始興縣",
				            "leaf": true
				          },
				          {
				            "text": "仁化縣",
				            "leaf": true
				          },
				          {
				            "text": "翁源縣",
				            "leaf": true
				          },
				          {
				            "text": "乳源瑤族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "新豐縣",
				            "leaf": true
				          },
				          {
				            "text": "樂昌市",
				            "leaf": true
				          },
				          {
				            "text": "南雄市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "梅州市",
				        "children": [
				          {
				            "text": "梅江區",
				            "leaf": true
				          },
				          {
				            "text": "梅縣",
				            "leaf": true
				          },
				          {
				            "text": "大埔縣",
				            "leaf": true
				          },
				          {
				            "text": "豐順縣",
				            "leaf": true
				          },
				          {
				            "text": "五華縣",
				            "leaf": true
				          },
				          {
				            "text": "平遠縣",
				            "leaf": true
				          },
				          {
				            "text": "蕉嶺縣",
				            "leaf": true
				          },
				          {
				            "text": "興寧市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "汕頭市",
				        "children": [
				          {
				            "text": "龍湖區",
				            "leaf": true
				          },
				          {
				            "text": "金平區",
				            "leaf": true
				          },
				          {
				            "text": "濠江區",
				            "leaf": true
				          },
				          {
				            "text": "潮陽區",
				            "leaf": true
				          },
				          {
				            "text": "潮南區",
				            "leaf": true
				          },
				          {
				            "text": "澄海區",
				            "leaf": true
				          },
				          {
				            "text": "南澳縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "深圳市",
				        "children": [
				          {
				            "text": "羅湖區",
				            "leaf": true
				          },
				          {
				            "text": "福田區",
				            "leaf": true
				          },
				          {
				            "text": "南山區",
				            "leaf": true
				          },
				          {
				            "text": "寶安區",
				            "leaf": true
				          },
				          {
				            "text": "龍崗區",
				            "leaf": true
				          },
				          {
				            "text": "鹽田區",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "珠海市",
				        "children": [
				          {
				            "text": "香洲區",
				            "leaf": true
				          },
				          {
				            "text": "斗門區",
				            "leaf": true
				          },
				          {
				            "text": "金灣區",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "佛山市",
				        "children": [
				          {
				            "text": "禪城區",
				            "leaf": true
				          },
				          {
				            "text": "南海區",
				            "leaf": true
				          },
				          {
				            "text": "順德區",
				            "leaf": true
				          },
				          {
				            "text": "三水區",
				            "leaf": true
				          },
				          {
				            "text": "高明區",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "肇慶市",
				        "children": [
				          {
				            "text": "端州區",
				            "leaf": true
				          },
				          {
				            "text": "鼎湖區",
				            "leaf": true
				          },
				          {
				            "text": "廣寧縣",
				            "leaf": true
				          },
				          {
				            "text": "懷集縣",
				            "leaf": true
				          },
				          {
				            "text": "封開縣",
				            "leaf": true
				          },
				          {
				            "text": "德慶縣",
				            "leaf": true
				          },
				          {
				            "text": "高要市",
				            "leaf": true
				          },
				          {
				            "text": "四會市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "湛江市",
				        "children": [
				          {
				            "text": "赤坎區",
				            "leaf": true
				          },
				          {
				            "text": "霞山區",
				            "leaf": true
				          },
				          {
				            "text": "坡頭區",
				            "leaf": true
				          },
				          {
				            "text": "麻章區",
				            "leaf": true
				          },
				          {
				            "text": "遂溪縣",
				            "leaf": true
				          },
				          {
				            "text": "徐聞縣",
				            "leaf": true
				          },
				          {
				            "text": "廉江市",
				            "leaf": true
				          },
				          {
				            "text": "雷州市",
				            "leaf": true
				          },
				          {
				            "text": "吳川市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "中山市",
				        "leaf": true
				      },
				      {
				        "text": "河源市",
				        "children": [
				          {
				            "text": "源城區",
				            "leaf": true
				          },
				          {
				            "text": "紫金縣",
				            "leaf": true
				          },
				          {
				            "text": "龍川縣",
				            "leaf": true
				          },
				          {
				            "text": "連平縣",
				            "leaf": true
				          },
				          {
				            "text": "和平縣",
				            "leaf": true
				          },
				          {
				            "text": "東源縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "清遠市",
				        "children": [
				          {
				            "text": "清城區",
				            "leaf": true
				          },
				          {
				            "text": "佛岡縣",
				            "leaf": true
				          },
				          {
				            "text": "陽山縣",
				            "leaf": true
				          },
				          {
				            "text": "連山壯族瑤族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "連南瑤族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "清新縣",
				            "leaf": true
				          },
				          {
				            "text": "英德市",
				            "leaf": true
				          },
				          {
				            "text": "連州市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "雲浮市",
				        "children": [
				          {
				            "text": "雲城區",
				            "leaf": true
				          },
				          {
				            "text": "新興縣",
				            "leaf": true
				          },
				          {
				            "text": "郁南縣",
				            "leaf": true
				          },
				          {
				            "text": "雲安縣",
				            "leaf": true
				          },
				          {
				            "text": "羅定市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "潮州市",
				        "children": [
				          {
				            "text": "湘橋區",
				            "leaf": true
				          },
				          {
				            "text": "潮安縣",
				            "leaf": true
				          },
				          {
				            "text": "饒平縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "東莞市",
				        "leaf": true
				      }
				    ]
				  },
				  {
				    "text": "海南省",
				    "children": [
				      {
				        "text": "海口市",
				        "children": [
				          {
				            "text": "秀英區",
				            "leaf": true
				          },
				          {
				            "text": "龍華區",
				            "leaf": true
				          },
				          {
				            "text": "瓊山區",
				            "leaf": true
				          },
				          {
				            "text": "美蘭區",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "三亞市",
				        "leaf": true
				      },
				      {
				        "text": "五指山市",
				        "leaf": true
				      },
				      {
				        "text": "瓊海市",
				        "leaf": true
				      },
				      {
				        "text": "儋州市",
				        "leaf": true
				      },
				      {
				        "text": "文昌市",
				        "leaf": true
				      },
				      {
				        "text": "萬寧市",
				        "leaf": true
				      },
				      {
				        "text": "東方市",
				        "leaf": true
				      },
				      {
				        "text": "澄邁縣",
				        "leaf": true
				      },
				      {
				        "text": "定安縣",
				        "leaf": true
				      },
				      {
				        "text": "屯昌縣",
				        "leaf": true
				      },
				      {
				        "text": "臨高縣",
				        "leaf": true
				      },
				      {
				        "text": "白沙黎族自治縣",
				        "leaf": true
				      },
				      {
				        "text": "昌江黎族自治縣",
				        "leaf": true
				      },
				      {
				        "text": "樂東黎族自治縣",
				        "leaf": true
				      },
				      {
				        "text": "陵水黎族自治縣",
				        "leaf": true
				      },
				      {
				        "text": "保亭黎族苗族自治縣",
				        "leaf": true
				      },
				      {
				        "text": "瓊中黎族苗族自治縣",
				        "leaf": true
				      }
				    ]
				  },
				  {
				    "text": "廣西壯族自治區",
				    "children": [
				      {
				        "text": "防城港市",
				        "children": [
				          {
				            "text": "港口區",
				            "leaf": true
				          },
				          {
				            "text": "防城區",
				            "leaf": true
				          },
				          {
				            "text": "上思縣",
				            "leaf": true
				          },
				          {
				            "text": "東興市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "南寧市",
				        "children": [
				          {
				            "text": "興寧區",
				            "leaf": true
				          },
				          {
				            "text": "青秀區",
				            "leaf": true
				          },
				          {
				            "text": "江南區",
				            "leaf": true
				          },
				          {
				            "text": "西鄉塘區",
				            "leaf": true
				          },
				          {
				            "text": "良慶區",
				            "leaf": true
				          },
				          {
				            "text": "邕寧區",
				            "leaf": true
				          },
				          {
				            "text": "武鳴縣",
				            "leaf": true
				          },
				          {
				            "text": "隆安縣",
				            "leaf": true
				          },
				          {
				            "text": "馬山縣",
				            "leaf": true
				          },
				          {
				            "text": "上林縣",
				            "leaf": true
				          },
				          {
				            "text": "賓陽縣",
				            "leaf": true
				          },
				          {
				            "text": "橫縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "崇左市",
				        "children": [
				          {
				            "text": "江洲區",
				            "leaf": true
				          },
				          {
				            "text": "扶綏縣",
				            "leaf": true
				          },
				          {
				            "text": "寧明縣",
				            "leaf": true
				          },
				          {
				            "text": "龍州縣",
				            "leaf": true
				          },
				          {
				            "text": "大新縣",
				            "leaf": true
				          },
				          {
				            "text": "天等縣",
				            "leaf": true
				          },
				          {
				            "text": "憑祥市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "來賓市",
				        "children": [
				          {
				            "text": "興賓區",
				            "leaf": true
				          },
				          {
				            "text": "忻城縣",
				            "leaf": true
				          },
				          {
				            "text": "象州縣",
				            "leaf": true
				          },
				          {
				            "text": "武宣縣",
				            "leaf": true
				          },
				          {
				            "text": "金秀瑤族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "合山市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "柳州市",
				        "children": [
				          {
				            "text": "城中區",
				            "leaf": true
				          },
				          {
				            "text": "魚峰區",
				            "leaf": true
				          },
				          {
				            "text": "柳南區",
				            "leaf": true
				          },
				          {
				            "text": "柳北區",
				            "leaf": true
				          },
				          {
				            "text": "柳江縣",
				            "leaf": true
				          },
				          {
				            "text": "柳城縣",
				            "leaf": true
				          },
				          {
				            "text": "鹿寨縣",
				            "leaf": true
				          },
				          {
				            "text": "融安縣",
				            "leaf": true
				          },
				          {
				            "text": "融水苗族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "三江侗族自治縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "桂林市",
				        "children": [
				          {
				            "text": "秀峰區",
				            "leaf": true
				          },
				          {
				            "text": "疊彩區",
				            "leaf": true
				          },
				          {
				            "text": "象山區",
				            "leaf": true
				          },
				          {
				            "text": "七星區",
				            "leaf": true
				          },
				          {
				            "text": "雁山區",
				            "leaf": true
				          },
				          {
				            "text": "陽朔縣",
				            "leaf": true
				          },
				          {
				            "text": "臨桂縣",
				            "leaf": true
				          },
				          {
				            "text": "靈川縣",
				            "leaf": true
				          },
				          {
				            "text": "全州縣",
				            "leaf": true
				          },
				          {
				            "text": "興安縣",
				            "leaf": true
				          },
				          {
				            "text": "永福縣",
				            "leaf": true
				          },
				          {
				            "text": "灌陽縣",
				            "leaf": true
				          },
				          {
				            "text": "龍勝各族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "資源縣",
				            "leaf": true
				          },
				          {
				            "text": "平樂縣",
				            "leaf": true
				          },
				          {
				            "text": "荔浦縣",
				            "leaf": true
				          },
				          {
				            "text": "恭城瑤族自治縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "梧州市",
				        "children": [
				          {
				            "text": "萬秀區",
				            "leaf": true
				          },
				          {
				            "text": "碟山區",
				            "leaf": true
				          },
				          {
				            "text": "長洲區",
				            "leaf": true
				          },
				          {
				            "text": "蒼梧縣",
				            "leaf": true
				          },
				          {
				            "text": "籐縣",
				            "leaf": true
				          },
				          {
				            "text": "蒙山縣",
				            "leaf": true
				          },
				          {
				            "text": "岑溪市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "賀州市",
				        "children": [
				          {
				            "text": "八步區",
				            "leaf": true
				          },
				          {
				            "text": "昭平縣",
				            "leaf": true
				          },
				          {
				            "text": "鍾山縣",
				            "leaf": true
				          },
				          {
				            "text": "富川瑤族自治縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "貴港市",
				        "children": [
				          {
				            "text": "港北區",
				            "leaf": true
				          },
				          {
				            "text": "港南區",
				            "leaf": true
				          },
				          {
				            "text": "覃塘區",
				            "leaf": true
				          },
				          {
				            "text": "平南縣",
				            "leaf": true
				          },
				          {
				            "text": "桂平市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "玉林市",
				        "children": [
				          {
				            "text": "玉州區",
				            "leaf": true
				          },
				          {
				            "text": "容縣",
				            "leaf": true
				          },
				          {
				            "text": "陸川縣",
				            "leaf": true
				          },
				          {
				            "text": "博白縣",
				            "leaf": true
				          },
				          {
				            "text": "興業縣",
				            "leaf": true
				          },
				          {
				            "text": "北流市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "百色市",
				        "children": [
				          {
				            "text": "右江區",
				            "leaf": true
				          },
				          {
				            "text": "田陽縣",
				            "leaf": true
				          },
				          {
				            "text": "田東縣",
				            "leaf": true
				          },
				          {
				            "text": "平果縣",
				            "leaf": true
				          },
				          {
				            "text": "德保縣",
				            "leaf": true
				          },
				          {
				            "text": "靖西縣",
				            "leaf": true
				          },
				          {
				            "text": "那坡縣",
				            "leaf": true
				          },
				          {
				            "text": "凌雲縣",
				            "leaf": true
				          },
				          {
				            "text": "樂業縣",
				            "leaf": true
				          },
				          {
				            "text": "田林縣",
				            "leaf": true
				          },
				          {
				            "text": "西林縣",
				            "leaf": true
				          },
				          {
				            "text": "隆林各族自治縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "欽州市",
				        "children": [
				          {
				            "text": "欽南區",
				            "leaf": true
				          },
				          {
				            "text": "欽北區",
				            "leaf": true
				          },
				          {
				            "text": "靈山縣",
				            "leaf": true
				          },
				          {
				            "text": "浦北縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "河池市",
				        "children": [
				          {
				            "text": "金城江區",
				            "leaf": true
				          },
				          {
				            "text": "南丹縣",
				            "leaf": true
				          },
				          {
				            "text": "天峨縣",
				            "leaf": true
				          },
				          {
				            "text": "鳳山縣",
				            "leaf": true
				          },
				          {
				            "text": "東蘭縣",
				            "leaf": true
				          },
				          {
				            "text": "羅城仫佬族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "環江毛南族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "巴馬瑤族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "都安瑤族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "大化瑤族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "宜州市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "北海市",
				        "children": [
				          {
				            "text": "海城區",
				            "leaf": true
				          },
				          {
				            "text": "銀海區",
				            "leaf": true
				          },
				          {
				            "text": "鐵山港區",
				            "leaf": true
				          },
				          {
				            "text": "合浦縣",
				            "leaf": true
				          }
				        ]
				      }
				    ]
				  },
				  {
				    "text": "甘肅省",
				    "children": [
				      {
				        "text": "蘭州市",
				        "children": [
				          {
				            "text": "城關區",
				            "leaf": true
				          },
				          {
				            "text": "七裡河區",
				            "leaf": true
				          },
				          {
				            "text": "西固區",
				            "leaf": true
				          },
				          {
				            "text": "安寧區",
				            "leaf": true
				          },
				          {
				            "text": "紅古區",
				            "leaf": true
				          },
				          {
				            "text": "永登縣",
				            "leaf": true
				          },
				          {
				            "text": "皋蘭縣",
				            "leaf": true
				          },
				          {
				            "text": "榆中縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "金昌市",
				        "children": [
				          {
				            "text": "金川區",
				            "leaf": true
				          },
				          {
				            "text": "永昌縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "白銀市",
				        "children": [
				          {
				            "text": "白銀區",
				            "leaf": true
				          },
				          {
				            "text": "平川區",
				            "leaf": true
				          },
				          {
				            "text": "靖遠縣",
				            "leaf": true
				          },
				          {
				            "text": "會寧縣",
				            "leaf": true
				          },
				          {
				            "text": "景泰縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "天水市",
				        "children": [
				          {
				            "text": "秦州區",
				            "leaf": true
				          },
				          {
				            "text": "麥積區",
				            "leaf": true
				          },
				          {
				            "text": "清水縣",
				            "leaf": true
				          },
				          {
				            "text": "秦安縣",
				            "leaf": true
				          },
				          {
				            "text": "甘谷縣",
				            "leaf": true
				          },
				          {
				            "text": "武山縣",
				            "leaf": true
				          },
				          {
				            "text": "張家川回族自治縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "嘉峪關市",
				        "leaf": true
				      },
				      {
				        "text": "武威市",
				        "children": [
				          {
				            "text": "涼州區",
				            "leaf": true
				          },
				          {
				            "text": "民勤縣",
				            "leaf": true
				          },
				          {
				            "text": "古浪縣",
				            "leaf": true
				          },
				          {
				            "text": "天祝藏族自治縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "張掖市",
				        "children": [
				          {
				            "text": "甘州區",
				            "leaf": true
				          },
				          {
				            "text": "肅南裕固族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "民樂縣",
				            "leaf": true
				          },
				          {
				            "text": "臨澤縣",
				            "leaf": true
				          },
				          {
				            "text": "高台縣",
				            "leaf": true
				          },
				          {
				            "text": "山丹縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "平涼市",
				        "children": [
				          {
				            "text": "崆峒區",
				            "leaf": true
				          },
				          {
				            "text": "涇川縣",
				            "leaf": true
				          },
				          {
				            "text": "靈台縣",
				            "leaf": true
				          },
				          {
				            "text": "崇信縣",
				            "leaf": true
				          },
				          {
				            "text": "華亭縣",
				            "leaf": true
				          },
				          {
				            "text": "莊浪縣",
				            "leaf": true
				          },
				          {
				            "text": "靜寧縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "酒泉市",
				        "children": [
				          {
				            "text": "肅州區",
				            "leaf": true
				          },
				          {
				            "text": "金塔縣",
				            "leaf": true
				          },
				          {
				            "text": "瓜州縣",
				            "leaf": true
				          },
				          {
				            "text": "肅北蒙古族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "阿克塞哈薩克族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "玉門市",
				            "leaf": true
				          },
				          {
				            "text": "敦煌市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "慶陽市",
				        "children": [
				          {
				            "text": "西峰區",
				            "leaf": true
				          },
				          {
				            "text": "慶城縣",
				            "leaf": true
				          },
				          {
				            "text": "環縣",
				            "leaf": true
				          },
				          {
				            "text": "華池縣",
				            "leaf": true
				          },
				          {
				            "text": "合水縣",
				            "leaf": true
				          },
				          {
				            "text": "正寧縣",
				            "leaf": true
				          },
				          {
				            "text": "寧縣",
				            "leaf": true
				          },
				          {
				            "text": "鎮原縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "定西市",
				        "children": [
				          {
				            "text": "安定區",
				            "leaf": true
				          },
				          {
				            "text": "通渭縣",
				            "leaf": true
				          },
				          {
				            "text": "隴西縣",
				            "leaf": true
				          },
				          {
				            "text": "渭源縣",
				            "leaf": true
				          },
				          {
				            "text": "臨洮縣",
				            "leaf": true
				          },
				          {
				            "text": "漳縣",
				            "leaf": true
				          },
				          {
				            "text": "岷縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "隴南市",
				        "children": [
				          {
				            "text": "武都區",
				            "leaf": true
				          },
				          {
				            "text": "成縣",
				            "leaf": true
				          },
				          {
				            "text": "文縣",
				            "leaf": true
				          },
				          {
				            "text": "宕昌縣",
				            "leaf": true
				          },
				          {
				            "text": "康縣",
				            "leaf": true
				          },
				          {
				            "text": "西和縣",
				            "leaf": true
				          },
				          {
				            "text": "禮縣",
				            "leaf": true
				          },
				          {
				            "text": "徽縣",
				            "leaf": true
				          },
				          {
				            "text": "兩當縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "臨夏回族自治州",
				        "children": [
				          {
				            "text": "臨夏市",
				            "leaf": true
				          },
				          {
				            "text": "臨夏縣",
				            "leaf": true
				          },
				          {
				            "text": "康樂縣",
				            "leaf": true
				          },
				          {
				            "text": "永靖縣",
				            "leaf": true
				          },
				          {
				            "text": "廣河縣",
				            "leaf": true
				          },
				          {
				            "text": "和政縣",
				            "leaf": true
				          },
				          {
				            "text": "東鄉族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "積石山保安族東鄉族撒拉族自治縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "甘南藏族自治州",
				        "children": [
				          {
				            "text": "合作市",
				            "leaf": true
				          },
				          {
				            "text": "臨潭縣",
				            "leaf": true
				          },
				          {
				            "text": "卓尼縣",
				            "leaf": true
				          },
				          {
				            "text": "舟曲縣",
				            "leaf": true
				          },
				          {
				            "text": "迭部縣",
				            "leaf": true
				          },
				          {
				            "text": "瑪曲縣",
				            "leaf": true
				          },
				          {
				            "text": "碌曲縣",
				            "leaf": true
				          },
				          {
				            "text": "夏河縣",
				            "leaf": true
				          }
				        ]
				      }
				    ]
				  },
				  {
				    "text": "陝西省",
				    "children": [
				      {
				        "text": "西安市",
				        "children": [
				          {
				            "text": "新城區",
				            "leaf": true
				          },
				          {
				            "text": "碑林區",
				            "leaf": true
				          },
				          {
				            "text": "蓮湖區",
				            "leaf": true
				          },
				          {
				            "text": "灞橋區",
				            "leaf": true
				          },
				          {
				            "text": "未央區",
				            "leaf": true
				          },
				          {
				            "text": "雁塔區",
				            "leaf": true
				          },
				          {
				            "text": "閻良區",
				            "leaf": true
				          },
				          {
				            "text": "臨潼區",
				            "leaf": true
				          },
				          {
				            "text": "長安區",
				            "leaf": true
				          },
				          {
				            "text": "藍田縣",
				            "leaf": true
				          },
				          {
				            "text": "周至縣",
				            "leaf": true
				          },
				          {
				            "text": "戶縣",
				            "leaf": true
				          },
				          {
				            "text": "高陵縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "鹹陽市",
				        "children": [
				          {
				            "text": "秦都區",
				            "leaf": true
				          },
				          {
				            "text": "楊陵區",
				            "leaf": true
				          },
				          {
				            "text": "渭城區",
				            "leaf": true
				          },
				          {
				            "text": "三原縣",
				            "leaf": true
				          },
				          {
				            "text": "涇陽縣",
				            "leaf": true
				          },
				          {
				            "text": "乾縣",
				            "leaf": true
				          },
				          {
				            "text": "禮泉縣",
				            "leaf": true
				          },
				          {
				            "text": "永壽縣",
				            "leaf": true
				          },
				          {
				            "text": "彬縣",
				            "leaf": true
				          },
				          {
				            "text": "長武縣",
				            "leaf": true
				          },
				          {
				            "text": "旬邑縣",
				            "leaf": true
				          },
				          {
				            "text": "淳化縣",
				            "leaf": true
				          },
				          {
				            "text": "武功縣",
				            "leaf": true
				          },
				          {
				            "text": "興平市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "延安市",
				        "children": [
				          {
				            "text": "寶塔區",
				            "leaf": true
				          },
				          {
				            "text": "延長縣",
				            "leaf": true
				          },
				          {
				            "text": "延川縣",
				            "leaf": true
				          },
				          {
				            "text": "子長縣",
				            "leaf": true
				          },
				          {
				            "text": "安塞縣",
				            "leaf": true
				          },
				          {
				            "text": "志丹縣",
				            "leaf": true
				          },
				          {
				            "text": "吳起縣",
				            "leaf": true
				          },
				          {
				            "text": "甘泉縣",
				            "leaf": true
				          },
				          {
				            "text": "富縣",
				            "leaf": true
				          },
				          {
				            "text": "洛川縣",
				            "leaf": true
				          },
				          {
				            "text": "宜川縣",
				            "leaf": true
				          },
				          {
				            "text": "黃龍縣",
				            "leaf": true
				          },
				          {
				            "text": "黃陵縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "榆林市",
				        "children": [
				          {
				            "text": "榆陽區",
				            "leaf": true
				          },
				          {
				            "text": "神木縣",
				            "leaf": true
				          },
				          {
				            "text": "府谷縣",
				            "leaf": true
				          },
				          {
				            "text": "橫山縣",
				            "leaf": true
				          },
				          {
				            "text": "靖邊縣",
				            "leaf": true
				          },
				          {
				            "text": "定邊縣",
				            "leaf": true
				          },
				          {
				            "text": "綏德縣",
				            "leaf": true
				          },
				          {
				            "text": "米脂縣",
				            "leaf": true
				          },
				          {
				            "text": "佳縣",
				            "leaf": true
				          },
				          {
				            "text": "吳堡縣",
				            "leaf": true
				          },
				          {
				            "text": "清澗縣",
				            "leaf": true
				          },
				          {
				            "text": "子洲縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "渭南市",
				        "children": [
				          {
				            "text": "臨渭區",
				            "leaf": true
				          },
				          {
				            "text": "華縣",
				            "leaf": true
				          },
				          {
				            "text": "潼關縣",
				            "leaf": true
				          },
				          {
				            "text": "大荔縣",
				            "leaf": true
				          },
				          {
				            "text": "合陽縣",
				            "leaf": true
				          },
				          {
				            "text": "澄城縣",
				            "leaf": true
				          },
				          {
				            "text": "蒲城縣",
				            "leaf": true
				          },
				          {
				            "text": "白水縣",
				            "leaf": true
				          },
				          {
				            "text": "富平縣",
				            "leaf": true
				          },
				          {
				            "text": "韓城市",
				            "leaf": true
				          },
				          {
				            "text": "華陰市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "商洛市",
				        "children": [
				          {
				            "text": "商州區",
				            "leaf": true
				          },
				          {
				            "text": "洛南縣",
				            "leaf": true
				          },
				          {
				            "text": "丹鳳縣",
				            "leaf": true
				          },
				          {
				            "text": "商南縣",
				            "leaf": true
				          },
				          {
				            "text": "山陽縣",
				            "leaf": true
				          },
				          {
				            "text": "鎮安縣",
				            "leaf": true
				          },
				          {
				            "text": "柞水縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "安康市",
				        "children": [
				          {
				            "text": "漢濱區",
				            "leaf": true
				          },
				          {
				            "text": "漢陰縣",
				            "leaf": true
				          },
				          {
				            "text": "石泉縣",
				            "leaf": true
				          },
				          {
				            "text": "寧陝縣",
				            "leaf": true
				          },
				          {
				            "text": "紫陽縣",
				            "leaf": true
				          },
				          {
				            "text": "嵐皋縣",
				            "leaf": true
				          },
				          {
				            "text": "平利縣",
				            "leaf": true
				          },
				          {
				            "text": "鎮坪縣",
				            "leaf": true
				          },
				          {
				            "text": "旬陽縣",
				            "leaf": true
				          },
				          {
				            "text": "白河縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "漢中市",
				        "children": [
				          {
				            "text": "漢台區",
				            "leaf": true
				          },
				          {
				            "text": "南鄭縣",
				            "leaf": true
				          },
				          {
				            "text": "城固縣",
				            "leaf": true
				          },
				          {
				            "text": "洋縣",
				            "leaf": true
				          },
				          {
				            "text": "西鄉縣",
				            "leaf": true
				          },
				          {
				            "text": "勉縣",
				            "leaf": true
				          },
				          {
				            "text": "寧強縣",
				            "leaf": true
				          },
				          {
				            "text": "略陽縣",
				            "leaf": true
				          },
				          {
				            "text": "鎮巴縣",
				            "leaf": true
				          },
				          {
				            "text": "留壩縣",
				            "leaf": true
				          },
				          {
				            "text": "佛坪縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "寶雞市",
				        "children": [
				          {
				            "text": "渭濱區",
				            "leaf": true
				          },
				          {
				            "text": "金台區",
				            "leaf": true
				          },
				          {
				            "text": "陳倉區",
				            "leaf": true
				          },
				          {
				            "text": "鳳翔縣",
				            "leaf": true
				          },
				          {
				            "text": "岐山縣",
				            "leaf": true
				          },
				          {
				            "text": "扶風縣",
				            "leaf": true
				          },
				          {
				            "text": "眉縣",
				            "leaf": true
				          },
				          {
				            "text": "隴縣",
				            "leaf": true
				          },
				          {
				            "text": "千陽縣",
				            "leaf": true
				          },
				          {
				            "text": "麟游縣",
				            "leaf": true
				          },
				          {
				            "text": "鳳縣",
				            "leaf": true
				          },
				          {
				            "text": "太白縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "銅川市",
				        "children": [
				          {
				            "text": "王益區",
				            "leaf": true
				          },
				          {
				            "text": "印台區",
				            "leaf": true
				          },
				          {
				            "text": "耀州區",
				            "leaf": true
				          },
				          {
				            "text": "宜君縣",
				            "leaf": true
				          }
				        ]
				      }
				    ]
				  },
				  {
				    "text": "新疆維吾爾自治區",
				    "children": [
				      {
				        "text": "塔城地區",
				        "children": [
				          {
				            "text": "塔城市",
				            "leaf": true
				          },
				          {
				            "text": "烏蘇市",
				            "leaf": true
				          },
				          {
				            "text": "額敏縣",
				            "leaf": true
				          },
				          {
				            "text": "沙灣縣",
				            "leaf": true
				          },
				          {
				            "text": "托裡縣",
				            "leaf": true
				          },
				          {
				            "text": "裕民縣",
				            "leaf": true
				          },
				          {
				            "text": "和布克賽爾蒙古自治縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "哈密地區",
				        "children": [
				          {
				            "text": "哈密市",
				            "leaf": true
				          },
				          {
				            "text": "巴裡坤哈薩克自治縣",
				            "leaf": true
				          },
				          {
				            "text": "伊吾縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "和田地區",
				        "children": [
				          {
				            "text": "和田市",
				            "leaf": true
				          },
				          {
				            "text": "和田縣",
				            "leaf": true
				          },
				          {
				            "text": "墨玉縣",
				            "leaf": true
				          },
				          {
				            "text": "皮山縣",
				            "leaf": true
				          },
				          {
				            "text": "洛浦縣",
				            "leaf": true
				          },
				          {
				            "text": "策勒縣",
				            "leaf": true
				          },
				          {
				            "text": "於田縣",
				            "leaf": true
				          },
				          {
				            "text": "民豐縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "阿勒泰地區",
				        "children": [
				          {
				            "text": "阿勒泰市",
				            "leaf": true
				          },
				          {
				            "text": "布爾津縣",
				            "leaf": true
				          },
				          {
				            "text": "富蘊縣",
				            "leaf": true
				          },
				          {
				            "text": "福海縣",
				            "leaf": true
				          },
				          {
				            "text": "哈巴河縣",
				            "leaf": true
				          },
				          {
				            "text": "青河縣",
				            "leaf": true
				          },
				          {
				            "text": "吉木乃縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "克孜勒蘇柯爾克孜自治州",
				        "children": [
				          {
				            "text": "阿圖什市",
				            "leaf": true
				          },
				          {
				            "text": "阿克陶縣",
				            "leaf": true
				          },
				          {
				            "text": "阿合奇縣",
				            "leaf": true
				          },
				          {
				            "text": "烏恰縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "博爾塔拉蒙古自治州",
				        "children": [
				          {
				            "text": "博樂市",
				            "leaf": true
				          },
				          {
				            "text": "精河縣",
				            "leaf": true
				          },
				          {
				            "text": "溫泉縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "克拉瑪依市",
				        "children": [
				          {
				            "text": "獨山子區",
				            "leaf": true
				          },
				          {
				            "text": "克拉瑪依區",
				            "leaf": true
				          },
				          {
				            "text": "白鹼灘區",
				            "leaf": true
				          },
				          {
				            "text": "烏爾禾區",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "烏魯木齊市",
				        "children": [
				          {
				            "text": "天山區",
				            "leaf": true
				          },
				          {
				            "text": "沙依巴克區",
				            "leaf": true
				          },
				          {
				            "text": "新市區",
				            "leaf": true
				          },
				          {
				            "text": "水磨溝區",
				            "leaf": true
				          },
				          {
				            "text": "頭屯河區",
				            "leaf": true
				          },
				          {
				            "text": "達阪城區",
				            "leaf": true
				          },
				          {
				            "text": "米東區",
				            "leaf": true
				          },
				          {
				            "text": "烏魯木齊縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "石河子市",
				        "leaf": true
				      },
				      {
				        "text": "昌吉回族自治州",
				        "children": [
				          {
				            "text": "昌吉市",
				            "leaf": true
				          },
				          {
				            "text": "阜康市",
				            "leaf": true
				          },
				          {
				            "text": "呼圖壁縣",
				            "leaf": true
				          },
				          {
				            "text": "瑪納斯縣",
				            "leaf": true
				          },
				          {
				            "text": "奇台縣",
				            "leaf": true
				          },
				          {
				            "text": "吉木薩爾縣",
				            "leaf": true
				          },
				          {
				            "text": "木壘哈薩克自治縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "五家渠市",
				        "leaf": true
				      },
				      {
				        "text": "吐魯番地區",
				        "children": [
				          {
				            "text": "吐魯番市",
				            "leaf": true
				          },
				          {
				            "text": "鄯善縣",
				            "leaf": true
				          },
				          {
				            "text": "托克遜縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "巴音郭楞蒙古自治州",
				        "children": [
				          {
				            "text": "庫爾勒市",
				            "leaf": true
				          },
				          {
				            "text": "輪台縣",
				            "leaf": true
				          },
				          {
				            "text": "尉犁縣",
				            "leaf": true
				          },
				          {
				            "text": "若羌縣",
				            "leaf": true
				          },
				          {
				            "text": "且末縣",
				            "leaf": true
				          },
				          {
				            "text": "焉耆回族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "和靜縣",
				            "leaf": true
				          },
				          {
				            "text": "和碩縣",
				            "leaf": true
				          },
				          {
				            "text": "博湖縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "阿克蘇地區",
				        "children": [
				          {
				            "text": "阿克蘇市",
				            "leaf": true
				          },
				          {
				            "text": "溫宿縣",
				            "leaf": true
				          },
				          {
				            "text": "庫車縣",
				            "leaf": true
				          },
				          {
				            "text": "沙雅縣",
				            "leaf": true
				          },
				          {
				            "text": "新和縣",
				            "leaf": true
				          },
				          {
				            "text": "拜城縣",
				            "leaf": true
				          },
				          {
				            "text": "烏什縣",
				            "leaf": true
				          },
				          {
				            "text": "阿瓦提縣",
				            "leaf": true
				          },
				          {
				            "text": "柯坪縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "阿拉爾市",
				        "leaf": true
				      },
				      {
				        "text": "喀什地區",
				        "children": [
				          {
				            "text": "喀什市",
				            "leaf": true
				          },
				          {
				            "text": "疏附縣",
				            "leaf": true
				          },
				          {
				            "text": "疏勒縣",
				            "leaf": true
				          },
				          {
				            "text": "英吉沙縣",
				            "leaf": true
				          },
				          {
				            "text": "澤普縣",
				            "leaf": true
				          },
				          {
				            "text": "莎車縣",
				            "leaf": true
				          },
				          {
				            "text": "葉城縣",
				            "leaf": true
				          },
				          {
				            "text": "麥蓋提縣",
				            "leaf": true
				          },
				          {
				            "text": "岳普湖縣",
				            "leaf": true
				          },
				          {
				            "text": "伽師縣",
				            "leaf": true
				          },
				          {
				            "text": "巴楚縣",
				            "leaf": true
				          },
				          {
				            "text": "塔什庫爾干塔吉克自治縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "圖木舒克市",
				        "leaf": true
				      },
				      {
				        "text": "伊犁哈薩克自治州",
				        "children": [
				          {
				            "text": "伊寧市",
				            "leaf": true
				          },
				          {
				            "text": "奎屯市",
				            "leaf": true
				          },
				          {
				            "text": "伊寧縣",
				            "leaf": true
				          },
				          {
				            "text": "察布查爾錫伯自治縣",
				            "leaf": true
				          },
				          {
				            "text": "霍城縣",
				            "leaf": true
				          },
				          {
				            "text": "鞏留縣",
				            "leaf": true
				          },
				          {
				            "text": "新源縣",
				            "leaf": true
				          },
				          {
				            "text": "昭蘇縣",
				            "leaf": true
				          },
				          {
				            "text": "特克斯縣",
				            "leaf": true
				          },
				          {
				            "text": "尼勒克縣",
				            "leaf": true
				          }
				        ]
				      }
				    ]
				  },
				  {
				    "text": "青海省",
				    "children": [
				      {
				        "text": "海北藏族自治州",
				        "children": [
				          {
				            "text": "門源回族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "祁連縣",
				            "leaf": true
				          },
				          {
				            "text": "海晏縣",
				            "leaf": true
				          },
				          {
				            "text": "剛察縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "西寧市",
				        "children": [
				          {
				            "text": "城東區",
				            "leaf": true
				          },
				          {
				            "text": "城中區",
				            "leaf": true
				          },
				          {
				            "text": "城西區",
				            "leaf": true
				          },
				          {
				            "text": "城北區",
				            "leaf": true
				          },
				          {
				            "text": "大通回族土族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "湟中縣",
				            "leaf": true
				          },
				          {
				            "text": "湟源縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "海東地區",
				        "children": [
				          {
				            "text": "平安縣",
				            "leaf": true
				          },
				          {
				            "text": "民和回族土族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "樂都縣",
				            "leaf": true
				          },
				          {
				            "text": "互助土族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "化隆回族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "循化撒拉族自治縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "黃南藏族自治州",
				        "children": [
				          {
				            "text": "同仁縣",
				            "leaf": true
				          },
				          {
				            "text": "尖扎縣",
				            "leaf": true
				          },
				          {
				            "text": "澤庫縣",
				            "leaf": true
				          },
				          {
				            "text": "河南蒙古族自治縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "海南藏族自治州",
				        "children": [
				          {
				            "text": "共和縣",
				            "leaf": true
				          },
				          {
				            "text": "同德縣",
				            "leaf": true
				          },
				          {
				            "text": "貴德縣",
				            "leaf": true
				          },
				          {
				            "text": "興海縣",
				            "leaf": true
				          },
				          {
				            "text": "貴南縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "果洛藏族自治州",
				        "children": [
				          {
				            "text": "瑪沁縣",
				            "leaf": true
				          },
				          {
				            "text": "班瑪縣",
				            "leaf": true
				          },
				          {
				            "text": "甘德縣",
				            "leaf": true
				          },
				          {
				            "text": "達日縣",
				            "leaf": true
				          },
				          {
				            "text": "久治縣",
				            "leaf": true
				          },
				          {
				            "text": "瑪多縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "玉樹藏族自治州",
				        "children": [
				          {
				            "text": "玉樹縣",
				            "leaf": true
				          },
				          {
				            "text": "雜多縣",
				            "leaf": true
				          },
				          {
				            "text": "稱多縣",
				            "leaf": true
				          },
				          {
				            "text": "治多縣",
				            "leaf": true
				          },
				          {
				            "text": "囊謙縣",
				            "leaf": true
				          },
				          {
				            "text": "曲麻萊縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "海西蒙古族藏族自治州",
				        "children": [
				          {
				            "text": "格爾木市",
				            "leaf": true
				          },
				          {
				            "text": "德令哈市",
				            "leaf": true
				          },
				          {
				            "text": "烏蘭縣",
				            "leaf": true
				          },
				          {
				            "text": "都蘭縣",
				            "leaf": true
				          },
				          {
				            "text": "天峻縣",
				            "leaf": true
				          }
				        ]
				      }
				    ]
				  },
				  {
				    "text": "寧夏回族自治區",
				    "children": [
				      {
				        "text": "銀川市",
				        "children": [
				          {
				            "text": "興慶區",
				            "leaf": true
				          },
				          {
				            "text": "西夏區",
				            "leaf": true
				          },
				          {
				            "text": "金鳳區",
				            "leaf": true
				          },
				          {
				            "text": "永寧縣",
				            "leaf": true
				          },
				          {
				            "text": "賀蘭縣",
				            "leaf": true
				          },
				          {
				            "text": "靈武市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "石嘴山市",
				        "children": [
				          {
				            "text": "大武口區",
				            "leaf": true
				          },
				          {
				            "text": "惠農區",
				            "leaf": true
				          },
				          {
				            "text": "平羅縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "吳忠市",
				        "children": [
				          {
				            "text": "利通區",
				            "leaf": true
				          },
				          {
				            "text": "鹽池縣",
				            "leaf": true
				          },
				          {
				            "text": "同心縣",
				            "leaf": true
				          },
				          {
				            "text": "青銅峽市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "固原市",
				        "children": [
				          {
				            "text": "原州區",
				            "leaf": true
				          },
				          {
				            "text": "西吉縣",
				            "leaf": true
				          },
				          {
				            "text": "隆德縣",
				            "leaf": true
				          },
				          {
				            "text": "涇源縣",
				            "leaf": true
				          },
				          {
				            "text": "彭陽縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "中衛市",
				        "children": [
				          {
				            "text": "沙坡頭區",
				            "leaf": true
				          },
				          {
				            "text": "中寧縣",
				            "leaf": true
				          },
				          {
				            "text": "海原縣",
				            "leaf": true
				          }
				        ]
				      }
				    ]
				  },
				  {
				    "text": "重慶市",
				    "children": [
				      {
				        "text": "重慶市",
				        "children": [
				          {
				            "text": "萬州區",
				            "leaf": true
				          },
				          {
				            "text": "涪陵區",
				            "leaf": true
				          },
				          {
				            "text": "渝中區",
				            "leaf": true
				          },
				          {
				            "text": "大渡口區",
				            "leaf": true
				          },
				          {
				            "text": "江北區",
				            "leaf": true
				          },
				          {
				            "text": "沙坪壩區",
				            "leaf": true
				          },
				          {
				            "text": "九龍坡區",
				            "leaf": true
				          },
				          {
				            "text": "南岸區",
				            "leaf": true
				          },
				          {
				            "text": "北碚區",
				            "leaf": true
				          },
				          {
				            "text": "萬盛區",
				            "leaf": true
				          },
				          {
				            "text": "雙橋區",
				            "leaf": true
				          },
				          {
				            "text": "渝北區",
				            "leaf": true
				          },
				          {
				            "text": "巴南區",
				            "leaf": true
				          },
				          {
				            "text": "黔江區",
				            "leaf": true
				          },
				          {
				            "text": "長壽區",
				            "leaf": true
				          },
				          {
				            "text": "江津區",
				            "leaf": true
				          },
				          {
				            "text": "合川區",
				            "leaf": true
				          },
				          {
				            "text": "永川區",
				            "leaf": true
				          },
				          {
				            "text": "南川區",
				            "leaf": true
				          },
				          {
				            "text": "綦江縣",
				            "leaf": true
				          },
				          {
				            "text": "潼南縣",
				            "leaf": true
				          },
				          {
				            "text": "銅梁縣",
				            "leaf": true
				          },
				          {
				            "text": "大足縣",
				            "leaf": true
				          },
				          {
				            "text": "榮昌縣",
				            "leaf": true
				          },
				          {
				            "text": "璧山縣",
				            "leaf": true
				          },
				          {
				            "text": "梁平縣",
				            "leaf": true
				          },
				          {
				            "text": "城口縣",
				            "leaf": true
				          },
				          {
				            "text": "豐都縣",
				            "leaf": true
				          },
				          {
				            "text": "墊江縣",
				            "leaf": true
				          },
				          {
				            "text": "武隆縣",
				            "leaf": true
				          },
				          {
				            "text": "忠縣",
				            "leaf": true
				          },
				          {
				            "text": "開縣",
				            "leaf": true
				          },
				          {
				            "text": "雲陽縣",
				            "leaf": true
				          },
				          {
				            "text": "奉節縣",
				            "leaf": true
				          },
				          {
				            "text": "巫山縣",
				            "leaf": true
				          },
				          {
				            "text": "巫溪縣",
				            "leaf": true
				          },
				          {
				            "text": "石柱土家族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "秀山土家族苗族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "酉陽土家族苗族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "彭水苗族土家族自治縣",
				            "leaf": true
				          }
				        ]
				      }
				    ]
				  },
				  {
				    "text": "四川省",
				    "children": [
				      {
				        "text": "成都市",
				        "children": [
				          {
				            "text": "錦江區",
				            "leaf": true
				          },
				          {
				            "text": "青羊區",
				            "leaf": true
				          },
				          {
				            "text": "金牛區",
				            "leaf": true
				          },
				          {
				            "text": "武侯區",
				            "leaf": true
				          },
				          {
				            "text": "成華區",
				            "leaf": true
				          },
				          {
				            "text": "龍泉驛區",
				            "leaf": true
				          },
				          {
				            "text": "青白江區",
				            "leaf": true
				          },
				          {
				            "text": "新都區",
				            "leaf": true
				          },
				          {
				            "text": "溫江區",
				            "leaf": true
				          },
				          {
				            "text": "金堂縣",
				            "leaf": true
				          },
				          {
				            "text": "雙流縣",
				            "leaf": true
				          },
				          {
				            "text": "郫縣",
				            "leaf": true
				          },
				          {
				            "text": "大邑縣",
				            "leaf": true
				          },
				          {
				            "text": "蒲江縣",
				            "leaf": true
				          },
				          {
				            "text": "新津縣",
				            "leaf": true
				          },
				          {
				            "text": "都江堰市",
				            "leaf": true
				          },
				          {
				            "text": "彭州市",
				            "leaf": true
				          },
				          {
				            "text": "邛崍市",
				            "leaf": true
				          },
				          {
				            "text": "崇州市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "攀枝花市",
				        "children": [
				          {
				            "text": "東區",
				            "leaf": true
				          },
				          {
				            "text": "西區",
				            "leaf": true
				          },
				          {
				            "text": "仁和區",
				            "leaf": true
				          },
				          {
				            "text": "米易縣",
				            "leaf": true
				          },
				          {
				            "text": "鹽邊縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "自貢市",
				        "children": [
				          {
				            "text": "自流井區",
				            "leaf": true
				          },
				          {
				            "text": "貢井區",
				            "leaf": true
				          },
				          {
				            "text": "大安區",
				            "leaf": true
				          },
				          {
				            "text": "沿灘區",
				            "leaf": true
				          },
				          {
				            "text": "榮縣",
				            "leaf": true
				          },
				          {
				            "text": "富順縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "綿陽市",
				        "children": [
				          {
				            "text": "涪城區",
				            "leaf": true
				          },
				          {
				            "text": "游仙區",
				            "leaf": true
				          },
				          {
				            "text": "三台縣",
				            "leaf": true
				          },
				          {
				            "text": "鹽亭縣",
				            "leaf": true
				          },
				          {
				            "text": "安縣",
				            "leaf": true
				          },
				          {
				            "text": "梓潼縣",
				            "leaf": true
				          },
				          {
				            "text": "北川羌族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "平武縣",
				            "leaf": true
				          },
				          {
				            "text": "江油市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "南充市",
				        "children": [
				          {
				            "text": "順慶區",
				            "leaf": true
				          },
				          {
				            "text": "高坪區",
				            "leaf": true
				          },
				          {
				            "text": "嘉陵區",
				            "leaf": true
				          },
				          {
				            "text": "南部縣",
				            "leaf": true
				          },
				          {
				            "text": "營山縣",
				            "leaf": true
				          },
				          {
				            "text": "蓬安縣",
				            "leaf": true
				          },
				          {
				            "text": "儀隴縣",
				            "leaf": true
				          },
				          {
				            "text": "西充縣",
				            "leaf": true
				          },
				          {
				            "text": "閬中市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "達州市",
				        "children": [
				          {
				            "text": "通川區",
				            "leaf": true
				          },
				          {
				            "text": "達縣",
				            "leaf": true
				          },
				          {
				            "text": "宣漢縣",
				            "leaf": true
				          },
				          {
				            "text": "開江縣",
				            "leaf": true
				          },
				          {
				            "text": "大竹縣",
				            "leaf": true
				          },
				          {
				            "text": "渠縣",
				            "leaf": true
				          },
				          {
				            "text": "萬源市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "遂寧市",
				        "children": [
				          {
				            "text": "船山區",
				            "leaf": true
				          },
				          {
				            "text": "安居區",
				            "leaf": true
				          },
				          {
				            "text": "蓬溪縣",
				            "leaf": true
				          },
				          {
				            "text": "射洪縣",
				            "leaf": true
				          },
				          {
				            "text": "大英縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "廣安市",
				        "children": [
				          {
				            "text": "廣安區",
				            "leaf": true
				          },
				          {
				            "text": "岳池縣",
				            "leaf": true
				          },
				          {
				            "text": "武勝縣",
				            "leaf": true
				          },
				          {
				            "text": "鄰水縣",
				            "leaf": true
				          },
				          {
				            "text": "華鎣市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "巴中市",
				        "children": [
				          {
				            "text": "巴州區",
				            "leaf": true
				          },
				          {
				            "text": "通江縣",
				            "leaf": true
				          },
				          {
				            "text": "南江縣",
				            "leaf": true
				          },
				          {
				            "text": "平昌縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "瀘州市",
				        "children": [
				          {
				            "text": "江陽區",
				            "leaf": true
				          },
				          {
				            "text": "納溪區",
				            "leaf": true
				          },
				          {
				            "text": "龍馬潭區",
				            "leaf": true
				          },
				          {
				            "text": "瀘縣",
				            "leaf": true
				          },
				          {
				            "text": "合江縣",
				            "leaf": true
				          },
				          {
				            "text": "敘永縣",
				            "leaf": true
				          },
				          {
				            "text": "古藺縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "宜賓市",
				        "children": [
				          {
				            "text": "翠屏區",
				            "leaf": true
				          },
				          {
				            "text": "宜賓縣",
				            "leaf": true
				          },
				          {
				            "text": "南溪縣",
				            "leaf": true
				          },
				          {
				            "text": "江安縣",
				            "leaf": true
				          },
				          {
				            "text": "長寧縣",
				            "leaf": true
				          },
				          {
				            "text": "高縣",
				            "leaf": true
				          },
				          {
				            "text": "珙縣",
				            "leaf": true
				          },
				          {
				            "text": "筠連縣",
				            "leaf": true
				          },
				          {
				            "text": "興文縣",
				            "leaf": true
				          },
				          {
				            "text": "屏山縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "資陽市",
				        "children": [
				          {
				            "text": "雁江區",
				            "leaf": true
				          },
				          {
				            "text": "安岳縣",
				            "leaf": true
				          },
				          {
				            "text": "樂至縣",
				            "leaf": true
				          },
				          {
				            "text": "簡陽市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "內江市",
				        "children": [
				          {
				            "text": "市中區",
				            "leaf": true
				          },
				          {
				            "text": "東興區",
				            "leaf": true
				          },
				          {
				            "text": "威遠縣",
				            "leaf": true
				          },
				          {
				            "text": "資中縣",
				            "leaf": true
				          },
				          {
				            "text": "隆昌縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "樂山市",
				        "children": [
				          {
				            "text": "市中區",
				            "leaf": true
				          },
				          {
				            "text": "沙灣區",
				            "leaf": true
				          },
				          {
				            "text": "五通橋區",
				            "leaf": true
				          },
				          {
				            "text": "金口河區",
				            "leaf": true
				          },
				          {
				            "text": "犍為縣",
				            "leaf": true
				          },
				          {
				            "text": "井研縣",
				            "leaf": true
				          },
				          {
				            "text": "夾江縣",
				            "leaf": true
				          },
				          {
				            "text": "沐川縣",
				            "leaf": true
				          },
				          {
				            "text": "峨邊彝族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "馬邊彝族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "峨眉山市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "眉山市",
				        "children": [
				          {
				            "text": "東坡區",
				            "leaf": true
				          },
				          {
				            "text": "仁壽縣",
				            "leaf": true
				          },
				          {
				            "text": "彭山縣",
				            "leaf": true
				          },
				          {
				            "text": "洪雅縣",
				            "leaf": true
				          },
				          {
				            "text": "丹稜縣",
				            "leaf": true
				          },
				          {
				            "text": "青神縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "涼山彝族自治州",
				        "children": [
				          {
				            "text": "西昌市",
				            "leaf": true
				          },
				          {
				            "text": "木裡藏族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "鹽源縣",
				            "leaf": true
				          },
				          {
				            "text": "德昌縣",
				            "leaf": true
				          },
				          {
				            "text": "會理縣",
				            "leaf": true
				          },
				          {
				            "text": "會東縣",
				            "leaf": true
				          },
				          {
				            "text": "寧南縣",
				            "leaf": true
				          },
				          {
				            "text": "普格縣",
				            "leaf": true
				          },
				          {
				            "text": "布拖縣",
				            "leaf": true
				          },
				          {
				            "text": "金陽縣",
				            "leaf": true
				          },
				          {
				            "text": "昭覺縣",
				            "leaf": true
				          },
				          {
				            "text": "喜德縣",
				            "leaf": true
				          },
				          {
				            "text": "冕寧縣",
				            "leaf": true
				          },
				          {
				            "text": "越西縣",
				            "leaf": true
				          },
				          {
				            "text": "甘洛縣",
				            "leaf": true
				          },
				          {
				            "text": "美姑縣",
				            "leaf": true
				          },
				          {
				            "text": "雷波縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "雅安市",
				        "children": [
				          {
				            "text": "雨城區",
				            "leaf": true
				          },
				          {
				            "text": "名山縣",
				            "leaf": true
				          },
				          {
				            "text": "滎經縣",
				            "leaf": true
				          },
				          {
				            "text": "漢源縣",
				            "leaf": true
				          },
				          {
				            "text": "石棉縣",
				            "leaf": true
				          },
				          {
				            "text": "天全縣",
				            "leaf": true
				          },
				          {
				            "text": "蘆山縣",
				            "leaf": true
				          },
				          {
				            "text": "寶興縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "甘孜藏族自治州",
				        "children": [
				          {
				            "text": "康定縣",
				            "leaf": true
				          },
				          {
				            "text": "瀘定縣",
				            "leaf": true
				          },
				          {
				            "text": "丹巴縣",
				            "leaf": true
				          },
				          {
				            "text": "九龍縣",
				            "leaf": true
				          },
				          {
				            "text": "雅江縣",
				            "leaf": true
				          },
				          {
				            "text": "道孚縣",
				            "leaf": true
				          },
				          {
				            "text": "爐霍縣",
				            "leaf": true
				          },
				          {
				            "text": "甘孜縣",
				            "leaf": true
				          },
				          {
				            "text": "新龍縣",
				            "leaf": true
				          },
				          {
				            "text": "德格縣",
				            "leaf": true
				          },
				          {
				            "text": "白玉縣",
				            "leaf": true
				          },
				          {
				            "text": "石渠縣",
				            "leaf": true
				          },
				          {
				            "text": "色達縣",
				            "leaf": true
				          },
				          {
				            "text": "理塘縣",
				            "leaf": true
				          },
				          {
				            "text": "巴塘縣",
				            "leaf": true
				          },
				          {
				            "text": "鄉城縣",
				            "leaf": true
				          },
				          {
				            "text": "稻城縣",
				            "leaf": true
				          },
				          {
				            "text": "得榮縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "阿壩藏族羌族自治州",
				        "children": [
				          {
				            "text": "汶川縣",
				            "leaf": true
				          },
				          {
				            "text": "理縣",
				            "leaf": true
				          },
				          {
				            "text": "茂縣",
				            "leaf": true
				          },
				          {
				            "text": "松潘縣",
				            "leaf": true
				          },
				          {
				            "text": "九寨溝縣",
				            "leaf": true
				          },
				          {
				            "text": "金川縣",
				            "leaf": true
				          },
				          {
				            "text": "小金縣",
				            "leaf": true
				          },
				          {
				            "text": "黑水縣",
				            "leaf": true
				          },
				          {
				            "text": "馬爾康縣",
				            "leaf": true
				          },
				          {
				            "text": "壤塘縣",
				            "leaf": true
				          },
				          {
				            "text": "阿壩縣",
				            "leaf": true
				          },
				          {
				            "text": "若爾蓋縣",
				            "leaf": true
				          },
				          {
				            "text": "紅原縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "德陽市",
				        "children": [
				          {
				            "text": "旌陽區",
				            "leaf": true
				          },
				          {
				            "text": "中江縣",
				            "leaf": true
				          },
				          {
				            "text": "羅江縣",
				            "leaf": true
				          },
				          {
				            "text": "廣漢市",
				            "leaf": true
				          },
				          {
				            "text": "什邡市",
				            "leaf": true
				          },
				          {
				            "text": "綿竹市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "廣元市",
				        "children": [
				          {
				            "text": "市中區",
				            "leaf": true
				          },
				          {
				            "text": "元壩區",
				            "leaf": true
				          },
				          {
				            "text": "朝天區",
				            "leaf": true
				          },
				          {
				            "text": "旺蒼縣",
				            "leaf": true
				          },
				          {
				            "text": "青川縣",
				            "leaf": true
				          },
				          {
				            "text": "劍閣縣",
				            "leaf": true
				          },
				          {
				            "text": "蒼溪縣",
				            "leaf": true
				          }
				        ]
				      }
				    ]
				  },
				  {
				    "text": "貴州省",
				    "children": [
				      {
				        "text": "貴陽市",
				        "children": [
				          {
				            "text": "南明區",
				            "leaf": true
				          },
				          {
				            "text": "雲巖區",
				            "leaf": true
				          },
				          {
				            "text": "花溪區",
				            "leaf": true
				          },
				          {
				            "text": "烏當區",
				            "leaf": true
				          },
				          {
				            "text": "白雲區",
				            "leaf": true
				          },
				          {
				            "text": "小河區",
				            "leaf": true
				          },
				          {
				            "text": "開陽縣",
				            "leaf": true
				          },
				          {
				            "text": "息烽縣",
				            "leaf": true
				          },
				          {
				            "text": "修文縣",
				            "leaf": true
				          },
				          {
				            "text": "清鎮市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "遵義市",
				        "children": [
				          {
				            "text": "紅花崗區",
				            "leaf": true
				          },
				          {
				            "text": "匯川區",
				            "leaf": true
				          },
				          {
				            "text": "遵義縣",
				            "leaf": true
				          },
				          {
				            "text": "桐梓縣",
				            "leaf": true
				          },
				          {
				            "text": "綏陽縣",
				            "leaf": true
				          },
				          {
				            "text": "正安縣",
				            "leaf": true
				          },
				          {
				            "text": "道真仡佬族苗族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "務川仡佬族苗族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "鳳岡縣",
				            "leaf": true
				          },
				          {
				            "text": "湄潭縣",
				            "leaf": true
				          },
				          {
				            "text": "余慶縣",
				            "leaf": true
				          },
				          {
				            "text": "習水縣",
				            "leaf": true
				          },
				          {
				            "text": "赤水市",
				            "leaf": true
				          },
				          {
				            "text": "仁懷市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "安順市",
				        "children": [
				          {
				            "text": "西秀區",
				            "leaf": true
				          },
				          {
				            "text": "平壩縣",
				            "leaf": true
				          },
				          {
				            "text": "普定縣",
				            "leaf": true
				          },
				          {
				            "text": "鎮寧布依族苗族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "關嶺布依族苗族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "紫雲苗族布依族自治縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "黔南布依族苗族自治州",
				        "children": [
				          {
				            "text": "都勻市",
				            "leaf": true
				          },
				          {
				            "text": "福泉市",
				            "leaf": true
				          },
				          {
				            "text": "荔波縣",
				            "leaf": true
				          },
				          {
				            "text": "貴定縣",
				            "leaf": true
				          },
				          {
				            "text": "甕安縣",
				            "leaf": true
				          },
				          {
				            "text": "獨山縣",
				            "leaf": true
				          },
				          {
				            "text": "平塘縣",
				            "leaf": true
				          },
				          {
				            "text": "羅甸縣",
				            "leaf": true
				          },
				          {
				            "text": "長順縣",
				            "leaf": true
				          },
				          {
				            "text": "龍裡縣",
				            "leaf": true
				          },
				          {
				            "text": "惠水縣",
				            "leaf": true
				          },
				          {
				            "text": "三都水族自治縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "黔東南苗族侗族自治州",
				        "children": [
				          {
				            "text": "凱裡市",
				            "leaf": true
				          },
				          {
				            "text": "黃平縣",
				            "leaf": true
				          },
				          {
				            "text": "施秉縣",
				            "leaf": true
				          },
				          {
				            "text": "三穗縣",
				            "leaf": true
				          },
				          {
				            "text": "鎮遠縣",
				            "leaf": true
				          },
				          {
				            "text": "岑鞏縣",
				            "leaf": true
				          },
				          {
				            "text": "天柱縣",
				            "leaf": true
				          },
				          {
				            "text": "錦屏縣",
				            "leaf": true
				          },
				          {
				            "text": "劍河縣",
				            "leaf": true
				          },
				          {
				            "text": "台江縣",
				            "leaf": true
				          },
				          {
				            "text": "黎平縣",
				            "leaf": true
				          },
				          {
				            "text": "榕江縣",
				            "leaf": true
				          },
				          {
				            "text": "從江縣",
				            "leaf": true
				          },
				          {
				            "text": "雷山縣",
				            "leaf": true
				          },
				          {
				            "text": "麻江縣",
				            "leaf": true
				          },
				          {
				            "text": "丹寨縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "銅仁地區",
				        "children": [
				          {
				            "text": "銅仁市",
				            "leaf": true
				          },
				          {
				            "text": "江口縣",
				            "leaf": true
				          },
				          {
				            "text": "玉屏侗族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "石阡縣",
				            "leaf": true
				          },
				          {
				            "text": "思南縣",
				            "leaf": true
				          },
				          {
				            "text": "印江土家族苗族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "德江縣",
				            "leaf": true
				          },
				          {
				            "text": "沿河土家族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "松桃苗族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "萬山特區",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "畢節地區",
				        "children": [
				          {
				            "text": "畢節市",
				            "leaf": true
				          },
				          {
				            "text": "大方縣",
				            "leaf": true
				          },
				          {
				            "text": "黔西縣",
				            "leaf": true
				          },
				          {
				            "text": "金沙縣",
				            "leaf": true
				          },
				          {
				            "text": "織金縣",
				            "leaf": true
				          },
				          {
				            "text": "納雍縣",
				            "leaf": true
				          },
				          {
				            "text": "威寧彝族回族苗族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "赫章縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "六碟水市",
				        "children": [
				          {
				            "text": "鍾山區",
				            "leaf": true
				          },
				          {
				            "text": "六枝特區",
				            "leaf": true
				          },
				          {
				            "text": "水城縣",
				            "leaf": true
				          },
				          {
				            "text": "碟縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "黔西南布依族苗族自治州",
				        "children": [
				          {
				            "text": "興義市",
				            "leaf": true
				          },
				          {
				            "text": "興仁縣",
				            "leaf": true
				          },
				          {
				            "text": "普安縣",
				            "leaf": true
				          },
				          {
				            "text": "晴隆縣",
				            "leaf": true
				          },
				          {
				            "text": "貞豐縣",
				            "leaf": true
				          },
				          {
				            "text": "望謨縣",
				            "leaf": true
				          },
				          {
				            "text": "冊亨縣",
				            "leaf": true
				          },
				          {
				            "text": "安龍縣",
				            "leaf": true
				          }
				        ]
				      }
				    ]
				  },
				  {
				    "text": "雲南省",
				    "children": [
				      {
				        "text": "西雙版納傣族自治州",
				        "children": [
				          {
				            "text": "景洪市",
				            "leaf": true
				          },
				          {
				            "text": "猛海縣",
				            "leaf": true
				          },
				          {
				            "text": "猛臘縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "德巨集傣族景頗族自治州",
				        "children": [
				          {
				            "text": "瑞麗市",
				            "leaf": true
				          },
				          {
				            "text": "潞西市",
				            "leaf": true
				          },
				          {
				            "text": "梁河縣",
				            "leaf": true
				          },
				          {
				            "text": "盈江縣",
				            "leaf": true
				          },
				          {
				            "text": "隴川縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "昭通市",
				        "children": [
				          {
				            "text": "昭陽區",
				            "leaf": true
				          },
				          {
				            "text": "魯甸縣",
				            "leaf": true
				          },
				          {
				            "text": "巧家縣",
				            "leaf": true
				          },
				          {
				            "text": "鹽津縣",
				            "leaf": true
				          },
				          {
				            "text": "大關縣",
				            "leaf": true
				          },
				          {
				            "text": "永善縣",
				            "leaf": true
				          },
				          {
				            "text": "綏江縣",
				            "leaf": true
				          },
				          {
				            "text": "鎮雄縣",
				            "leaf": true
				          },
				          {
				            "text": "彝良縣",
				            "leaf": true
				          },
				          {
				            "text": "威信縣",
				            "leaf": true
				          },
				          {
				            "text": "水富縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "昆明市",
				        "children": [
				          {
				            "text": "五華區",
				            "leaf": true
				          },
				          {
				            "text": "碟龍區",
				            "leaf": true
				          },
				          {
				            "text": "官渡區",
				            "leaf": true
				          },
				          {
				            "text": "西山區",
				            "leaf": true
				          },
				          {
				            "text": "東川區",
				            "leaf": true
				          },
				          {
				            "text": "呈貢縣",
				            "leaf": true
				          },
				          {
				            "text": "晉寧縣",
				            "leaf": true
				          },
				          {
				            "text": "富民縣",
				            "leaf": true
				          },
				          {
				            "text": "宜良縣",
				            "leaf": true
				          },
				          {
				            "text": "石林彝族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "嵩明縣",
				            "leaf": true
				          },
				          {
				            "text": "祿勸彝族苗族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "尋甸回族彝族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "安寧市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "大理白族自治州",
				        "children": [
				          {
				            "text": "大理市",
				            "leaf": true
				          },
				          {
				            "text": "漾濞彝族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "祥雲縣",
				            "leaf": true
				          },
				          {
				            "text": "賓川縣",
				            "leaf": true
				          },
				          {
				            "text": "彌渡縣",
				            "leaf": true
				          },
				          {
				            "text": "南澗彝族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "巍山彝族回族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "永平縣",
				            "leaf": true
				          },
				          {
				            "text": "雲龍縣",
				            "leaf": true
				          },
				          {
				            "text": "洱源縣",
				            "leaf": true
				          },
				          {
				            "text": "劍川縣",
				            "leaf": true
				          },
				          {
				            "text": "鶴慶縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "紅河哈尼族彝族自治州",
				        "children": [
				          {
				            "text": "個舊市",
				            "leaf": true
				          },
				          {
				            "text": "開遠市",
				            "leaf": true
				          },
				          {
				            "text": "蒙自縣",
				            "leaf": true
				          },
				          {
				            "text": "屏邊苗族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "建水縣",
				            "leaf": true
				          },
				          {
				            "text": "石屏縣",
				            "leaf": true
				          },
				          {
				            "text": "彌勒縣",
				            "leaf": true
				          },
				          {
				            "text": "瀘西縣",
				            "leaf": true
				          },
				          {
				            "text": "元陽縣",
				            "leaf": true
				          },
				          {
				            "text": "紅河縣",
				            "leaf": true
				          },
				          {
				            "text": "金平苗族瑤族傣族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "綠春縣",
				            "leaf": true
				          },
				          {
				            "text": "河口瑤族自治縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "曲靖市",
				        "children": [
				          {
				            "text": "麒麟區",
				            "leaf": true
				          },
				          {
				            "text": "馬龍縣",
				            "leaf": true
				          },
				          {
				            "text": "陸良縣",
				            "leaf": true
				          },
				          {
				            "text": "師宗縣",
				            "leaf": true
				          },
				          {
				            "text": "羅平縣",
				            "leaf": true
				          },
				          {
				            "text": "富源縣",
				            "leaf": true
				          },
				          {
				            "text": "會澤縣",
				            "leaf": true
				          },
				          {
				            "text": "沾益縣",
				            "leaf": true
				          },
				          {
				            "text": "宣威市",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "保山市",
				        "children": [
				          {
				            "text": "隆陽區",
				            "leaf": true
				          },
				          {
				            "text": "施甸縣",
				            "leaf": true
				          },
				          {
				            "text": "騰沖縣",
				            "leaf": true
				          },
				          {
				            "text": "龍陵縣",
				            "leaf": true
				          },
				          {
				            "text": "昌寧縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "文山壯族苗族自治州",
				        "children": [
				          {
				            "text": "文山縣",
				            "leaf": true
				          },
				          {
				            "text": "硯山縣",
				            "leaf": true
				          },
				          {
				            "text": "西疇縣",
				            "leaf": true
				          },
				          {
				            "text": "麻栗坡縣",
				            "leaf": true
				          },
				          {
				            "text": "馬關縣",
				            "leaf": true
				          },
				          {
				            "text": "丘北縣",
				            "leaf": true
				          },
				          {
				            "text": "廣南縣",
				            "leaf": true
				          },
				          {
				            "text": "富寧縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "玉溪市",
				        "children": [
				          {
				            "text": "紅塔區",
				            "leaf": true
				          },
				          {
				            "text": "江川縣",
				            "leaf": true
				          },
				          {
				            "text": "澄江縣",
				            "leaf": true
				          },
				          {
				            "text": "通海縣",
				            "leaf": true
				          },
				          {
				            "text": "華寧縣",
				            "leaf": true
				          },
				          {
				            "text": "易門縣",
				            "leaf": true
				          },
				          {
				            "text": "峨山彝族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "新平彝族傣族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "元江哈尼族彝族傣族自治縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "楚雄彝族自治州",
				        "children": [
				          {
				            "text": "楚雄市",
				            "leaf": true
				          },
				          {
				            "text": "雙柏縣",
				            "leaf": true
				          },
				          {
				            "text": "牟定縣",
				            "leaf": true
				          },
				          {
				            "text": "南華縣",
				            "leaf": true
				          },
				          {
				            "text": "姚安縣",
				            "leaf": true
				          },
				          {
				            "text": "大姚縣",
				            "leaf": true
				          },
				          {
				            "text": "永仁縣",
				            "leaf": true
				          },
				          {
				            "text": "元謀縣",
				            "leaf": true
				          },
				          {
				            "text": "武定縣",
				            "leaf": true
				          },
				          {
				            "text": "祿豐縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "普洱市",
				        "children": [
				          {
				            "text": "思茅區",
				            "leaf": true
				          },
				          {
				            "text": "寧洱哈尼族彝族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "墨江哈尼族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "景東彝族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "景谷傣族彝族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "鎮沅彝族哈尼族拉祜族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "江城哈尼族彝族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "孟連傣族拉祜族佤族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "瀾滄拉祜族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "西盟佤族自治縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "臨滄市",
				        "children": [
				          {
				            "text": "臨翔區",
				            "leaf": true
				          },
				          {
				            "text": "鳳慶縣",
				            "leaf": true
				          },
				          {
				            "text": "雲縣",
				            "leaf": true
				          },
				          {
				            "text": "永德縣",
				            "leaf": true
				          },
				          {
				            "text": "鎮康縣",
				            "leaf": true
				          },
				          {
				            "text": "雙江拉祜族佤族布朗族傣族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "耿馬傣族佤族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "滄源佤族自治縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "怒江僳僳族自治州",
				        "children": [
				          {
				            "text": "瀘水縣",
				            "leaf": true
				          },
				          {
				            "text": "福貢縣",
				            "leaf": true
				          },
				          {
				            "text": "貢山獨龍族怒族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "蘭坪白族普米族自治縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "迪慶藏族自治州",
				        "children": [
				          {
				            "text": "香格裡拉縣",
				            "leaf": true
				          },
				          {
				            "text": "德欽縣",
				            "leaf": true
				          },
				          {
				            "text": "維西僳僳族自治縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "麗江市",
				        "children": [
				          {
				            "text": "古城區",
				            "leaf": true
				          },
				          {
				            "text": "玉龍納西族自治縣",
				            "leaf": true
				          },
				          {
				            "text": "永勝縣",
				            "leaf": true
				          },
				          {
				            "text": "華坪縣",
				            "leaf": true
				          },
				          {
				            "text": "寧蒗彝族自治縣",
				            "leaf": true
				          }
				        ]
				      }
				    ]
				  },
				  {
				    "text": "西藏自治區",
				    "children": [
				      {
				        "text": "拉薩市",
				        "children": [
				          {
				            "text": "城關區",
				            "leaf": true
				          },
				          {
				            "text": "林周縣",
				            "leaf": true
				          },
				          {
				            "text": "當雄縣",
				            "leaf": true
				          },
				          {
				            "text": "尼木縣",
				            "leaf": true
				          },
				          {
				            "text": "曲水縣",
				            "leaf": true
				          },
				          {
				            "text": "堆龍德慶縣",
				            "leaf": true
				          },
				          {
				            "text": "達孜縣",
				            "leaf": true
				          },
				          {
				            "text": "墨竹工卡縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "日喀則地區",
				        "children": [
				          {
				            "text": "日喀則市",
				            "leaf": true
				          },
				          {
				            "text": "南木林縣",
				            "leaf": true
				          },
				          {
				            "text": "江孜縣",
				            "leaf": true
				          },
				          {
				            "text": "定日縣",
				            "leaf": true
				          },
				          {
				            "text": "薩迦縣",
				            "leaf": true
				          },
				          {
				            "text": "拉孜縣",
				            "leaf": true
				          },
				          {
				            "text": "昂仁縣",
				            "leaf": true
				          },
				          {
				            "text": "謝通門縣",
				            "leaf": true
				          },
				          {
				            "text": "白朗縣",
				            "leaf": true
				          },
				          {
				            "text": "仁布縣",
				            "leaf": true
				          },
				          {
				            "text": "康馬縣",
				            "leaf": true
				          },
				          {
				            "text": "定結縣",
				            "leaf": true
				          },
				          {
				            "text": "仲巴縣",
				            "leaf": true
				          },
				          {
				            "text": "亞東縣",
				            "leaf": true
				          },
				          {
				            "text": "吉隆縣",
				            "leaf": true
				          },
				          {
				            "text": "聶拉木縣",
				            "leaf": true
				          },
				          {
				            "text": "薩嘎縣",
				            "leaf": true
				          },
				          {
				            "text": "崗巴縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "山南地區",
				        "children": [
				          {
				            "text": "乃東縣",
				            "leaf": true
				          },
				          {
				            "text": "扎囊縣",
				            "leaf": true
				          },
				          {
				            "text": "貢嘎縣",
				            "leaf": true
				          },
				          {
				            "text": "桑日縣",
				            "leaf": true
				          },
				          {
				            "text": "瓊結縣",
				            "leaf": true
				          },
				          {
				            "text": "曲松縣",
				            "leaf": true
				          },
				          {
				            "text": "措美縣",
				            "leaf": true
				          },
				          {
				            "text": "洛扎縣",
				            "leaf": true
				          },
				          {
				            "text": "加查縣",
				            "leaf": true
				          },
				          {
				            "text": "隆子縣",
				            "leaf": true
				          },
				          {
				            "text": "錯那縣",
				            "leaf": true
				          },
				          {
				            "text": "浪卡子縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "林芝地區",
				        "children": [
				          {
				            "text": "林芝縣",
				            "leaf": true
				          },
				          {
				            "text": "工布江達縣",
				            "leaf": true
				          },
				          {
				            "text": "米林縣",
				            "leaf": true
				          },
				          {
				            "text": "墨脫縣",
				            "leaf": true
				          },
				          {
				            "text": "波密縣",
				            "leaf": true
				          },
				          {
				            "text": "察隅縣",
				            "leaf": true
				          },
				          {
				            "text": "朗縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "昌都地區",
				        "children": [
				          {
				            "text": "昌都縣",
				            "leaf": true
				          },
				          {
				            "text": "江達縣",
				            "leaf": true
				          },
				          {
				            "text": "貢覺縣",
				            "leaf": true
				          },
				          {
				            "text": "類別烏齊縣",
				            "leaf": true
				          },
				          {
				            "text": "丁青縣",
				            "leaf": true
				          },
				          {
				            "text": "察雅縣",
				            "leaf": true
				          },
				          {
				            "text": "八宿縣",
				            "leaf": true
				          },
				          {
				            "text": "左貢縣",
				            "leaf": true
				          },
				          {
				            "text": "芒康縣",
				            "leaf": true
				          },
				          {
				            "text": "洛隆縣",
				            "leaf": true
				          },
				          {
				            "text": "邊壩縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "那曲地區",
				        "children": [
				          {
				            "text": "那曲縣",
				            "leaf": true
				          },
				          {
				            "text": "嘉黎縣",
				            "leaf": true
				          },
				          {
				            "text": "例如縣",
				            "leaf": true
				          },
				          {
				            "text": "聶榮縣",
				            "leaf": true
				          },
				          {
				            "text": "安多縣",
				            "leaf": true
				          },
				          {
				            "text": "申扎縣",
				            "leaf": true
				          },
				          {
				            "text": "索縣",
				            "leaf": true
				          },
				          {
				            "text": "班戈縣",
				            "leaf": true
				          },
				          {
				            "text": "巴青縣",
				            "leaf": true
				          },
				          {
				            "text": "尼瑪縣",
				            "leaf": true
				          }
				        ]
				      },
				      {
				        "text": "阿里地區",
				        "children": [
				          {
				            "text": "普蘭縣",
				            "leaf": true
				          },
				          {
				            "text": "札達縣",
				            "leaf": true
				          },
				          {
				            "text": "噶爾縣",
				            "leaf": true
				          },
				          {
				            "text": "日土縣",
				            "leaf": true
				          },
				          {
				            "text": "革吉縣",
				            "leaf": true
				          },
				          {
				            "text": "改則縣",
				            "leaf": true
				          },
				          {
				            "text": "措勤縣",
				            "leaf": true
				          }
				        ]
				      }
				    ]
				  },
				  {
				    "text": "台灣省",
				    "children": [
				      {
				        "text": "台北市",
				        "leaf": true
				      },
				      {
				        "text": "高雄市",
				        "leaf": true
				      },
				      {
				        "text": "基隆市",
				        "leaf": true
				      },
				      {
				        "text": "台中市",
				        "leaf": true
				      },
				      {
				        "text": "台南市",
				        "leaf": true
				      },
				      {
				        "text": "新竹市",
				        "leaf": true
				      },
				      {
				        "text": "嘉義市",
				        "leaf": true
				      }
				    ]
				  },
				  {
				    "text": "澳門特別行政區",
				    "children": [
				      {
				        "text": "澳門特別行政區",
				        "leaf": true
				      }
				    ]
				  },
				  {
				    "text": "香港特別行政區",
				    "children": [
				      {
				        "text": "香港特別行政區",
				        "leaf": true
				      }
				    ]
				  }
				]
			}
		}
				
	}
});
