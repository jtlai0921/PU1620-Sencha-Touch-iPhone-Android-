Ext.define('MyShop.model.Filter', {
    extend: 'Ext.data.Model',
    config: {
    	identifier: 'uuid',
        fields: ['text', 'value' , 'field'],
        proxy: {
            type: 'localstorage',
            id  : 'MyShopFilter'
        },
        hasMany: 'MyShop.model.FilterOption'
    }
});
