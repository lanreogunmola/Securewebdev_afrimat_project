import Ember from 'ember';

export default Ember.Controller.extend({
});
// var Product = Ember.Object.extend({
// 	productid: '',
// 	description: '',
// 	price: '',
// 	image: '',
// });

// var ProductCollection = Ember.ArrayProxy.extend(Ember.SortableMixin, {
// 	sortProperties: ['productid'],
// 	sortAscending: true,
// 	content: [],
// });

// var testProduct = ProductCollection.create();
// var testimg1 = Product.create({
// 	productid: 1,
// 	description: "Batik",
// 	price: "$7.99",
// 	image: "http://www.batikguild.org.uk/images/style/NDimage260.jpg"
// });

// var testimg2 = Product.create({
// 	productid: 2,
// 	description: "Sculpture",
// 	price: "$4.99",
// 	image: "http://www.contemporary-african-art.com/images/pendant-mask.jpg"
// });


// var testimg3 = Product.create({
// 	productid: 3,
// 	description: "Pendant",
// 	price: "$99.99",
// 	image: "https://swaggwood.com/media/catalog/product/cache/1/thumbnail/400x/17f82f742ffe127f42dca9de82fb58b1/w/n/wn049.jpg"
// });


// testProduct.pushObject(testimg1);
// testProduct.pushObject(testimg2);
// testProduct.pushObject(testimg3);

// export default Ember.Controller.extend({
// 	Product: testProduct,
// 	searchField: '',
// 	filteredProducts: testProduct,
// 	actions: {
//              search: function () {
//                       var filter = this.get('searchField');
//                       var rx = new RegExp(filter, 'gi');
//                       var Product = this.get('Product');
//                       this.set('filteredProducts',
//                               Product.filter(function(Product){
//                                       return Product.get('Description').match(rx) || Product.get('price').match(rx);

//                               })
//                       	);


//              }


// 	}
// });
