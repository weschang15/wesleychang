const bs = require('browser-sync');
const config = require('../config');
const { images, js, php, styls } = config.paths;

module.exports = ( gulp ) => {
    gulp.task( 'watch', ['styls', 'js', 'imagemin', 'serve'], () => {
        gulp.watch( styls.all, ['styls'] );
        gulp.watch( js.src, ['js'] );
        gulp.watch( images.src, ['imagemin'] );
        gulp.watch( php.src).on( 'change', bs.reload );
    });
};
