var gulp  = require('gulp');
var dest  = require('../config').clean;
var del   = require( 'del' );

gulp.task( 'clean', function( cb ) {
    del(dest, cb );
} );
