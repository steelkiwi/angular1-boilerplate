(() => {
    'use strict';

    class HomePage {
        static factory(...injections) {
            return new HomePage(...injections);
        }

        constructor(projectFeaturesList) {
            this.features = projectFeaturesList;
        }
    }

    HomePage.factory.$inject = [
        'projectFeaturesList'
    ];

    angular
        .module('app')
        .component('homePage', {
            templateUrl: 'pages/home/home.html',
            controller: HomePage.factory
        });
})();
