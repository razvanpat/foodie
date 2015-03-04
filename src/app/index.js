'use strict';
/*jshint esnext: true */

import MainCtrl from './main/main.controller';
import NavbarCtrl from '../components/navbar/navbar.controller';
import SidebarCtrl from '../components/sidebar/sidebar.controller';

angular.module('workspace', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ngRoute', 'ngMaterial'])
  .controller('MainCtrl', MainCtrl)
  .controller('NavbarCtrl', NavbarCtrl)
  .controller('SidebarCtrl', SidebarCtrl)
  
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
    .primaryPalette('deep-orange')
    .accentPalette('blue-grey');
  })
;
