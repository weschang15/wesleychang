const dest = 'assets';
const src = 'src';

module.exports = {
    paths: {

        css: {
            src: [`${dest}/css/critical/*.css`, `!${dest}/css/critical/*.min.*`],
            dest: `${dest}/css/critical/`
        },

        project: './',

        styls: {
            dest: `${dest}/css`,
            src: `${src}/sass/**/*.sass`
        },

        js: {
            src: `${src}/js/main.js`,
            dest: `${dest}/js`
        },

        images: {
            src: `${src}/imgs/**`,
            dest: `${dest}/imgs`
        },

        php: {
            src: '**/*.php'
        }
    },
    names: {
        min: '.min',
        base: '.php',
        html: '.html'
    }
};
