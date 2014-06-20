/**
 * Created by caizhengda on 2014/6/15 0015.
 */
var blogs = angular.module('blogs', ['security.authorization'])

blogs.config(['$routeProvider', 'securityAuthorizationProvider', function ($routeProvider, securityAuthorizationProvider) {
    $routeProvider.when('/profile/blogs', {
        templateUrl: '/views/blogs/blogs-list.tpl.html',
        controller: 'BlogsViewCtrl',
        resolve: {
            authenticatedUser: securityAuthorizationProvider.requireAuthenticatedUser
        }
    });
}])

blogs.controller('BlogsViewCtrl', ['$scope', '$location', function ($scope, $location) {

}]);