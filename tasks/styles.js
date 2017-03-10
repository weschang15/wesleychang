const bs = require('browser-sync');
const config = require('../config');
const { project, styls } = config.paths;
const { min } = config.names;

module.exports = ( gulp, $ ) => {
    gulp.task( 'styls', () => {
        return gulp.src( styls.src )
            .pipe($.plumber())
            .pipe($.sass({ outputStyle: 'expanded'}).on('error', $.sass.logError))
            .pipe($.autoprefixer({ browsers: ['last 2 versions'], cascade: false }))
            .pipe($.size({ showFiles: true }))
            .pipe(gulp.dest(project))
            .pipe( bs.stream() );
    });

    gulp.task( 'styls:clean', () => {
        return gulp.src( 'assets/css/styles.min.fa204e13.css' )
            .pipe($.cleanCss())
            .pipe($.size({ showFiles: true }))
            .pipe($.rename({
                basename: 'styles',
                suffix: min
            }))
            .pipe(gulp.dest(styls.dest))
    });
};
