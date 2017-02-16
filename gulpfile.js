var gulp = require('gulp');
var webpack = require('gulp-webpack');
var config = require('./front/webpack.config.js');




gulp.task('default', function() {


    return gulp.src('./front/src')
        .pipe(webpack( config ))
        .pipe(gulp.dest('./dist'));

});

gulp.task('watch', function () {
    gulp.watch('./front/src/**/*', ['default']);
});

