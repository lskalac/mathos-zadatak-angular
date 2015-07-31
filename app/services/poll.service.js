(function(angular){
  'use strict';
  angular.module('myApp')
    .service("pollService", ["$http", function($http) { 
      return {
        find: function() { 
          return $http.get("http://api.baasic.com/beta/mathos-ng/resources/pollquestion/")
        },
        get: function(id) { 
          return $http.get("http://api.baasic.com/beta/mathos-ng/resources/pollquestion/" + id)
        } 
      };
    }]);
})(angular);