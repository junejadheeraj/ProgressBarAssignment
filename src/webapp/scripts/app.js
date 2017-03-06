var app =angular.module('app', []);
app.controller('BarController', ['$scope','calcService', function($scope,calcService)  {
   $scope.bars = ["bar1", "bar2", "bar3"];   
   $scope.barValue = {
      bar1 : 90,
	  bar2 : 55,
	  bar3 : 100
   };   
	$scope.barClass = 
	{
	  bar1 : "progress-bar-info",
	  bar2 : "progress-bar-info",
	  bar3 : "progress-bar-info"
		
	};
	$scope.calculate = function(computeValue)
	{	  	
		$scope.myBar ;
		$scope.myBarClass ;
		if($scope.selectedBar == "bar1")
		{
			$scope.myBar = $scope.barValue.bar1;
		}else if($scope.selectedBar == "bar2")
		{
			$scope.myBar= $scope.barValue.bar2;
		}else if($scope.selectedBar == "bar3"){
			$scope.myBar= $scope.barValue.bar3;
		}
	
	calcService.compute($scope.myBar,computeValue);
	
	if($scope.selectedBar == "bar1")
		{
			$scope.barValue.bar1 = calcService.barValue;
			$scope.barClass.bar1 = calcService.myBarClass;
		}else if($scope.selectedBar == "bar2")
		{
			$scope.barValue.bar2 = calcService.barValue;
			$scope.barClass.bar2 = calcService.myBarClass;
		}else if($scope.selectedBar == "bar3"){
			$scope.barValue.bar3 = calcService.barValue;
			$scope.barClass.bar3 = calcService.myBarClass;
		}
	}  
}]);
