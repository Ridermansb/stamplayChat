var app;
(function (app) {
    var controller;
    (function (controller) {
        var LoginController = (function () {
            function LoginController($scope, userService) {
                $scope.loginAs = function (stamplayServiceLogin) {
                    userService.loginAs(stamplayServiceLogin);
                };
                $scope.login = function (userName, password) {
                    userService.login(userName, password)
                        .then(function () {
                        console.log(user.get('email'));
                    }, function (err) {
                    });
                };
                return $scope;
            }
            return LoginController;
        })();
        controller.LoginController = LoginController;
        angular.module('app')
            .controller('LoginController', LoginController);
    })(controller = app.controller || (app.controller = {}));
})(app || (app = {}));
//# sourceMappingURL=loginController.js.map