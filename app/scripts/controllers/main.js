'use strict';

/**
 * @ngdoc function
 * @name carouselApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the carouselApp
 */
angular.module('carouselApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
