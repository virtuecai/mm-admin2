'use strict';

var app = angular.module('app', [
    'ngRoute',
    'ngResource',
    'ngSanitize',
    'home',
    'blogs',
    'services.breadcrumbs',
    'services.i18nNotifications',
    'services.httpRequestTracker',
    'security',
    'directives.crud'
]);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.otherwise({redirectTo: '/'});
}]);

app.run(['security', function(security) {
    // 启动程序时从session中候获取当前登录用户
    security.requestCurrentUser();
}]);

app.controller('AppCtrl', ['$scope', 'i18nNotifications', 'localizedMessages', function ($scope, i18nNotifications, localizedMessages) {

    $scope.notifications = i18nNotifications;

    $scope.removeNotification = function (notification) {
        i18nNotifications.remove(notification);
    };

    $scope.$on('$routeChangeError', function (event, current, previous, rejection) {
        i18nNotifications.pushForCurrentRoute('errors.route.changeError', 'warning', {}, {rejection: rejection});
    });
}]);

app.controller('HeaderCtrl', ['$scope', '$location', '$route', 'security', 'breadcrumbs', 'notifications', 'httpRequestTracker',
    function ($scope, $location, $route, security, breadcrumbs, notifications, httpRequestTracker) {
        $scope.location = $location;
        $scope.breadcrumbs = breadcrumbs;

        $scope.isAuthenticated = security.isAuthenticated;
        $scope.isAdmin = security.isAdmin;

        $scope.home = function () {
            if (security.isAuthenticated()) {
                $location.path('/profile/blogs');
            } else {
                $location.path('/');
            }
        };

        $scope.isNavbarActive = function (navBarPath) {
            return navBarPath === breadcrumbs.getFirst().name;
        };

        $scope.hasPendingRequests = function () {
            return httpRequestTracker.hasPendingRequests();
        };
    }
]);