'use strict';

/**
 * @ngdoc function
 * @name proyectoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the proyectoApp
 */
angular.module('proyectoApp')
  .controller('MainCtrl', function ($scope,$log,$http,$location) {
    var cliente= {}

    $http({
          method: 'GET',
          url: '/usuarios.json'
        }).then(function successCallback(response) {
          $scope.cliente.usuarios = response.data.usuarios
        }, function errorCallback(response) {});

$scope.cliente=cliente;

    $scope.addCliente=function(usuario){

      $scope.cliente.usuarios.push({
        id: $scope.cliente.usuarios.length,
        correo:usuario.correo,
        password:usuario.password,
        nombre:usuario.nombre,
        apellidoP:usuario.apellidoP,
        apellidoM:usuario.apellidoM,
        sexo:usuario.sexo,
        saldo:null,
      });

      $log.debug("algo");
      $location.path("/about");
    }

    $scope.comprobar=function(credencial){
      $location.path("/about");
    }

  });
