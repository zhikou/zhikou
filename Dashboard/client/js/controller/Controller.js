define([
	"map/controller/api/APIController",
    "map/controller/api/APIListController",
    "map/controller/api/sentimentController",
    "map/controller/api/sentimentFormController",
    "map/controller/api/ImageApiController",
    "map/controller/api/AudioApiController",


], function(APIController,APIListController,sentimentController,sentimentFormController,ImageApiController,AudioApiController) {

	var controllers = {
		APIController:APIController,
		APIListController:APIListController,
		sentimentController:sentimentController,
		sentimentFormController:sentimentFormController,
		ImageApiController:ImageApiController,
		AudioApiController:AudioApiController,
	}
	// console.log(testController)
	return controllers

})
