
angular.module('myApp.home', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        // 'use strict';
        $routeProvider.when('/home', {
            templateUrl: 'home/home.html',
            controller: 'HomeCtrl'
        });
    }])
    .controller('HomeCtrl', function ($scope) {
        $scope.testText = 'All rights reserved';
    });