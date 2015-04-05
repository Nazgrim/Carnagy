'use strict';

class DealerCtrl {
    constructor($scope, dealer) {
        //console.log(dealer);
        
        $scope.dealer = dealer;
        $scope.estimatedValue = 0.0;
        $scope.dealer.cars.forEach(c => $scope.estimatedValue += c.price);        
    }
}

DealerCtrl.$inject = ['$scope', 'dealer'];

export default DealerCtrl;