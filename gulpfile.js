const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');

function compile_sass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/styles'));
}

function compile_img() {
    return gulp.src('./source/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}

function compile_js() {
    return gulp.src('./source/scripts/main.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/scripts'))
}

exports.default = function() {
    gulp.watch('./source/styles/main.scss', { ignoreInitial: false }, gulp.series(compile_sass));
    gulp.watch('./source/images/*', { ignoreInitial: false }, gulp.series(compile_img));
    gulp.watch('./source/scripts/*', { ignoreInitial: false }, gulp.series(compile_js));
}