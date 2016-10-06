/**
 * Factory ToDoStorage
*/
(function () {

	'use strict';

	//Function
	function todoStorage () {
		var STORAGE_ID = 'todos-ng';

		return {
			get: function () {
				return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
			},

			put: function (todos) {
				localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
			}
		};
	}


	//Module
	angular.module('todo').factory('todoStorage', todoStorage);

})();