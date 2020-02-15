Ext.define('Ext.tux.view.Phone', {
	extend : 'Ext.Container',
	xtype : 'phoneview',
	requires : [
    	'Ext.Button',
    	'Ext.field.Text'
	],

	config : {
		layout : {
			type:'hbox',
			align:'stretch'
		},
		
		items:[
			{
				xtype:"button",
				width:80,
				ui:"action"
			},
			{
				xtype:"textfield",
				flex: 1
				
			},
			{
				xtype:"button",
				iconCls: 'delete',
				iconMask: true,
				ui:"decline"
		    }
		]
	},
	
	initialize : function() {
		var me=this;
		me.callParent();
		me.phoneType=me.down("button");
		me.phoneNumber=me.down("textfield");
		me.deleteButton=me.down("button[iconCls=delete]");
	},
	
	setPhoneType : function(value) {
		this.phoneType.setText(value);
	},
	
	setPhoneNumber : function(value) {
		this.phoneNumber.setValue(value);
	}
	
})
