define(['angularAMD', 'angular-route'], function(angularAMD){
    var app = angular.module('app', ['ngRoute']);
    app.config(['$routeProvider', function($routeProvider){
        $routeProvider.when(
            '/home',
            angularAMD.route({
                templateUrl: 'views/home.html',
                controller: 'HomeController',
                controllerUrl: 'controllers/home_controller',
                navTab: 'home'
            })
        )
        .when(
            '/modules',
            angularAMD.route({
                templateUrl: 'views/modules.html',
                controller: 'modulesController',
                controllerUrl: 'controllers/modules_controller',
                navTab: 'modules'
            })
        )
        .when(
            '/module/:id',
            angularAMD.route({
                templateUrl: 'views/module.html',
                controller: 'moduleController',
                controllerUrl: 'controllers/module_controller',
                navTab: 'modules'
            })
        )
        .otherwise({
            redirectTo: '/home'
        });
    }]);
    return angularAMD.bootstrap(app);
});