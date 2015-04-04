'use strict';

class SidebarCtrl {
  constructor ($scope) {
    $scope.date = new Date();
  }
}

SidebarCtrl.$inject = ['$scope'];

export default SidebarCtrl;
