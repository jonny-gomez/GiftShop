var app = angular.module("appModule", ["ngRoute"]);

app.factory("ShareData", function () {
    return { value: 0 }
});

//Showing Routing  
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    debugger;
    $routeProvider.when('/displayProducts',
                        {
                            templateUrl: 'Product/DisplayProducts',
                            controller: 'DisplayProductsController'
                        });
    $routeProvider.when('/addProduct',
                        {
                            templateUrl: 'Product/AddProduct',
                            controller: 'AddProductController'
                        });
    $routeProvider.when("/editProduct",
                        {
                            templateUrl: 'Product/EditProduct',
                            controller: 'EditProductController'
                        });
    $routeProvider.when('/deleteProduct',
                        {
                            templateUrl: 'Product/DeleteProduct',
                            controller: 'DeleteProductController'
                        });
    $routeProvider.otherwise(
                        {
                            redirectTo: '/'
                        });

    $locationProvider.html5Mode(true).hashPrefix('!')
}]);