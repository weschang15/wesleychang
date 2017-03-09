const config      = require('../config');
const fs          = require( 'fs' );
const penthouse   = require('penthouse');
const sequence    = require('run-sequence');

// Destructuring config for css paths and suffixes
const { css } = config.paths;
const { min } = config.names;

// Array of pages to generate critical css
const pages = [
    { url: 'http://localhost:8888/', name: 'front-page.css' },
    { url: 'http://localhost:8888/blog/', name: 'blog.css' }
];

module.exports = ( gulp, $ ) => {
    /**
     * Generate critical css for the list of URLs and name them accordingly
     */
    gulp.task( 'generate:critical', () => {
        var promise = new Promise( (resolve, reject ) => {
            pages.map( ( page ) => {
                penthouse({
                    url: page.url,
                    css: 'style.css',
                    width: 1920,
                    height: 1080
                }, ( err, data ) => {
                    if (err) {
                        reject(err);
                    } else {
                        if (!fs.existsSync(css.dest)) {
                            fs.mkdirSync(css.dest);
                        }
                        fs.writeFileSync( css.dest + page.name, data );
                        setTimeout(function () {
                            resolve();
                        }, 3000);
                    }
                });
            });
        });

        return promise;
    });

    /**
     * Gulp task specific to WordPress
     * Minify the critical CSS that was generated after running Penthouse
     * then add a .min suffix to the file name
     */
    gulp.task( 'minify:critical', () => {
        var stream = gulp.src( css.src )
            .pipe( $.clean( { read: true } ))
            .pipe( $.cleanCss() )
            .pipe( $.rename({
                suffix: min
            }))
            .pipe( $.size({ showFiles: true }) )
            .pipe( gulp.dest( css.dest ) );

        return stream;
    });

    /**
     * Display size of each css file prior to minification
     */
    gulp.task( 'size:critical', () => {
        return gulp.src( 'assets/css/critical/*.css' )
            .pipe( $.size({ showFiles: true }))
            .pipe( gulp.dest( css.dest ) )
    });

    gulp.task( 'build:critical', ( cb ) => {
        sequence( 'generate:critical', 'size:critical', 'minify:critical', cb);
    });
};
