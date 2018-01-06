// 'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'jtcraddock.simplePopup',
    'myApp.cart',
    'myApp.home',
    'myApp.products',
    'myApp.contacts',
    'myApp.register',
    'myApp.cartFactory',
    'myApp.version'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/contacts'});
}]);
