myApp.controller('aboutCtrl', ['$rootScope', '$scope', function ($rootScope, $scope) {
  $rootScope.header = "About";
  $scope.message = "Welcome to the About Page!";
}]);
