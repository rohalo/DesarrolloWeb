'use strict';

/**
 * @ngdoc function
 * @name proyectoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the proyectoApp
 */
angular.module('proyectoApp')
  .controller('AboutCtrl', function($scope, $log, $http) {

    var celulares = {}

    $http({
      method: 'GET',
      url: '/dispositivos.json'
    }).then(function successCallback(response) {
      $scope.celulares.dispositivos = response.data.dispositivos
    }, function errorCallback(response) {});

    $scope.celulares = celulares;

    $scope.modal = function(viaje) {
      $
    }

    var viajes = [

      {
        viajeId: 1,
        estacion: "Pino suarez",
        servicio: "Metro",
        fecha: "2017/03/31",
        hora: "01:30"
      }, {
        viajeId: 2,
        estacion: "Salto del agua",
        servicio: "Metro",
        fecha: "2017/03/31",
        hora: "03:30"
      }, {
        viajeId: 3,
        estacion: "Pino suarez",
        servicio: "Metro",
        fecha: "2017/03/31",
        hora: "07:30"
      }
    ];


var marcas =[{
  tipoId:1,
  marca: "Samsung"},{
  tipoId:2,
  marca: "Apple"},{
  tipoId:3,
  marca: "Xiaomi"},{
  tipoId:4,
  marca: "Huawei"},{
  tipoId:5,
  marca: "Lenovo"},{
  tipoId:6,
  marca: "LG"},{
  tipoId:7,
  marca: "Sony"},{
  tipoId:8,
  marca: "Nokia"},{
  tipoId:9,
  marca: "Microsoft"},{
  tipoId:10,
  marca: "Motorola"}

];


    var tarjetas = [{
      tarjetaId: 1,
      numero: "5202987436914835",
      tipo: "mastercard",
      dueno: "Carlos Lazaro"
    }, {
      tarjetaId: 2,
      numero: "520298747452945",
      tipo: "Visa",
      dueno: "Karen Perez"
    }];

    var marcas = [

      {
        marcaId: 1,
        fabricante: "Samsung",
        subMarca: "s6 edge"
      }, {
        marcaId: 2,
        fabricante: "HTC",
        subMarca: "One m9"
      }

    ];

    var tipoTarjeta = [

      {
        tipoId: 1,
        compania: "Visa"
      }, {
        tipoId: 2,
        compania: "MasterCard"
      }, {
        tipoId: 1,
        compania: "Discovery"
      }, {
        tipoId: 1,
        compania: "American Express"
      }
    ];


    $scope.removeDispositivo = function(id) {
      var index = 0;
      var comArr = eval($scope.celulares.dispositivos);
      for (var i = 0; i < comArr.length; i++) {
        if (comArr[i].id === id) {
          index = i;
          break;
        }
      }
      if (index === -1) {
        alert("Something gone wrong");
      }
      $scope.celulares.dispositivos.splice(index, 1);
    }

    $scope.addDispositivo = function(dispositivo) {

      $scope.celulares.dispositivos.push({
        id: $scope.celulares.dispositivos.length,
        dispositivo: dispositivo.dispositivo,
        numero: dispositivo.numero,
        marca: dispositivo.marca
      });
    }
    $scope.editarDispositivo = function(dispositivo) {
      $scope.dispositivoInput = dispositivo
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
      $scope.dispositivoInput = null;
      $scope.boton = 1;
    }

    $scope.tipoTarjeta = tipoTarjeta;
    $scope.marcas = marcas;
    $scope.tarjetas = tarjetas;
    $scope.viajes = viajes;
    $scope.marcas= marcas;
  });
