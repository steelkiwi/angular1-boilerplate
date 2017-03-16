import {app} from 'index';
import {projectFeaturesList} from 'features';

class HomePage {
    static factory(...injections) {
        return new HomePage(...injections);
    }

    constructor(projectFeaturesList) {
        this.features = projectFeaturesList;
    }
}

export default app.component('homePage', {
    templateUrl: 'pages/home/home.html',
    controller: HomePage.factory
});
