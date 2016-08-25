(() => {
    'use strict';

    angular
        .module('app')
        .config(['$stateProvider', $stateProvider => {
            $stateProvider.state('app', {
                url: '/',
                component: 'homePage'
            });
        }]);
})();
