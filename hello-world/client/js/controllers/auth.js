'use strict';

angular
    .module('app')
    .controller('AuthLoginController', ['$scope', 'AuthService', '$state', function ($scope, AuthService, $state) {
        $scope.user = {
            email: 'foo@bar.com',
            password: 'foobar'
        };

        $scope.login = function () {
            AuthService.login($scope.user.email, $scope.user.password)
                .then(function () {
                    if ($scope.returnTo && $scope.returnTo.state) {
                        $state.go($scope.returnTo.state.name, $scope.returnTo.params);
                        $scope.returnTo.state = null;
                        $scope.returnTo.params = null;
                    } else {
                        $state.go('add-review');
                    }
                });
        };
    }])
    .controller('AuthLogoutController', ['$scope', 'AuthService', '$state', function ($scope, AuthService, $state) {
        AuthService.logout()
            .then(function () {
                $state.go('all-reviews');
            });
    }])
    .controller('SignUpController', ['$scope', 'AuthService', '$state', function ($scope, AuthService, $state) {
        $scope.user = {
            email: 'baz@qux.com',
            password: 'bazqux'
        };

        $scope.register = function () {
            AuthService.register($scope.user.email, $scope.user.password)
                .then(function () {
                    $state.transitionTo('sign-up-success');
                });
        };
    }]);