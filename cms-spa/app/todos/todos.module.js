import angular from 'angular';

const todos = angular.module('cms.todos', []);

todos.service('todosService', require('./todos.service'));

export default todos;
