const config = require('../config');
const pngquant = require('imagemin-pngquant');
const { images } = config.paths;

module.exports = ( gulp, $ ) => {
    gulp.task( 'imagemin', () => {
        return gulp.src( images.src )
            .pipe( $.newer( images.dest ) )
            .pipe( $.imagemin({
                progressive: true,
                use: [pngquant()]
            })).pipe( gulp.dest( images.dest ) );
    });
};
