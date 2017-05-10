define([], function() {

    var controller = function($scope, $state, $http) {
        // console.log(1111)
        // $http({
        // 	method:"post",
        // 	url:"/cars"
        // }).then((response)=>{
        // 	console.log(response)
        // })
        $scope.submit = function() {
            $http({
                method: "post",
                url: "/sentiment",
                data:{
                    msg:$scope.message
                }
            }).then((response) => {
                console.log(response)
            })

            // $http.post("/sentiment",{msg:$scope.message})

        }

    }

    return controller;



})
