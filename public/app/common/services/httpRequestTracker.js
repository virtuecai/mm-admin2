var httpTracker = angular.module('services.httpRequestTracker', []);

httpTracker.factory('httpRequestTracker', ['$http', function ($http) {
    var httpRequestTracker = {};
    httpRequestTracker.hasPendingRequests = function () {
        return $http.pendingRequests.length > 0;
    };
    return httpRequestTracker;
}]);