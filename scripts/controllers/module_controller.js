define(['app', 'services/modules_service', 'directives/nav_directive'], function(app){
    app.controller('moduleController', ['$scope', '$routeParams', '$location', 'modulesService', function($scope, $routeParams, $location, modulesService){
        var id = $routeParams.id;
        $scope.module = modulesService.getModule(id);

        $scope.update = function(module){
            modulesService.updateModule(module);

            $location.path('/modules')
        };
    }]);
});