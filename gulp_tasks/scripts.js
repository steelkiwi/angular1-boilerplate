import gulp from 'gulp';
import eslint from 'gulp-eslint';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import transpile from 'gulp-es6-module-transpiler';

import conf from '../conf/gulp.conf';

gulp.task('scripts', scripts);

function scripts () {
    return gulp.src(conf.path.src('**/*.js'))
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(babel())
        .pipe(transpile({
            formatter: 'commonjs'
        }))
        .pipe(gulp.dest(conf.path.tmp()));
}
