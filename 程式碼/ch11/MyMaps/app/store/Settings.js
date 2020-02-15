Ext.define('MyMaps.store.Settings', {
    extend: 'Ext.data.Store',

    config: {
        model: 'MyMaps.model.Setting',
        autoLoad: true,
        autoSync: true
    }
});
