import gulp from 'gulp';
import gulpWebpack from 'webpack';
import gulplog from 'gulplog';
import UglifyJsPlugin from 'webpack/lib/optimize/UglifyJsPlugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import pjson from '../package.json';

import conf from '../conf/gulp.conf';

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
            }),
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: '../src/index.html'
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
