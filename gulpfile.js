var gulp = require('gulp');
var jshint = require('gulp-jshint')
const SRC = 'src/';
const DEST = 'dist/';

gulp.task( 'lint', function() {
	return gulp.src(SRC + '*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('jshint-stylish'));
} );

