var config = require('./app/config/gulp');
var gulp = require('./bin/build/')([
    'browserify',
    'resources',
    'styles',
    'scripts',
    'watch'
], config);

gulp.task('init', ['resources', 'styles', 'scripts']);

gulp.task('build', ['browserify', 'init']);

gulp.task('default', ['init', 'watch']);

