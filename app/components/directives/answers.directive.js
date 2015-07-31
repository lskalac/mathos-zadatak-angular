(function(angular){
  'use strict';
   angular.module('myApp')
      .directive('myAppAnswers', function() { 
        return { 
          restrict: "E", 
          scope: { 
          poll: "=" 
          },
          templateUrl:"app/components/directives/answers.html",
        }; 
      });
})(angular);