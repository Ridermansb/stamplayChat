describe("HomeController", function () {
    var $scope, $controller, $state, stamplayApi, userIsLogin, $fakeLocation;

    beforeEach(module('ui.router'));
    beforeEach(module('app'));

    beforeEach(module(function($provide) {
        stamplayApi = {
            isLogged: sinon.stub().returns(userIsLogin)
        };
        $provide.service('stamplayApi', stamplayApi);

    }));

    beforeEach(inject(function ($rootScope, _$state_, _$controller_) {
        $scope = $rootScope.$new();
        $state = _$state_.get('home');

        $fakeLocation = {
            url: sinon.spy()
        };

        $controller = _$controller_('HomeController', {
            $scope: $scope
            ,$state: $state
            ,stamplayApi: stamplayApi
            ,$location: $fakeLocation
        });
    }));

    module(function($provide) {
        $provide.service('$scope', $scope);
    });

    it("should have a scope variable defined", function () {
        expect($scope).to.exist;
    });

    it("should redirect to login page when I not login", function () {
        expect($fakeLocation.url).to.be.calledWith(sinon.match('/login'));
    });
});
