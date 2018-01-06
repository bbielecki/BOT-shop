angular.module('myApp.cartFactory', [])
    .factory('ProductsFactory', function ($log) {
        var selectedProducts = [];

        return{
            getProducts: function () {
                $log.log('ProductFactory: all products taken');
                return selectedProducts;
            },
            addProduct: function (selectedProduct) {
                selectedProducts.push(selectedProduct);
                $log.log('ProductFactory: add product ' + selectedProduct);
            },
            removeProduct: function (productToRemove) {
                $log.log('ProductFactory: try to delete');
                if(selectedProducts.indexOf(productToRemove) > -1) {
                    selectedProducts.splice(selectedProducts.indexOf(productToRemove), 1);
                    $log.log('ProductFactory: deleted');
                }
            },
            removeAllProducts: function () {
                selectedProducts.splice(0, selectedProducts.length);
            }
        }
    });