const gulp = require('gulp')
const sass = require('gulp-sass')

sass.compiler = require('node-sass')

gulp.task('sass', _ => 
    gulp.src('./sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public/css')))

gulp.task('sass:watch', _ => gulp.watch('./sass/**/*.scss', gulp.series('sass')))