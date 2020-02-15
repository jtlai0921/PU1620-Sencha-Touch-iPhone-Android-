Ext.define('Test.controller.Main', {
	extend: 'Ext.app.Controller',

	config: {
		models: [
		],
		
		stores: [
		],
		
		views: [
		],

		refs: {
			loginButton: "#buttonLogin"
		},

		control: {
			loginButton: {
				tap:"onLogin"
			},
			"button[text=編輯]": {
				tap:"onRedirect"
			},
			"button[text='詳細訊息']": {
				tap:"onRedirect"
			}
		},
		
		routes:{
			":product/:edit/:id": "onRoute"
		}
	},
	
	init: function(){
	},
	
	launch: function(){
	},

	onLogin: function(){
		alert("已觸碰儲存按鈕。")
	},
	
	onRoute: function(controle,action,id){
		//要執行的動作
		console.log(controle,":",action,":",id)
	},

	onRedirect: function(cmp){
		this.redirectTo(cmp.config.config.url+"1");
	}

});
