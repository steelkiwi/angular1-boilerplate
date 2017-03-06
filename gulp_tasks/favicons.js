const gulp = require('gulp');
const favicons = require('gulp-favicons');
const gulplog = require('gulplog');

const conf = require('../conf/gulp.conf');

gulp.task('faviconsTask', faviconsTask);

function faviconsTask() {
    return gulp.src(conf.path.src('images/favicon.png'))
        .pipe(favicons())
        .on('error', gulplog.error)
        .pipe(gulp.dest(conf.path.tmp('images')));
};
