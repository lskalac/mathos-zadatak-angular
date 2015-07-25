app.service("poll", ["$http", function($http) { 
  return $http.get("http://api.baasic.com/beta/mathos-ng/resources/pollquestion/") 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);