var gulp = require ('gulp');
var sass = require ('gulp-sass');

gulp.task('compilar', function () {
  return gulp.src('./source/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});