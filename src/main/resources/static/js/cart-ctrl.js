angular.module('app', []).config()
    .controller('cartCtrl', function ($scope, $http) {
        // $scope.productList = [
        //     {
        //         productID: 0,
        //         productDescription: 'pierwszy',
        //         productPrice: 10,
        //         productImage: 'sciezka/do/obrazka' },
        //     {
        //         productID: 1,
        //         productDescription: 'drugi',
        //         productPrice: 32,
        //         productImage: 'sciezka/do/obrazka2' }
        // ];
        $scope.testValue = 'test';

        // $scope.addProduct = function (product) {
        //     $scope.productList.push(product);
        // };
        // $scope.removeProduct = function (productID) {
        //     if (productList.indexOf(productID) > -1) {
        //         return productList.slice(productList.indexOf(productID), 1);
        //     }
        // };
        // $scope.removeAllProducts = function () {
        //     return productList.slice(0, productList.length);
        // };


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


