import $stateProvider from 'angular';
import homePage from 'home';
import app from 'index';

export default app.config(['$stateProvider', $stateProvider => {
    $stateProvider.state('app', {
        url: '/',
        component: 'homePage'
    });
}]);
