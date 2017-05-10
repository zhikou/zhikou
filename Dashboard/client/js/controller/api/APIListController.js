define([], function() {

    var controller = function($scope, $state, $http) {
    	// alert(1)
        AniJS.run();
        $scope.toNatural = function () {
        	$state.go("API.Sentiment",{},{reload:true})
        }
    }

    return controller;



})
