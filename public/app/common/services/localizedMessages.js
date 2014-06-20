var localizedMessages = angular.module('services.localizedMessages', [])

localizedMessages.factory('localizedMessages', ['$interpolate', 'I18N.MESSAGES', function ($interpolate, i18nmessages) {

  var handleNotFound = function (msg, msgKey) {
    return msg || '?' + msgKey + '?';
  };

  return {
    get : function (msgKey, interpolateParams) {
      var msg =  i18nmessages['en-us'][msgKey];
      if (msg) {
        return $interpolate(msg)(interpolateParams);
      } else {
        return handleNotFound(msg, msgKey);
      }
    }
  };
}]);

app.filter('i18n', ['i18nmessages', function (i18nmessages) {
    return function (msgKey) {
        return i18nmessages['en-us'][msgKey];;
    };
}]);