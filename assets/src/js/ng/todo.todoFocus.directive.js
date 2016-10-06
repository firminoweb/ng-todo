
/**
 * Directive ToDoFocus
 */
(function () {

	'use strict';

	//Function
	function todoFocus ($timeout) {

		return function (scope, elem, attrs) {
			scope.$watch(attrs.todoFocus, function (newVal) {
				if (newVal) {
					$timeout(function () {
						elem[0].focus();
					}, 0, false);
				}
			});
		};

	}


	//Inject components
	todoFocus.$inject = ['$timeout'];

	//Module
	angular.module('todo').directive('todoFocus', todoFocus);


})();