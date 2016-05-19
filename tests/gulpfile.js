let gulp = require("gulp");

gulp.task('src', function () {
    let ts = require("gulp-typescript");

    let tsProject = ts.createProject("./tsconfig.json", {
        typescript: require('typescript')
    });

    return gulp.src("src/**/*.ts")
        .pipe(ts(tsProject))
        .js
        .pipe(gulp.dest('./build'));
});

gulp.task('default', ['src']);