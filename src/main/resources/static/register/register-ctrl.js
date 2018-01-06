angular.module('myApp.register', [])
    .config(['$routeProvider', function ($routeProvider) {
        // 'use strict';
        $routeProvider.when('/register', {
            templateUrl: 'register/register.html',
            controller: 'RegisterCtrl'
        });
    }])
    .controller('RegisterCtrl', function ($scope, $http, $location) {
        $scope.register = register;
        $scope.loginButton = loginButton;
        $scope.chooseRegister = chooseRegister;
        $scope.chooseLogin = chooseLogin;
        $scope.loginPanel = false;
        $scope.registerPanel = true;
        $scope.signup = "active";


        // var url = $location.absUrl().replace("register", "index");

        function register() {
            console.log($location.absUrl());
            $http.post("http://localhost:8080/register", {
                'login': this.email,
                'password': this.passwordRegister,
                'name': this.firstName,
                'surname': this.lastName,
                'address': this.email
            })
                .success(function () {
                    console.log("Register!!!");
                    window.assign("/cart")
                });
        }

        function loginButton() {

            // window.location.assign("/cart");
            // window.location.assign(url);
            $http.post("http://localhost:8080/login", {
                'login': "abc@abc.com",
                'password': "abc",
                'name':"null",
                'surname': "null",
                'address': "null"
                // 'login': this.login,
                // 'password': this.passwordLogin

            })
                .success(function () {
                    console.log("Logged!!!");

                });
        }

        function chooseLogin() {
            $scope.loginPanel = true;
            $scope.registerPanel = false;
            console.log($scope.loginPanel);
            $scope.signup = "";
            $scope.loginClass = "active";

        }

        function chooseRegister() {
            $scope.loginPanel = false;
            $scope.registerPanel = true;
            $scope.signup = "active";
            $scope.loginClass = "";
            console.log("Reg" + $scope.registerPanel);
        }
    });


