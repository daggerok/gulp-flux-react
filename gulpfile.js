gulp       = require('gulp'),
browserify = require('browserify'),
reactify   = require('reactify'),
concat     = require('gulp-concat'),
uglify     = require('gulp-uglify'),
sourcemaps = require('gulp-sourcemaps'),
minify     = require('gulp-minify-css'),
buffer     = require('vinyl-buffer'),
stream     = require('vinyl-source-stream'),
browser    = require('browser-sync').create(),
require('colors')

log = (error) => {
  console.log([
    'BUILD FAILED'.red.underline,
    '\u0007', // beep
    error.stack.substring(0, error.stack.indexOf(' at ') || error.stack.length)
  ].join('\n'))
  //this.end()
}

gulp.task('browserify', () => {
  return browserify('./src/scripts/main.js')
    .on('error', log)
    .transform('reactify')
    .on('error', log)
    .bundle()
    .on('error', log)
    .pipe(stream('bundle.js'))
    .on('error', log)
    .pipe(buffer())
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .on('error', log)
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/'))
})

gulp.task('copy', () => {
  gulp.src('./src/index.html')
    .pipe(gulp.dest('dist/'))
  gulp.src([
      'node_modules/bootstrap/dist/css/bootstrap.css',
      'src/styles/main.css'
    ])
    .pipe(concat('bundle.css'))
    .pipe(minify())
    .pipe(gulp.dest('dist/'))
  return gulp.src('src/assets/**/*.*')
    .pipe(gulp.dest('dist/assets/'))
})

gulp.task('default', ['browserify', 'copy'])

gulp.task('watch', ['default'], () => {
  url = require('url')
  proxy = require('proxy-middleware')
  options = url.parse('http://localhost:8080/api')
  options.route = '/api'

  browser.init({
    server: {
      baseDir: 'dist/',
      middleware: [ proxy(options) ]
    }
  })
  gulp.watch('src/**/*.*', ['default'])
  return gulp.watch('dist/**/*.*').on('change', browser.reload)
})
