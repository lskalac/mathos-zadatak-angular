(function (angular) {
	'use.strict';
angular.module('myApp').filter('stopVoting', function() {
	return function(input) {
		if (input >= 10){
			
			return "This game is Game of the (first half) Year 2015. Stop voting!";
		}
		return 'Please continue voting...';
	};
});
})(angular);