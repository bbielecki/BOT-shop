
angular.module('app.cart', ['ngRoute'])
    .config( ['routerProvider', function ($location, $http, $routeProvider) {
        'use strict';
        $routeProvider.when('/cart', {
            templateUrl: '../views/cart.html',
            controller: 'cartController'
        });
    }])
    .controller('cartController', function ($scope) {
    $scope.testText = "Jestem koszykiem";
    $scope.testMe = function () {
        $scope.testText = $scope.testText + " " + $scope.testText;
    };

});


//     .component('cartCtrl', {
//     templateUrl: '../views/cart.html',
//     controller: ['Cart',
//         function cartController($http, $scope) {
//             $scope.testText = 'to jest cart controller';
//             $http.get('http://localhost:5000/cart/').then(function (response) {
//                 $scope.greeting = response.data;
//                 $scope.greeting.reverse();
//                 $scope.greeting.forEach(function (e) {
//                     e["time"] = timeConverter(e["time"]);
//                     var width = {}, height = {}, myBase64 = "data:image/jpg;base64," + e.picture[0];
//                     var img = new Image();
//                     img.src = myBase64;
//                 });
//             });
//         }]
// });


// .controller('cartCtrl',  function ($scope, $http) {
//
//
//     $http.get('http://localhost:5000/cart/').then(function (response) {
//         $scope.greeting = response.data;
//         $scope.greeting.reverse();
//         $scope.greeting.forEach(function (e) {
//             e["time"] = timeConverter(e["time"]);
//             var width = {}, height = {}, myBase64 = "data:image/jpg;base64," + e.picture[0];
//             var img = new Image();
//             img.src = myBase64;
//         });
//     });
// });


