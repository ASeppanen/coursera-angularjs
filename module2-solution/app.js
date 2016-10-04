(function() {
	'use strict';

	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService) {
		var toBuyCtrl = this;

		toBuyCtrl.items = ShoppingListCheckOffService.getToBuyList();

		toBuyCtrl.buy = function(itemIndex) {
			ShoppingListCheckOffService.buy(itemIndex);
		};
	}

	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService) {
		var alreadyBoughtCtrl = this;

		alreadyBoughtCtrl.items = ShoppingListCheckOffService.getAlreadyBoughtList();
	}

	function ShoppingListCheckOffService() {
		var service = this;

		var toBuyList = [
			{ name: "apples", quantity: 5},
			{ name: "bananas", quantity: 6},
			{ name: "chocolate bars", quantity: 2},
			{ name: "yogurts", quantity: 1},
			{ name: "ice creams", quantity: 2}
		];

		var alreadyBoughtList = [];

		service.getToBuyList = function() {
			return toBuyList;
		};

		service.getAlreadyBoughtList = function() {
			return alreadyBoughtList;
		};

		service.buy = function(itemIndex) {
			alreadyBoughtList.push(toBuyList[itemIndex]);
			toBuyList.splice(itemIndex, 1);
		};
	}

})();