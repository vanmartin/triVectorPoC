'use strict';

angular.module('mean.rappiddemo').controller('RappiddemoController', ['$scope', 'Global', 'Rappiddemo',
  function($scope, Global, Rappiddemo) {
    $scope.global = Global;
    $scope.package = {
      name: 'rappiddemo'
    };
  }
]);
