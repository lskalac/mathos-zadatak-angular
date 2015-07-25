app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: "MainController",
      controllerAs:"main",
      templateUrl: "app/views/home.html"
    })
    .when('/poll/:id', {
      controller: 'PollController',
      templateUrl: 'app/views/pollanswers.html'

    })
    .otherwise({
      redirectTo: '/'
    });
});