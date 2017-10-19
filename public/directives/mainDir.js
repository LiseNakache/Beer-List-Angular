app.directive("mainDir", function () {
    return {
        scope: {
            beer: "=",
            removeBeer: "&",
        },
        templateUrl: "comment.html",






        controller: function ($scope, beerFactory) {
            $scope.inputComment = false

            $scope.toggleInput = function () {
                $scope.inputComment = !$scope.inputComment
            }

            $scope.addComment = function (beer) {
                var newComment = $scope.comment
                $scope.comment = ""
                console.log(newComment)
                beerFactory.addComment(newComment,beer)
                .then(function (beer) {
                   $scope.beer.comment = beer.comment
                })
                .catch(function (error) {
                    console.log(error)
                });
                // $scope.beers.push(newComment);
            }
        }
    }

})