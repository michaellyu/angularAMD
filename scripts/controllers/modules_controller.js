define(['app', 'services/modules_service', 'directives/nav_directive'], function(app){
    app.controller('modulesController', ['$scope', 'modulesService', function($scope, modulesService){
        $scope.modules = modulesService.getModules();
    }]);
});