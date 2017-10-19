app.controller('beerController', function ($scope, $stateParams, beerFactory) {

    // $scope.beer = $stateParams.beerParam;
    // console.log($scope.beer)
    var id = $stateParams.id

    if(!$stateParams.beerParam){
        beerFactory.getSingleBeer(id)
        .then(function (theBeer) {
            $scope.beer = theBeer;
        })
        .catch(function (error) {
            console.log(error)
        });
    } else {
        $scope.beer = $stateParams.beerParam
    }
    

  
    // console.log($stateParams)

    beerFactory.getSingleBeer(id)
        .then(function (theBeer) {
            $scope.beer = theBeer;
        })
        .catch(function (error) {
            console.log(error)
        });


    $scope.addReview = function () {
        var newReview = {
            username: $scope.username,
            text: $scope.review
        }
        $scope.username = "";
        $scope.review = "";
        console.log(newReview)

        beerFactory.addReview(newReview, id)
            .then(function (beer) {
                $scope.beer = beer
            })
            .catch(function (error) {
                console.log(error)
            });
    }
})
