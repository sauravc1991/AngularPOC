var myApp = angular.module('myApp', ['ngRoute']);
  myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
          templateUrl: 'Views/LandingPage.html',
          controller: 'landingPageCtrl'
        })
    
        .when('/home', {
          templateUrl: 'Views/Home.html',
          controller: 'homeCtrl'
        })
      
        .when('/about', {
          templateUrl: 'Views/About.html',
          controller: 'aboutCtrl'
        })
      
        .when('/contact', {
          templateUrl: 'Views/Contact.html',
          controller: 'contactCtrl'
        });
  });

