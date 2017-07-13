var gulp = require('gulp'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
mixins = require('postcss-mixins');

gulp.task('styles' , function(){
   return gulp.src('./app/assets/styles/styles.css')
   .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
   .on('error', function(errorinfo) {
     console.log(errorinfo.toString());
     this.emit('end');  
   })
   .pipe(gulp.dest('./app/temp/styles'));
});