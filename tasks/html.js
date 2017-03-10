const config = require('../config');
const { project } = config.paths;
const { html, base } = config.names;

/**
 * Gulp task specific to WordPress
 * Find front-page.php, change the file extension to .html, mangle it with gulp-htmlmin
 * then rename it back to .php
 */
module.exports = ( gulp, $ ) => {
    gulp.task( 'minify:html', () => {
        return gulp.src( 'index.html' )
            .pipe($.size())
            .pipe( $.htmlmin({
                collapseWhitespace: true,
                removeTagWhitespace: true
            }))
            .pipe($.size())
            .pipe( gulp.dest( 'app/' ) );
    });
};
