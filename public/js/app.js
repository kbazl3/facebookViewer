angular.module("app", ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise("/");
        $stateProvider

            .state("home", {
                url:"/",
                templateUrl: "./js/home/home.html",
                controller: "homeCtrl"
            })

            .state("profile", {
                url:"/profile",
                templateUrl: "./js/profile.profile.html"
            });

    });
