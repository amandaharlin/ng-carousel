'use strict';


CarouselDemo
  .config(function demo($stateProvider) {

    var demoView = {
      url: '/demo',
      templateUrl: './views/demo.html'
    };

    $stateProvider
      .state('demo', demoView);

  });