'use strict';

/**
 * @ngdoc function
 * @name claseAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the claseAngularApp
 */
angular.module('proyectoApp')
  .controller('MainCtrl2', function($scope, $log, $http) {
    var modelo = {
      profesor: "Juan"
    }

    $http({
      method: 'GET',
      url: '/administradores.json'
    }).then(function successCallback(response) {
      $scope.modelo.administradores = response.data.administradores
    }, function errorCallback(response) {});

    $http({
      method: 'GET',
      url: '/usuarios.json'
    }).then(function successCallback(response) {
      $scope.modelo.usuarios = response.data.usuarios
    }, function errorCallback(response) {});


    $scope.modelo = modelo;

    $scope.cuentaAsistentes = function() {
      var cuenta = 0;
      angular.forEach($scope.modelo.libros, function(item) {
        if (item.estatus == true) cuenta++;
      });
      return cuenta;
    };



    $scope.cuentaUsuariosActivos = function() {
      var cuentaUsuarios = 0;
      angular.forEach($scope.modelo.usuarios, function(item) {
        if (item.estado == true) cuentaUsuarios++;
      });
      return cuentaUsuarios;
    };

    $scope.alertaUsuarios = function() {
      return $scope.cuentaUsuariosActivos() < 0 ?
        "label-danger" : "label-success";
    }

    $scope.alertaLibros = function() {
      return $scope.cuentaAsistentes() < 2 ?
        "label-danger" : "label-success";
    }

    $scope.addUsuario = function(saldo, nombre, apellido, inscripcion,
      contrasena, estado) {
      $scope.modelo.usuarios.push({
        saldo: saldo,
        nombre: nombre,
        apellido: apellido,
        inscripcion: inscripcion,
        contrasena: contrasena,
        estado: true
      });
    }



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


    $scope.addLibro = function(autor, titulo, isbn, editorial, fecha,
      edicion,
      costo, proveedores, usuario, pasta) {
      $scope.modelo.libros.push({
        autor: autor,
        estatus: false,
        titulo: titulo,
        isbn: isbn,
        editorial: editorial,
        fecha: fecha,
        edicion: edicion,
        costo: costo,
        proveedores: proveedores,
        usuario: usuario,
        pasta: pasta
      });
    }

    $scope.removeUsuario = function(id) {
      var index = 0;
      var comArr = eval($scope.modelo.usuarios);
      for (var i = 0; i < comArr.length; i++) {
        if (comArr[i].id === id) {
          index = i;
          break;
        }
      }
      if (index === -1) {
        alert("Something gone wrong");
      }
      $scope.modelo.usuarios.splice(index, 1);
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


    $scope.removeRow = function(isbn) {
      var index = 0;
      var comArr = eval($scope.modelo.libros);
      for (var i = 0; i < comArr.length; i++) {
        if (comArr[i].isbn === isbn) {
          index = i;
          break;
        }
      }
      if (index === -1) {
        alert("Something gone wrong");
      }
      $scope.modelo.libros.splice(index, 1);
    }
    $scope.editarLibro = function(autor, titulo, isbn, editorial, fecha,
      edicion, costo, proveedores, usuario, pasta) {
      $scope.autorInput = autor;
      $scope.tituloInput = titulo;
      $scope.isbnInput = isbn;
      $scope.editorialInput = editorial;
      $scope.fechaInput = fecha;
      $scope.edicionInput = edicion;
      $scope.costoInput = costo;
      $scope.proveedoresInput = proveedores;
      $scope.usuarioInput = usuario;
      $scope.pastaInput = pasta;
    }
    $scope.editarLibro2 = function(libro) {
      $scope.libroInput = libro;
      $scope.boton = 2;
    }

    $scope.editarUsuario2 = function(usuario) {
      $scope.usuarioInput = usuario;
      $scope.boton = 2;
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
