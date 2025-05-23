let gulp = require('gulp')
let sass = require('gulp-sass')(require('sass'))
let sourcemaps = require('gulp-sourcemaps')
let imagemin = require('gulp-imagemin')

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            style: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dist/styles'))
}

function images() {
    return gulp.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
}

exports.default = function() {
    gulp.watch('./src/styles/*.scss', {ignoreInitial: false}, gulp.series(styles))
    gulp.watch('./src/images/*', {ignoreInitial: false}, gulp.series(images))
}

exports.default = gulp.parallel(styles, images)