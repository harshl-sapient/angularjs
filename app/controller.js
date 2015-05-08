(function(logicalModel){
	'use strict'
	logicalModel.filterController = angular.module('myApp.controller', []);

	logicalModel.filterController.controller('filterController', filterController);

	filterController.$inject = ['$scope'];
	function filterController($scope){
		$scope.select2 = 'two';
		$scope.select2Options = {
	        allowClear:true
	    };
	    $scope.calculationPreview = [
            {
                $$hashkey : "ONU",
                'name' : "Since Inception",
                'reportTypes' : [
                    {
                        's1':'returns',
                        's2':'Percentile Analysis',
                        's3':'Cash Flow/NAV sumaary',
                        's4':'Internal Fund supporting Data'
                    }
                ]
            },
            {
                $$hashkey : "ONU",
                'name' : "Horizon",
                'reportTypes' : [
                    {
                        'h1':'Horizon returns',
                        'h2':'Horizon Summary',
                        'h3':'Cash Flow/NAV sumaary'
                    }
                ]
            }
        ];
	}

})(this);

