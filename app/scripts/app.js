'use strict';

/**
 * @ngdoc overview
 * @name carouselApp
 * @description
 * # carouselApp
 *
 * Main module of the application.
 */

var applicationDependencies = [
    'ngAnimate',
    'ngAria',
    'ngTouch',
    'ui.router'
];

window.CarouselDemo = angular
  .module('carouselApp', applicationDependencies);

function declareDefaultStates($stateProvider) {
  var homeView = {url: '/', templateUrl: './views/main.html'};
  $stateProvider
    .state('home', homeView);
}

CarouselDemo
  .config(declareDefaultStates)
  .run();