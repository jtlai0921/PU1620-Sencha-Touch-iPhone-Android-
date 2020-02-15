Ext.define('MyShop.store.FilterOptions', {
    extend: 'Ext.data.Store',

    config: {
        model: 'MyShop.model.FilterOption',
        autoLoad: true,
        autoSync: true
    }
});
