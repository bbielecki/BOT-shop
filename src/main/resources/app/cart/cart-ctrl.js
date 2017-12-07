
angular.module('myApp.cart', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        'use strict';
        $routeProvider.when('/cart', {
            templateUrl: 'cart/cart.html',
            controller: 'CartController'
        });
    }])
    .controller('CartController', function ($scope) {
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
    $scope.testMe = function () {
        $scope.testText = $scope.testText + " " + $scope.testText;
    };
});

// angular.module('myApp.view2', ['ngRoute'])
//
//     .config(['$routeProvider', function($routeProvider) {
//         'use strict';
//         $routeProvider.when('/view2', {
//             templateUrl: 'view2/view2.html',
//             controller: 'View2Ctrl'
//         });
//     }])
//
//     .controller('View2Ctrl', function($scope) {
//         $scope.testText = 'Jestem view 2';
//     });