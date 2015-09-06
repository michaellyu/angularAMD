require.config({
    baseUrl: 'scripts',
    paths: {
        'angular': '/libs/angular',
        'angular-route': '/libs/angular-route.min',
        'angularAMD': '/libs/angularAMD.min',
        'ngload': '/libs/ngload.min'
    },
    shim: {
        'angular-route': ['angular'],
        'angularAMD': ['angular'],
        'ngload': ['angularAMD']
    },
    deps: ['app']
});