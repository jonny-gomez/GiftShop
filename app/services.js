app.service("AppServices", function ($http) {

    //Read all Products
    this.getProducts = function () {
        return $http.get("/api/ProductApi");
    };

    //Function to Read Product by Product ID  
    this.getProduct = function (id) {
        return $http.get("/api/ProductApi/" + id);
    };

    //Function to create new Product  
    this.post = function (Product) {
        var request = $http({
            method: "post",
            url: "/api/ProductApi",
            data: Product
        });
        return request;
    };

    //Edit Product By ID   
    this.put = function (id, Product) {
        var request = $http({
            method: "put",
            url: "/api/ProductApi/" + id,
            data: Product
        });
        return request;
    };

    //Delete Product By Product ID  
    this.delete = function (id) {
        var request = $http({
            method: "delete",
            url: "/api/ProductApi/" + id
        });
        return request;
    };

    //Read all Categories
    this.getCategories = function () {
        return $http.get("/api/CategoryApi");
    };

    //Function to Read Category by Category ID  
    this.getCategory = function (id) {
        return $http.get("/api/CategoryApi/" + id);
    };

    //Function to create new Category  
    this.post = function (Category) {
        var request = $http({
            method: "post",
            url: "/api/CategoryApi",
            data: Category
        });
        return request;
    };

    //Edit Category By ID   
    this.put = function (id, Category) {
        var request = $http({
            method: "put",
            url: "/api/CategoryApi/" + id,
            data: Category
        });
        return request;
    };

    //Delete Category By Category ID  
    this.delete = function (id) {
        var request = $http({
            method: "delete",
            url: "/api/CategoryApi/" + id
        });
        return request;
    };
});