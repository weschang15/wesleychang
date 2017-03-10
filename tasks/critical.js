const config      = require('../config');
const critical    = require('critical').stream;
// Destructuring config for css paths and suffixes
const { css } = config.paths;
const { min } = config.names;

module.exports = ( gulp, $ ) => {
    /**
     * Generate critical css for the list of URLs and name them accordingly
     */
    gulp.task( 'critical', (  ) => {
        return gulp.src('index.html')
            .pipe(critical({
                base: './',
                inline: true,
                css: 'assets/css/styles.min.css',
                minify: true,
                dimensions: [
                    { width: 2560, height: 1440, },
                    { width: 750,  height: 1140},
                ],
                extract: true
            }))
            .pipe(gulp.dest('./'));
    });
};
