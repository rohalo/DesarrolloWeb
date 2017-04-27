'use strict';

/**
 * @ngdoc function
 * @name claseAngularApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the claseAngularApp
 */
angular.module('proyectoApp')
  .controller('AdminCtrl', function($scope, $log, $http) {
    var modelo = {}

    $http({
      method: 'GET',
      url: '/administradores.json'
    }).then(function successCallback(response) {
      $scope.modelo.administradores = response.data.administradores
    }, function errorCallback(response) {});

    $scope.modelo = modelo;

    $scope.addAdministrador = function(administrador) {

      $scope.modelo.administradores.push({
        id: $scope.modelo.administradores.length,
        nombre: administrador.nombre,
        apellido: administrador.apellido,
        inscripcion: administrador.inscripcion,
        contrasena: administrador.contrasena,
        domicilio: administrador.domicilio
      });
    }

    $scope.removeAdministrador = function(id) {
      var index = 0;
      var comArr = eval($scope.modelo.administradores);
      for (var i = 0; i < comArr.length; i++) {
        if (comArr[i].id === id) {
          index = i;
          break;
        }
      }
      if (index === -1) {
        alert("Something gone wrong");
      }
      $scope.modelo.administradores.splice(index, 1);
    }

    $scope.editarAdministrador = function(administrador) {
      $scope.administradorInput = administrador
      $scope.boton = 2;
    }

    $scope.hide = function() {
      return $scope.boton == 2 ?
        true : false;
    }

    $scope.show = function() {
      return $scope.boton == 2 ?
        false : true;
    }
    $scope.show2 = function() {
      $scope.usuarioInput = null;
      $scope.administradorInput = null;
      $scope.boton = 1;
    }
    $scope.show3 = function() {
      $scope.administradorInput = null;
      $scope.boton = 1;
    }
  });
