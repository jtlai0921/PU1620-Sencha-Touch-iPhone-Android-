Ext.define('Ext.tux.dataview.PhoneItem', {
    extend: 'Ext.dataview.component.DataItem',
    requires: [
    	'Ext.tux.view.Phone',
    	'Ext.picker.Picker'
    ],
    xtype: 'phoneitem',

    config: {
    	phoneView:true,
       
		dataMap: {
		    getPhoneView: {
		        setPhoneType: 'type',
		        setPhoneNumber: 'number'
		    }
		}
       
    },
    
	applyPhoneView: function(config) {
	    return Ext.factory(config,'Ext.tux.view.Phone', this.getPhoneView());
	},
	
	updatePhoneView: function(newPhoneView, oldPhoneView) {
	    if (oldPhoneView) {
			oldPhoneView.phoneType.un("tap",this.onTap);
			oldPhoneView.phoneNumber.un("blur",this,onBlue);
			oldPhoneView.deleteButton.un("tap",this.onDeleteTap);
			
	        this.remove(oldPhoneView);
	    }
	
	    if (newPhoneView) {
			newPhoneView.phoneType.on("tap",this.onTypeTap,this);
			newPhoneView.phoneNumber.on("blur",this.onBlue,this);
			newPhoneView.deleteButton.on("tap",this.onDeleteTap,this);
			
	        this.add(newPhoneView);
	    }        
	},

	onBlue: function(cmp, e,eOpts){
		var record = this.getRecord(),
			value=cmp.getValue();
		if(record.data.number!=value){
	    	record.set("number",value);
		}
	},

	onDeleteTap: function(){
		Ext.Msg.confirm("移除電話","確認移除目前電話？",function(btn){
			if(btn=='yes'){
				var record = this.getRecord();
				record.destroy();
			}
		},this);
	},

	onTypeTap: function(){
		var me=this,
			record = this.getRecord(),
			picker=me.picker;
		if(!picker){
			picker=Ext.create('Ext.picker.Picker',{
				/*
				doneButton:"選取",
				cancelButton:"取消",
				toolbar:{title:"選取型態"},
				*/
				doneButton: false,
				cancelButton: false,
				toolbar:false,
				//useTitles:true,
			    slots: [
			        {
			            name : 'phonetype',
			            title: '手機型態',			            
			            valueField: "text",
			            data : [
			                {text: '公司'},
			                {text: '家庭'},
			                {text: '手機'},
			                {text: '傳真'},
			                {text: '其他'},
			                {text: '取消'}
			            ]
			        }
			    ],
				listeners :{
					scope:me,
					//change:me.onChange
					pick: me.onPick
				}
			});
			me.picker = picker;
		}
		picker.setValue({phonetype:record.data.type })
		picker.show();
	},

	onChange: function(cmp, values, eopts){
		var me=this,
			record = this.getRecord();
		record.set("type",values["phonetype"]);
	},

	onPick: function (cmp,values,slot,eOpts) {
		var me=this,
			record = this.getRecord(),
			value = values[slot.getName()];
		if(value!="取消" ){
			record.set("type",value);
		}
		cmp.hide();	
	}
    
});
