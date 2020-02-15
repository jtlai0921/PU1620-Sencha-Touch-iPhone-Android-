Ext.define('MyShop.view.my.Login', {
    extend: 'Ext.form.Panel',
    xtype: 'loginview',
    requires: [
    	'Ext.TitleBar',
    	'Ext.field.Text',
    	'Ext.field.Password',
    	'Ext.field.Checkbox'
    ],
    config: {
    	items:[
    		{
    			xtype: 'titlebar',
    			docked: 'top',
    			title: '登入'
    		},
    		{
    			xtype: 'textfield',
    			name: 'username',
    			label: '使用者名稱'
    		},
    		{
                xtype: 'passwordfield',
                label: '密碼',
                name: 'password'
    		},
	        {
	            xtype: 'checkboxfield',
	            name : 'autologin',
	            label: '自動登入',
	            value: true,
	            checked: true
	        },
	        {
	        	height:10
	        },	        
	        {
	        	xtype: 'button',
	        	text: '登入',
	        	ui: 'decline'
	        },
	        {
	        	height:10
	        },	        
	        {
	        	xtype: 'button',
	        	text: '找回密碼',
	        	ui: 'confirm'
	        },
	        {
	        	height:10
	        },	        
	        {
	        	xtype: 'button',
	        	text: '免費登錄',
	        	ui: 'action'
	        }
    	]
    }
    
});
