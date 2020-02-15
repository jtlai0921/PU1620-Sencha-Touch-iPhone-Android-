Ext.define('MyShop.store.HotKey', {
    extend: 'Ext.data.Store',

    config: {
        fields: ['key'],
		proxy:{
			type: 'format',
			api:{
				read: "data/hotkey.json"
			}
		}
    }
});
