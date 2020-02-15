Ext.define('MyMaps.model.Setting', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['key', 'value'],
        idProperty:"key",
        proxy: {
            type: 'localstorage',
            id  : 'MyMapsSettings'
        }
    }
});
