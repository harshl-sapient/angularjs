(function(logicalModel){
	'use strict'
	logicalModel.filterModule = angular.module('myApp', [
		/*Third party*/
		'ui.select2',

		/*Application Module*/
		'myApp.controller',
		'myApp.filter'
	]);

})(this);

