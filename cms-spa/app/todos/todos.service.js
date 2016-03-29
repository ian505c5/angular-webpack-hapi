const $inject = ['$http'];

const TodosService = function($http) {
    this.fetchTodos = function() {
        return $http({
            method: 'GET',
            url: '/api/todos'
        });
    };
};

TodosService.$inject = $inject;

export default TodosService;
