/// <reference path="pages/Home.html" />
var scotchApp = angular.module('scotchApp', ['ngRoute']);
// configure our routes
scotchApp.config(function ($routeProvider) {
  $routeProvider

      // route for the home page
      .when('/', {
        templateUrl: 'pages/Home.html',
        controller: 'mainController'
      })

      // route for the about page
      .when('/home', {
        templateUrl: 'pages/Home.html',
        controller: 'aboutController'
      })

      // route for the about page
      .when('/about', {
        templateUrl: 'pages/About.html',
        controller: 'aboutController'
      })

      // route for the contact page
      .when('/contact', {
        templateUrl: 'pages/Contact.html',
        controller: 'contactController'
      });
});

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function ($scope) {
  $scope.message = 'Everyone come and see how good I look!';
});

scotchApp.controller('aboutController', function ($scope) {
  $scope.message = 'Look! I am an about page.';
});

scotchApp.controller('contactController', function ($scope) {
  $scope.message = 'Contact us! JK. This is just a demo.';
});