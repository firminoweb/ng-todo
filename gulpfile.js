'use strict';

// Packages
var gulp       = require('gulp');
var Q          = require('q');
var sourcemaps = require('gulp-sourcemaps');
var concat     = require('gulp-concat');
var uglify     = require('gulp-uglify');
var sass       = require('gulp-sass');
var rename     = require('gulp-rename');
var cssnano    = require('gulp-cssnano');

// Paths
var bower = {
  ang: 'components/angular/',
  ngr: 'components/angular-route/',
	sre: 'components/scrollreveal/'
};

var sassOpts = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

var dir = {
  src: {
    js:  'assets/src/js/',
    scss: 'assets/src/scss/'
  },
  dist: {
    js: 'assets/dist/js/',
    css: 'assets/dist/css/'
  }
};

// Tasks
gulp.task('sync', function () {
  var deferred = Q.defer();

  setTimeout(function () {
    deferred.resolve();
  }, 2000);

  return deferred.promise;
});

gulp.task('jsbuild', function () {
  return gulp.src([
      bower.ang + 'angular.js',
      bower.ngr + 'angular-route.js',
      dir.src.js + 'ng/todo.js',
      dir.src.js + 'ng/todo.todoCtrl.controller.js',
      dir.src.js + 'ng/todo.todoEscape.directive.js',
      dir.src.js + 'ng/todo.todoFocus.directive.js',
      dir.src.js + 'ng/todo.todoStorage.factory.js',
      bower.sre + 'dist/scrollreveal.js',
			dir.src.js + 'init.js'
  	])
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(dir.dist.js));
});

gulp.task('jsmin', function () {
  return gulp.src(dir.dist.js + 'app.js')
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(rename({suffix: '.bundle'}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(dir.dist.js));
});

gulp.task('cssbuild', function () {
  return gulp.src(dir.src.scss + 'app.scss')
    .pipe(sourcemaps.init())
    .pipe(sass(sassOpts).on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(dir.dist.css));
});

gulp.task('cssmin', function () {
  return gulp.src(dir.dist.css + 'app.css')
    .pipe(sourcemaps.init())
    .pipe(rename({suffix: '.min'}))
    .pipe(cssnano())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(dir.dist.css));
});


//
gulp.task('styles', ['cssbuild','sync'], function () {
  gulp.start('cssmin');
});

gulp.task('scripts', ['jsbuild','sync'], function () {
  gulp.start('jsmin');
});

///
gulp.task('default', ['scripts', 'styles']);
///