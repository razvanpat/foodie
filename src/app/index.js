'use strict';
/*jshint esnext: true */

import MainCtrl from './main/main.controller';
import SelectProviderCtrl from './new-order/select.provider.controller';
import NavbarCtrl from '../components/navbar/navbar.controller';
import SidebarCtrl from '../components/sidebar/sidebar.controller';

angular.module('foodie', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ngRoute', 'ngMaterial'])
  
  .controller('MainCtrl', MainCtrl)
  .controller('SelectProviderCtrl', SelectProviderCtrl)
  
  .controller('NavbarCtrl', NavbarCtrl)
  .controller('SidebarCtrl', SidebarCtrl)
  
  .config(function ($routeProvider) {
    $routeProvider
      
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      
      .when('/new-order/select-provider', {
        templateUrl: 'app/new-order/select.provider.html',
        controller: 'SelectProviderCtrl'
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
