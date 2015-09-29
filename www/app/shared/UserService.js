var app;
(function (app) {
    var service;
    (function (service) {
        var UserService = (function () {
            function UserService($stamplay) {
                this.user = new stamplay.User().Model;
            }
            UserService.prototype.loginAs = function (stamplayServiceLogin) {
                this.user.login(stamplayServiceLogin);
            };
            UserService.prototype.login = function (username, password) {
                this.user.login(username, password)
                    .then(function () {
                    console.log(this.user.get('email'));
                }, function (err) {
                });
            };
            return UserService;
        })();
        service.UserService = UserService;
        angular.module('app')
            .factory('userService', UserService);
    })(service = app.service || (app.service = {}));
})(app || (app = {}));
//# sourceMappingURL=UserService.js.map