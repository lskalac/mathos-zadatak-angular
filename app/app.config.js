(function(angular){
  'use strict';
   angular.module('myApp')
      .config(function ($routeProvider) {
        $routeProvider
          .when('/', {
            controller: "MainController",
            templateUrl: "app/poll-questions/home.html"
          })
         .when('/poll/:id', {
            controller: 'PollController',
            templateUrl: 'app/poll-answers/pollanswers.html'
          })
        .otherwise({
            redirectTo: '/'
          });
      });
})(angular);