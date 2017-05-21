define([], function() {

    var controller = function($scope, $state, $http,ZkApi) {
    	// alert(1)
        AniJS.run();
        $scope.toNatural = function () {
        	$state.go("API.Sentiment",{},{reload:true})
        }

        $scope.toImageApi = function () {
            $state.go("API.ImageApi",{},{reload:true})
        }
        
    }

    return controller;



})
