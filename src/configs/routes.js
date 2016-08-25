(() => {
    'use strict';

    const config = ($urlRouterProvider, $locationProvider) => {
        $locationProvider.html5Mode(true).hashPrefix('!');
        $urlRouterProvider.otherwise('/');
    };

    angular
        .module('app')
        .config([
            '$urlRouterProvider', '$locationProvider', config
        ]);
})();
