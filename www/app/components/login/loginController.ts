module app.controller {

    interface ILoginScope extends angular.IScope {
        loginAs(stamplayServiceLogin : any) : void;
        login(username : string, password: string) : void;
    }

    export class LoginController {
        constructor($scope : ILoginScope, userService : app.service.UserService) {

            $scope.loginAs = function(stamplayServiceLogin) {
                userService.loginAs(stamplayServiceLogin)
            };

            $scope.login = function(userName, password) {
                userService.login(userName, password)
                    .then(function(){
                        //success callback
                        console.log(user.get('email'));
                    }, function (err){
                        //error callback
                    });
            };

            return $scope;

        }
    }

    angular.module('app')
        .controller('LoginController', LoginController);
}
