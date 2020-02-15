Ext.define('FirstApp.view.Form', {
    extend: 'Ext.form.Panel',
    xtype: 'myform',
    requires: [
        'Ext.Toolbar',
        'Ext.field.*'
    ],
    config: {
    	
		items: [
			{xtype: 'textfield', name:'ProductId' , label:'產品編號' , readOnly:true},
			{xtype: 'textfield' , name: 'ProductName' , label: '產品名稱' },
			{xtype: 'numberfield' , name: 'Price' , label: '價格' , minValue: 0},
			{xtype: 'numberfield' , name: 'Stock' , label: '庫存' , minValue: 0},
			{
				xtype: 'toolbar' , 
				docked: 'bottom',
				items:[
					{text: 'setValues'},
					{text: 'getValues'},
					{text: 'setRecord'},
					{text: 'getRecord'}
				]
			},
			{
				xtype: 'toolbar' , 
				docked: 'bottom',
				items:[
					{text: 'submit'},
					{text: 'reset'}
				]
			}
        ]
    }
    
});
