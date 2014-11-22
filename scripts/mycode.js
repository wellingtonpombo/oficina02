var app = angular.module('HackingCodeApp', []);


app.controller('MainController', function ($rootScope, $http, $scope) {

    $scope.nome = "";
    $scope.Objeto = [];
    $scope.Objeto.nome = "";
    $scope.Objeto.status = "";
    $scope.Objeto.numero = "";

    $scope.registro = function () {    
        $http.post('http://hackingcode.com.br:9898/empresa').success(RegistroCallback);
    }
    
    function RegistroCallback(data, status) {        
        $scope.lista = data;
    }


    
});




