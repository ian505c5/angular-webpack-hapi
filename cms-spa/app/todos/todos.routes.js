import 'todos/todos.html';
import 'todos/todo.html';

import todosCtrl from './todos.controller';
import todoCtrl from './todo.controller';

import 'todos/todos.module';

export default /*@ngInject*/ function routing($stateProvider) {
    $stateProvider
        .state('todos', {
            parent: 'application',
            url: 'todos',
            views: {
                '': {
                    templateUrl: 'todos/todos.html',
                    controller: todosCtrl,
                    controllerAs: '$ctrl'
                }
            },
            resolve: {
                todos(todosService) {
                    return todosService.fetchTodos().then(function(data) {
                        return data.data;
                    });
                }
            }
        })
        .state('todo', {
            parent: 'application',
            url: 'todos/:todoId',
            views: {
                '': {
                    templateUrl: 'todos/todo.html',
                    controller: todoCtrl,
                    controllerAs: '$ctrl'
                }
            },
            resolve: {
                todo($stateParams, todosService) {
                    return todosService.fetchTodo($stateParams.todoId).then(function(data) {
                        return data.data;
                    });
                }
            }
        });
}
