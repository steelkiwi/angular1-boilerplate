(() => {
    'use strict';

    angular
        .module('app')
        .component('app', {
            templateUrl: 'containers/app/app.html',
            transclude: true
        });
})();
