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

  watch('../../index.html', function(){
    browserSync.reload();
  });

  watch('../../assets/css/**/*.css', function(){
    gulp.start('cssInject');
  });
});

return gulp.src('../../temp/styles/style.css')


// this is an error..
