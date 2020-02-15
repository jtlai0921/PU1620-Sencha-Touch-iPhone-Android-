Ext.define('Note.view.Form', {
    extend: 'Ext.form.Panel',
    xtype: 'noteform',
    requires: [
        'Ext.TitleBar',
        'Ext.field.Hidden',
        'Ext.field.Text',
        'Ext.field.TextArea'
    ],
    
    config: {
    	items:[
	    	{xtype: 'hiddenfield', name:'id'},
	    	{xtype: 'textfield', name: 'title', label:'標題' , required: true},
	    	{xtype: 'textareafield', name: 'content', label: '內容', maxRows: 10},
	    	{
	            docked: 'top',
	            xtype: 'titlebar',
	            title: '',
			    items: [
			    	{text: '取消', align: 'left', ui: 'back'},
			        {text: '儲存', align: 'right'}
			    ]
			}
	    ]
    }
});
