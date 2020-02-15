Ext.define('FirstApp.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
        'FirstApp.view.Form',
        'FirstApp.view.TestField'
    ],
    config: {
        tabBarPosition: 'top',
        activeItem: 1,

        items: [
            {
                title: '表單',
                iconCls: 'home',
                
                xtype: 'myform'
            },
            {
                title: '字段',
                xtype: 'testfield'
            }
        ]
    }
});
