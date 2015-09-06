define(['app'], function(app){
    app.controller('navMenuController', ['$scope', '$route', '$window', '$location', function($scope, $route, $window, $location){
        var nav_tab = $route.current.navTab;

        $scope.isTabActive = function(tab_name){
            if(nav_tab === tab_name){
                return 'active';
            }
        };

    }]);

    app.directive('navMenu', [function(){
        return {
            restrict: 'EA',
            controller: 'navMenuController',
            templateUrl: 'scripts/directives/templates/nav_menu.html'
        }
    }]);
});