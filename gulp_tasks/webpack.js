const gulp = require('gulp');
const gulpWebpack = require('webpack');
const gulplog = require('gulplog');
const path = require('path');

const conf = require('../conf/gulp.conf');

gulp.task('webpack', webpack);

function webpack(callback) {
    const options = {
        context: './node_modules',
        entry: [
            './angular/angular.js',
            './angular-cookies/angular-cookies.js',
            './angular-mocks/angular-mocks.js',
            './angular-ui-router/release/angular-ui-router.js'
        ],
        watch: false,
        output: {
            filename: 'modules.js',
            path: './.tmp'
        }
    };

    return gulpWebpack(options, function(err, stat) {
        if (!err) {
          err = stat.toJson().errors[0];
        }

        if (err) {
          gulplog.error(err);
        } else {
          gulplog.info(stat.toString({
            colors: true
          }));
        }

        if (err) {
          callback(err);
        } else {
          callback();
        }
    })
}
