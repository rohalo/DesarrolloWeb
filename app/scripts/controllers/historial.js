'use strict';

/**
 * @ngdoc function
 * @name proyectoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the proyectoApp
 */
angular.module('proyectoApp')
  .controller('HistorialCtrl', function($scope, $log, $http) {

    var modeloViajes = {}

    $http({
      method: 'GET',
      url: '/viajes.json'
    }).then(function successCallback(response) {
      $scope.modeloViajes.viajes = response.data.viajes
    }, function errorCallback(response) {});

    $scope.modeloViajes = modeloViajes;

    $scope.example = {
      value: new Date(2013, 9, 22)
    };

  });
