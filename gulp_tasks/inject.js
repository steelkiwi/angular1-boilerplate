const gulp = require('gulp');
const browserSync = require('browser-sync');
const gulpInject = require('gulp-inject');

const conf = require('../conf/gulp.conf');

gulp.task('inject', inject);

function inject() {
    const injectScripts = gulp.src([
        conf.path.tmp('index.js'),
        conf.path.tmp('configs/*.js'),
        conf.path.tmp('constants/*.js'),
        conf.path.tmp('containers/*.js'),
        conf.path.tmp('components/*.js'),
        conf.path.tmp('pages/*.js'),
        conf.path.tmp('**/*.js'),
        `!${conf.path.tmp('**/*.spec.js')}`,
        `!${conf.path.tmp('**/modules.js')}`
    ]);

    const injectOptions = {
        ignorePath: [conf.paths.src, conf.paths.tmp],
        addRootSlash: false
    };

    return gulp.src(conf.path.tmp('index.html'))
        .pipe(gulpInject(injectScripts, injectOptions))
        .pipe(gulp.dest(conf.paths.tmp))
        .pipe(browserSync.stream());
}
