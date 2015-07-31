(function(angular){
	'use strict';
	 angular.module('myApp')
		.controller('PollController', ['$scope', 'pollService', '$routeParams', 
			function($scope, pollService, $routeParams) {
	  			pollService.get($routeParams.id).success(function(data) {
   	   			$scope.poll = data;
        	});
		}]);		
})(angular);