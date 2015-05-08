(function(logicalModel){
	'use strict'
	logicalModel.filterFilter = angular.module('myApp.filter', []);
	logicalModel.filterFilter.filter('calcFilter', calcFilter);

	calcFilter.$inject = [];
	function calcFilter(){

	}
})(this);

