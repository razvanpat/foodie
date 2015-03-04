'use strict';
/*jshint esnext: true */

class SidebarCtrl {
  constructor ($scope, $mdSidenav) {
    $scope.closeNav = function() {
        $mdSidenav('left').close();
    };
  }
}

SidebarCtrl.$inject = ['$scope', '$mdSidenav'];

export default SidebarCtrl;
