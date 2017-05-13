// global app
var myApp = angular.module('myApp', []);

// setting up a controller (inject $http if using)
myApp.controller('MovieController', function(){//NOTE inject $http here and service side
  console.log('NG up');

  // variable global to this controller
  var vm = this;
  // array attached to controller (makes it aviable to the DOM);
  vm.items = [];

  // function to add a movies to db
  // function to get all movies from db
  
});// end of controller
