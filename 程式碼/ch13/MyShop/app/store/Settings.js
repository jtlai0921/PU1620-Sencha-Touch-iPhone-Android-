Ext.define('MyShop.store.Settings', {
    extend: 'Ext.data.Store',

    config: {
        model: 'MyShop.model.Setting',
        autoLoad: true,
        autoSync: true
    }
});
