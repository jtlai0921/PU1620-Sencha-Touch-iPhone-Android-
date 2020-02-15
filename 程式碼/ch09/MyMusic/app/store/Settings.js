Ext.define('MyMusic.store.Settings', {
    extend: 'Ext.data.Store',

    config: {
        model: 'MyMusic.model.Setting',
        autoLoad: true,
        autoSync: true
    }
});
