(function(angular){
	'use strict';
	angular.module('myApp')
		.controller('MainController', ['$scope', 'pollService',
			function($scope,pollService){
				pollService.find().success(function(data){
				$scope.polls = data.item;
			});
		}]);	
})(angular);