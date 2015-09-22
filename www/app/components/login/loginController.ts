/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../../typings\angularjs\angular-resource.d.ts" />

export module stamplay {
    import Stamplay = module("../../../lib/stamplay-js-sdk/dist/stamplay.min.js");
}

declare module "../../../lib/stamplay-js-sdk/dist/stamplay.min.js" {
    function getData(): number;
}

module app.controller {

    interface ILoginScope extends angular.IScope {
        loginAs(stamplayServiceLogin : any) : void;
        login(username : string, password: string) : void;
    }

    export class LoginController {
        constructor($scope : ILoginScope) {

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

        }
    }

    angular.module('app')
        .controller('LoginController', LoginController);
}
