var gulp = require("gulp");
var sass = require("gulp-sass");

var sourcemaps = require('gulp-sourcemaps');

gulp.task("sass", function(){
    return gulp.src("sass/*scss")
    .pipe(sourcemaps.init())
    .pipe(sass({
        errLogToConsole: true,
        outputStyle: "compressed"
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("css/style.css"))
})

gulp.task("watch", function(){
    gulp.watch("sass/*.scss", ["sass"])

});
