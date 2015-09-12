(function () {
    var HomeController = function ($scope, $location, stamplayApi) {

        if (!stamplayApi.isLogged()) {
            $location.url('/login');
        }

        return $scope;
    };

    angular.module('app')
        .controller('HomeController', HomeController);
})();
