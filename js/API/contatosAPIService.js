angular.module("listaTelefonica").factory("contatosAPI", function($http, config){
    var _getContatos = function(){
        return $http.get(config.baseUrl + "/contatos")
    };

    var _saveContato = function(contato){
        return $http.post(config.baseUrl + "/contatos", contato)
    };

    return {
        getContatos: _getContatos,
        saveContato: _saveContato
    };
<<<<<<< HEAD
});
=======
});
>>>>>>> 47ae46d87ca913c22afe31c1b8b2816523ba3f87
