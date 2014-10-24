'use strict';

angular.module('mean.rappiddemo').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('rappiddemo example page', {
      url: '/rappiddemo/example',
      templateUrl: 'rappiddemo/views/index.html'
    });
  }
]);
