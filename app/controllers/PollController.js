app.controller('PollController', ['$scope', 'poll', '$routeParams', 
	function($scope, poll, $routeParams) {
	  	poll.success(function(data) {
   	   		$scope.polls = data[$routeParams.id];
        });
}]);