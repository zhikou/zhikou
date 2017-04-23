define([],function(){

	var controller = function($scope,$state,$http) {
		// console.log(1111)
		console.log($state)
		$scope.toNatural = function () {
			// alert(11)
			$state.go("Sentiment",{},{reload:true})
		}
	}

	return controller;



})