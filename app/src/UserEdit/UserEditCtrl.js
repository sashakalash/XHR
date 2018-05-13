'use strict';

userApp.controller('UserEditCtrl', function($scope, $routeParams, UsersService) {
  $scope.newUsersData = {};
  $scope.id = $routeParams['userId'];
  $scope.editUser = function (userData) {
    $scope.creationSuccess = false;

    UsersService.editUser($scope.id, userData).then(function (response) {
      $scope.newUsersData = {};

      $scope.newUserId = response.data.id;
      $scope.creationSuccess = true;
    });
  };
});