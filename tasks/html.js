const config = require('../config');
const { project } = config.paths;
const { html, base } = config.names;

/**
 * Gulp task specific to WordPress
 * Find front-page.php, change the file extension to .html, mangle it with gulp-htmlmin
 * then rename it back to .php
 */
module.exports = ( gulp, $ ) => {
    gulp.task( 'minify:php', () => {
        return gulp.src( 'front-page.php' )
            .pipe($.size())
            .pipe( $.rename({
                extname: html
            }))
            .pipe( $.htmlmin({
                collapseWhitespace: true,
                removeTagWhitespace: true
            }))
            .pipe( $.rename({
                extname: base
            }))
            .pipe($.size())
            .pipe( gulp.dest( project ) );
    });
};
