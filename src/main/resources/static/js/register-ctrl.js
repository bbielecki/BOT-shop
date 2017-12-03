angular.module('app', [])
    .controller('registerCtrl', function ($scope, $http, $location) {
        $scope.register = register;
        $scope.loginButton = loginButton;

        var url=$location.absUrl().replace("views/register.html","index.html");

        function register() {
            console.log($location.absUrl());
            $http.post("http://localhost:8080/register", {
                'firstname': $scope.firstName,
                'lastname': $scope.lastName,
                'email': $scope.email,
                'password': $scope.passwordRegister
            })
                .success(function () {
                    console.log("Register!!!");
                     window.location.assign( url);
                });
        }

        function loginButton() {
            window.location.assign("./cart.html");
            window.location.assign( url);
            $http.post("http://localhost:8080/login", {
                'login': $scope.login,
                'pasword': $scope.passwordLogin

            })
                .success(function () {
                    console.log("Logged!!!");
                    window.location.assign( url);
                });
        }
    });


