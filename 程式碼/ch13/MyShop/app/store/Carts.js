Ext.define('MyShop.store.Carts', {
    extend: 'Ext.data.Store',

    config: {
        model: 'MyShop.model.Cart',
        autoLoad: true,
        autoSync: true
    }
});
