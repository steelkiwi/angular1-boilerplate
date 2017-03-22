import app from 'index';
import projectFeaturesList from '../../constants/features';

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

export default app.component('homePage', {
    templateUrl: 'pages/home/home.html',
    controller: HomePage.factory
});
