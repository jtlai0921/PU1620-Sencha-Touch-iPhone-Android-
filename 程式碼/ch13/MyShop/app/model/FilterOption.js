Ext.define('MyShop.model.FilterOption', {
    extend: 'Ext.data.Model',
    config: {
    	identifier: 'uuid',
        fields: ['text', 'filter_id'],
        proxy: {
            type: 'localstorage',
            id  : 'MyShopFilterOption'
        }
    }
});
