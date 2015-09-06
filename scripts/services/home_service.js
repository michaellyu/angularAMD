define(['app'], function(app){
    app.factory('HomeService', [function(){
        return {
            getName: function(){
                return 'Home';
            }
        };
    }]);
});