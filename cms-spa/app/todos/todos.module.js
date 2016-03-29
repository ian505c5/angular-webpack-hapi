import angular from 'angular';
import todosRoutes from './todos.routes';

const todos = angular.module('cms.todos', []);

todos
    .service('todosService', require('./todos.service'))
    .config(todosRoutes);

export default todos;
