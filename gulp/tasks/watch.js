var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function(){
  browserSync.init({
    notify: false,
    server: {
      baseDir:""
    }
  });

  watch('index.html', function(){
    browserSync.reload();
  });

  watch('assets/css/**/*.css', function(){
    gulp.start('cssInject');
  });
});


gulp.task('cssInject', ['style'], function(){
  return gulp.src('temp/styles/style.css')
  .pipe(browserSync.stream());
});
