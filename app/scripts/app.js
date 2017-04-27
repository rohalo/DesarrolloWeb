'use strict';

/**
 * @ngdoc overview
 * @name proyectoApp
 * @description
 * # proyectoApp
 *
 * Main module of the application.
 */
angular
  .module('proyectoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($routeProvider,$stateProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })

      .when('/dispositivos', {
        templateUrl: 'views/dispositivos.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })

      .when('/recarga', {
        templateUrl: 'views/recarga.html',
        controller: 'RecargaCtrl',
        controllerAs: 'recarga'
      })

      .when('/historial', {
        templateUrl: 'views/historial.html',
        controller: 'HistorialCtrl',
        controllerAs: 'historial'
      })

      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })

      .when('/administrador', {
        templateUrl: 'views/main2.html',
        controller: 'MainCtrl2',
        controllerAs: 'main2'
      })

      .when('/administradores', {
        templateUrl: 'views/administradores.html',
        controller: 'AdminCtrl',
        controllerAs: 'admin'
      })

      .otherwise('/', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      });

      // $stateProvider
      // .state('dispositivos',{
      //   url:'/dispositivos',
      //   templateUrl:'views/dispositivos.html',
      //   controller:'AboutCtrl'
      // })
      //
      // .state('recarga',{
      //   url:'/recarga',
      //   templateUrl:'views/recarga.html',
      //   controller:'AboutCtrl'
      // })


  });
