/**
 * Directive ToDoEScape
*/
(function () {

	'use strict';

	//Function
	function todoEscape () {

		var ESCAPE_KEY = 27;

		return function (scope, elem, attrs) {
			elem.bind('keydown', function (event) {
				if (event.keyCode === ESCAPE_KEY) {
					scope.$apply(attrs.todoEscape);
				}
			});
		};

	}

	//Module
	angular.module('todo').directive('todoEscape', todoEscape);
		  



})();