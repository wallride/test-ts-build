var gulp = require("gulp");
var ts = require("gulp-typescript");
var exec = require('child_process').exec;

let srcPath = __dirname+'/src/';

console.log('!!!!!!!!!!!!!!!', srcPath)

var tsProject = ts.createProject(srcPath+"tsconfig.json", {typescript: require('typescript')});

gulp.task('src', function (done) {
    // gulp.src(path + "src/**/*.ts")
    //     .pipe(ts(tsProject))
    //     .js
    //     .pipe(gulp.dest(path+'/build'))
    //     .on('end', function(){ console.log('done', path); done();})
    // ;

    // var tsResult = tsProject.src('!*.d.ts') // instead of gulp.src(...)
    //     .pipe(ts(tsProject));
    //
    // tsResult.js.pipe(gulp.dest(srcPath+'../build'));

    exec('cd '+__dirname, function(){
        exec('tsc', function(error, stdout, stderr) {
            if (error) console.error(error.toString());
            console.log(stdout);
            console.error(stderr);
            done(error);
        });
    });

});

gulp.task('tests',['src'], function (done) {
    // gulp.src(path + "src/**/*.ts")
    //     .pipe(ts(tsProject))
    //     .js
    //     .pipe(gulp.dest(path+'/build'))
    //     .on('end', function(){ console.log('done', path); done();})
    // ;

    // var tsResult = tsProject.src('!*.d.ts') // instead of gulp.src(...)
    //     .pipe(ts(tsProject));
    //
    // tsResult.js.pipe(gulp.dest(srcPath+'../build'));

    exec('cd '+__dirname+'/tests', function(){
        exec('tsc', function(error, stdout, stderr) {
            if (error) console.error(error.toString());
            console.log(stdout);
            console.error(stderr);
            done(error);
        });
    });
});

gulp.task('default', ['src', 'tests']);
