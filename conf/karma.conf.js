const conf = require('./gulp.conf');
const listFiles = require('./karma-files.conf');

module.exports = function (config) {
    const configuration = {
        basePath: '../',
        singleRun: true,
        autoWatch: false,
        logLevel: 'INFO',
        junitReporter: {
            outputDir: 'test-reports'
        },
        browsers: [
            'Chrome'
        ],
        frameworks: [
            'jasmine'
        ],
        files: listFiles(),
        preprocessors: {
            [conf.path.src('**/*.html')]: [
              'ng-html2js'
            ]
        },
        ngHtml2JsPreprocessor: {
            stripPrefix: `${conf.paths.src}/`,
            moduleName: 'app'
        },
        plugins: [
            require('karma-jasmine'),
            require('karma-junit-reporter'),
            require('karma-coverage'),
            require('karma-chrome-launcher'),
            require('karma-ng-html2js-preprocessor')
        ]
    };

    config.set(configuration);
};
