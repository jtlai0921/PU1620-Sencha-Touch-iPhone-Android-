Ext.define('FirstApp.view.TestField', {
    extend: 'Ext.form.Panel',
    xtype: 'testfield',
    requires: [
        'Ext.Toolbar',
        'Ext.field.*',
        'Ext.tux.field.Province'
    ],
    config: {
    	
		items: [
			{xtype: 'textfield' , label: '文字字段', name: 'textfield1'},
			{xtype: 'numberfield' , label: '數字字段', name: 'numberfield1'},
			{xtype: 'textareafield' , label: '多行文字', name: 'textareafield1', maxRows: 4},
			{xtype: 'hiddenfield' , label: '隱藏字段', name: 'hiddenfield1'},
			{xtype: 'passwordfield' , label: '密碼', name: 'password'},
			{xtype: 'emailfield' , label: '電子信件', name: 'email'},
			{xtype: 'urlfield' , label: '網址', name: 'url'},
			{xtype: 'searchfield' , label: '搜尋', name: 'search'},
			{xtype: 'fieldset' , title: "角色" ,instructions: '可以為使用者設定多個角色',
				items:[
					{xtype: 'checkboxfield' , label: '管理員' , name: 'role' , value: 1},
					{xtype: 'checkboxfield' , label: '經理' , name: 'role' , value: 2},
					{xtype: 'checkboxfield' , label: '銷售人員' , name: 'role' , value: 3 , checked: true}
				]
			},
			{xtype: 'fieldset' , title: "性別" ,
				items:[
					{xtype: 'radiofield' , label: '男' , name: 'sex' , value: 1},
					{xtype: 'radiofield' , label: '女' , name: 'sex' , value: 2, checked: true}
				]
			},
			{xtype: 'spinnerfield' , label: '年齡', name: 'age', minValue: 20 , maxValue: 50 , defaultValue: 30, stepValue: 1 ,cycle: true},
			{xtype: 'sliderfield' , label: '年齡', name: 'age1', minValue: 20 , maxValue: 50 ,  increment: 1 , html: '20,30,40' ,
				values:[20,30,40],
				listeners:{
					change: function(cmp, sl, thumb, newValue, oldValue, eOpts){
						cmp.setHtml(cmp.getValue().join(','));
						//cmp.setHtml(newValue);
					}
				}
			},
			{xtype: 'togglefield' , label: '切換字段', name: 'toggle1', value:1},
			{xtype: 'datepickerfield' , label: '生日', name: 'birthday', value: new Date('1985-03-08') , dateFormat: 'Y-m-d',
				picker:{
					yearFrom: 1940,
					yearTo: 2000,
					dayText: '日',
					monthText: '月',
					yearText: '年',
					 slotOrder: ['year', 'month', 'day'],
					 cancelButton: '取消',
					 doneButton: '確定'
				}
			},
			{xtype: 'selectfield' , label: '學歷' , name: 'degree', value: 6,
				options: [
					{text: '小學', value: 1},
					{text: '初中', value: 2},
					{text: '高中', value: 3},
					{text: '中專', value: 4},
					{text: '大專', value: 5},
					{text: '本科', value: 6},
					{text: '研究生', value: 7},
					{text: '博士', value: 8}
				]
			},
			{xtype:'provincefield'}
        ]
    }
    
});
