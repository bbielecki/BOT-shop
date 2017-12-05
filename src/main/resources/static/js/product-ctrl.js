angular.module('app', ['ngRoute'])
    .controller('mainCtrl', function ($scope, $http) {
        $scope.product = {
            productID : number,
            productDescription : '',
            productPrice: number,
            productImage : ''
        };
        $scope.mainPageTest = 'gunwo';

        $http.get('http://localhost:5000/products/').then(function (response) {
            $scope.greeting = response.data;
            $scope.greeting.reverse();
            $scope.greeting.forEach(function (e) {
                e["time"] = timeConverter(e["time"]);
                var width = {}, height = {}, myBase64 = "data:image/jpg;base64," + e.picture[0];
                var img = new Image();
                img.src = myBase64;
                img.addEventListener('load', function () {
                    width = img.width;
                    height = img.height;
                    var maxValue = Math.max(img.width, img.height);
                    var scale = maxValue / 150;
                    e.face_position.left = e.face_position.left / scale;
                    e.face_position.width = e.face_position.width / scale;
                    e.face_position.height = e.face_position.height / scale;
                    console.log(e);
                });
            });
        });
    });


