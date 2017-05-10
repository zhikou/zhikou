define([
	"map/controller/api/APIController",
    "map/controller/api/APIListController",
    "map/controller/api/sentimentController",
    "map/controller/api/sentimentFormController"


], function(APIController,APIListController,sentimentController,sentimentFormController) {

	var controllers = {
		APIController:APIController,
		APIListController:APIListController,
		sentimentController:sentimentController,
		sentimentFormController:sentimentFormController
	}
	// console.log(testController)
	return controllers

})
