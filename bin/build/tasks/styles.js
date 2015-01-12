var gulp = require('gulp');
var sass = require("gulp-sass");
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var _ = require('lodash');

module.exports = function(config){
    return function(){
        _.each(config, function(value){
            var task = gulp.src(value.src);
            if(value.preprocess)
                task = task.pipe(sass())
            task
                .pipe(concat(value.dest.filename))
                .pipe(minifyCSS())
                .pipe(gulp.dest(value.dest.base));
        });
    };
};
