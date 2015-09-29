module app {
    "use strict";

    interface StatusBar {
        styleDefault() : void
    }

    let runFn = ($ionicPlatform) => {
        $ionicPlatform.ready(function() {
          if(window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          }
          if(window.StatusBar) {
            StatusBar.styleDefault();
          }
        });
    };

    let configFn = ($stateProvider  : ng.ui.IStateProvider , $locationProvider : angular.ILocationProvider , $urlRouterProvider : ng.ui.IUrlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeController',
                templateUrl: 'app/components/home/homeView.html'
            }).state('login', {
                url: '/login',
                controller: 'LoginController',
                templateUrl: 'app/components/login/loginView.html'
            });

        $locationProvider.html5Mode({
           enable: true,
           requireBase: false
        });
    };

    angular
        .module('app', ['ionic', 'ui.router', 'ionic-material', 'ngStamplay'])
        .run(runFn)
        .config(['$stateProvider', '$urlRouterProvider', configFn]);
}
