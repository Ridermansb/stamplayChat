define(["require", "exports"], function (require, exports) {
    var stamplay;
    (function (stamplay) {
        ("../../../lib/stamplay-js-sdk/dist/stamplay.min.js");
    })(stamplay = exports.stamplay || (exports.stamplay = {}));
    var app;
    (function (app) {
        var controller;
        (function (controller) {
            var LoginController = (function () {
                function LoginController($scope) {
                    var user = new Stamplay.User().Model;
                    $scope.loginAs = function (stamplayServiceLogin) {
                        user.login(stamplayServiceLogin);
                    };
                    $scope.login = function (userName, password) {
                        user.login(userName, password)
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
});
//# sourceMappingURL=loginController.js.map