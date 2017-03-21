import gulp from 'gulp';
import browserSync from 'browser-sync';
import gulpInject from 'gulp-inject';

import conf from '../conf/gulp.conf';

gulp.task('inject', inject);

function inject() {
    const injectScripts = gulp.src([
        conf.path.tmp('src/**/*.js'),
        `!${conf.path.tmp('templateCacheHtml.js')}`,
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
