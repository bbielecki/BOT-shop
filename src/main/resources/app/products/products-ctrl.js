
angular.module('myApp.products', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        'use strict';
        $routeProvider.when('/products', {
            templateUrl: 'products/products.html',
            controller: 'ProductsCtrl'
        });
    }])
    .controller('ProductsCtrl', function ($scope, ProductsFactory) {
        $scope.testText = 'Not implemented yet';
        $scope.productsList = [
            {
                picture: 'sciezka/do/zdjecia',
                price: 11,
                description: 'cos do wyboru'
            },
            {
                picture: 'sciezka/do/zdjecia2',
                price: 111,
                description: 'cos innego'
            },
            {
                picture: 'sciezka/do/zdjecia3',
                price: 22,
                description: 'a to w ogole inne'
            }
        ];


        $scope.toCart = function (product) {
            ProductsFactory.addProduct(product);
        }
    });