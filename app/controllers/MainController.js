app.controller("MainController", ["$scope",
	function($scope){
		$scope.question ={ 
			title:"Vote for the Game of the (first half) Year 2015!"
			};
		$scope.answer1 = {
			name: "Witcher 3: Wild Hunt",
			likes:0,
			done:"Please continue voting..."
		};
		$scope.answer2 = {
			name: "Mortal Kombat X",
			likes:0,
			done:"Please continue voting..."
		};
		$scope.answer3 = {
			name: "Order 1886",
			likes:0,
			done:"Please continue voting..."
		};
		
		 $scope.plusOne1 = function() { 
  	     $scope.answer1.likes += 1;
		 
	    };
		$scope.plusOne2 = function() { 
  	     $scope.answer2.likes += 1; 
		 
	    };
		$scope.plusOne3 = function() { 
  	     $scope.answer3.likes += 1; 
		
	    };
		
	}]);