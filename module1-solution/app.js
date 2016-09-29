(function() {
	'use sctrict';

	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController($scope) {
		$scope.message = "";
		$scope.status = "";

		$scope.checkIfTooMuch = function() {
			if(!$scope.words || $scope.words.length === 0) {
				$scope.message = "Please enter data first";
				$scope.status = "red";
			} else {
				$scope.status = "green";
				if($scope.words.split(',').length > 3) {
					$scope.message = "Too much!";
				} else {
					$scope.message = "Enjoy!";
				}
			}
		};
	}


})();