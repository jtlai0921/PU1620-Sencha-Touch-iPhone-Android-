Ext.define('FirstApp.view.ProvincePickerTest', {
    extend: 'Ext.Container',
    xtype: 'provincepickertest',
    requires: [
    	'Ext.tux.picker.Province',
    	'Ext.tux.dataview.Area'
    ],
    
    config: {
	    items: [
			{
				xtype:"button",
				text:"選取地區"
			},
			{
				xtype: 'button',
				text: '使用嵌套清單選取地區',
			},
			{
				xtype:"textfield",
				label:"省份",
				name:"province"
			},
			{
				xtype:"textfield",
				label:"市",
				name:"city"
			},
			{
				xtype:"textfield",
				label:"區縣",
				name:"district"
			}
        ]
    },

	initialize: function() {
		var me=this;
	    me.callParent();
	    me.down('button[text=選取地區]').on('tap',me.onButtonTap,me);
	    me.down('button[text=使用嵌套清單選取地區]').on('tap',me.onButtonTap2,me);
	},

    
    onButtonTap: function(){
    	var me=this,
			picker = me.picker;
		if(!picker){
			picker = Ext.create("Ext.tux.picker.Province");
			picker.on('change',me.onChange,me);
			me.picker = picker;
		}
		//picker.setValue({province: 13, city: 110, districts: 1026} );
		picker.show();
    },
    
    onChange: function(){
    	var me=this,
    		rawvalue = me.picker.getRawValue();
    	me.down("textfield[name=province]").setValue(rawvalue.province);
    	me.down("textfield[name=city]").setValue(rawvalue.city);
    	me.down("textfield[name=district]").setValue(rawvalue.district);
    },
    
    onButtonTap2: function () {
		var me=this,
			nestedList = me.nestedList;
		if(!nestedList){
			nestedList = Ext.create("Ext.Panel",{
				layout: "fit",
				fullscreen: true,
				modal: true,
				zIndex: 1000,
				items:[
					{
						xtype:"arealist",
						detailCard:Ext.create("Ext.Container",{styleHtmlContent:true})
					}
				]
			});
			nestedList.down("button[text=取消]").on("tap",function(){
				this.up("panel").hide();
			});			
			nestedList.down("arealist").on("leafitemtap",
				function( cmp, list, index, target, record, e, eOpts){
					/*
					var p,c,d;
					if(record.getDepth()==3){
						var parent= record.parentNode;
						c=parent.data.text;
						p=parent.parentNode.data.text
						d=record.data.text;
					}else{
						p=record.parentNode.data.text;
						c=record.data.text;
						d="";
					}
			    	me.down("textfield[name=province]").setValue(p);
			    	me.down("textfield[name=city]").setValue(c);
			    	me.down("textfield[name=district]").setValue(d);
			    	me.nestedList.hide();
			    	*/
			    	cmp.getDetailCard().setHtml(record.data.text+"的詳細頁面");
				},
			me);
			me.nestedList = nestedList;
		}
		nestedList.show();            				
    }
    
});
