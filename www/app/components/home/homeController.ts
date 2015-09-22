/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../../typings\angularjs\angular-resource.d.ts" />

module app.controller {
    export class HomeController {
        consctructor($scope: ng.IScope, $location: ng.ILocationService, stamplayApi: any) {
            if (!stamplayApi.isLogged()) {
                $location.url('/login');
            }

            return $scope;
        }
    }
}
