define([],function(){
	
	var controller = function($scope,$state,$http) {
		
		console.log($state.current.name.trim())
		if ($state.current.name.trim() === "API") {
			$state.go("API.List",{},{reload:true})
		}
		
	}

	return controller;



})