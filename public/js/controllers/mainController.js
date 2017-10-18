app.controller('mainCtrl', function ($scope, beerFactory) {

    $scope.beers = [];

    beerFactory.getBeers()
        .then(function (beers) {
            $scope.beers = beers;
        })
        .catch(function (error) {
            console.log(error)
        });

    $scope.addBeer = function () {
        var newBeer = {
            name: $scope.name,
            style: $scope.style,
            image_url: $scope.image,
            abv: $scope.abv,
            ratings:$scope.ratings
        }
        beerFactory.addBeer(newBeer)
        //TAKE THE RESPONSE OF THE DB TO GET DIRECTLY AN ID
        // 
        .then(function (beer) {
            $scope.beers.push(beer)
        })
        .catch(function (error) {
            console.log(error)
        });
    }


    $scope.removeBeer = function (index) {
        id = $scope.beers[index]._id
        console.log(id)
        beerFactory.removeBeer(id)
        $scope.beers.splice(index, 1);
    }

   
})