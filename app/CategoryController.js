app.controller('DisplayCategoriesController', function ($scope, $location, AppServices, ShareData) {
    getAllCategories();

    function getAllCategoriesRecords() {
        var promiseGetCategory = AppServices.getCategories();

        promiseGetCategory.then(function (pl) { $scope.Categories = pl.data },
              function (errorPl) {
                  $scope.error = errorPl;
              });
    }

    //To Edit Category Information  
    $scope.editCategory = function (CategoryId) {
        ShareData.value = CategoryId;
        $location.path("/editCategory");
    }

    //To Delete a Category  
    $scope.deleteCategory = function (CategoryId) {
        ShareData.value = CategoryId;
        $location.path("/deleteCategory");
    }
});

app.controller('AddCategoryController', function ($scope, AppServices) {
    $scope.CategoryId = 0;

    $scope.save = function () {
        var Category = {
            CategoryId: $scope.CategoryId,
            Name: $scope.Name
        };

        var promisePost = AppServices.post(Category);

        promisePost.then(function (pl) {
            alert("Category Saved Successfully.");
        },
              function (errorPl) {
                  $scope.error = 'failure loading Category', errorPl;
              });
    };
});

app.controller("EditCategoryController", function ($scope, $location, ShareData, AppServices) {
    getCategory();

    function getCategory() {
        var promiseGetCategory = AppServices.getCategory(ShareData.value);

        promiseGetCategory.then(function (pl) {
            $scope.Category = pl.data;
        },
              function (errorPl) {
                  $scope.error = 'failure loading Category', errorPl;
              });
    }

    $scope.save = function () {
        var Category = {
            CategoryId: $scope.Category.CategoryId,
            Name: $scope.Category.name
        };

        var promisePutCategory = AppServices.put($scope.Category.CategoryId, Category);
        promisePutCategory.then(function (pl) {
            $location.path("/displayCategories");
        },
              function (errorPl) {
                  $scope.error = 'failure loading Category', errorPl;
              });
    };
});

app.controller("DeleteCategoryController", function ($scope, $location, ShareData, AppServices) {
    getCategory();

    function getCategory() {

        var promiseGetCategory = AppServices.getCategory(ShareData.value);

        promiseGetCategory.then(function (pl) {
            $scope.Category = pl.data;
        },
              function (errorPl) {
                  $scope.error = 'failure loading Category', errorPl;
              });
    }

    $scope.delete = function () {
        var promiseDeleteCategory = AppServices.delete(ShareData.value);

        promiseDeleteCategory.then(function (pl) {
            $location.path("/displayCategories");
        },
              function (errorPl) {
                  $scope.error = 'failure loading Category', errorPl;
              });
    };
});