Ext.define('Test.view.Main', {
    extend: 'Ext.form.Panel',
    xtype: 'main',
    id: 'myform',
    requires: [
        'Ext.Toolbar',
        'Ext.field.Password'
    ],
    config: {

		items: [
			{xtype: 'textfield' , name: 'username' , label: '使用者名稱'},
			{xtype: 'passwordfield' , name: 'passowrd' , label: '密碼'},
			{
				xtype: 'toolbar' , 
				docked: 'bottom',
				items:[
					{text: '登入' , id: 'buttonLogin'},
					{text: '重設' , id: 'buttonReset' , disabled: true},
					{text:"編輯",config:{ url:"product/edit/"}},
					{text:"詳細訊息",config:{url:"product/details/"}}
				]
			}
        ]
    }
});
