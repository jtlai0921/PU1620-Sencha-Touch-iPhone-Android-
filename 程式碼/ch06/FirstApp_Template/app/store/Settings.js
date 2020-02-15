Ext.define('FirstApp.store.Settings', {
    extend: 'Ext.data.Store',

    config: {
        model: 'FirstApp.model.Setting',
        autoLoad: true
    }
});
