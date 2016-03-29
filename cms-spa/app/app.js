import 'jquery';
import angular from 'angular';
import 'angular-resource';
import 'angular-ui-router';
import 'angular-sanitize';

import 'todos/todos.module';

import mainRoutes from 'components/main/main.routes';

angular.module('cms', ['ngResource', 'ui.router', 'ngSanitize', 'cms.todos'])

.config(mainRoutes);
