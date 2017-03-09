const bs = require('browser-sync');
const config = require('../config');
const { images, js, html, styls } = config.paths;

module.exports = ( gulp ) => {
    gulp.task( 'watch', ['styls', 'js', 'imagemin', 'serve'], () => {
        gulp.watch( styls.src, ['styls'] );
        gulp.watch( js.src, ['js'] );
        gulp.watch( images.src, ['imagemin'] );
        gulp.watch( html.src).on( 'change', bs.reload );
    });
};
