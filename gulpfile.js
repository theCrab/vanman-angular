var gulp    = require('gulp')
var sass    = require('gulp-ruby-sass')
var connect = require('gulp-connect')

// requires browserify and vinyl-source-stream
var browserify = require('browserify')
var source = require('vinyl-source-stream')

// Connect task
gulp.task('connect', function () {
	connect.server({
		root: 'public',
		port: 5000
	})
})

gulp.task('browserify', function() {
	// Grabs the app.js file
	return browserify('./app/app.js')

  	// bundles it and creates a file called main.js
  	.bundle()
  	.pipe(source('main.js'))

  	// saves it to public/javascripts/ directory
  	.pipe(gulp.dest('./public/javascripts/'))
})
