app.controller('DisplayProductsController', function ($scope, $location, AppServices, ShareData) {
    getAllProducts();

    function getAllProductsRecords() {
        var promiseGetProduct = AppServices.getProducts();

        promiseGetProduct.then(function (pl) { $scope.Products = pl.data },
              function (errorPl) {
                  $scope.error = errorPl;
              });
    }

    //To Edit Product Information  
    $scope.editProduct = function (ProductId) {
        ShareData.value = ProductId;
        $location.path("/editProduct");
    }

    //To Delete a Product  
    $scope.deleteProduct = function (ProductId) {
        ShareData.value = ProductId;
        $location.path("/deleteProduct");
    }
});

app.controller('AddProductController', function ($scope, AppServices) {
    $scope.ProductId = 0;

    $scope.save = function () {
        var Product = {
            ProductId: $scope.ProductId,
            Name: $scope.Name,
            Description: $scope.Description,
            Price: $scope.Price,
            CategoryId: $scope.CategoryId
        };

        var promisePost = AppServices.post(Product);

        promisePost.then(function (pl) {
            alert("Product Saved Successfully.");
        },
              function (errorPl) {
                  $scope.error = 'failure loading Product', errorPl;
              });
    };
});

app.controller("EditProductController", function ($scope, $location, ShareData, AppServices) {
    getProduct();

    function getProduct() {
        var promiseGetProduct = AppServices.getProduct(ShareData.value);

        promiseGetProduct.then(function (pl) {
            $scope.Product = pl.data;
        },
              function (errorPl) {
                  $scope.error = 'failure loading Product', errorPl;
              });
    }

    $scope.save = function () {
        var Product = {
            ProductId: $scope.Product.ProductId,
            Name: $scope.Product.name,
            Description: $scope.Product.Description,
            Price: $scope.Product.Price,
            CategoryId: $scope.Product.CategoryId
        };

        var promisePutProduct = AppServices.put($scope.Product.ProductId, Product);
        promisePutProduct.then(function (pl) {
            $location.path("/displayProducts");
        },
              function (errorPl) {
                  $scope.error = 'failure loading Product', errorPl;
              });
    };
});

app.controller("DeleteProductController", function ($scope, $location, ShareData, AppServices) {
    getProduct();

    function getProduct() {

        var promiseGetProduct = AppServices.getProduct(ShareData.value);

        promiseGetProduct.then(function (pl) {
            $scope.Product = pl.data;
        },
              function (errorPl) {
                  $scope.error = 'failure loading Product', errorPl;
              });
    }

    $scope.delete = function () {
        var promiseDeleteProduct = AppServices.delete(ShareData.value);

        promiseDeleteProduct.then(function (pl) {
            $location.path("/displayProducts");
        },
              function (errorPl) {
                  $scope.error = 'failure loading Product', errorPl;
              });
    };
});