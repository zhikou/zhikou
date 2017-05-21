define([
	"map/controller/api/APIController",
    "map/controller/api/APIListController",
    "map/controller/api/sentimentController",
    "map/controller/api/sentimentFormController",
    "map/controller/api/ImageApiController"


], function(APIController,APIListController,sentimentController,sentimentFormController,ImageApiController) {

	var controllers = {
		APIController:APIController,
		APIListController:APIListController,
		sentimentController:sentimentController,
		sentimentFormController:sentimentFormController,
		ImageApiController:ImageApiController
	}
	// console.log(testController)
	return controllers

})
