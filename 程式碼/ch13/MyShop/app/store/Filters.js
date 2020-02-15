Ext.define('MyShop.store.Filters', {
    extend: 'Ext.data.Store',

    config: {
        model: 'MyShop.model.Filter',
        autoLoad: true,
        autoSync: true
    }
});
