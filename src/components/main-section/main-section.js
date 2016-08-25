(() => {
    'use strict';

    angular
        .module('app')
        .component('mainSection', {
            templateUrl: 'components/main-section/main-section.html',
            transclude: true
        });
})();
