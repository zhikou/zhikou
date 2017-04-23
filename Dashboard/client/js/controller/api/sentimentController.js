define([],function(){

	var controller = function($scope,$state,$http) {
		console.log(1111)
		console.log($state.current.name.trim())
		if ($state.current.name.trim() === "Sentiment") {

			$state.go("Sentiment.formData",{},{reload:false})
		}
		
	}

	return controller;



})