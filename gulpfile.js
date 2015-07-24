var gulp = require('gulp');
var ts = require('gulp-typescript');
var merge = require('merge2');
var concat = require('gulp-concat');
var jasmine = require('gulp-jasmine');
var addsrc = require('gulp-add-src');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');


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
        tsResult.js
        .pipe(concat('grwpo-package.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(uglify())
        .pipe(rename('grwpo-package.min.js'))
        .pipe(gulp.dest('dist/js'))
    ]);
});

gulp.task('test', function () {
  var tsResult = gulp.src(['src/**/*.ts', 'specs/**/*.ts'])
                    .pipe(ts({
                        target:'ES5',
                        module:'commonjs',
                        noExternalResolve: false
                    }));
  return tsResult.js
            .pipe(concat('test.js'))
            .pipe(gulp.dest('specs/'))
            .pipe(addsrc('specs/**/*.js'))
            .pipe(jasmine());
});

gulp.task('watch', ['scripts'], function() {
    gulp.watch('lib/*.ts', ['scripts']);
});