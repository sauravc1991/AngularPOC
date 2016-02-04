myApp.controller('homeCtrl', ['$rootScope', '$scope', function ($rootScope, $scope) {
  $rootScope.header = "Home Page";
  $scope.message = "Welcome to the Home Page!";
}]);

