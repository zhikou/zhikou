define([],function(){

	var controller = function($scope,$state,$http) {
		// console.log(1111)
		$http({
			method:"get",
			url:"/cars"
		}).then((response)=>{
			console.log(response)
		})
		
	}

	return controller;



})