var gulp = require('gulp');
var uglify = require('gulp-uglifycss');
var sass = require('gulp-sass');

gulp.task('styles', function () {
    return gulp.src('./dev/sass/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(uglify({"uglyComments": true}))
        .pipe(gulp.dest('./dist/styles'));
})

gulp.task('sass', function () {
    gulp.watch('./dev/sass/**/*.scss', ['styles']);
});

