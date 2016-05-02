angular.module("app")
    .controller("homeCtrl", function($scope, homeSvc) {

        $scope.fbLogin = function() {
            homeSvc.fbLogin();
        };

});
