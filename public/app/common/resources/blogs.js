/**
 * Created by caizhengda on 2014/6/15 0015.
 */


angular.module('resources.blogs', []).factory('Blogs', ['$resource', function ($resource) {
    return $resource(
        '/api/appblog/appblogs/:id',
        {id: '@id'},
        {
            update: { method: 'PUT'},
            query: {method: 'GET', isArray: false}
        }
    )
}]);
