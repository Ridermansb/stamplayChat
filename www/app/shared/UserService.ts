/// <reference

module app.service {

    export class UserService {
        private user : any;
        constructor($stamplay: any)  {
            this.user = new stamplay.User().Model;
        }

        loginAs(stamplayServiceLogin : any) : void {
            this.user.login(stamplayServiceLogin)
        }

        login(username: string, password : string) : void {
            this.user.login(username, password)
                .then(function(){
                    //success callback
                    console.log(this.user.get('email'));
                }, function (err){
                    //error callback
                });
        }
    }

    angular.module('app')
        .factory('userService', UserService);
}
