let gulp = require("gulp");

gulp.task('src', function () {
    let ts = require("gulp-typescript");
    var merge = require('merge2');

    let tsProject = ts.createProject("./tsconfig.json", {
        typescript: require('typescript')
    });

    let result = gulp.src("src/**/*.ts")
        .pipe(ts(tsProject));

    return merge([
        result.dts.pipe(gulp.dest('./build')),
        result.js.pipe(gulp.dest('./build'))
    ]);
});

gulp.task('package', ['src'], function () {
    let dts = require('dts-bundle');

    dts.bundle({
        name: 'test-ts-build',
        main: 'build/index.d.ts'
    });
});

gulp.task('default', ['package']);