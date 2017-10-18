app.factory('beerFactory', function ($http) {


    var beerFactory = {};
    var averageRating;


    beerFactory.getBeers = function () {
        return $http.get('/beers')
            .then(function (response) {
                return angular.copy(response.data);
            });
    };


    beerFactory.addBeer = function (newBeer) {
        return $http.post('/beers', newBeer)
            .then(function (response) {
                return angular.copy(response.data);
            });
    };

    

      beerFactory.removeBeer = function(id) {
        return $http.delete('/beers/' + id)
        .then(function (response) {
            // alert(response)
            return angular.copy(response.data);
        });
      };

      beerFactory.addComment = function(newComment,beer) {
        id = beer._id
        var template = {comment:newComment}
        console.log(id)
        return $http.post('/beers/' + id + '/comment', template)
        .then(function (response) {
            // alert(response)
            return angular.copy(response.data);
        });
      };


    return beerFactory;
});

