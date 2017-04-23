define([
    "map/controller/api/HomePageController",
    "map/controller/api/sentimentController",
    "map/controller/api/sentimentFormController"


], function(HomePageController,sentimentController,sentimentFormController) {

	var controllers = {
		HomePageController:HomePageController,
		sentimentController:sentimentController,
		sentimentFormController:sentimentFormController
	}
	// console.log(testController)
	return controllers

})
