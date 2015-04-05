'use strict';

import MainCtrl from './main/main.controller';
import NavbarCtrl from '../components/navbar/navbar.controller';
import SidebarCtrl from '../components/sidebar/sidebar.controller';
import DealersCtrl from './dealers/dealers.controller';
import DealerCtrl from './dealers/dealer.controller';

angular.module('carnagy', ['ngAnimate', 'ngCookies', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap'])
  .controller('MainCtrl', MainCtrl)
  .controller('NavbarCtrl', NavbarCtrl)
  .controller('SidebarCtrl', SidebarCtrl)
  .controller('DealersCtrl', DealersCtrl)
  .controller('DealerCtrl', DealerCtrl)

  .config(function ($stateProvider, $urlRouterProvider) {
    var dealers = window.dealers;
    
    dealers.forEach(function (dealer, index) {
        dealer.id = index;
        
        var domain = dealer.dealerUrl.substr(dealer.dealerUrl.indexOf('://') + '://'.length);
        
        dealer.domain = domain.substring(0, domain.replace('?', '/').indexOf('/')).toLowerCase();
    });
    
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('dealers', {
        url: '/dealers',
        resolve: {
            dealers: function () {
                return dealers;
            },
        },
        templateUrl: 'app/dealers/dealers.html',
        controller: 'DealersCtrl',
      })
      .state('dealer', {
        url: '/dealer/:id',
        resolve: {
            dealer: function ($stateParams) {
                return dealers.filter(d => d.id == $stateParams.id)[0];
            },
        },
        templateUrl: 'app/dealers/dealer.html',
        controller: 'DealerCtrl',
      });

    $urlRouterProvider.otherwise('/dealers');
  });
