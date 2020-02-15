Ext.define('MyShop.view.category.dataview.CategoryItem', {
    extend: 'Ext.dataview.component.DataItem',
    requires: [
    	'MyShop.view.category.CategoryItem'
    ],
    xtype: 'categoryitem',

    config: {
    	categoryItemView:true,
       
		dataMap: {
		    getCategoryItemView: {
		        setImage: 'image',
		        setTitle: 'title',
		        setInfo: 'info'
		    }
		}
       
    },
    
	applyCategoryItemView: function(config) {
	    return Ext.factory(config,'MyShop.view.category.CategoryItem', this.getCategoryItemView());
	},
	
	updateCategoryItemView: function(newview, oldview) {
	    if (oldview) {
	        this.remove(oldview);
	    }
	
	    if (newview) {
	        this.add(newview);
	    }        
	}
   
});
