'use strict';
/*jshint esnext: true */

class MainCtrl {
  constructor ($scope) {
    $scope.noop = true;
  }
}

MainCtrl.$inject = ['$scope'];

export default MainCtrl;
