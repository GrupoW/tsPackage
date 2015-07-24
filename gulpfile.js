var gulp = require('gulp');
var ts = require('gulp-typescript');
var merge = require('merge2');
var concat = require('gulp-concat');

var tsProject = ts.createProject({
	target:'ES5',
    declarationFiles: true,
    noExternalResolve: true
});

gulp.task('scripts', function() {
    var tsResult = gulp.src('src/**/*.ts')
                    .pipe(ts(tsProject));

    return merge([ 
        tsResult.dts.pipe(gulp.dest('dist/definitions')),
        tsResult.js.pipe(concat('grwpo-package.js')).pipe(gulp.dest('dist/js'))
    ]);
});

gulp.task('watch', ['scripts'], function() {
    gulp.watch('lib/*.ts', ['scripts']);
});