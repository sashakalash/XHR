'use strict'

userApp.controller('UserListCtrl', function ($scope, $q, UsersService, PostsService) {
  $scope.userLoaded = false
  $q.all({
    users: UsersService.getUsers(),
    posts: PostsService.getPosts()
  })
  .then(values => {
    $scope.users = values.users.data,
    $scope.posts = values.posts.data;
    $scope.userLoaded = true;
  });

/*   UsersService.getUsers().then(function (response) {
    $scope.users = response.data
    return PostsService.getPosts()
  }).then(function (response) {
    $scope.posts = response.data
  }) */

})
