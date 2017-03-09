const ngrok       = require('ngrok');
const psi         = require('psi');

module.exports = ( gulp ) => {

    // Initialize const for ngrok url
    var site = '';

    gulp.task( 'psi', ( cb ) => {
        return ngrok.connect(3000, (err, url) => {
            site = url;
            console.log( `Serving your tunnel from: ${site}`);
            cb();
        });
    });
};
