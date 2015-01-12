var config = require('./app/config/gulp');
var gulp = require('./bin/build/')([
    'browserify',
    'resources',
    'styles',
    'watch'
], config);

gulp.task('init', ['resources', 'styles']);

gulp.task('build', ['browserify', 'init']);

gulp.task('default', ['init', 'watch']);

