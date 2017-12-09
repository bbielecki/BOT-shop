angular.module('myApp.cart', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        'use strict';
        $routeProvider.when('/cart', {
            templateUrl: 'cart/cart.html',
            controller: 'CartController'
        });
    }])
    .controller('CartController', function ($scope, ProductsFactory, $log) {
        $scope.testText = "Jestem koszykiem";
        $scope.productsList = [
            {
                picture: 'sciezka/do/zdjecia',
                price: 11,
                description: 'jablko'
            },
            {
                picture: 'sciezka/do/zdjecia2',
                price: 111,
                description: 'gruszka'
            },
            {
                picture: 'sciezka/do/zdjecia3',
                price: 22,
                description: 'ananas'
            }
        ];

        $scope.$watch(
            function () {
                return ProductsFactory.getProducts();
            },
            function (oldProducts, newProducts) {
                $scope.productsList = newProducts;
                $log.log('ok, products taken');
            }
        );

        $scope.removeFromCart = function (product) {
            $log.log('Cart: removing product ' + product.description);
            ProductsFactory.removeProduct(product);
        }
    });