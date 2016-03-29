import 'layouts/application.html';

import mainCtrl from 'components/main/main-controller';

import 'todos/todos.module';

export default /*@ngInject*/ function routing($stateProvider) {
    $stateProvider.state('main', {
        url: '/',
        views: {
            '@': {
                templateUrl: 'layouts/application.html',
                controller: mainCtrl,
                controllerAs: 'mainCtrl'
            }
        }
    });
}
