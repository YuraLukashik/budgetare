var gulp = require('gulp');
var uglify = require("gulp-uglify");
var concat = require('gulp-concat');
var _ = require('lodash');

module.exports = function(config){
    return function(){
        _.each(config, function(value){
            var task = gulp.src(value.src);
            task
                .pipe(concat(value.dest.filename))
                .pipe(uglify())
                .pipe(gulp.dest(value.dest.base));
        });
    };
};
