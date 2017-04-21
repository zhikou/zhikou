"use strict"

require.config({
	baseUrl:"/lib/",
	paths:{
		"jquery":["jquery/dist/jquery.min"],
		"angular":["angular/angular.min"],
		"angular-ui-router":["angular-ui-router/release/angular-ui-router.min"],
		"bootstrap":["bootstrap/dist/js/bootstrap.min"],
		"domReady":["domReady/domReady"],
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
		}
	},
	deps:["js/index.js"]

})