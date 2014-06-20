/**
 * Created by caizhengda on 2014/6/15 0015.
 */
var blogs = angular.module('home', ['security.authorization'])

blogs.config(['$routeProvider', 'securityAuthorizationProvider', function ($routeProvider, securityAuthorizationProvider) {
    $routeProvider.when('/', {
        templateUrl: '/views/home/home.tpl.html',
        controller: 'HomeViewCtrl',
        resolve: {

        }
    });
}])

blogs.controller('HomeViewCtrl', ['$scope', '$location', function ($scope, $location) {

}]);