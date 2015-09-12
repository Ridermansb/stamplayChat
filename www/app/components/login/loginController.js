(function () {
    var LoginController = function ($scope) {

        var user = new Stamplay.User().Model;

        $scope.loginAs = function(stamplayServiceLogin) {
            user.login( stamplayServiceLogin );
        };

            $scope.login = function(userName, password) {
            user.login(userName, password)
            .then(function(){
                //success callback
                console.log(user.get('email'));
            }, function (err){
                //error callback
            });
        };


        return $scope;
    };

    angular.module('app')
        .controller('LoginController', LoginController);
})();
