Ext.define('MyShop.store.AutoCarousel', {
    extend: 'Ext.data.Store',

    config: {
        fields: [ 'id', 'image', 'title', 'intro'],
		proxy:{
			type: 'format',
			api:{
				read: "data/autocarousel.json",
			}
		}
    }
    
});
