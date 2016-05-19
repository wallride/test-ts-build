var exec = require('child_process').exec;

exec('cd '+__dirname, function(){
    exec('tsc', function(error, stdout, stderr) {
        if (error) console.error(error.toString());
        console.log(stdout);
        console.error(stderr);
    });
});
