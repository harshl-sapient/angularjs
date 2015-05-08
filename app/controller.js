(function(logicalModel){
	'use strict'
	logicalModel.filterController = angular.module('myApp.controller', []);

	logicalModel.filterController.controller('filterController', filterController);

	filterController.$inject = ['$scope'];
	function filterController($scope){
		$scope.select2 = 2;
	}

})(this);

