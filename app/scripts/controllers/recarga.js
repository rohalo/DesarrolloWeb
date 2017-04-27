'use strict';

/**
 * @ngdoc function
 * @name proyectoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the proyectoApp
 */
angular.module('proyectoApp')
  .controller('RecargaCtrl', function($scope, $log, $http) {

    var modeloTarjetas = {}

    $http({
      method: 'GET',
      url: '/tarjetas.json'
    }).then(function successCallback(response) {
      $scope.modeloTarjetas.tarjetas = response.data.tarjetas
    }, function errorCallback(response) {});

    $scope.modeloTarjetas = modeloTarjetas;

    $scope.removeTarjeta = function(id) {
      var index = 0;
      var comArr = eval($scope.modeloTarjetas.tarjetas);
      for (var i = 0; i < comArr.length; i++) {
        if (comArr[i].id === id) {
          index = i;
          break;
        }
      }
      if (index === -1) {
        alert("Something gone wrong");
      }
      $scope.modeloTarjetas.tarjetas.splice(index, 1);
    }

    $scope.addTarjeta = function(tarjeta) {

      $scope.modeloTarjetas.tarjetas.push({
        id: $scope.modeloTarjetas.tarjetas.length,
        numero: tarjeta.numero,
        nombre: tarjeta.nombre,
        caducidad: tarjeta.caducidad
      });
    }

    $scope.editarTarjeta = function(tarjeta) {
      $scope.tarjetaInput = tarjeta
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
      $scope.tarjetaInput = null;
      $scope.boton = 1;
    }

  });
