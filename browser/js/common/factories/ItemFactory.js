/*
//////////////////
 NOTE: THIS NEEDS TO BE CHANGED ONCE THE ORDER FUNCTIONALITY IS ADDED
 ////////////////
*/
app.factory('ItemFactory', function () {
	var product =[];
	return {
		addProduct: function(newObj){
		 	product.push(newObj)
		 	console.log(product)
	 	},

		getProducts: function(){
	 		return product
	 	}
	}
});
