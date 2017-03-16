import {$urlRouterProvider} from 'angular-router';
import {$locationProvider} from 'angular';

const config = ($urlRouterProvider, $locationProvider) => {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/');
};

export default app.config([
    '$urlRouterProvider', '$locationProvider', config
]);
