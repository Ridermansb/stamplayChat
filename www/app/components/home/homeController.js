var app;
(function (app) {
    var controller;
    (function (controller) {
        var HomeController = (function () {
            function HomeController() {
            }
            HomeController.prototype.consctructor = function ($scope, $location, stamplayApi) {
                if (!stamplayApi.isLogged()) {
                    $location.url('/login');
                }
                return $scope;
            };
            return HomeController;
        })();
        controller.HomeController = HomeController;
    })(controller = app.controller || (app.controller = {}));
})(app || (app = {}));
//# sourceMappingURL=homeController.js.map