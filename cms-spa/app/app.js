import 'jquery';
import angular from 'angular';
import 'angular-resource';
import 'angular-ui-router';
import 'angular-sanitize';

import 'services/services';
import 'directives/directives';

import mainRoutes from 'components/main/main.routes';

angular.module('test', ['ngResource', 'ui.router', 'services', 'directives', 'ngSanitize'])

.config(mainRoutes);
