app.controller("MainController", ["$scope", "poll",
	function($scope,poll){
		poll.success(function(data){
			$scope.polls = data;
		});
		
}]);