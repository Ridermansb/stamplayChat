module app.controller {
    export class HomeController {
        consctructor($scope: angular.IScope, $location: angular.ILocationService, stamplayApi: any) {
            if (!stamplayApi.isLogged()) {
                $location.url('/login');
            }

            return $scope;
        }sa
    }
}
