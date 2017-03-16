import {$stateProvider} from 'angular';
import {homePage} from 'home';

export default app.config(['$stateProvider', $stateProvider => {
    $stateProvider.state('app', {
        url: '/',
        component: 'homePage'
    });
}]);
