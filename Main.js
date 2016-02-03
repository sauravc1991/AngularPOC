/// <reference path="pages/Home.html" />
var scotchApp = angular.module('scotchApp', ['ngRoute']);
// configure our routes
scotchApp.config(function ($routeProvider) {
  $routeProvider

      // route for the home page
      .when('/', {
        templateUrl: 'Views/LandingPage.html',
        controller: 'landingPageController'
      })

      // route for the about page
      .when('/home', {
        templateUrl: 'Views/Home.html',
        controller: 'mainController'
      })

      // route for the about page
      .when('/about', {
        templateUrl: 'Views/About.html',
        controller: 'aboutController'
      })

      // route for the contact page
      .when('/contact', {
        templateUrl: 'Views/Contact.html',
        controller: 'contactController'
      });
});

// create the controller and inject Angular's $scope
scotchApp.controller('landingPageController', function ($rootScope, $scope) {
  $scope.message = 'Welcome to the landing Page!';
  $rootScope.header = "LandingPage";
});

scotchApp.controller('mainController', function ($rootScope,$scope) {
  $scope.message = 'Everyone come and see how good I look!';
  $rootScope.header = "HomePage";
});

scotchApp.controller('aboutController', function ($rootScope,$scope) {
  $scope.message = 'Look! I am an about page.';
  $rootScope.header = "About";
});

scotchApp.controller('contactController', function ($rootScope,$scope) {
  $scope.message = 'Contact us! JK. This is just a demo.';
  $rootScope.header = "Contact Us";
});