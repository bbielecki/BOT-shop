angular.module('app', [])
    .controller('cartCtrl', function ($scope, $http) {


        $http.get('http://localhost:5000/cart/').then(function (response) {
            $scope.greeting = response.data;
            $scope.greeting.reverse();
            $scope.greeting.forEach(function (e) {
                e["time"] = timeConverter(e["time"]);
                var width = {}, height = {}, myBase64 = "data:image/jpg;base64," + e.picture[0];
                var img = new Image();
                img.src = myBase64;
            });
        });
    });


