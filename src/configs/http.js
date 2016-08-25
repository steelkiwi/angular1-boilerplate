(() => {
    'use strict';

    const conf = ($http, $cookies) => {
        // For CSRF token compatibility with Django
        const csrftoken = $cookies.get('csrftoken');
        if (csrftoken) {
            $http.defaults.headers.post['X-CSRFToken'] = csrftoken;
        }
    };

    angular
        .module('app')
        .run([
            '$http', '$cookies', conf
        ]);
})();
