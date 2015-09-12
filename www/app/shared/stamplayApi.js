(function () {
    var StamplayApi = function () {

        var isLogged = function() {
            var user =  new Stamplay.User().Model;
            return user.isLogged();
        };

        return {
            isLogged: isLogged
        };

    };

    angular.module('app').factory('stamplayApi', StamplayApi);
}());
