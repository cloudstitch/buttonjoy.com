'use strict';

var gulp = require('gulp');
var AWS = require('aws-sdk');
var awspublish = require("gulp-awspublish");

gulp.task('deploy', function(cb) {
  var publisher = awspublish.create({
    region: 'us-west-2',
    params: {
      Bucket: 'buttonjoy.com'
    }
  });

  var headers = {
    'Cache-Control': 'private, max-age=0, no-cache'
  };

  return gulp.src('site/**/**')
    // gzip, Set Content-Encoding headers and add .gz extension
    // .pipe(awspublish.gzip({ ext: '.gz' }))

    // publisher will add Content-Length, Content-Type and headers specified above
    // If not specified it will set x-amz-acl to public-read by default
    .pipe(publisher.publish(headers))

    // create a cache file to speed up consecutive uploads
    .pipe(publisher.cache())

    // print upload updates to console
    .pipe(awspublish.reporter());
});