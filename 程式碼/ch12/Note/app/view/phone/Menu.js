Ext.define('Note.view.phone.Menu', {
    extend: 'Ext.Panel',
    xtype: 'menuview',
    requires: [
        'Ext.TitleBar',
        'Ext.dataview.List'
    ],
    config:{
        modal: true,
        layout: 'fit',
        hideOnMaskTap: true,
        width: Ext.os.is.Phone ? '12em' : '16em',
        height: (Ext.os.is.BlackBerry && Ext.os.version.getMajor() === 10) ? '7em' : (Ext.os.is.Phone ? '7.5em' : '10em'),
        centered: true,

        items: [
        	{
	            xtype: 'list',
	            valueField: 'text',
	            data:[
	            	{text: '編輯記事'},
	            	{text: '移除記事'}
	            ],
        	},
	    	{
	            docked: 'top',
	            xtype: 'titlebar',
	            title: ''
			}
        ]
	}

});
