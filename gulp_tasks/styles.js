const gulp = require('gulp');
const browserSync = require('browser-sync');
const sourcemaps = require('gulp-sourcemaps');
const less = require('gulp-less');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const lesshint = require('gulp-lesshint');
const del = require('del');

const conf = require('../conf/gulp.conf');

gulp.task('styles', styles);
gulp.task('delSpritesStyles', delSpritesStyles);

function styles() {
    return gulp.src(conf.path.src('index.less'))
        .pipe(sourcemaps.init())
        .pipe(lesshint({
            configPath: conf.path.src('.lesshintrc')
        }))
        .pipe(less({
            compress: false
        })).on('error', conf.errorHandler('Less'))
        .pipe(postcss([autoprefixer()])).on('error', conf.errorHandler('Autoprefixer'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(conf.path.tmp()))
        .pipe(browserSync.stream());
}

function delSpritesStyles() {
    return del(conf.path.src('styles/base/sprites.less'))
}
