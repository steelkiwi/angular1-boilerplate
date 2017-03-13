const gulp = require('gulp');
const gulpWebpack = require('webpack');
const gulplog = require('gulplog');
const path = require('path');
const UglifyJsPlugin = require("webpack/lib/optimize/UglifyJsPlugin");
const pjson = require("../package.json");

const conf = require('../conf/gulp.conf');

gulp.task('webpack', webpack);

function getDep(){
    const dep = [];

    for (var key in pjson.dependencies) {
        dep.push('./' + key);
    }
    return dep;
}

function webpack(callback) {
    const options = {
        context: conf.paths.modules,
        entry: getDep(),
        watch: false,
        output: {
            filename: 'modules.js',
            path: './.tmp'
        },
        plugins: [
            new UglifyJsPlugin({
                compress: true
            })
        ]
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
