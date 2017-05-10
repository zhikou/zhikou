"use strict"

require.config({
	baseUrl:"/lib/",
	paths:{
		"jquery":["jquery/dist/jquery.min"],
		"angular":["angular/angular.min"],
		"angular-ui-router":["angular-ui-router/release/angular-ui-router.min"],
		"bootstrap":["bootstrap-sass/assets/javascripts/bootstrap.min"],
		"domReady":["domReady/domReady"],
		"angular-aria":["angular-aria/angular-aria"],
		"angular-animate":["angular-animate/angular-animate.min"],
		"angular-material":["angular-material/angular-material.min"],
		"angular-messages":["angular-messages/angular-messages.min"],
		"anijs":["AniJS/dist/anijs-min"],
		"map": ["../js"]
	},
	shim:{
		"angular":{
			deps:["jquery"],
			exports:"angular"
		},
		"angular-ui-router":{
			deps:["angular"],
			exports:"angular-ui-router"
		},
		"bootstrap":{
			deps:["jquery"],
			exports:"bootstrap"
		},
		"angular-aria": {
			deps:["angular"],
			exports:"angular-aria"
		},
		"angular-animate": {
			deps:["angular"],
			exports:"angular-animate"
		},
		"angular-messages":{
			deps:["angular"],
			exports:"angular-messages"
		},
		"angular-material": {
			deps:["angular","angular-aria","angular-animate","angular-messages"],
			exports:"angular-material"
		}
	},
	deps:["js/index.js"]

})