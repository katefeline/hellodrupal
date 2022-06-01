let gulp = require('gulp'),
  scss = require("gulp-sass")(require("sass"));

gulp.task('scss', async function() {
  return gulp.src('css/hd_custom_module.scss')
    .pipe(
      scss({
        outputStyle: "expanded"
      })
    )
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
  gulp.watch('css/*.scss', gulp.parallel('scss'));
});

gulp.task('default', gulp.parallel('scss', 'watch'));
