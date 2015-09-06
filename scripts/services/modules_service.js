define(['app'], function(app){
    app.factory('modulesService', [function(){
        var modules = [
            {id: 1, name: 'modules 1'},
            {id: 2, name: 'modules 2'},
            {id: 3, name: 'modules 3'},
            {id: 4, name: 'modules 4'},
            {id: 5, name: 'modules 5'}
        ];

        return {
            getModules: function(){
                return modules;
            },
            getModule: function(id){
                for(var i = 0;i < modules.length;i++){
                    if(id == modules[i].id){
                        return modules[i];
                    }
                }
            },
            updateModule: function(module){
                for(var i = 0;i < modules.length;i++){
                    if(module.id == modules[i].id){
                        modules[i].name = module.name;
                        return;
                    }
                }
            }
        };
    }]);
});