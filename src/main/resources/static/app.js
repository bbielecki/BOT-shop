'use strict';
angular.module('app', [
    'ngRoute',
    'app.cart'

]).config(['$locationProvider', '$routeProvider',
    function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider./*when(
            '/views/cart', {
                templateUrl: 'views/cart.html', controller: 'cartController'
            }).
         */
        otherwise('/');
    }]);