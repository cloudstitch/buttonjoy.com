'use strict';

var gulp = require('gulp');
var AWS = require('aws-sdk');
var awspublish = require("gulp-awspublish");
var awspublishRouter = require("gulp-awspublish-router");

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
    .pipe(awspublishRouter({
      cache: {
          // cache for 5 minutes by default 
          cacheTime: 300
      },
      routes: {
        "^about$": { headers: { "Content-Type": "text/html" } },
        "^index$": { headers: { "Content-Type": "text/html" } },
        "^charity$": { headers: { "Content-Type": "text/html" } },
        "^faq$": { headers: { "Content-Type": "text/html" } },
        "^partnerships$": { headers: { "Content-Type": "text/html" } },
        "^setup$": { headers: { "Content-Type": "text/html" } },
        "^.+$": "$&"
      }
    }))
    .pipe(publisher.publish())
    .pipe(publisher.sync())
    .pipe(awspublish.reporter());
});