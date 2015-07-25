app.directive("answers", function() { 
  return { 
    restrict: "E", 
    scope: { 
      poll: "=" 
    },
    templateUrl:"app/directives/answers.html",
    
     /*link:function(scope,element,attrs){
      scope.count = 0,
      scope.plusOne = function(){
        scope.count +=1;
      }
    }*/
    
  }; 
});