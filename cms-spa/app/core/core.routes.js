import 'layouts/application.html';

import 'core/components/sidenav/sidenav.html';
import sideNavCtrl from 'core/components/sidenav/sidenav.controller';

export default /*@ngInject*/ function routing($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('root', {
            abstract: true,
            templateUrl: 'layouts/application.html'
        }).state('application', {
            url: '/',
            parent: 'root',
            views: {
                'header': {
                    template: '<h1>Header</h1>'
                },
                'sidenav': {
                    templateUrl: 'core/components/sidenav/sidenav.html',
                    controller: sideNavCtrl,
                    controllerAs: '$ctrl'
                },
                'content': {
                    template: '<div ui-view></div>'
                }
            }
        });
}
