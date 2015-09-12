module.exports = function (config) {
    config.set({

        basePath: '',
        frameworks: ['mocha', 'chai-things', 'sinon-chai'],
        files: [
            'www/lib/ionic/js/ionic.bundle.min.js'
            , 'www/lib/angular-ui-router/release/angular-ui-router.min.js'
            , 'www/lib/angular-mocks/angular-mocks.js'
            , 'www/lib/ionic-material/dist/ionic.material.min.js'
            , 'www/app/app.js'
            , 'www/app/components/**/*.js'
            , 'www/app/shared/**/*.js'
            , 'test/**/*Test.js'
        ],
        exclude: [],
        preprocessors: {
            'www/app/**/*.js': ['coverage']
        },
        coverageReporter: {
            type: 'lcovonly',
            dir: 'test/coverage/'
        },
        reporters: ['coverage', 'progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: false
    })
};
