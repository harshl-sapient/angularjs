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
                    {'id':1, 'name': 'returns'},
                    {'id':3, 'name': 'cash flow/nav summary'},
                    {'id':17, 'name': 'Percentile Analysis'},
                    {'id':22, 'name': 'Internal Fund Supporting Data'}
                ]
            },
            {
                $$hashkey : "ONU",
                'name' : "Horizon",
                'reportTypes' : [
                    {'id':10, 'name': 'cash flow/nav history'},
                    {'id':11, 'name': 'horizon returns'},
                    {'id':14, 'name': 'horizon summary'},
                ]
            }
        ];

        $scope.calulation = [
	        {'id':4, 'text' : 'IRR pooled'},
	        {'id':5, 'text' : 'IRR equal Weighted'},
	        {'id':6, 'text' : 'IRR Average'},
	        {'id':20, 'text' : 'TVPI Pooled'}
        ];
	}

})(this);

