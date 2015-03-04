'use strict';
/*jshint esnext: true */

class NavbarCtrl {
  constructor ($scope, $mdSidenav) {
    $scope.toggleLeft = function() {
      $mdSidenav('left').toggle();
    };
  }
}

NavbarCtrl.$inject = ['$scope', '$mdSidenav'];

export default NavbarCtrl;
