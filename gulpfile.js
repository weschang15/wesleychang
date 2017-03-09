const gulp = require( 'gulp' );
const $    = require('gulp-load-plugins')();

require( './tasks/critical' )( gulp, $ );
require( './tasks/html'     )( gulp, $ );
require( './tasks/images'   )( gulp, $ );
require( './tasks/insight'  )( gulp );
require( './tasks/scripts'  )( gulp, $ );
require( './tasks/styles'   )( gulp, $ );
require( './tasks/server'   )( gulp );
require( './tasks/watch'    )( gulp );
require( './tasks/default'  )( gulp );
