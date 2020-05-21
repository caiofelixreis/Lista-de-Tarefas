const gulp = require('gulp')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const {series} = require('gulp')

function lowCss(){
    return gulp.src('css/style.css')
        .pipe(uglifycss({ "uglyComments":true }))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('build/css'))
}

exports.default = series(lowCss)

