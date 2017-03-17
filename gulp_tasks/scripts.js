import gulp from 'gulp';
import eslint from 'gulp-eslint';
import gulpWebpack from 'webpack';
import gulplog from 'gulplog';
import UglifyJsPlugin from 'webpack/lib/optimize/UglifyJsPlugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import babel from 'gulp-babel';
import concat from 'gulp-concat';

import conf from '../conf/gulp.conf';

gulp.task('scripts', gulpScripts);
// gulp.task('scripts', webpackScripts);

// gulp.task('scripts', gulp.series('gulpScripts', 'webpackScripts'));

function gulpScripts () {
    return gulp.src(conf.path.src('**/*.js'))
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(babel())
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(conf.path.tmp()));
}

// function webpackScripts (callback) {
//     const options = {
//         context: conf.paths.src,
//         entry: ['./index.js', './configs/http.js'],
//         watch: false,
//         module: {
//             loaders: [
//                 {
//                     test: /\.js$/,
//                     exclude: /(src)/,
//                     loader: 'babel',
//                     query: {
//                         presets: ['env']
//                     }
//                 }
//             ]
//         },
//         output: {
//             filename: 'scripts.js',
//             path: './.tmp'
//         },
//         plugins: [
//             // new UglifyJsPlugin({
//             //     compress: true
//             // }),
//             new HtmlWebpackPlugin({
//               filename: 'index.html',
//               template: '../src/index.html'
//             })
//         ]
//     };
//
//     return gulpWebpack(options, (err, stat) => {
//         if (!err) {
//             err = stat.toJson().errors[0];
//         }
//
//         if (err) {
//             gulplog.error(err);
//         } else {
//             gulplog.info(stat.toString({
//                 colors: true
//             }));
//         }
//
//         if (err) {
//             callback(err);
//         } else {
//             callback();
//         }
//     });
// }
