define(['app', 'services/home_service', 'directives/nav_directive'], function(app){
    app.controller('HomeController', ['$scope', 'HomeService', function($scope, HomeService){
        $scope.name = HomeService.getName();
    }]);
});