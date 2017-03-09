const bs = require('browser-sync');
const config = require('../config');
const pump = require('pump');
const { js } = config.paths;
const { min } = config.names;

module.exports = ( gulp, $ ) => {
    gulp.task( 'js', ( cb ) => {
        pump([
            gulp.src( js.src ),
            $.concat('main.js'),
            $.uglify(),
            $.rename({
                suffix: min,
            }),
            gulp.dest( js.dest ),
            bs.stream()
        ], cb);
    });
};
