import 'jquery';
import angular from 'angular';
import 'angular-resource';
import 'angular-ui-router';
import angularMaterial from 'angular-material';
// Material design css
import 'angular-material/angular-material.css';
import './styles/application.scss';

import 'angular-sanitize';

import 'todos/todos.module';

import coreRoutes from 'core/core.routes';

angular
    .module('cms', ['ngResource', 'ui.router', 'ngSanitize', 'cms.todos', angularMaterial])
    .config(coreRoutes)
    .run(function($rootScope) {
        $rootScope.$on('$stateChangeError', console.log.bind(console));
    });
