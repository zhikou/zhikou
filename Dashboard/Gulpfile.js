"use strict";

const gulp = require("gulp");
// const sass = require("gulp-sass");
const sass = require('gulp-ruby-sass');
const path = require("path");

// gulp.task('sass', function () {
//   return gulp.src(path.join(__dirname,"client/sass/all.scss"))
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest(path.join(__dirname,"client/css/")));
// });
 
gulp.task('sass:watch', function () {
  gulp.watch(path.join(__dirname,"client/sass/**/*.scss"), ['sass','bootstrap']);
});


// gulp.task("bootstrap-sass",function () {
// 	return gulp.src(path.join(__dirname,"client/sass/my-bootstrap/bootstrap.scss"))
// 	.pipe(sass().on("error",sass.logError))
// 	.pipe(gulp.dest(path.join(__dirname,"client/css/my-bootstrap/")));
// })

gulp.task('sass', () =>
    sass(path.join(__dirname,"client/sass/all.scss"))
        .on('error', sass.logError)
        .pipe(gulp.dest(path.join(__dirname,"client/css/")))
);
gulp.task('bootstrap', () =>
    sass(path.join(__dirname,"client/sass/my-bootstrap/bootstrap.scss"))
        .on('error', sass.logError)
        .pipe(gulp.dest(path.join(__dirname,"client/css/my-bootstrap/")))
);
