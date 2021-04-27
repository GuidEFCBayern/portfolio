var BASE = {
	src: '',
	dist: '',
}

var CSS = {
	src: [
		BASE.src + 'assets/css/import.css',
		BASE.src + 'assets/css/source.css',
	],
	dist: BASE.dist + 'assets/css',
	filename: 'style.concat.css',
}

var JS = {
	src: [
		BASE.src + 'assets/js/jquery-2.1.4.min.js',
		BASE.src + 'assets/js/popper.min.js',
		BASE.src + 'assets/js/jquery-ui.min.js',
		BASE.src + 'assets/js/jquery.ui.touch-punch.min.js',
		BASE.src + 'assets/js/jquery.easing-1.3.min.js',
		BASE.src + 'assets/js/modernizr-3.6.0.min.js',
		BASE.src + 'assets/js/bootstrap.min.js',
		BASE.src + 'assets/js/validator.min.js',
		BASE.src + 'assets/js/wow.min.js',
		BASE.src + 'assets/js/select2.min.js',
		BASE.src + 'assets/js/jquery.fancybox.min.js',
		BASE.src + 'assets/js/jquery.mCustomScrollbar.min.js',
		BASE.src + 'assets/js/slick.js',
		BASE.src + 'assets/js/lazyload.min.js',
		BASE.src + 'assets/js/trunk8.min.js.js',
		BASE.src + 'assets/js/jquery.matchHeight-min.js',
		BASE.src + 'assets/js/jquery.sticky-sidebar.min.js',
		BASE.src + 'assets/js/sticky-sidebar.min.js',
		BASE.src + 'assets/js/resizesensor.js',
		BASE.src + 'assets/js/main.js',
	],
	dist: BASE.dist + 'assets/js',
	filename: 'script.concat.js',
}

var gulp = require('gulp')
var autoprefixer = require('gulp-autoprefixer')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var strip = require('gulp-strip-comments')
var cleanCSS = require('gulp-clean-css')

gulp.task('css', function(){
	return gulp
		.src(CSS.src)
		.pipe(concat(CSS.filename))
		.pipe(autoprefixer())
    	.pipe(gulp.dest(CSS.dist))
})
gulp.task('css-build', function(){
	return gulp
		.src(CSS.src)
		.pipe(concat(CSS.filename))
		.pipe(autoprefixer())
		.pipe(cleanCSS({compatibility: 'ie8'}))
    	.pipe(gulp.dest(CSS.dist))
})

gulp.task('js', function() {
	return gulp
		.src(JS.src)
		.pipe(concat(JS.filename))
		.pipe(strip())
		.pipe(gulp.dest(JS.dist))
})

gulp.task('js-build', function() {
	return gulp
		.src(JS.src)
		.pipe(concat(JS.filename))
		.pipe(strip())
		.pipe(uglify())
		.pipe(gulp.dest(JS.dist))
})