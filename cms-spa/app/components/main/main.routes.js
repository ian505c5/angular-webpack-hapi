import 'components/main/main.html';
import 'components/main/main.scss';
import mainCtrl from 'components/main/main-controller';

import 'todos/todos.module';

export default /*@ngInject*/ function routing($stateProvider) {
    $stateProvider.state('main', {
        url: '/',
        views: {
            '@': {
                templateUrl: '/components/main/main.html',
                controller: mainCtrl,
                controllerAs: 'mainCtrl'
            }
        }
    });
}
