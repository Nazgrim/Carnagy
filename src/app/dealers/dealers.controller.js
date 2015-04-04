'use strict';

class DealersCtrl {
  constructor ($scope, dealers) {
    $scope.dealers = dealers;
  }
}

DealersCtrl.$inject = ['$scope', 'dealers'];

export default DealersCtrl;
