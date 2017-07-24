var gulp = require('gulp'),
postcss = require('gulp-postcss'),
nested = require('postcss-nested'),
simplevar = require('postcss-simple-vars'),
cssImport = require('postcss-import'),
autoprefixer = require('autoprefixer');

gulp.task('style', function(){
  return gulp.src('assets/css/style.css')
  .pipe(postcss([cssImport, nested, simplevar, autoprefixer]))
  .pipe(gulp.dest('temp/styles'));
});
