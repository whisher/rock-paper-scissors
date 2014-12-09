(function() {
'use strict';

function config($stateProvider) {
    $stateProvider      
        .state('morra', {
            url: '/morra',
            templateUrl: 'templates/morra/index.html',
            controller:'MorraController as mrr'
    })
    .state('morra_result', {
            url: '/morra/result/:id',
            templateUrl: 'templates/morra/result.html',
            controller:'MorraResultController as mrs'
    });
}

angular.module('morra.routes', [])
    .config(config);
})();
