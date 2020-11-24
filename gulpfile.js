const gulp = require('gulp');
const sass = require('gulp-sass');

function scssToCss() {
    return gulp.src('./styles/styles.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/css/'))
}

function watchFiles() {
    gulp.watch('./styles', scssToCss)
}

const build = gulp.series(scssToCss, watchFiles)

exports.default = build