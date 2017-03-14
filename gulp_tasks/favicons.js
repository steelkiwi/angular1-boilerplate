const gulp = require('gulp');
const gulpWebpack = require('webpack');
const gulplog = require('gulplog');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const conf = require('../conf/gulp.conf');

gulp.task('favicons', faviconTask);

function faviconTask(callback) {
    const options = {
        context: conf.paths.src,
        plugins: [
            new FaviconsWebpackPlugin({
                logo: './images/favicon.png',
                prefix: '.tmp/icons/',
                emitStats: false,
                statsFilename: 'iconstats-[hash].json',
                persistentCache: true,
                inject: true,
                background: '#fff',
                title: 'angular1-boilerplate',
                icons: {
                    android: true,
                    appleIcon: true,
                    appleStartup: true,
                    coast: false,
                    favicons: true,
                    firefox: true,
                    opengraph: false,
                    twitter: true,
                    yandex: true,
                    windows: true
                }
            }),
            new HtmlWebpackPlugin({
              filename: './.tmp/index.html',
              template: '../.tmp/index.html'
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
