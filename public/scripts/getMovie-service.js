myApp.service('MoviesInDatabase', function($http){
  this.getDatabase = function(){
    return $http ({
      method: 'GET',
      url: '/faveDatabase'
    }).then(function(response){
      console.log('response service:', response.data);
      return response.data;
    });
  };
});// end service
