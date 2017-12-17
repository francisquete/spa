angular.module("listaTelefonica").config(function (tokenGeneratorProvider) {
    tokenGeneratorProvider.setLength(7);
});