angular.module("app")
    .service("homeSvc", function($http) {

        this.fbLogin = function() {
            return $http({
                method: "GET",
                url: "/auth/facebook",
            })
            .then(function(response) {
                alert("hh");
                console.log(response);
                return response;
            });
        };

});
