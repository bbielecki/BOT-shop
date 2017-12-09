
angular.module('myApp.contacts', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        'use strict';
        $routeProvider.when('/contacts', {
            templateUrl: 'contacts/contacts.html',
            controller: 'ContactsCtrl'
        });
    }])
    .controller('ContactsCtrl', function ($scope) {
       $scope.testText = 'All rights reserved';
    });