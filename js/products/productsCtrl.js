angular.module('mini-routing').controller('productsCtrl', function ($scope, productService, $stateParams) {

    if($stateParams.id === 'shoes'){
        $scope.productData = productService.shoeData;
    }
    if($stateParams.id === 'socks'){
        $scope.productData = productService.sockData;
    }

});

