const $inject = ['$http'];

const TodosService = function($http) {
    this.fetchTodos = function() {
        return $http({
            method: 'GET',
            url: '/api/todos'
        });
    };

    this.fetchTodo = function(id) {
        return $http({
            method: 'GET',
            url: '/api/todos/' + id
        });
    };
};

TodosService.$inject = $inject;

export default TodosService;
